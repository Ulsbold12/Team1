"use client";

import { Button } from "@/components/ui/button";
import { Lightbulb } from 'lucide-react';


export const AISection = () => {
    return (
      <div className="bg-[#5048e5]/5 dark:bg-[#5048e5]/20 rounded-xl border border-[#5048e5]/10 dark:border-[#5048e5]/30 p-6 flex flex-col md:flex-row items-center gap-6 transition-colors">
        <div className="bg-blue-500 dark:bg-slate-800 w-full min-h-40 rounded-3xl flex flex-col md:flex-row items-start md:items-center p-6 md:p-10 gap-5 transition-colors">
            
            <Button
                variant="outline"
                className="bg-blue-600 dark:bg-slate-700 text-white w-12 h-12 border-none shrink-0"
            >
                <Lightbulb strokeWidth={4} />
            </Button>
            
            <div className="flex flex-col flex-1 min-w-0">
                <p className="text-white text-[24px] font-bold truncate">
                    AI Санхүүгийн дүн шинжилгээ
                </p>
                <p className="text-white/90 dark:text-gray-300 text-[18px]">
                    Урьдчилсан байдлаар ₮1,200,000 хэмнэх боломжтой байна.
                </p>
            </div>
            
            <Button
                variant="outline"
                className="bg-white dark:bg-slate-200 text-blue-500 dark:text-slate-900 w-full md:w-auto h-10 border-none shrink-0 mt-2 md:mt-0 hover:bg-gray-100 dark:hover:bg-white"
            >
                Шинжилгээ хийх
            </Button>
        </div>

      </div>
    );
};