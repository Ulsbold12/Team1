// "use client";
// import { useState } from "react";
// import { Status, NavItem } from "../Types";
// import { companies, activities } from "./MockData";
// import {
//   ActivityDot,
//   IconDashboard,
//   IconBuilding,
//   IconUsers,
//   IconSettings,
//   IconShield,
// } from "./CustomIcons";
// export const StatusBadge = ({ status }: { status: Status }) => {
//   const styles: Record<Status, string> = {
//     Идэвхтэй: "bg-green-100  text-green-700  border border-green-200",
//     "Хүлээгдэж буй": "bg-yellow-100 text-yellow-700 border border-yellow-200",
//     Идэвхгүй: "bg-gray-100   text-gray-500   border border-gray-200",
//   };
//   return (
//     <span
//       className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
//     >
//       {status}
//     </span>
//   );
// };

// const StatCard = ({
//   label,
//   value,
//   change,
//   positive,
//   icon,
// }: {
//   label: string;
//   value: string;
//   change: string;
//   positive: boolean;
//   icon: React.ReactNode;
// }) => (
//   <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100">
//     <div className="flex items-start justify-between mb-4">
//       <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
//         {label}
//       </p>
//       <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
//         {icon}
//       </div>
//     </div>
//     <div className="flex items-end gap-3">
//       <span className="text-3xl font-bold text-gray-900 tracking-tight">
//         {value}
//       </span>
//       <span
//         className={`text-xs font-semibold mb-1 px-2 py-0.5 rounded-full ${
//           positive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
//         }`}
//       >
//         {change}
//       </span>
//     </div>
//   </div>
// );

// export default function Lobby() {
//   const [activeNav, setActiveNav] = useState<NavItem>("Админ");
//   const [search, setSearch] = useState("");

//   const navItems: { label: NavItem; icon: React.ReactNode }[] = [
//     { label: "Хяналтын самбар", icon: <IconDashboard /> },
//     { label: "Компаниуд", icon: <IconBuilding /> },
//     { label: "Хэрэглэчид", icon: <IconUsers /> },
//     { label: "Админ", icon: <IconShield /> },
//     { label: "Тохиргоо", icon: <IconSettings /> },
//   ];

//   const filtered = companies.filter(
//     (c) =>
//       c.name.toLowerCase().includes(search.toLowerCase()) ||
//       c.owner.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div className="flex h-screen bg-[#f0f2f7] font-sans text-gray-800 overflow-hidden w-full">
//       <main className="flex-1 overflow-y-auto px-8 py-6 no-scrollbar">
//         <div className="flex items-center justify-between mb-7">
//           <h1 className="text-xl text-[30px] font-bold text-gray-900">
//             Админ хяналтын самбар
//           </h1>
//         </div>

//         <div className="flex gap-5 mb-7">
//           <StatCard
//             label="Нийт компаниуд"
//             value="0"
//             change="%"
//             positive
//             icon={
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M3 21h18M5 21V7l7-4 7 4v14" />
//               </svg>
//             }
//           />
//           <StatCard
//             label="Идэвхтэй хэрэглэгчид"
//             value="$0"
//             change="%"
//             positive
//             icon={
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//               </svg>
//             }
//           />
//           <StatCard
//             label="Сар бүрийн орлого"
//             value="$0"
//             change="%"
//             positive
//             icon={
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <rect x="2" y="5" width="20" height="14" rx="2" />
//                 <path d="M2 10h20" />
//               </svg>
//             }
//           />
//         </div>

//         <div className=" rounded-2xl  shadow-sm border border-gray-100 p-6 w-full h-fit">
//           <div className="flex items-center justify-between border-b border-gray-200 mb-4 py-3 px-2">
//             <p className="text-[18px] font-semibold text-gray-800">
//               Recent Activities
//             </p>
//             <div className="flex items-center gap-1.5 text-[11px] text-green-500 font-semibold">
//               <span className="w-2 h-2 bg-green-500  rounded-full animate-pulse" />
//               Шууд шинэчлэлт
//             </div>
//           </div>

