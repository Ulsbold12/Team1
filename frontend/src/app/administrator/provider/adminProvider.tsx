"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { OrganizationInterface, ClientType } from "../Types";
import { getClients, getCompanies, loginAdmin } from "@/lib/adminApi";

export type AdminSection = "dashboard" | "companies" | "users" | "subscriptions";

interface AdminContextType {
  login: (username: string, password: string) => Promise<void>;
  lastAccessTime: Date;
  companies: OrganizationInterface[] | [];
  users: ClientType[] | [];
  allusers: ClientType[] | [];
  fetchCompaniesData: () => Promise<void>;
  fetchUsersOfCompanies: (orgId: string) => Promise<void>;
  fetchAuditLog: () => Promise<void>;
  createCompany: (data: OrganizationInterface) => Promise<void>;
  deleteCompany: (id: string) => Promise<void>;
  activeSection: AdminSection;
  setActiveSection: (section: AdminSection) => void;
}
export const AdminContext = createContext({} as AdminContextType);
export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [companies, setCompanies] = useState<OrganizationInterface[]>([]);
  const [users, setUsers] = useState<ClientType[]>([]);
  const [allusers, setAllUsers] = useState<ClientType[]>([]);
  const [lastAccessTime, setLastAccessTime] = useState<Date>(new Date());
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");

  async function login(username: string, password: string) {
    const res = await loginAdmin(username, password);
    if (res.data.success) {
      localStorage.setItem("accessToken", res.data.res);
      setLastAccessTime(new Date());
    }
  }

  async function fetchCompaniesData() {
    //function for getting all data of companies
    try {
      const [companiesRes, usersRes] = await Promise.all([
        getCompanies(),
        getClients(),
      ]);
      setCompanies(companiesRes.data?.companyData);
      setAllUsers(usersRes.data?.usersData);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchUsersOfCompanies(orgId: string) {
    try {
      const res = await fetch(`/api/admin/companies/${orgId}`);
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  }

  async function createCompany(data: OrganizationInterface) {
    try {
      await fetch("/api/admin/companies", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
    } catch (e) {
      console.error(e);
    }
  }
  async function deleteCompany(id: string) {
    try {
      await fetch("/api/admin/companies", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ orgId: id }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchAuditLog() {
    try {
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <AdminContext.Provider
      value={{
        login,
        fetchCompaniesData,
        fetchUsersOfCompanies,
        allusers,
        lastAccessTime,
        users,
        companies,
        deleteCompany,
        createCompany,
        activeSection,
        setActiveSection,
        fetchAuditLog,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
};
