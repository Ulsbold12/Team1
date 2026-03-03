"use client";

import { AppSidebar } from "@/app/(client)/dashboard/_components/dashboard/Sidebar";
import { TopBar } from "@/app/(client)/dashboard/_components/dashboard/TopBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopBar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
