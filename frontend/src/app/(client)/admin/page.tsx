"use client";
//this page is for superadmin control.
//access type includes create, read, update, delete. full control over the database. but cannot read senstive finance data of organizations.
//control reach -> only on general info drelated to system.
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { loginAdmin } from "@/lib/adminApi";
import { Card } from "@/components/ui/card";
const AdminPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await loginAdmin(username, password);
      console.log(res);
      if (res.data.success) {
        const token = res.data.res;
        localStorage.setItem("accessToken", token);
        alert("Youkoso, Supa-Dupa Admin-Sama!");
        router.push("/admin/dashboard");
      }
    } catch (e) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Card>
        <p>Authorize new member registry under your orginazation</p>
        <Button>Get Code</Button>
      </Card>
      <Card>Change organization settings</Card>
      <Card>
        <h1>Recent activities</h1>
      </Card>
      <Card>Recent changes from employees</Card>
      <Card>Update settings on employee data </Card>
    </div>
  );
};

export default AdminPage;
