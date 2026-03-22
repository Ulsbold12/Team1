"use client";
import { AdminProvider } from "../provider/adminProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <div className={`shrink-0 w-screen h-screen no-scrollbar overflow-hidden bg-gray-600`}>{children}</div>
    </AdminProvider>
  );
}
