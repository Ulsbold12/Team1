"use client";
import { useState } from "react";
import { AISection } from "./_components/AISection";
import { Dashboard } from "./_components/Dashboard";
import FileUpload from "./_components/FileUpload";
import { GraphicSection } from "./_components/GraphicSection";
import { HeadSection } from "./_components/HeadSection";

export interface AiCategory {
  name: string;
  total: number;
}

export interface AiMonthly {
  month: string;
  income: AiCategory[];
  expenses: AiCategory[];
}

export interface AiResult {
  summary: string;
  monthly: AiMonthly[];
  income: AiCategory[];
  expenses: AiCategory[];
  tips: string[];
}

export default function Finance() {
  const [aiResult, setAiResult] = useState<AiResult | null>(null);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-white dark:bg-slate-900 text-foreground">
      <HeadSection />
      <FileUpload onResult={(result) => setAiResult(result)} />
      <Dashboard aiResult={aiResult} />
      <AISection aiResult={aiResult} />
      <GraphicSection aiResult={aiResult} />
    </div>
  );
}
