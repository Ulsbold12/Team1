"use client";

import { useEffect } from "react";
import { useAdmin } from "../provider/adminProvider";
export default function Page() {
  const { fetchCompaniesData, companies } = useAdmin();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api");
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
