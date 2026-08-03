import axios from "axios";

export const adminApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

adminApi.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginAdmin = (username: string, password: string) =>
  adminApi.post("/api/admin", { username, password });

export const getCompanies = () => adminApi.get("/api/admin/companies");

export const getClients = () => adminApi.get("/api/admin/clients");

export const deleteClient = (id: string) =>
  adminApi.delete(`/api/admin/clients/${id}`);

export type UpdateClientPayload = Partial<{
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  role: string;
}>;

export const updateClient = (id: string, data: UpdateClientPayload) =>
  adminApi.put(`/api/admin/clients/${id}`, data);

export const deleteCompany = (id: string) =>
  adminApi.delete(`/api/admin/companies/${id}`);

export const getAuditLog = () => adminApi.get("/api/auditlog");
