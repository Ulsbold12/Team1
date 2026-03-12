"use client";

import { useState } from "react";
import FinanceForm from "./_components/FinanceForm";
import { AISection } from "./_components/AISection";
import { Dashboard } from "./_components/Dashboard";
import FileUpload from "./_components/FileUpload";
import { GraphicSection } from "./_components/GraphicSection";
import { HeadSection } from "./_components/HeadSection";

export default function Finance() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0d12]">
      <HeadSection />

      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 px-5 py-2.5 m-4 rounded-2xl 
        bg-gradient-to-r from-emerald-400 to-purple-500 text-[#041a0a] 
        font-black text-sm shadow-lg shadow-emerald-500/30
        hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40
        active:translate-y-0 transition-all duration-200"
      >
        <span className="text-lg leading-none transition-transform duration-200 group-hover:rotate-90">
          +
        </span>
        Санхүү нэмэх
      </button>

      {/* ✅ Overlay — голд гаргана */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <FinanceForm onClose={() => setOpen(false)} />
        </div>
      )}

      <Dashboard />
      <AISection />
      <GraphicSection />
      <FileUpload />
    </div>
  );
}
