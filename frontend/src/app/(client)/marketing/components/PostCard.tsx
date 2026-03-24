"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Platform, Post, SavedPost, ImageItem, PLATFORM_COLORS } from "./constants";
import { apiFetch } from "@/lib/apiFetch";
import { ImageEditorModal } from "./ImageEditorModal";

interface PostCardProps {
  post: Post;
  images?: ImageItem[];
  onSaved?: (saved: SavedPost) => void;
}

export function PostCard({ post, images = [], onSaved }: PostCardProps) {
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<Set<number>>(new Set());
  const [editedImages, setEditedImages] = useState<ImageItem[]>([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<ImageItem | null>(null);
  const { getToken } = useAuth();

  const allImages = [...images, ...editedImages];

  useEffect(() => {
    setSelectedIndexes(new Set(images.map((_, i) => i)));
  }, [images]);

  function handleEdited(dataUrl: string, name: string) {
    const newItem: ImageItem = { name, preview: dataUrl, blobUrl: null, uploading: false };
    setEditedImages((prev) => {
      const next = [...prev, newItem];
      const newIndex = images.length + next.length - 1;
      setSelectedIndexes((s) => new Set([...s, newIndex]));
      return next;
    });
  }

  function openEditor(img: ImageItem) {
    setEditingImage(img);
    setEditorOpen(true);
  }
  const badgeClass = PLATFORM_COLORS[post.platform as Platform] ?? "bg-slate-200 text-slate-700 dark:bg-gray-700 dark:text-gray-200";

  function toggleImage(i: number) {
    setSelectedIndexes((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  async function handleSave() {
    setSaving(true);
    try {
      const token = await getToken();
      const selectedBlobUrls = allImages
        .filter((img, i) => selectedIndexes.has(i) && img.blobUrl && img.blobUrl.startsWith("http"))
        .map((img) => img.blobUrl as string);
      console.log("[PostCard save] images:", images.map(img => ({ blobUrl: img.blobUrl, uploading: img.uploading })), "selected:", selectedBlobUrls);
      const platformMap: Record<string, string> = {
        Facebook: "FACEBOOK",
        LinkedIn: "LINKEDIN",
        Twitter: "TWITTER",
        Instagram: "INSTAGRAM",
      };
      const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          content: post.content,
          platform: platformMap[post.platform] ?? post.platform,
          scheduledDate: new Date().toISOString(),
          images: selectedBlobUrls,
        }),
      });
      const data = await res.json();
      if (data.success && onSaved) {
        onSaved({ ...data.data, images: Array.isArray(data.data.images) ? data.data.images : [] });
        setSaved(true);
        setSelectedIndexes(new Set());
        setTimeout(() => setSaved(false), 2500);
      } else if (!data.success) {
        setSaveError(true);
        setTimeout(() => setSaveError(false), 2500);
      }
    } catch (e) {
      console.error(e);
      setSaveError(true);
      setTimeout(() => setSaveError(false), 2500);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-gray-700 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span translate="no" className={["inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold", badgeClass].join(" ")}>
          {post.platform === "LinkedIn" ? <><span className="font-bold leading-none">in</span> {post.platform}</> : post.platform}
        </span>
        <span className="text-xs text-slate-400 dark:text-gray-500">{post.scheduledDate.slice(0, 16).replace("T", " ")}</span>
      </div>

      <p className="text-sm text-slate-700 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">{post.content}</p>

      {allImages.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-slate-400 dark:text-gray-500">Зураг сонгох (заавал биш)</p>
          <div className="grid grid-cols-3 gap-2">
            {allImages.map((img, i) => {
              const selected = selectedIndexes.has(i);
              const isEdited = i >= images.length;
              return (
                <div key={i} className="relative group aspect-square">
                  <button
                    type="button"
                    onClick={() => toggleImage(i)}
                    className={[
                      "w-full h-full rounded-lg overflow-hidden border-2 transition-all",
                      selected ? "border-[#4038d4] ring-2 ring-[#4038d4]/20 dark:ring-[#4038d4]/30" : "border-slate-200 dark:border-gray-700 opacity-60 hover:opacity-90",
                    ].join(" ")}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.preview} alt="" className="w-full h-full object-cover" />
                    {isEdited && (
                      <span className="absolute bottom-1 left-1 bg-purple-600 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-full">AI</span>
                    )}
                  </button>
                  {selected && (
                    <span className="absolute top-2 right-2 bg-[#4038d4] text-white rounded-full size-5 flex items-center justify-center text-[11px] font-bold shadow-sm pointer-events-none">✓</span>
                  )}
                  {!isEdited && (
                    <button
                      type="button"
                      onClick={() => openEditor(img)}
                      className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#4038d4] hover:bg-[#3530b8] rounded-full p-1.5 shadow-md"
                      title="AI-аар засварлах">
                      <Pencil className="size-3.5 text-white" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSave}
          disabled={saving || saved}
          className={saved ? "border-green-500 text-green-600" : saveError ? "border-red-500 text-red-600" : ""}>
          {saving ? "Хадгалж байна..." : saved ? "✓ Хадгалагдсан" : saveError ? "✗ Алдаа гарлаа" : "Хадгалах"}
        </Button>
      </div>

      {editingImage && (
        <ImageEditorModal
          open={editorOpen}
          onOpenChange={setEditorOpen}
          imagePreview={editingImage.preview}
          imageName={editingImage.name}
          onEdited={handleEdited}
        />
      )}
    </div>
  );
}
