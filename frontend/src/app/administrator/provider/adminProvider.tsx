"use client";
import { adminApi } from "@/lib/adminApi";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { OrganizationInterface } from "../Types";
import { Dispatch, SetStateAction } from "react";
import { ClientType } from "../Types";
import { mockOrganizations, mockClients } from "../_parts/MockData";
interface AdminContextType {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  lastAccessTime: string;
  fetchCompaniesData: () => Promise<void>;
  companies: OrganizationInterface[] | [];
  singleorg: OrganizationInterface | null;
  users: ClientType[] | [];
  allusers: ClientType[] | [];
  fetchUsersOfCompanies: (orgId: string) => Promise<void>;
  fetchCompanyById: (orgId: string) => Promise<void>;
  fetchAuditLog: () => Promise<void>;
  createCompany: (data: OrganizationInterface) => Promise<void>;
  deleteCompany: (id: string) => Promise<void>;
  deleteUserById: (clientId: string) => Promise<void>;
  auditLog: AuditLogtype[] | [];
  loading: boolean;
  fetchError: boolean;
}

type AuditLogtype = {
  id: string;
  clientId: string;
  action: string;
  target: string;
  details: object;
  date: Date;
};
export const AdminContext = createContext({} as AdminContextType);
export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [companies, setCompanies] = useState<OrganizationInterface[]>(mockOrganizations);
  const [owners, setOwners] = useState<ClientType[]>([]);
  const [singleorg, setSingleorg] = useState<OrganizationInterface | null>(
    null,
  );
  const [users, setUsers] = useState<ClientType[]>([]);
  const [allusers, setAllUsers] = useState<ClientType[]>(mockClients);
  const [lastAccessTime, setLastAccessTime] = useState("");
  const [auditLog, setAuditlog] = useState<AuditLogtype[]>([]);
  const [showSideBar, setShowSideBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const time = new Date();
    const date = time.toISOString();
    setLastAccessTime(date);
  }, []);

  async function fetchCompaniesData() {
    try {
      const res = await adminApi.get("/api/admin/companies");
      const data = res.data.companyData;
      if (Array.isArray(data) && data.length > 0) setCompanies(data);
    } catch {
      // keep mock data
    }
  }
  async function fetchAllOwners() {
    try {
      const res = await adminApi.get("/api/admin/clients");
      const data = res.data.usersData;
      if (Array.isArray(data) && data.length > 0) setAllUsers(data);
    } catch {
      // keep mock data
    }
  }
  async function fetchCompanyById(orgId: string) {
    try {
      const res = await adminApi.get(`/api/admin/companies/${orgId}`);
      setSingleorg(res.data);
    } catch (e) {
      console.error(e);
    }
  }
  async function fetchUsersOfCompanies(orgId: string) {
    try {
      const res = await adminApi.get(`/api/admin/companies/${orgId}/members`);
      setUsers(res.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function createCompany(data: any) {
    try {
      const res = await adminApi.post("/api/admin/companies", data);
      if (res) {
        await fetchCompaniesData();
      }
    } catch (e) {
      // mock fallback
      const newOrg: OrganizationInterface = {
        id: `mock-${Date.now()}`,
        name: data.name,
        industry: data.industry,
        emailAddress: data.email ?? "",
        phoneNumber: data.phoneNumber ?? "",
        address: data.address ?? "",
        description: data.description ?? "",
        patronage: "BASIC",
        createdAt: new Date(),
        aiUsages: [],
        members: [],
      };
      setCompanies((prev) => [...prev, newOrg]);
    }
  }
  async function deleteCompany(OrgId: string) {
    try {
      await adminApi.delete(`/api/admin/companies/${OrgId}`);
      await fetchCompaniesData();
    } catch (e) {
      setCompanies((prev) => prev.filter((c) => c.id !== OrgId));
    }
  }
  async function deleteUserById(clientId: string) {
    try {
      await adminApi.delete(`/api/clients/${clientId}`);
      setAllUsers((prev) => prev.filter((u) => u.id !== clientId));
    } catch (e) {
      setAllUsers((prev) => prev.filter((u) => u.id !== clientId));
    }
  }
  async function fetchAuditLog() {
    try {
      const res = await adminApi.get("/api/auditlog");
      setAuditlog(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchCompaniesData(), fetchAllOwners(), fetchAuditLog()])
      .finally(() => setLoading(false));
  }, [lastAccessTime]);

  return (
    <AdminContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
        lastAccessTime,
        fetchCompaniesData,
        companies,
        singleorg,
        allusers,
        users,
        fetchUsersOfCompanies,
        fetchCompanyById,
        fetchAuditLog,
        createCompany,
        deleteCompany,
        deleteUserById,
        auditLog,
        loading,
        fetchError,
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
