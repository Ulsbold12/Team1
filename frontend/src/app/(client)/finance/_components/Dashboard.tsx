"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { RevenueCard } from "./RevenueCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface FinanceRecord {
  revenue: number;
  expense: number;
  netProfit: number;
  month: string;
}

interface AiCategory {
  name: string;
  total: number;
}

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#f43f5e", "#8b5cf6"];

const MONTH_NAMES = ["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"];

export const Dashboard = ({ categories }: { categories?: AiCategory[] | null }) => {
  const { getToken } = useAuth();
  const [records, setRecords] = useState<FinanceRecord[]>([]);
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [netProfit, setNetProfit] = useState(0);

  useEffect(() => {
    getToken().then((token) => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/finance`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((json) => {
          if (!json.data) return;
          const data: FinanceRecord[] = json.data;
          setRecords(data);
          setRevenue(data.reduce((sum, r) => sum + (r.revenue ?? 0), 0));
          setExpense(data.reduce((sum, r) => sum + (r.expense ?? 0), 0));
          setNetProfit(data.reduce((sum, r) => sum + (r.netProfit ?? 0), 0));
        })
        .catch(console.error);
    });
  }, [getToken]);

  const max = Math.max(revenue, expense, 1);
  const fmt = (n: number) => `₮${n.toLocaleString()}`;

  const cards = [
    {
      id: 1,
      title: "Нийт орлого",
      amount: fmt(revenue),
      percentage: revenue >= expense ? `+${((revenue / (expense || 1)) * 100 - 100).toFixed(1)}%` : "0%",
      progress: Math.round((revenue / max) * 100),
    },
    {
      id: 2,
      title: "Нийт зарлага",
      amount: fmt(expense),
      percentage: expense > 0 ? `-${((expense / (revenue || 1)) * 100).toFixed(1)}%` : "0%",
      progress: Math.round((expense / max) * 100),
    },
    {
      id: 3,
      title: "Цэвэр ашиг",
      amount: fmt(netProfit),
      percentage: netProfit >= 0
        ? `+${netProfit > 0 ? ((netProfit / (revenue || 1)) * 100).toFixed(1) : 0}%`
        : `-${(Math.abs(netProfit) / (revenue || 1) * 100).toFixed(1)}%`,
      progress: revenue > 0 ? Math.min(Math.round((netProfit / revenue) * 100), 100) : 0,
    },
  ];

  const barData = [...records].reverse().map((r) => ({
    огноо: MONTH_NAMES[new Date(r.month).getMonth()],
    орлого: r.revenue ?? 0,
    зарлага: r.expense ?? 0,
  }));

  const pieData =
    categories && categories.length > 0
      ? categories.map((c, i) => ({ id: i, name: c.name, value: c.total }))
      : records.length > 0
      ? [
          { id: 0, name: "Орлого", value: revenue },
          { id: 1, name: "Зарлага", value: expense },
        ]
      : [];

  return (
    <div className="bg-gray-100 dark:bg-slate-900 w-full flex flex-col gap-6 p-4 md:p-5 transition-colors">
      {/* Revenue cards */}
      <div className="flex flex-row gap-4 md:gap-10 flex-wrap">
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

      {/* Charts */}
      {(barData.length > 0 || pieData.length > 0) && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Bar chart */}
          {barData.length > 0 && (
            <div className="flex-1 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <p className="text-lg text-slate-900 dark:text-white font-bold mb-4">
                Орлого & Зарлагын график
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.2} />
                  <XAxis dataKey="огноо" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: "#e2e8f0", opacity: 0.1 }} />
                  <Bar dataKey="орлого" fill="#10b981" radius={5} />
                  <Bar dataKey="зарлага" fill="#f43f5e" radius={5} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Pie chart */}
          {pieData.length > 0 && (
            <div className="flex-1 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <p className="text-lg text-slate-900 dark:text-white font-bold mb-4">
                Зарлагын ангилал
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name }) => name}
                    stroke="none"
                  >
                    {pieData.map((item, index) => (
                      <Cell key={`cell-${item.id}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => `₮${Number(v).toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
