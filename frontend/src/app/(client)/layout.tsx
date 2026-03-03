 "use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppSidebar } from "@/app/(client)/_components/dashboard/Sidebar";
import { TopBar } from "@/app/(client)/_components/dashboard/TopBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    if (!user?.publicMetadata?.onboardingComplete) {
      router.replace("/onboarding");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user?.publicMetadata?.onboardingComplete) return null;

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
