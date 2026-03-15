"use client";
import { RevenueCard } from "./RevenueCard";
import type { AiResult } from "../page";

interface DashboardProps {
  aiResult: AiResult | null;
}

export const Dashboard = ({ aiResult }: DashboardProps) => {
  const totalIncome = aiResult?.income?.reduce((s, c) => s + c.total, 0) ?? 0;
  const totalExpense = aiResult?.expenses?.reduce((s, c) => s + c.total, 0) ?? 0;
  const netProfit = totalIncome - totalExpense;
  const max = Math.max(totalIncome, totalExpense, 1);

  const fmt = (n: number) => `₮${n.toLocaleString()}`;

  const data = aiResult
    ? [
      {
        id: 1,
        title: "Нийт орлого",
        amount: fmt(totalIncome),
        percentage: "+орлого",
        progress: Math.round((totalIncome / max) * 100),
      },
      {
        id: 2,
        title: "Нийт зарлага",
        amount: fmt(totalExpense),
        percentage: "-зарлага",
        progress: Math.round((totalExpense / max) * 100),
      },
      {
        id: 3,
        title: "Цэвэр ашиг",
        amount: fmt(netProfit),
        percentage: netProfit >= 0 ? "+ашигтай" : "-алдагдалтай",
        progress: Math.round((Math.abs(netProfit) / max) * 100),
      },
    ]
    : [
      { id: 1, title: "Нийт орлого", amount: "—", percentage: "+0%", progress: 0 },
      { id: 2, title: "Нийт зарлага", amount: "—", percentage: "-0%", progress: 0 },
      { id: 3, title: "Цэвэр ашиг", amount: "—", percentage: "+0%", progress: 0 },
    ];

  return (
    <div className="bg-white dark:bg-slate-900 w-full flex flex-row gap-4 md:gap-10 p-4 md:p-5 flex-wrap flex-1 transition-colors">
      {data.map((item) => (
        <RevenueCard
          key={item.id}
          title={item.title}
          amount={item.amount}
          percentage={item.percentage}
          progress={item.progress}
        />
      ))}
    </div>
  );
};
