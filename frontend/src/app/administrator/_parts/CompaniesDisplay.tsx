"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Plus,
  Building2,
  Trash2,
  Eye,
  Pencil,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// [MOCK_DATA] - replace with real data from context/API
const MOCK_COMPANIES = [
  {
    id: "1",
    name: "Acme Corp",
    owner: "John Doe",
    plan: "Pro",
    status: "active",
    industry: "Technology",
    address: "123 Main St, San Francisco, CA 94102",
    description:
      "Leading provider of enterprise software solutions for modern teams.",
    phoneNumber: "+1 (555) 000-0001",
    email: "contact@acmecorp.com",
    createdAt: "2024-01-15",
    memberCount: 120,
  },
  {
    id: "2",
    name: "TechStart",
    owner: "Jane Smith",
    plan: "Starter",
    status: "active",
    industry: "SaaS",
    address: "456 Innovation Ave, Austin, TX 73301",
    description:
      "Early-stage startup building the next generation of productivity tools.",
    phoneNumber: "+1 (555) 000-0002",
    email: "hello@techstart.io",
    createdAt: "2024-02-20",
    memberCount: 12,
  },
  {
    id: "3",
    name: "Mega Corp",
    owner: "Bob Johnson",
    plan: "Enterprise",
    status: "inactive",
    industry: "Finance",
    address: "789 Wall St, New York, NY 10005",
    description:
      "Global financial services company operating in 40+ countries.",
    phoneNumber: "+1 (555) 000-0003",
    email: "info@megacorp.com",
    createdAt: "2023-11-08",
    memberCount: 5400,
  },
  {
    id: "4",
    name: "Dev Studio",
    owner: "Alice Brown",
    plan: "Pro",
    status: "active",
    industry: "Design",
    address: "321 Creative Blvd, Portland, OR 97201",
    description:
      "Boutique design and development studio specializing in digital experiences.",
    phoneNumber: "+1 (555) 000-0004",
    email: "studio@devstudio.co",
    createdAt: "2024-04-03",
    memberCount: 28,
  },
  {
    id: "5",
    name: "CloudBase Inc",
    owner: "Mike Wilson",
    plan: "Enterprise",
    status: "active",
    industry: "Cloud Infrastructure",
    address: "555 Cloud Way, Seattle, WA 98101",
    description:
      "Cloud infrastructure and managed services for scale-ups and enterprises.",
    phoneNumber: "+1 (555) 000-0005",
    email: "sales@cloudbase.io",
    createdAt: "2023-09-14",
    memberCount: 890,
  },
];

type Company = (typeof MOCK_COMPANIES)[number];

const EMPTY_FORM = {
  name: "",
  industry: "",
  address: "",
  description: "",
  phoneNumber: "",
  email: "",
};

const planColors: Record<string, string> = {
  Starter: "bg-secondary text-secondary-foreground border-border",
  Pro: "bg-[#5048e5]/10 text-[#5048e5] border-[#5048e5]/20",
  Enterprise:
    "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
};

