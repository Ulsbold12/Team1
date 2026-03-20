"use client";

import { useState } from "react";

type Status = "Идэвхтэй" | "Хүлээгдэж буй" | "Идэвхгүй";

interface Company {
  id: number;
  name: string;
  owner: string;
  status: Status;
  users: number;
}

interface RecentUser {
  id: number;
  name: string;
  role: string;
  time: string;
  avatar: string;
}

interface ActivityItem {
  id: number;
  color: "blue" | "yellow" | "green";
  title: string;
  description: string;
  time: string;
}

type NavItem =
  | "Хяналтын самбар"
  | "Компаниуд"
  | "Хэрэглэчид"
  | "Админ"
  | "Тохиргоо";

const companies: Company[] = [
  {
    id: 1,
    name: "Acme Corp",
    owner: "John Doe",
    status: "Идэвхтэй",
    users: 0,
  },
  {
    id: 2,
    name: "Global Tech",
    owner: "Sarah Smith",
    status: "Хүлээгдэж буй",
    users: 0,
  },
  {
    id: 3,
    name: "Innovate Ltd",
    owner: "Mike Ross",
    status: "Идэвхтэй",
    users: 0,
  },
  {
    id: 4,
    name: "Delta Solutions",
    owner: "Jane Foster",
    status: "Идэвхгүй",
    users: 0,
  },
];

const recentUsers: RecentUser[] = [
  {
    id: 1,
    name: "Felix Graham",
    role: "Компани хоорондын хэрэглэчийн лавлах",
    time: "2м өмнө",
    avatar: "FG",
  },
  {
    id: 2,
    name: "Anita Bell",
    role: "Компани хоорондын хэрэглэчийн лавлах",
    time: "14м өмнө",
    avatar: "AB",
  },
  {
    id: 3,
    name: "Marcus Wright",
    role: "Компани хоорондын хэрэглэчийн лавлах",
    time: "1ц өмнө",
    avatar: "MW",
  },
];

const activities: ActivityItem[] = [
  {
    id: 1,
    color: "blue",
    title: "Шинэ компани бүртгэлдээ",
    description: "Zenith Solutions платформд Enterprise зэрэглэлээр нэгдлээ.",
    time: "12:45 PM",
  },
  {
    id: 2,
    color: "yellow",
    title: "Төлбөрийн мэдэгдэл",
    description:
      "Delta Solutions руу төлбөр амжилтгүй болсон тухай мэдэгдэл илгээв.",
    time: "10:20 AM",
  },
  {
    id: 3,
    color: "green",
    title: "Хэрэглэчийн багц экспорт",
    description:
      "Acme Corp 150 хэрэглэчийн мэдэээллийг CSV файл руу экспортлов.",
    time: "өчигдөр",
  },
];

