"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Landmark,
  Megaphone,
  Settings,
  ShieldCheck,
  CreditCard,
  Receipt,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
const navItems = [
  { label: "Нүүр", icon: Home, href: "/dashboard" },
  { label: "Санхүү AI", icon: Landmark, href: "/finance" },
  { label: "Маркетинг AI", icon: Megaphone, href: "/marketing" },
  { label: "Татварын тайлан", icon: Receipt, href: "/tax" },
  { label: "Тариф & Төлбөр", icon: CreditCard, href: "/billing" },
  { label: "Тохиргоо", icon: Settings, href: "/settings" },
  { label: "Админ", icon: ShieldCheck, href: "/admin" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const fullName = user
    ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
    : "";
  const planName = (user?.publicMetadata?.plan as string) ?? "";

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-0.5">
          <Image
            src="/logoblack.svg"
            alt="FlowAI"
            width={40}
            height={40}
            className="rounded-lg shrink-0 dark:invert"
          />
          <span
            className="text-sidebar-foreground text-lg font-bold"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
          >
            FlowAI
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                    }
                    className="data-[active=true]:bg-[#5048e5]/10 data-[active=true]:text-[#5048e5]">
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 p-2">
          <div className="w-8 h-8 rounded-full shrink-0 overflow-hidden bg-[#5048e5] flex items-center justify-center text-white text-xs font-bold">
            {user?.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>
                {(
                  user?.firstName?.[0] ??
                  user?.emailAddresses?.[0]?.emailAddress?.[0] ??
                  "?"
                ).toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-xs font-bold truncate">
              {fullName || user?.emailAddresses?.[0]?.emailAddress}
            </p>
            <p className="text-[10px] text-sidebar-foreground/50 truncate">
              {planName || user?.emailAddresses?.[0]?.emailAddress}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
