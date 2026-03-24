"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { adminApi } from "@/lib/adminApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { OrganizationInterface } from "../Types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Building2, Phone, Mail, MapPin, MoreVertical, Search, User } from "lucide-react";
import { useAdmin } from "../provider/adminProvider";

const fields = [
  { key: "name", label: "Name", type: "text" },
  { key: "industry", label: "Field Industry", type: "select" },
  { key: "description", label: "Description", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "phoneNumber", label: "Phone Number", type: "string" },
  { key: "address", label: "Address", type: "text" },
];

export function Companies() {
  const [sheetOpen, setSheetOpen] = useState<"read" | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<OrganizationInterface | null>(null);
  const [loadadd, setLoadadd] = useState(false);
  const [planLoading, setPlanLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { companies, fetchUsersOfCompanies, deleteCompany, fetchCompaniesData, users, loading, fetchError } = useAdmin();
  const [form, setForm] = useState({
    name: "", industry: "", description: "", email: "", phoneNumber: "", address: "",
  });

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase())
  );

  async function handleSelectCompany(company: OrganizationInterface) {
    setSelectedCompany(company);
    setSheetOpen("read");
    await fetchUsersOfCompanies(company.id);
  }

  function closeSheet() {
    setSheetOpen(null);
    setSelectedCompany(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoadadd(true);
    try {
      await adminApi.post("/api/admin/companies", form);
      await fetchCompaniesData();
      setForm({ name: "", industry: "", description: "", email: "", phoneNumber: "", address: "" });
    } catch (err) {
      alert(`Network error: ${err}`);
    } finally {
      setLoadadd(false);
    }
  }

  async function handleDeleteCompany(id: string) {
    try {
      await deleteCompany(id);
      await fetchCompaniesData();
      closeSheet();
    } catch (e) {
      console.log(e);
    }
  }

  async function handleTogglePlan(company: OrganizationInterface) {
    setPlanLoading(true);
    try {
      const newPlan = company.patronage === "PRO" ? "BASIC" : "PRO";
      await adminApi.put(`/api/admin/companies/${company.id}/plan`, { patronage: newPlan });
      await fetchCompaniesData();
      setSelectedCompany((prev) => prev ? { ...prev, patronage: newPlan } : prev);
    } catch (e) {
      console.log(e);
    } finally {
      setPlanLoading(false);
    }
  }

  const AddCompanyComp = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">+ Add Company</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add Company</DialogTitle>
        <DialogDescription>Fill in the details to register a new company.</DialogDescription>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="text-sm font-medium">{field.label}</label>
              {field.type === "select" ? (
                <select
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2 bg-background"
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}>
                  <option value="">Сонгоно уу</option>
                  <option value="TECH">TECH</option>
                  <option value="HEALTHCARE">HEALTHCARE</option>
                  <option value="RETAIL">RETAIL</option>
                  <option value="FINANCE">FINANCE</option>
                  <option value="EDUCATION">EDUCATION</option>
                  <option value="MANUFACTURING">MANUFACTURING</option>
                </select>
              ) : (
                <input
                  type={field.type}
                  className="mt-1 w-full rounded-md border px-3 py-2 bg-background"
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={loadadd}
            className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium disabled:opacity-50">
            {loadadd ? "Saving..." : "Add"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-muted/30 text-foreground">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-foreground tracking-tight">Companies</h2>
          <p className="text-muted-foreground mt-1 text-sm">Manage all registered organizations</p>
        </div>
        <AddCompanyComp />
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Компани хайх..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex flex-col gap-3">
        {loading ? (
          <p className="text-sm text-muted-foreground py-4">Ачааллаж байна...</p>
        ) : fetchError ? (
          <p className="text-sm text-red-500 py-4">Backend холбогдохгүй байна.</p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4">
            {search ? "Хайлтад тохирох компани олдсонгүй" : "Компани олдсонгүй"}
          </p>
        ) : filtered.map((company) => (
          <div
            key={company.id}
            className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm hover:border-[#5048e5]/30 transition-colors">
            <div className="w-9 h-9 bg-[#5048e5]/10 rounded-lg flex items-center justify-center shrink-0">
              <Building2 size={16} className="text-[#5048e5]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-foreground font-semibold text-sm">{company.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{company.industry}</p>
            </div>
            <div className="text-xs text-gray-500">
              AI: {company.aiUsages ? company.aiUsages.length : 0}/m
            </div>
            <Badge
              variant="outline"
              className={`${company.patronage === "PRO" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" : "bg-green-500/10 text-green-600 border-green-500/20"} text-xs shrink-0`}>
              {company.patronage}
            </Badge>
            <p className="text-muted-foreground text-xs shrink-0 w-20">
              {company.members?.length ?? 0} members
            </p>
            <Button
              className="rounded-full scale-95"
              variant="ghost"
              size="icon"
              onClick={() => handleSelectCompany(company)}>
              <MoreVertical />
            </Button>
          </div>
        ))}
      </div>

      <Sheet open={sheetOpen === "read"} onOpenChange={(open) => { if (!open) closeSheet(); }}>
        <SheetContent className="w-110 overflow-y-auto p-6">
          <SheetHeader>
            <SheetTitle>{selectedCompany?.name}</SheetTitle>
          </SheetHeader>

          {selectedCompany && (
            <div className="mt-6 flex flex-col gap-4">
              <DetailRow label="Industry" value={selectedCompany.industry} />
              <DetailRow
                label="Plan"
                value={
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={selectedCompany.patronage === "PRO"
                        ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                        : "bg-green-500/10 text-green-600 border-green-500/20"}>
                      {selectedCompany.patronage}
                    </Badge>
                    <button
                      onClick={() => handleTogglePlan(selectedCompany)}
                      disabled={planLoading}
                      className="text-xs text-[#5048e5] hover:underline disabled:opacity-50">
                      {planLoading ? "..." : selectedCompany.patronage === "PRO" ? "→ BASIC" : "→ PRO"}
                    </button>
                  </div>
                }
              />
              <DetailRow label="Created" value={new Date(selectedCompany.createdAt).toLocaleDateString()} />
              <div className="border-t border-border pt-4 flex flex-col gap-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {selectedCompany.address || "—"}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={14} className="shrink-0" />
                  {selectedCompany.phoneNumber as string || "—"}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} className="shrink-0" />
                  {selectedCompany.emailAddress || "—"}
                </div>
              </div>
              {selectedCompany.description && (
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Description</p>
                  <p className="text-sm">{selectedCompany.description as string}</p>
                </div>
              )}

              {/* Members */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  Members ({users.length})
                </p>
                <div className="flex flex-col gap-2">
                  {users.length === 0 ? (
                    <p className="text-xs text-muted-foreground">Гишүүн олдсонгүй</p>
                  ) : users.map((u) => (
                    <div key={u.id} className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-[#5048e5]/10 rounded-full flex items-center justify-center shrink-0">
                        <User size={12} className="text-[#5048e5]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{u.firstname} {u.lastname}</p>
                        <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                      </div>
                      <Badge variant="outline" className="text-xs shrink-0">{u.role}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => handleDeleteCompany(selectedCompany.id)}>
                  Delete Company
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
