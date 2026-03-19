"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, ChevronLeft, ChevronRight, ImagePlus, X, Pencil, Trash2, Check } from "lucide-react";
import { useRef } from "react";

type Platform = "LinkedIn" | "Facebook" | "Twitter";

interface Post {
  platform: Platform;
  content: string;
  scheduledDate: string;
}

const MONGOLIAN_MONTHS = [
  "1-р сар",
  "2-р сар",
  "3-р сар",
  "4-р сар",
  "5-р сар",
  "6-р сар",
  "7-р сар",
  "8-р сар",
  "9-р сар",
  "10-р сар",
  "11-р сар",
  "12-р сар",
];

const WEEK_DAYS = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];

const PLATFORM_COLORS: Record<Platform, string> = {
  LinkedIn: "bg-blue-600 text-white",
  Facebook: "bg-indigo-600 text-white",
  Twitter: "bg-sky-400 text-white",
};

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildCalendarGrid(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun

  const offset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function MarketingPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<string | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(0);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [savedPosts, setSavedPosts] = useState<{ id: string; title: string; platform: string; content: string; publishedAt: string; images: string[] }[]>([]);
  const [savedPostsLoading, setSavedPostsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const [images, setImages] = useState<{ name: string; preview: string; file: File; blobUrl: string | null; uploading: boolean }[]>([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.success) setSavedPosts(data.data.map((p: { id: string; title: string; platform: string; content: string; publishedAt: string; images: unknown }) => ({
            ...p,
            images: Array.isArray(p.images) ? p.images : [],
          })));
        })
        .catch(console.error)
        .finally(() => setSavedPostsLoading(false));
    });
  }, [getToken]);

  useEffect(() => {
    getToken().then((token) => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/marketing/strategy`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => {
          if (r.status === 401) { setSessionExpired(true); return null; }
          return r.json();
        })
        .then((data) => {
          if (!data) return;
          if (data.success && data.data) {
            setProductName(data.data.productName);
            setDescription(data.data.description);
            setTargetAudience(data.data.targetAudience);
            if (data.data.advice) setAdvice(data.data.advice);
            if (data.data.updatedAt) setLastSaved(new Date(data.data.updatedAt));
          }
        })
        .catch(console.error);
    });
  }, [getToken]);

  async function uploadToBlobAndAdd(file: File) {
    const preview = URL.createObjectURL(file);
    setImages((prev) => [...prev, { name: file.name, preview, file, blobUrl: null, uploading: true }]);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload-image", { method: "POST", body: formData });
      const data = await res.json();
      setImages((prev) =>
        prev.map((img) =>
          img.preview === preview ? { ...img, blobUrl: data.url, uploading: false } : img,
        ),
      );
    } catch {
      setImages((prev) => prev.filter((img) => img.preview !== preview));
    }
  }

  function handleImageFiles(files: FileList | null) {
    if (!files) return;
    Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .forEach(uploadToBlobAndAdd);
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleGenerate() {
    if (!productName.trim() || !description.trim() || !targetAudience.trim()) {
      return;
    }
    setLoading(true);
    setAdvice(null);
    setPosts([]);
    setVisiblePosts(0);
    setSelectedDate(null);
    setSessionExpired(false);
    try {
      setLoadingStep("AI-д илгээж байна...");
      const imageBase64s = await Promise.all(
        images.map((img) => new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(img.file);
        }))
      );
      const res = await fetch("/api/marketing-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, description, targetAudience, images: imageBase64s }),
      });
      if (res.status === 401) { setSessionExpired(true); return; }
      setLoadingStep("Монгол руу орчуулж байна...");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Алдаа гарлаа");
      setAdvice(data.advice ?? null);
      const newPosts = data.posts ?? [];
      setPosts(newPosts);
      newPosts.forEach((_: Post, i: number) => {
        setTimeout(() => setVisiblePosts(i + 1), i * 150);
      });
      const token = await getToken();
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/marketing/strategy`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ productName, description, targetAudience, advice: data.advice }),
      })
        .then((r) => r.json())
        .then((saved) => { if (saved.data?.updatedAt) setLastSaved(new Date(saved.data.updatedAt)); })
        .catch(console.error);
    } catch (err) {
      console.error(err);
      setAdvice("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
      setLoadingStep(null);
    }
  }

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const cells = buildCalendarGrid(year, month);
  const postDates = new Set(posts.map((p) => p.scheduledDate));
  const todayStr = toDateString(new Date());

  function prevMonth() {
    setCurrentMonth(new Date(year, month - 1, 1));
    setSelectedDate(null);
  }
  function nextMonth() {
    setCurrentMonth(new Date(year, month + 1, 1));
    setSelectedDate(null);
  }

  function handleDayClick(day: number | null) {
    if (!day) return;
    const dateStr = toDateString(new Date(year, month, day));
    setSelectedDate((prev) => (prev === dateStr ? null : dateStr));
  }

  const selectedPosts = selectedDate
    ? posts.filter((p) => p.scheduledDate === selectedDate)
    : [];

  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Маркетинг</h1>

      {sessionExpired && (
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <span>Таны сесс дууссан байна. Хуудсыг дахин ачааллана уу.</span>
          <button onClick={() => window.location.reload()} className="ml-auto font-semibold underline">
            Дахин ачаалах
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-start">
        <div>
          <Card className="rounded-2xl shadow p-0">
            <CardHeader className="px-6 pt-6 pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Стратеги боловсруулах
                </CardTitle>
                {lastSaved && (
                  <span className="text-xs text-slate-400 shrink-0 mt-1">
                    Хадгалсан: {lastSaved.toLocaleDateString("mn-MN", { month: "short", day: "numeric" })}
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-sm mt-1">
                Маркетинг AI-тай ярьж тантай тохирсон 30 хоногийн контент
                төлөвлөгөө гаргаарай
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="productName">Бүтээгдэхүүний нэр</Label>
                <Input
                  id="productName"
                  placeholder="е.g. CloudSync Pro"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="description">Бүтээгдэхүүний тайлбар</Label>
                <Textarea
                  id="description"
                  placeholder="Ямар асуудлыг шийдэх вэ?"
                  className="h-24 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="targetAudience">Зорилгот хэрэглэгч</Label>
                <Input
                  id="targetAudience"
                  placeholder="е.g. Стартап болон жижиг бизнесүүд"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                />
              </div>

              {/* Image upload */}
              <div className="flex flex-col gap-1.5">
                <Label>Зураг оруулах</Label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => { e.preventDefault(); setDragging(false); handleImageFiles(e.dataTransfer.files); }}
                  className={[
                    "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-5 cursor-pointer transition-colors text-center",
                    dragging ? "border-blue-400 bg-blue-50" : "border-slate-200 hover:border-blue-300 hover:bg-slate-50",
                  ].join(" ")}>
                  <ImagePlus className="size-6 text-slate-400" />
                  <p className="text-xs text-slate-500">
                    Зураг чирж тавих эсвэл <span className="text-blue-600 font-medium">сонгох</span>
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => handleImageFiles(e.target.files)}
                  />
                </div>
                {images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    {images.map((img, i) => (
                      <div key={i} className="relative group rounded-lg overflow-hidden border border-slate-200 aspect-square">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.preview} alt={img.name} className="w-full h-full object-cover" />
                        {img.uploading && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <X className="size-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleGenerate}
                disabled={loading}>
                {loading ? (loadingStep ?? "Үүсгэж байна...") : "Контент стратеги гаргах"}
              </Button>

              {/* Advice card */}
              {advice && (
                <div className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4 mt-1">
                  <Lightbulb className="size-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-700 mb-1">
                      AI зөвлөгөө
                    </p>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      {advice}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="rounded-2xl shadow p-0">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-xl font-bold text-slate-900">
                Контент хуанли
              </CardTitle>
            </CardHeader>

            <CardContent className="px-6 pb-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-70 shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={prevMonth}
                      className="p-1.5 rounded-md hover:bg-slate-100 transition-colors"
                      aria-label="Өмнөх сар">
                      <ChevronLeft className="size-4 text-slate-600" />
                    </button>
                    <span className="text-sm font-semibold text-slate-700">
                      {year} оны {MONGOLIAN_MONTHS[month]}
                    </span>
                    <button
                      onClick={nextMonth}
                      className="p-1.5 rounded-md hover:bg-slate-100 transition-colors"
                      aria-label="Дараах сар">
                      <ChevronRight className="size-4 text-slate-600" />
                    </button>
                  </div>

                  {/* Week day headers */}
                  <div className="grid grid-cols-7 mb-1">
                    {WEEK_DAYS.map((wd) => (
                      <div
                        key={wd}
                        className="text-center text-xs font-medium text-slate-400 py-1">
                        {wd}
                      </div>
                    ))}
                  </div>

                  {/* Day cells */}
                  <div className="grid grid-cols-7 gap-y-1">
                    {cells.map((day, idx) => {
                      if (!day) return <div key={`empty-${idx}`} />;
                      const dateStr = toDateString(new Date(year, month, day));
                      const hasPost = postDates.has(dateStr);
                      const isSelected = selectedDate === dateStr;
                      const isToday = todayStr === dateStr;
                      return (
                        <button
                          key={dateStr}
                          onClick={() => handleDayClick(day)}
                          className={[
                            "flex flex-col items-center justify-center rounded-lg py-1 text-sm transition-colors",
                            isSelected
                              ? "bg-blue-600 text-white font-semibold"
                              : isToday
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "hover:bg-slate-100 text-slate-700",
                          ].join(" ")}>
                          <span>{day}</span>
                          {hasPost && (
                            <span
                              className={[
                                "mt-0.5 size-1.5 rounded-full",
                                isSelected ? "bg-white" : "bg-blue-500",
                              ].join(" ")}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ---- Post detail (right) ---- */}
                <div className="flex-1 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 overflow-y-auto max-h-105">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">
                    Постын дэлгэрэнгүй
                    {selectedDate && (
                      <span className="ml-2 text-slate-400 font-normal">
                        — {selectedDate}
                      </span>
                    )}
                  </h3>

                  {!selectedDate && posts.length === 0 && (
                    <p className="text-sm text-slate-400">
                      Контент стратеги үүсгэсний дараа цэнхэр цэгтэй өдрийг дарж
                      постуудыг харна уу.
                    </p>
                  )}

                  {selectedDate && selectedPosts.length === 0 && (
                    <p className="text-sm text-slate-400">
                      Энэ өдөрт пост байхгүй байна.
                    </p>
                  )}

                  {selectedDate && selectedPosts.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {selectedPosts.map((post, i) => (
                        <div
                          key={i}
                          className="transition-all duration-300"
                          style={{ opacity: i < visiblePosts || visiblePosts === 0 ? 1 : 0, transform: i < visiblePosts || visiblePosts === 0 ? "translateY(0)" : "translateY(8px)" }}>
                          <PostCard post={post} imagePreviews={images.map(img => img.preview)} imageBlobUrls={images.filter(img => img.blobUrl).map(img => img.blobUrl as string)} onSaved={(p) => setSavedPosts((prev) => [p, ...prev])} />
                        </div>
                      ))}
                    </div>
                  )}

                  {!selectedDate && posts.length > 0 && (
                    <div className="flex flex-col gap-3">
                      <p className="text-xs text-slate-500 mb-1">
                        Нийт {posts.length} пост үүслээ.
                      </p>
                      {posts.map((post, i) => (
                        <div
                          key={i}
                          className="transition-all duration-300"
                          style={{ opacity: i < visiblePosts || visiblePosts === 0 ? 1 : 0, transform: i < visiblePosts || visiblePosts === 0 ? "translateY(0)" : "translateY(8px)" }}>
                          <PostCard post={post} imagePreviews={images.map(img => img.preview)} imageBlobUrls={images.filter(img => img.blobUrl).map(img => img.blobUrl as string)} onSaved={(p) => setSavedPosts((prev) => [p, ...prev])} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Saved posts — below calendar in right column */}
          <Card className="rounded-2xl shadow p-0">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-xl font-bold text-slate-900">Хадгалсан постууд</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              {savedPostsLoading && <p className="text-sm text-slate-400">Ачааллаж байна...</p>}
              {!savedPostsLoading && savedPosts.length === 0 && (
                <p className="text-sm text-slate-400">Хадгалсан пост байхгүй байна.</p>
              )}
              {!savedPostsLoading && savedPosts.length > 0 && (
                <div className="flex flex-col gap-3">
                  {savedPosts.map((post) => (
                    <SavedPostRow
                      key={post.id}
                      post={post}
                      onUpdated={(content) =>
                        setSavedPosts((prev) =>
                          prev.map((p) => (p.id === post.id ? { ...p, content } : p))
                        )
                      }
                      onDeleted={() =>
                        setSavedPosts((prev) => prev.filter((p) => p.id !== post.id))
                      }
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SavedPostRow({
  post,
  onUpdated,
  onDeleted,
}: {
  post: { id: string; platform: string; content: string; publishedAt: string; images: string[] };
  onUpdated: (content: string) => void;
  onDeleted: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { getToken } = useAuth();
  const badgeClass = PLATFORM_COLORS[post.platform as Platform] ?? "bg-slate-200 text-slate-700";

  async function handleSaveEdit() {
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: editContent }),
      });
      const data = await res.json();
      if (data.success) { onUpdated(editContent); setEditing(false); }
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  }

  async function handleDelete() {
    if (!confirm("Энэ постыг устгах уу?")) return;
    setDeleting(true);
    try {
      const token = await getToken();
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${post.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      onDeleted();
    } catch (e) { console.error(e); }
    finally { setDeleting(false); }
  }

  return (
    <div className="rounded-xl border border-slate-200 p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span translate="no" className={["inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold", badgeClass].join(" ")}>
          {post.platform === "LinkedIn" ? <><span className="font-bold leading-none">in</span> {post.platform}</> : post.platform}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-xs text-slate-400">{new Date(post.publishedAt).toLocaleDateString("mn-MN")}</span>
          {!editing && (
            <>
              <button onClick={() => { setEditContent(post.content); setEditing(true); }} className="ml-2 p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <Pencil className="size-3.5" />
              </button>
              <button onClick={handleDelete} disabled={deleting} className="p-1 rounded hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors">
                <Trash2 className="size-3.5" />
              </button>
            </>
          )}
          {editing && (
            <>
              <button onClick={handleSaveEdit} disabled={saving} className="ml-2 p-1 rounded hover:bg-green-50 text-slate-400 hover:text-green-600 transition-colors">
                <Check className="size-3.5" />
              </button>
              <button onClick={() => setEditing(false)} className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <X className="size-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
      {editing ? (
        <Textarea
          className="text-sm resize-none min-h-24"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      ) : (
        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap line-clamp-3">{post.content}</p>
      )}
      {post.images.length > 0 && (
        <div className="grid grid-cols-3 gap-1.5">
          {post.images.map((url, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={url} alt="" className="rounded-md w-full aspect-square object-cover border border-slate-100" />
          ))}
        </div>
      )}
    </div>
  );
}

function PostCard({ post, imagePreviews = [], imageBlobUrls = [], onSaved }: { post: Post; imagePreviews?: string[]; imageBlobUrls?: string[]; onSaved?: (saved: { id: string; title: string; platform: string; content: string; publishedAt: string; images: string[] }) => void }) {
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const { getToken } = useAuth();
  const badgeClass =
    PLATFORM_COLORS[post.platform] ?? "bg-slate-200 text-slate-700";

  async function handleSave() {
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: post.content,
          platform: post.platform,
          scheduledDate: post.scheduledDate,
          images: imageBlobUrls,
        }),
      });
      const data = await res.json();
      setSaved(true);
      if (data.success && onSaved) onSaved({ ...data.data, images: Array.isArray(data.data.images) ? data.data.images : [] });
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span
          translate="no"
          className={[
            "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold",
            badgeClass,
          ].join(" ")}>
          {post.platform === "LinkedIn" ? (
            <><span className="font-bold leading-none">in</span> {post.platform}</>
          ) : post.platform}
        </span>
        <span className="text-xs text-slate-400">{post.scheduledDate}</span>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </p>

      {imagePreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {imagePreviews.map((url: string, i: number) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={url} alt="" className="rounded-lg w-full aspect-square object-cover border border-slate-100" />
          ))}
        </div>
      )}

      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSave}
          disabled={saving || saved}
          className={saved ? "border-green-500 text-green-600" : ""}>
          {saving ? "Хадгалж байна..." : saved ? "✓ Хадгалагдсан" : "Хадгалах"}
        </Button>
      </div>
    </div>
  );
}
