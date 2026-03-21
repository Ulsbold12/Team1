"use client";
import {
  Layers2,
  LayoutDashboard,
  Settings,
  ShieldUser,
  TableProperties,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
  {
    label: "Хяналтын Сбмбр",
    icon: LayoutDashboard,
    href: "/administrator/dashboard",
  },
  {
    label: "Компаниуд",
    icon: TableProperties,
    href: "/administrator/companies",
  },
  { label: "Хэрэглэгчид", icon: Users, href: "/administrator/users" },
  { label: "Тохиргоо", icon: Settings, href: "/administrator/settings" },
];
export function ControlSideBar() {
  const pathname = usePathname();
  return (
    <div className={`w-30 bg-gray-500 h-screen flex flex-col p-2 gap-2`}>
      {navItems.map((n, i) => {
        const Icon = n.icon;
        return <Icon />;
      })}
    </div>
  );
}
