"use client";

import { useEffect } from "react";
import { useAdmin } from "../provider/adminProvider";
export default function Page() {
    const {fetchCompaniesData} = useAdmin();
  useEffect(() => {
    const fetchData = async() => {
        const res = await fetch('/api')
    }
  }, []);
  return <>company managaementguybfs</>;
}
