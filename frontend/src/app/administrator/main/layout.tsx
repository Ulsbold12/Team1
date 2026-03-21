"use client";

import { AdminSideBar } from "../_parts/AdminSideBar";

export default function AdminMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSideBar />
      <main className="flex-1 overflow-hidden flex flex-col">{children}</main>
    </div>
  );
}
