"use client";

import {
  LayoutDashboard,
  Building2,
  Users,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { useAdmin, AdminSection } from "../provider/adminProvider";

const navItems: {
  label: string;
  icon: React.ElementType;
  key: AdminSection;
}[] = [
  { label: "Dashboard", icon: LayoutDashboard, key: "dashboard" },
  { label: "Companies", icon: Building2, key: "companies" },
  { label: "Users", icon: Users, key: "users" },
  { label: "Memberships", icon: Activity, key: "subscriptions" },
];

export function AdminSideBar() {
  const { activeSection, setActiveSection } = useAdmin();

  return (
    <aside className="w-56 h-screen bg-background border-r border-border flex flex-col shrink-0">
      <div className="h-16 px-5 flex items-center gap-3 border-b border-border shrink-0">
        <div className="w-8 h-8 rounded-lg bg-[#5048e5] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-none">Super Admin</span>
          <span className="text-[11px] text-muted-foreground mt-0.5">Flow AI</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#5048e5]/10 text-[#5048e5]"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-border flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold border border-zinc-700 shrink-0">
          S
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-bold">Super Admin</p>
          <p className="text-[10px] text-muted-foreground">Full access</p>
        </div>
      </div>
    </aside>
  );
}