export function CompaniesDisplay() {
  const [sheetMode, setSheetMode] = useState<"add" | "read" | "edit" | null>(
    null,
  );
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const openRead = (company: Company) => {
    setSelectedCompany(company);
    setSheetMode("read");
  };

  const openEdit = (company: Company) => {
    setSelectedCompany(company);
    setForm({
      name: company.name,
      industry: company.industry,
      address: company.address,
      description: company.description,
      phoneNumber: company.phoneNumber,
      email: company.email,
    });
    setSheetMode("edit");
  };

  const openAdd = () => {
    setForm(EMPTY_FORM);
    setSheetMode("add");
  };

  const closeSheet = () => {
    setSheetMode(null);
    setSelectedCompany(null);
  };

  // [MOCK_DATA] - wire these handlers to real API calls
  const handleAddSubmit = () => {
    console.log("[TODO] create company:", form);
    closeSheet();
  };

  const handleEditSubmit = () => {
    console.log("[TODO] update company:", selectedCompany?.id, form);
    closeSheet();
  };

  const handleDelete = (id: string) => {
    console.log("[TODO] delete company:", id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-muted/30 text-foreground">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-foreground tracking-tight">
            Companies
          </h2>
          <p className="text-muted-foreground mt-1">
            Manage all registered organizations
          </p>
        </div>
        <Button
          onClick={openAdd}
          className="bg-[#5048e5] hover:bg-[#4038d4] text-white gap-2"
        >
          <Plus size={16} />
          Add Organization
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {MOCK_COMPANIES.map((company) => (
          <div
            key={company.id}
            className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm hover:border-[#5048e5]/30 transition-colors"
          >
            <div className="w-9 h-9 bg-[#5048e5]/10 rounded-lg flex items-center justify-center shrink-0">
              <Building2 size={16} className="text-[#5048e5]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-foreground font-semibold text-sm">
                  {company.name}
                </p>
                <Badge
                  variant="outline"
                  className={
                    company.status === "active"
                      ? "bg-green-500/10 text-green-600 border-green-500/20 text-xs dark:text-green-400"
                      : "bg-red-500/10 text-red-600 border-red-500/20 text-xs dark:text-red-400"
                  }
                >
                  {company.status}
                </Badge>
              </div>
              <p className="text-muted-foreground text-xs mt-0.5">
                {company.industry} · Owner: {company.owner}
              </p>
            </div>

            <Badge
              variant="outline"
              className={`${planColors[company.plan] ?? ""} text-xs shrink-0`}
            >
              {company.plan}
            </Badge>

            <p className="text-muted-foreground text-xs shrink-0 w-20 text-right">
              {company.memberCount.toLocaleString()} members
            </p>

            {deleteConfirmId === company.id ? (
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-destructive text-xs">Delete?</span>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-7 text-xs px-2"
                  onClick={() => handleDelete(company.id)}
                >
                  Yes
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-7 text-xs px-2"
                  onClick={() => setDeleteConfirmId(null)}
                >
                  No
                </Button>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 shrink-0"
                  >
                    <MoreHorizontal size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => openRead(company)}
                    className="gap-2 cursor-pointer"
                  >
                    <Eye size={14} />
                    Read
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => openEdit(company)}
                    className="gap-2 cursor-pointer"
                  >
                    <Pencil size={14} />
                    Update
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => setDeleteConfirmId(company.id)}
                    className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                  >
                    <Trash2 size={14} />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        ))}
      </div>

      {/* Sheet: Add Organization */}
      <Sheet open={sheetMode === "add"} onOpenChange={closeSheet}>
        <SheetContent className="w-105 overflow-y-auto p-6">
          <SheetHeader>
            <SheetTitle>Add Organization</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4">
            <OrgFormFields form={form} setForm={setForm} />
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleAddSubmit}
                className="flex-1 bg-[#5048e5] hover:bg-[#4038d4] text-white"
              >
                Create
              </Button>
              <Button variant="ghost" onClick={closeSheet}>
                Cancel
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sheet: Read Company */}
      <Sheet open={sheetMode === "read"} onOpenChange={closeSheet}>
        <SheetContent className="w-105 overflow-y-auto p-6">
          <SheetHeader>
            <SheetTitle>{selectedCompany?.name}</SheetTitle>
          </SheetHeader>
          {selectedCompany && (
            <div className="mt-6 flex flex-col gap-4">
              <DetailRow label="Industry" value={selectedCompany.industry} />
              <DetailRow label="Owner" value={selectedCompany.owner} />
              <DetailRow label="Plan" value={selectedCompany.plan} />
              <DetailRow
                label="Status"
                value={
                  <Badge
                    variant="outline"
                    className={
                      selectedCompany.status === "active"
                        ? "bg-green-500/10 text-green-600 border-green-500/20 text-xs dark:text-green-400"
                        : "bg-red-500/10 text-red-600 border-red-500/20 text-xs dark:text-red-400"
                    }
                  >
                    {selectedCompany.status}
                  </Badge>
                }
              />
              <DetailRow
                label="Members"
                value={String(selectedCompany.memberCount)}
              />
              <DetailRow label="Created" value={selectedCompany.createdAt} />
              <div className="border-t border-border pt-4 flex flex-col gap-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {selectedCompany.address}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={14} className="shrink-0" />
                  {selectedCompany.phoneNumber}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} className="shrink-0" />
                  {selectedCompany.email}
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-1">
                  Description
                </p>
                <p className="text-sm">{selectedCompany.description}</p>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Sheet: Edit Company */}
      <Sheet open={sheetMode === "edit"} onOpenChange={closeSheet}>
        <SheetContent className="w-105 overflow-y-auto p-6">
          <SheetHeader>
            <SheetTitle>Update Organization</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4">
            <OrgFormFields form={form} setForm={setForm} />
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleEditSubmit}
                className="flex-1 bg-[#5048e5] hover:bg-[#4038d4] text-white"
              >
                Save Changes
              </Button>
              <Button variant="ghost" onClick={closeSheet}>
                Cancel
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function OrgFormFields({
  form,
  setForm,
}: {
  form: typeof EMPTY_FORM;
  setForm: React.Dispatch<React.SetStateAction<typeof EMPTY_FORM>>;
}) {
  const set =
    (key: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <>
      <FormField label="Name">
        <Input
          value={form.name}
          onChange={set("name")}
          placeholder="Organization Name"
          className="focus-visible:ring-[#5048e5]/50"
        />
      </FormField>
      <FormField label="Industry">
        <Input
          value={form.industry}
          onChange={set("industry")}
          placeholder="Industry"
          className="focus-visible:ring-[#5048e5]/50"
        />
      </FormField>
      <FormField label="Address">
        <Input
          value={form.address}
          onChange={set("address")}
          placeholder="Address"
          className="focus-visible:ring-[#5048e5]/50"
        />
      </FormField>
      <FormField label="Phone Number">
        <Input
          value={form.phoneNumber}
          onChange={set("phoneNumber")}
          placeholder="Phone Number"
          className="focus-visible:ring-[#5048e5]/50"
        />
      </FormField>
      <FormField label="Email">
        <Input
          value={form.email}
          onChange={set("email")}
          type="email"
          placeholder="contact@company.com"
          className="focus-visible:ring-[#5048e5]/50"
        />
      </FormField>
      <FormField label="Description">
        <Textarea
          value={form.description}
          onChange={set("description")}
          placeholder="Brief description of the organization..."
          className="resize-none focus-visible:ring-[#5048e5]/50"
          rows={3}
        />
      </FormField>
    </>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
