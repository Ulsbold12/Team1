"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiCategory, AiResult } from "../page";
import { useMemo, useState } from "react";
import { RevenueCard } from "./RevenueCard";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Sparkles } from "lucide-react";

interface GraphicSectionProps {
  aiResult: AiResult | null;
  transactions?: {
    date: string;
    description: string;
    amount: number;
    type: string;
  }[];
}

export const FinanceReport = ({
  aiResult,
  transactions = [],
}: GraphicSectionProps) => {
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [monthIndex, setMonthIndex] = useState(0);

  const MONTH_NAMES = [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар",
  ];

  const COLORS = [
    "#6366f1",
    "#c7d2fe",
    "#ec4899",
    "#f43f5e",
    "#f97316",
    "#94a3b8",
  ];

  const monthlyGroups = useMemo(() => {
    const map = new Map<string, typeof transactions>();
    (transactions ?? []).forEach((tx) => {
      const d = tx.date ?? "";
      const key = d.length >= 7 ? d.slice(0, 7) : "unknown";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(tx);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [transactions]);

  const currentMonth = monthlyGroups[monthIndex];
  const currentKey = currentMonth?.[0] ?? "";
  const currentTransactions = currentMonth?.[1] ?? [];

  const monthLabel =
    currentKey !== "unknown"
      ? `${currentKey.slice(0, 4)} оны ${MONTH_NAMES[Number(currentKey.slice(5, 7)) - 1]}`
      : "Тодорхойгүй";

  const expenseData = (aiResult?.expenses ?? [])
    .filter((c: AiCategory) => c.total > 0)
    .map((c: AiCategory) => ({ name: c.name, value: c.total }));

  const totalExpense = expenseData.reduce(
    (s: number, c: any) => s + c.value,
    0,
  );

  const displayRevenue = aiResult?.income
    ? aiResult.income.reduce(
        (s: number, c: AiCategory) => s + (c.total ?? 0),
        0,
      )
    : revenue;
  const displayExpense = aiResult?.expenses
    ? aiResult.expenses.reduce(
        (s: number, c: AiCategory) => s + (c.total ?? 0),
        0,
      )
    : expense;
  const displayNetProfit = displayRevenue - displayExpense;

  const max = Math.max(displayRevenue, displayExpense, 1);
  const fmt = (n: number) => `₮${n.toLocaleString()}`;

  const cards = [
    {
      id: 1,
      title: "Нийт орлого",
      amount: fmt(displayRevenue),
      percentage:
        displayRevenue >= displayExpense
          ? `+${((displayRevenue / (displayExpense || 1)) * 100 - 100).toFixed(1)}%`
          : "0%",
      progress: Math.round((displayRevenue / max) * 100),
    },
    {
      id: 2,
      title: "Нийт зарлага",
      amount: fmt(displayExpense),
      percentage:
        displayExpense > 0
          ? `-${((displayExpense / (displayRevenue || 1)) * 100).toFixed(1)}%`
          : "0%",
      progress: Math.round((displayExpense / max) * 100),
    },
    {
      id: 3,
      title: "Цэвэр ашиг",
      amount: fmt(displayNetProfit),
      percentage:
        displayNetProfit >= 0
          ? `+${displayNetProfit > 0 ? ((displayNetProfit / (displayRevenue || 1)) * 100).toFixed(1) : 0}%`
          : `-${((Math.abs(displayNetProfit) / (displayRevenue || 1)) * 100).toFixed(1)}%`,
      progress:
        displayRevenue > 0
          ? Math.min(Math.round((displayNetProfit / displayRevenue) * 100), 100)
          : 0,
    },
  ];
  return (
    <div className=" min-h-screen bg-slate-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="font-semibold text-lg">FlowAI Тайлан</div>
      </div>

      <Card className="max-w-8xl mx-auto shadow-lg ">
        <CardContent className="  ">
          <div className="flex flex-row justify-start mb-10 px-5 text-sm text-gray-500 space-y-2 gap-2">
            <p>Үүсгэсэн огноо:</p>
            <p className="font-semibold text-black">
              {new Date().toLocaleDateString("mn-MN")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {cards.map((item) => (
              <RevenueCard
                key={item.id}
                title={item.title}
                amount={item.amount}
                percentage={item.percentage}
                progress={item.progress}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Зүүн тал — progress bar жагсаалт */}
            <div>
              <h3 className="font-semibold mb-4">Зардлын ангилал</h3>
              <div className="space-y-4">
                {expenseData.map((cat: any, i: number) => {
                  const pct =
                    totalExpense > 0
                      ? ((cat.value / totalExpense) * 100).toFixed(1)
                      : "0";
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{cat.name}</span>
                        <span>
                          ₮{cat.value.toLocaleString()} ({pct}%)
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div
                          className="h-2 rounded transition-all"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: COLORS[i % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Баруун тал — PieChart */}
            <div className="flex items-center justify-center">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {expenseData.map((_: any, i: number) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: any) => `₮${val.toLocaleString()}`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-indigo-600 border-b-2 border-indigo-200 pb-2">
              Дэлгэрэнгүй гүйлгээнүүд
            </h3>

            {monthlyGroups.length > 0 && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMonthIndex((p) => Math.max(p - 1, 0))}
                  disabled={monthIndex === 0}
                  className="text-indigo-600 disabled:text-gray-300 font-bold text-lg"
                >
                  ←
                </button>
                <span className="font-semibold text-sm min-w-35 text-center">
                  {monthLabel} ({currentTransactions.length})
                </span>
                <button
                  onClick={() =>
                    setMonthIndex((p) =>
                      Math.min(p + 1, monthlyGroups.length - 1),
                    )
                  }
                  disabled={monthIndex === monthlyGroups.length - 1}
                  className="text-indigo-600 disabled:text-gray-300 font-bold text-lg"
                >
                  →
                </button>
              </div>
            )}

            {currentTransactions.length === 0 ? (
              <p className="text-gray-400 text-sm py-4">
                Гүйлгээ байхгүй байна.
              </p>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-500">
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Огноо</th>
                    <th className="text-left px-2">Гүйлгээний утга</th>
                    <th className="text-right px-2">Орлого</th>
                    <th className="text-right px-2">Зарлага</th>
                  </tr>
                </thead>
                <tbody>
                  {(showAll
                    ? currentTransactions
                    : currentTransactions.slice(0, 5)
                  ).map((tx, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2 px-2">{tx.date}</td>
                      <td className="px-2">{tx.description}</td>
                      <td className="text-green-600 text-right px-2">
                        {tx.type === "income"
                          ? `₮${tx.amount.toLocaleString()}`
                          : ""}
                      </td>
                      <td className="text-red-500 text-right px-2">
                        {tx.type === "expense"
                          ? `₮${tx.amount.toLocaleString()}`
                          : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
                {currentTransactions.length > 5 && (
                  <tfoot>
                    <tr>
                      <td colSpan={5} className="text-center py-3">
                        <button
                          onClick={() => setShowAll(!showAll)}
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center gap-1 mx-auto"
                        >
                          {showAll
                            ? "Хураах ▲"
                            : `Бүгдийг харах (${currentTransactions.length - 10} гүйлгээ) ▼`}
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                )}
                <tfoot className="bg-gray-100 font-semibold">
                  <tr>
                    <td className="py-3 px-2" colSpan={2}>
                      Нийт
                    </td>
                    <td className="text-green-600 text-right px-2">
                      ₮
                      {currentTransactions
                        .filter((t) => t.type === "income")
                        .reduce((s, t) => s + t.amount, 0)
                        .toLocaleString()}
                    </td>
                    <td className="text-red-500 text-right px-2">
                      ₮
                      {currentTransactions
                        .filter((t) => t.type === "expense")
                        .reduce((s, t) => s + t.amount, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </CardContent>
      </Card>
      <Card className="w-full border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base text-blue-700 dark:text-blue-300">
            <Sparkles className="h-5 w-5" />
            Ерөнхий дүгнэлт
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {aiResult?.summary ??
              "AI шинжилгээ хийснээр энд дүгнэлт харагдана."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
