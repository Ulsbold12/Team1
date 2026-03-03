import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIInsightBanner() {
  return (
    <section className="bg-[#5048e5]/5 rounded-xl border border-[#5048e5]/10 p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="w-12 h-12 rounded-full bg-[#5048e5]/20 flex items-center justify-center text-[#5048e5] shrink-0">
        <Lightbulb className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-foreground">AI Зөвлөмж</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Таны санхүүгийн сүүлийн үеийн чиг хандлагаас харахад үүлэн дэд
          бүтцийн зардлыг оновчтой болгосноор ирэх сард{" "}
          <span className="font-bold text-[#5048e5]">$1,200</span> хүртэл
          хэмнэх боломжтой байна. Та дэлгэрэнгүй задаргааг харах уу?
        </p>
      </div>
      <Button className="bg-[#5048e5] hover:bg-[#4038d4] text-white whitespace-nowrap">
        Зардлыг шинжлэх
      </Button>
    </section>
  );
}
