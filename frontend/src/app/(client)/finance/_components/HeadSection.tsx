"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const HeadSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 md:p-5 gap-4 transition-colors">
  
  <div className="flex flex-col gap-1">
    <h1 className="text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold">
      Санхүүгийн хиймэл оюун ухаан
    </h1>
    <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium">
      Таны орлого, зарлагын шинжилгээ
    </p>
  </div>
  <Button
    variant="outline"
    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 border-gray-300 dark:border-slate-600 w-full sm:w-auto transition-colors"
  >
    <Download className="w-4 h-4 mr-2" /> 
    Тайлан татах
  </Button>
  
</div>
  );
};
