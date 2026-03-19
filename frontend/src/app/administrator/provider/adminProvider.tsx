"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { OrganizationInterface } from "../Types";
import { getClients, getCompanies, loginAdmin } from "@/lib/adminApi";

interface AdminContextType {
  login: (username: string, password: string) => Promise<void>;
  lastAccessTime: Date;
  companies: OrganizationInterface[] | [];
  users: ClientTypes[] | [];
  allusers: ClientTypes[] | [];
  fetchCompaniesData: () => Promise<void>;
  fetchUsersOfCompanies: () => Promise<void>;
  fetchAuditLog: () => Promise<void>;
  createCompany: (data: OrganizationInterface) => Promise<void>;
  deleteCompany: (id: string) => Promise<void>;
}
export const AdminContext = createContext({} as AdminContextType);
export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [companies, setCompanies] = useState<OrganizationInterface[]>([]);
  const [users, setUsers] = useState<ClientTypes[]>([]);
  const [allusers, setAllUsers] = useState<ClientTypes[]>([]);
  const [lastAccessTime, setLastAccessTime] = useState<Date>(new Date());

  useEffect(() => {}, []);
  async function login(username: string, password: string) {
    try {
      const res = await loginAdmin(username, password);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchCompaniesData() {
    //function for getting all data of companies
    try {
      const [companiesRes, usersRes] = await Promise.all([
        getCompanies(),
        getClients(),
      ]);
      console.log(companiesRes.data, usersRes.data);
      setCompanies(companiesRes.data?.companyData);
      setAllUsers(usersRes.data?.usersData);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchUsersOfCompanies(orgId: string) {
    try {
      const res = await fetch(`/api/admin/companies/${orgId}`);
    } catch (e) {
      console.error(e);
    }
  }

  async function createCompany(data: OrganizationInterface) {
    try {
      const res = await fetch("/api/admin/companies", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      if (res) {
        console.log(res);
      }
    } catch (e) {
      console.error(e);
    }
  }
  async function deleteCompany(id: string) {
    try {
      const res = await fetch("/api/admin/companies", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ orgId: id }),
      });
      if (res) {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <AdminContext.Provider
      value={{
        login,
        fetchCompaniesData,
        allusers,
        lastAccessTime,
        users,
        companies,
        deleteCompany,
        createCompany,
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