const StatusBadge = ({ status }: { status: Status }) => {
  const styles: Record<Status, string> = {
    Идэвхтэй: "bg-green-100  text-green-700  border border-green-200",
    "Хүлээгдэж буй": "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Идэвхгүй: "bg-gray-100   text-gray-500   border border-gray-200",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const StatCard = ({
  label,
  value,
  change,
  positive,
  icon,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100">
    <div className="flex items-start justify-between mb-4">
      <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
        {label}
      </p>
      <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
        {icon}
      </div>
    </div>
    <div className="flex items-end gap-3">
      <span className="text-3xl font-bold text-gray-900 tracking-tight">
        {value}
      </span>
      <span
        className={`text-xs font-semibold mb-1 px-2 py-0.5 rounded-full ${
          positive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}
      >
        {change}
      </span>
    </div>
  </div>
);

const ActivityDot = ({ color }: { color: ActivityItem["color"] }) => {
  const map: Record<ActivityItem["color"], string> = {
    blue: "bg-blue-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };
  return (
    <span
      className={`w-2.5 h-2.5 rounded-full shrink-0 mt-0.5 ${map[color]}`}
    />
  );
};

const IconDashboard = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const IconBuilding = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
  </svg>
);
const IconUsers = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconShield = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconSettings = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconSearch = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);
const IconDots = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);
const IconPlus = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function Panel() {
  const [activeNav, setActiveNav] = useState<NavItem>("Админ");
  const [search, setSearch] = useState("");

  const navItems: { label: NavItem; icon: React.ReactNode }[] = [
    { label: "Хяналтын самбар", icon: <IconDashboard /> },
    { label: "Компаниуд", icon: <IconBuilding /> },
    { label: "Хэрэглэчид", icon: <IconUsers /> },
    { label: "Админ", icon: <IconShield /> },
    { label: "Тохиргоо", icon: <IconSettings /> },
  ];

  const filtered = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.owner.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-screen bg-[#f0f2f7] font-sans text-gray-800 overflow-hidden">
      <aside className="w-56 bg-white flex flex-col justify-between py-6 px-4 shadow-sm shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 5h16M4 12h10M4 19h7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-none">
                SaaS Admin
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Байгууллагын удирдлага
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => setActiveNav(label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeNav === label
                    ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-700">
            AR
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">Alex Rivera</p>
            <p className="text-[10px] text-gray-400">Супер Админ</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto px-8 py-6">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-xl text-[30px] font-bold text-gray-900">
            Админ хяналтын самбар
          </h1>
          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-violet-200 transition-all">
            <IconPlus />
            Компани нэмэх
          </button>
        </div>

        <div className="flex gap-5 mb-7">
          <StatCard
            label="Нийт компаниуд"
            value="0"
            change="%"
            positive
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 21h18M5 21V7l7-4 7 4v14" />
              </svg>
            }
          />
          <StatCard
            label="Идэвхтэй хэрэглэгчид"
            value="$0"
            change="%"
            positive
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <StatCard
            label="Сар бүрийн орлого"
            value="$0"
            change="%"
            positive
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            }
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-7">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-800">
              Компаниудын тойм
            </h2>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconSearch />
              </span>
              <input
                type="text"
                placeholder="Компани хайх..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-300 w-48 transition"
              />
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                <th className="text-left px-6 py-3">Нэр</th>
                <th className="text-left px-6 py-3">Эзэмшигч</th>
                <th className="text-left px-6 py-3">Төлөв</th>
                <th className="text-right px-6 py-3">Хэрэглэгчийн тоо</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((company, i) => (
                <tr
                  key={company.id}
                  className={`border-t border-gray-50 hover:bg-gray-50 transition-colors ${
                    i % 2 === 0 ? "" : "bg-gray-50/40"
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {company.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {company.owner}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={company.status} />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 text-right">
                    {company.users}
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-1 hover:bg-gray-200 rounded-lg transition">
                      <IconDots />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mb-4 py-3 px-4">
          <div>
            <h2 className="text-[25px] font-bold text-gray-800">
              Хэрэглэгчийн удирдлага
            </h2>
            <p className="text-[17px] text-gray-400 mt-0.5">
              Компани хоорондын хэрэглэгчийн лавлах
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between border-b border-gray-200 mb-3 py-3 px-2">
              <p className="text-[18px] font-semibold text-gray-800">
                Сүүлийн бүртгэлүүд
              </p>
              <button className="text-[14px] font-semibold text-violet-800 hover:text-violet-700 transition">
                Бүгдийг харах
              </button>
            </div>

            <div className="space-y-4 py-1">
              {recentUsers.map((u) => (
                <div key={u.id} className="flex items-center py-2 gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
                    {u.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {u.name}
                    </p>
                    <p className="text-[11px] text-gray-400 truncate">
                      {u.role}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 shrink-0">
                    {u.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl  shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between border-b border-gray-200 mb-4 py-3 px-2">
              <p className="text-[18px] font-semibold text-gray-800">
                Платформын идэвх
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-green-500 font-semibold">
                <span className="w-2 h-2 bg-green-500  rounded-full animate-pulse" />
                Шууд шинэчлэлт
              </div>
            </div>

            <div className="space-y-4 ">
              {activities.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <ActivityDot color={a.color} />
                  <div>
                    <p className="text-sm font-semibold  text-gray-800">
                      {a.title}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {a.description}
                    </p>
                    <p className="text-[10px] text-gray-300 mt-1">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
