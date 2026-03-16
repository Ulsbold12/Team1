"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { loginAdmin } from "@/lib/adminApi";
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
      <div className="rounded-2xl shadow-xl shadow-[#5048e5] bg-[#dddbff] p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p>Enter your credentials to access the Super Admin Page.</p>

        <div className="flex flex-col gap-2">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your admin username"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button variant={"ghost"} onClick={handleClick} disabled={loading}>
            {loading ? "Loading..." : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
