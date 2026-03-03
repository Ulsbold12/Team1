"use client";

import { FinanceSection } from "@/app/(client)/_components/dashboard/FinanceSection";
import { MarketingSection } from "@/app/(client)/_components/dashboard/MarketingSection";
import { AIInsightBanner } from "@/app/(client)/_components/dashboard/AIInsightBanner";

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-muted/30 text-foreground">
        {/* Welcome */}
        <section>
          <h2 className="text-3xl font-black text-foreground tracking-tight">
            Сайн байна уу, Алекс
          </h2>
          <p className="text-muted-foreground mt-1">
            Өнөөдрийн байдлаарх таны платформын гүйцэтгэлийн хураангуй.
          </p>
        </section>

        <FinanceSection />
        <MarketingSection />
        <AIInsightBanner />
    </div>
  );
}
