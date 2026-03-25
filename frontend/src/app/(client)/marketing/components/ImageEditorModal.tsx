"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface ImageEditorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imagePreview: string;
  imageName: string;
  onEdited: (dataUrl: string, name: string) => void;
  onStartGenerate?: (imagePreview: string, imageName: string, prompt: string) => void;
}

async function toBase64(src: string): Promise<string> {
  if (src.startsWith("data:")) return src;
  const res = await fetch(src);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function ImageEditorModal({
  open,
  onOpenChange,
  imagePreview,
  imageName,
  onEdited,
  onStartGenerate,
}: ImageEditorModalProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    if (!prompt.trim()) return;
    if (onStartGenerate) {
      onStartGenerate(imagePreview, imageName, prompt);
      onOpenChange(false);
      setPrompt("");
      return;
    }
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const base64 = await toBase64(imagePreview);
      const res = await fetch("/api/marketing-image-edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Алдаа гарлаа");
      setResult(data.image);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  }

  function handleUse() {
    if (!result) return;
    onEdited(result, `edited_${imageName}`);
    onOpenChange(false);
    setResult(null);
    setPrompt("");
  }

  function handleClose(open: boolean) {
    if (!open) {
      setResult(null);
      setPrompt("");
      setError(null);
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wand2 className="size-4" />
            AI-аар зураг засварлах
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Before / After */}
          <div className={`grid gap-3 ${result ? "grid-cols-2" : "grid-cols-1"}`}>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400 dark:text-gray-500">Эх зураг</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="original"
                className="w-full rounded-lg object-cover aspect-square border border-slate-200 dark:border-gray-700"
              />
            </div>
            {result && (
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-400 dark:text-gray-500">Засварласан</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result}
                  alt="edited"
                  className="w-full rounded-lg object-cover aspect-square border border-blue-300 ring-2 ring-blue-100 dark:ring-blue-900"
                />
              </div>
            )}
          </div>

          {/* Prompt */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-gray-200">
              Юу хийхийг хүсэж байна?
            </label>
            <Textarea
              placeholder='Жишээ нь: "Зургийн дээд хэсэгт цагаан өнгөөр SALE гэсэн том үсэг нэм" эсвэл "Гэрлийг сайжруул, дэвсгэрийг цэвэрлэ"'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
        </div>

        <DialogFooter>
          {result && (
            <Button onClick={handleUse} className="bg-[#4038d4] hover:bg-[#3530b8] text-white">
              Энэ зургийг ашиглах
            </Button>
          )}
          <Button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            variant={result ? "outline" : "default"}
          >
            {loading ? "Засварлаж байна..." : result ? "Дахин засварлах" : "Засварлах"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
