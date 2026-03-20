"use client";

import { useEffect, useState } from "react";
import { useAdmin } from "../provider/adminProvider";
import { OrganizationInterface } from "../Types";
export default function Page() {
  const [companies, setCompanies] = useState<OrganizationInterface[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/admin/companies", {
        method: "GET",
      });
      console.log(res);
    };
  }, []);
  return (
    <>
      {companies.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </>
  );
}
