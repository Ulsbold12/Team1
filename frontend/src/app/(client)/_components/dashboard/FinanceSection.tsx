"use client";

import { useRouter } from "next/navigation";
import { Wallet } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

function BalanceCard() {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">Одоогийн үлдэгдэл</p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-bold text-foreground">$42,500.00</span>
        <span className="text-xs font-bold text-emerald-500">+12%</span>
      </div>
      <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div className="bg-[#5048e5] h-full rounded-full" style={{ width: "75%" }} />
      </div>
    </div>
  );
}

function ExpensesCard() {
  const bars = [40, 60, 55, 90, 70];
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">Сар бүрийн зардал</p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-bold text-foreground">$8,240.00</span>
        <span className="text-xs font-bold text-rose-500">-5%</span>
      </div>
      <div className="mt-4 h-8 flex items-end gap-0.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${i === 3 ? "bg-[#5048e5]" : "bg-[#5048e5]/30"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function GrowthCard() {
  const bars = [25, 50, 75, 50, 80, 100];
  return (
    <div className="lg:col-span-2 bg-card p-6 rounded-xl border border-border shadow-sm flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">Цэвэр орлогын өсөлт</p>
        <p className="text-2xl font-bold text-foreground">+24.8%</p>
        <p className="text-xs text-muted-foreground">Өмнөх сартай харьцуулахад</p>
      </div>
      <div className="h-16 w-32 flex items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              backgroundColor: `rgba(80,72,229,${0.1 + i * 0.15})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function FinanceSection() {
  const router = useRouter();

  return (
    <section className="space-y-4">
      <SectionHeader
        icon={Wallet}
        title="Санхүүгийн тойм"
        linkLabel="Дэлгэрэнгүй харах"
        onLinkClick={() => router.push("/finance")}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BalanceCard />
        <ExpensesCard />
        <GrowthCard />
      </div>
    </section>
  );
}
