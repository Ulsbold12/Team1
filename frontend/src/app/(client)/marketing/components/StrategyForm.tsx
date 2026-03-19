"use client";

import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, ImagePlus, X } from "lucide-react";
import { ImageItem } from "./constants";

interface StrategyFormProps {
  productName: string;
  description: string;
  targetAudience: string;
  onChange: (field: "productName" | "description" | "targetAudience", value: string) => void;
  loading: boolean;
  loadingStep: string | null;
  advice: string | null;
  lastSaved: Date | null;
  images: ImageItem[];
  onImageFiles: (files: FileList | null) => void;
  onRemoveImage: (index: number) => void;
  onGenerate: () => void;
}

export function StrategyForm({
  productName, description, targetAudience, onChange,
  loading, loadingStep, advice, lastSaved,
  images, onImageFiles, onRemoveImage, onGenerate,
}: StrategyFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  return (
    <Card className="rounded-2xl shadow p-0">
      <CardHeader className="px-6 pt-6 pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-2xl font-bold text-slate-900">Стратеги боловсруулах</CardTitle>
          {lastSaved && (
            <span className="text-xs text-slate-400 shrink-0 mt-1">
              Хадгалсан: {lastSaved.toLocaleDateString("mn-MN", { month: "short", day: "numeric" })}
            </span>
          )}
        </div>
        <p className="text-slate-500 text-sm mt-1">
          Маркетинг AI-тай ярьж тантай тохирсон 30 хоногийн контент төлөвлөгөө гаргаарай
        </p>
      </CardHeader>

      <CardContent className="px-6 pb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="productName">Бүтээгдэхүүний нэр</Label>
          <Input
            id="productName"
            placeholder="е.g. CloudSync Pro"
            value={productName}
            onChange={(e) => onChange("productName", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="description">Бүтээгдэхүүний тайлбар</Label>
          <Textarea
            id="description"
            placeholder="Ямар асуудлыг шийдэх вэ?"
            className="h-24 resize-none"
            value={description}
            onChange={(e) => onChange("description", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="targetAudience">Зорилгот хэрэглэгч</Label>
          <Input
            id="targetAudience"
            placeholder="е.g. Стартап болон жижиг бизнесүүд"
            value={targetAudience}
            onChange={(e) => onChange("targetAudience", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Зураг оруулах</Label>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); onImageFiles(e.dataTransfer.files); }}
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
              onChange={(e) => onImageFiles(e.target.files)}
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
                    onClick={() => onRemoveImage(i)}
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
          onClick={onGenerate}
          disabled={loading}>
          {loading ? (loadingStep ?? "Үүсгэж байна...") : "Контент стратеги гаргах"}
        </Button>

        {advice && (
          <div className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4 mt-1">
            <Lightbulb className="size-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-700 mb-1">AI зөвлөгөө</p>
              <p className="text-sm text-blue-800 leading-relaxed">{advice}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
