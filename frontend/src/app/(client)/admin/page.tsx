"use client";
//this page is for superadmin control.
//access type includes create, read, update, delete. full control over the database. but cannot read senstive finance data of organizations.
//control reach -> only on general info drelated to system.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserPlus, Settings, Activity, Users } from "lucide-react";
import { loginAdmin } from "@/lib/adminApi";
import { SectionHeader } from "@/app/(client)/dashboard/_components/dashboard/SectionHeader";
import { useAuth } from "@clerk/nextjs";


const AdminPage = () => {
  const router = useRouter();

  const { getToken } = useAuth();
  const handleGetCode = async () => {
    const token = await getToken();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/onboarding/getcode`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-muted/30 text-foreground">
      <section>
        <h2 className="text-3xl font-black text-foreground tracking-tight">
          Admin Dashboard
        </h2>
        <p className="text-muted-foreground mt-1">
          Manage your organization settings and monitor activity.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader icon={UserPlus} title="Member Registry" />
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
          <p className="text-sm text-muted-foreground">
            Authorize new member registry under your organization
          </p>
          <Button
            className="bg-[#5048e5] hover:bg-[#4038d4] text-white"
            onClick={() => {
              handleGetCode();
            }}
          >
            Get Code
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader icon={Settings} title="Organization Settings" />
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm w-full aspect-5/1">
          <p className="text-sm text-muted-foreground">
            Update members settings
          </p>
          {/* map the members info and display here:
          change role -> assign authentication
          delete -> remove member
          
          */}


        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader icon={Activity} title="Recent Activity" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Activity className="w-4 h-4 text-[#5048e5]" />
              Recent activities
            </div>
            <p className="text-sm text-muted-foreground">
              Recent changes from employees
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Users className="w-4 h-4 text-[#5048e5]" />
              Employee Data
            </div>
            <p className="text-sm text-muted-foreground">
              Update settings on employee data
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