//           <div className="space-y-4 ">
//             {activities.map((a) => (
//               <div key={a.id} className="flex gap-3">
//                 <ActivityDot color={a.color} />
//                 <div>
//                   <p className="text-sm font-semibold  text-gray-800">
//                     {a.title}
//                   </p>
//                   <p className="text-[11px] text-gray-400 mt-0.5">
//                     {a.description}
//                   </p>
//                   <p className="text-[10px] text-gray-300 mt-1">{a.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp } from "lucide-react";
import { useAdmin } from "../provider/adminProvider";
// [MOCK_DATA] - replace with real stats from API
const MOCK_STATS = {
  totalRegisteredOrgs: 124,
  activeUsers: 3_841,
  monthlyIncome: "$18,240",
};

// [MOCK_DATA] - replace with real audit log entries from API
// Each entry is a plain string describing the event + timestamp
const MOCK_AUDIT_LOG: { id: string; message: string; timestamp: string }[] = [
  {
    id: "1",
    message: "john.doe has registered with company Id acme_corp_001",
    timestamp: "03/21/2025 | 06:18",
  },
  {
    id: "2",
    message:
      "jane.smith has upgraded plan from Starter to Pro under techstart_002",
    timestamp: "03/21/2025 | 07:43",
  },
  {
    id: "3",
    message: "bob.johnson account was deactivated by admin",
    timestamp: "03/20/2025 | 22:05",
  },
  {
    id: "4",
    message: "alice.brown has registered with company Id devstudio_004",
    timestamp: "03/20/2025 | 19:30",
  },
  {
    id: "5",
    message:
      "mike.wilson changed role from Member to Admin under cloudbase_005",
    timestamp: "03/20/2025 | 17:12",
  },
  {
    id: "6",
    message: "sara.lee subscription payment of $19.00 received for alphNet_006",
    timestamp: "03/20/2025 | 14:55",
  },
  {
    id: "7",
    message: "acme_corp_001 plan upgraded from Pro to Enterprise",
    timestamp: "03/19/2025 | 11:22",
  },
  {
    id: "8",
    message: "tom.harris has registered with company Id betaworks_008",
    timestamp: "03/19/2025 | 09:04",
  },
  {
    id: "9",
    message: "mega_corp_003 status changed to inactive by admin",
    timestamp: "03/18/2025 | 16:47",
  },
  {
    id: "10",
    message: "password reset requested for alice.brown",
    timestamp: "03/18/2025 | 13:31",
  },
  {
    id: "11",
    message: "cloudbase_005 created 12 new member seats",
    timestamp: "03/17/2025 | 10:08",
  },
  {
    id: "12",
    message: "subscription payment of $299.00 received for cloudbase_005",
    timestamp: "03/17/2025 | 08:55",
  },
];

export function Lobby() {
  const { auditLog } = useAdmin();
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-muted/30 text-foreground">
      <section>
        <h2 className="text-3xl font-black text-foreground tracking-tight">
          Dashboard
        </h2>
        <p className="text-white mt-1">Platform overview and recent activity</p>
      </section>

      <div className="grid grid-cols-3 gap-6">
        <StatCard
          icon={<Building2 className="w-5 h-5 text-[#5048e5]" />}
          label="Total Registered Org."
          value={String(MOCK_STATS.totalRegisteredOrgs)}
          iconBg="bg-[#5048e5]/10"
        />
        <StatCard
          icon={<Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
          label="Active Users"
          value={MOCK_STATS.activeUsers.toLocaleString()}
          iconBg="bg-blue-500/10"
        />
        <StatCard
          icon={
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          }
          label="Monthly Income"
          value={MOCK_STATS.monthlyIncome}
          iconBg="bg-green-500/10"
        />
      </div>

      {/* Audit / Activity Log */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="flex flex-col divide-y divide-border max-h-120 overflow-y-auto">
            {auditLog.length === 0 ? (
              <div
                className={`w-full h-full flex justify-center items-center text-gray-400`}
              >
                No entry has found
              </div>
            ) : (
              <>
                {auditLog.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#5048e5] shrink-0" />
                      <p className="text-sm text-foreground truncate">
                        {entry.clientId} {entry.action} {entry.target}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0 ml-6 font-mono">
                      {JSON.stringify(entry.date)}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconBg: string;
}) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6 flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}
        >
          {icon}
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-medium">{label}</p>
          <p className="text-2xl font-black text-foreground mt-0.5">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
