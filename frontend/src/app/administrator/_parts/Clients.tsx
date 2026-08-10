"use client";
import { useAdmin } from "../provider/adminProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  User,
  Mail,
  Calendar,
  Building2,
  MoreVertical,
  MapPin,
  Search,
  Pencil,
} from "lucide-react";
import { ClientType } from "../Types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

// [MOCK_DATA] - replace with real data from context/API

const roleColors: Record<string, string> = {
  Owner:
    "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  Admin: "bg-[#5048e5]/10 text-[#5048e5] border-[#5048e5]/20",
  Manager: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  Member: "bg-secondary text-secondary-foreground border-border",
};

export function Clients() {
  const [sheetMode, setSheetMode] = useState<"read" | "edit" | null>(null);
  const [selectedUser, setSelectedUser] = useState<ClientType | null>(null);
  const [editForm, setEditForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    role: "" as ClientType["role"] | "",
  });
  const [saving, setSaving] = useState(false);
  const {
    allusers,
    fetchCompanyById,
    singleorg,
    deleteUserById,
    updateUserById,
    loading,
    fetchError,
  } = useAdmin();
  const [search, setSearch] = useState("");
  const client = allusers.filter((u) =>
    `${u.firstname} ${u.lastname} ${u.email}`.toLowerCase().includes(search.toLowerCase())
  );

  const openRead = (user: ClientType) => {
    setSelectedUser(user);
    setSheetMode("read");
  };

  const openEdit = (user: ClientType) => {
    setSelectedUser(user);
    setEditForm({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phoneNumber: user.phoneNumber ?? "",
      role: user.role,
    });
    setSheetMode("edit");
  };

  const closeSheet = () => {
    setSheetMode(null);
    setSelectedUser(null);
  };

  const handleEditSubmit = async () => {
    if (!selectedUser) return;
    setSaving(true);
    const ok = await updateUserById(selectedUser.id, {
      ...editForm,
      role: editForm.role || undefined,
    });
    setSaving(false);
    if (ok) closeSheet();
  };

  const isRecentlyActive = (date: Date): boolean => {
    const now = new Date();
    const lastSeen = new Date(date);

    const diffInMs = now.getTime() - lastSeen.getTime();
    const diffInMinutes = diffInMs / 1000 / 60;

    return diffInMinutes <= 60;
  };
  const formatLastSeen = (date: Date) => {
    return new Date(date).toLocaleString("en-GB", {
      timeZone: "Asia/Ulaanbaatar",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-muted/30 text-foreground">
      <div>
        <h2 className="text-3xl font-black text-foreground tracking-tight">
          Users
        </h2>
        <p className="text-muted-foreground mt-1 text-black">
          Manage all registered users
        </p>
      </div>
      {fetchError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Хэрэглэгчдийн жагсаалтыг серверээс татаж чадсангүй. Дахин ачаална уу.
        </div>
      )}
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Хэрэглэгч хайх..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className={`w-full h-full overflow-scroll`}>
        <div className="flex flex-col gap-3">
          {loading ? (
            <p className="text-sm text-muted-foreground py-4">Ачааллаж байна...</p>
          ) : client.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">Хэрэглэгч олдсонгүй</p>
          ) : (
            <>
              {" "}
              {client.map((user) => (
                <div
                  key={user.id}
                  className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm hover:border-[#5048e5]/30 transition-colors">
                  <div className="w-9 h-9 bg-[#5048e5]/10 rounded-full flex items-center justify-center shrink-0">
                    <User size={15} className="text-[#5048e5]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-foreground font-semibold text-sm">
                        {user.firstname} {user.lastname}
                      </p>
                      <Badge
                        variant="outline"
                        className={`scale-90 ${
                          isRecentlyActive(user.lastSeenAt)
                            ? "bg-green-500/10 text-green-600 border-green-500/20 text-xs dark:text-green-400"
                            : "bg-red-500/10 text-red-600 border-red-500/20 text-xs dark:text-red-400"
                        }`}>
                        <p className="text-xs text-gray-400">Last active: </p>
                        {isRecentlyActive(user.lastSeenAt) ? (
                          <span className="text-green-500 text-xs">
                            ● Active
                          </span>
                        ) : (
                          <>{formatLastSeen(user.lastSeenAt)}</>
                        )}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {user.email} · Organization ID: {user.orgId}
                    </p>
                  </div>

                  <Badge
                    variant="outline"
                    className={`${roleColors[user.role] ?? ""} text-xs shrink-0`}>
                    {user.role}
                  </Badge>

                  <div className="text-muted-foreground text-xs shrink-0 w-24 text-right">
                    Joined
                    <p>
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openRead(user)} className="gap-2 cursor-pointer">
                        <User size={14} />
                        Дэлгэрэнгүй
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openEdit(user)} className="gap-2 cursor-pointer">
                        <Pencil size={14} />
                        Засах
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Sheet: Read User */}
      <Sheet open={sheetMode === "read"} onOpenChange={closeSheet}>
        <SheetContent className="w-105 p-6">
          <SheetHeader>
            <SheetTitle>
              {selectedUser?.firstname} {selectedUser?.lastname}
            </SheetTitle>
          </SheetHeader>
          {selectedUser && (
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 bg-[#5048e5]/10 rounded-full flex items-center justify-center">
                  {selectedUser.profilePic ? (
                    <></>
                  ) : (
                    <User size={28} className="text-[#5048e5]" />
                  )}
                </div>
              </div>
              <DetailRow
                label="Status"
                value={
                  <Badge
                    variant="outline"
                    className={
                      isRecentlyActive(selectedUser.lastSeenAt)
                        ? "bg-green-500/10 text-green-600 border-green-500/20 text-xs dark:text-green-400"
                        : "bg-red-500/10 text-red-600 border-red-500/20 text-xs dark:text-red-400"
                    }>
                    {isRecentlyActive(selectedUser.lastSeenAt) ? (
                      <>Active</>
                    ) : (
                      <>Offline</>
                    )}
                  </Badge>
                }
              />
              <DetailRow label="Role" value={selectedUser.role} />
              <DetailRow label="CompanyID" value={selectedUser.orgId} />
              <DetailRow
                label="Joined"
                value={new Date(selectedUser.createdAt).toLocaleDateString()}
              />
              <DetailRow
                label="Last Login"
                value={new Date(selectedUser.lastSeenAt).toLocaleDateString()}
              />
              <div className="border-t border-border pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} className="shrink-0" />
                  {selectedUser.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 size={14} className="shrink-0" />
                  {selectedUser.ofOrg?.name ? (
                    <p>{selectedUser.ofOrg?.name}</p>
                  ) : (
                    <p>This user isn't registered with Organization.</p>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="shrink-0" />
                  {selectedUser.ofOrg?.address ? (
                    <p>{selectedUser.ofOrg?.address}</p>
                  ) : (
                    <p>No address</p>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} className="shrink-0" />
                  Joined {new Date(selectedUser.createdAt).toLocaleDateString()}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete User</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>Delete User</DialogHeader>
                    <p className="text-sm text-muted-foreground">
                      {selectedUser.firstname} {selectedUser.lastname}-г устгахдаа итгэлтэй байна уу?
                    </p>
                    <div className="flex gap-2 justify-end mt-2">
                      <Button
                        variant="destructive"
                        onClick={async () => {
                          const ok = await deleteUserById(selectedUser.id);
                          if (ok) closeSheet();
                        }}>
                        Тийм, устга
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Sheet: Edit User */}
      <Sheet open={sheetMode === "edit"} onOpenChange={closeSheet}>
        <SheetContent className="w-105 p-6">
          <SheetHeader>
            <SheetTitle>Хэрэглэгч засах</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4">
            <FormField label="Нэр">
              <Input
                value={editForm.firstname}
                onChange={(e) => setEditForm((p) => ({ ...p, firstname: e.target.value }))}
              />
            </FormField>
            <FormField label="Овог">
              <Input
                value={editForm.lastname}
                onChange={(e) => setEditForm((p) => ({ ...p, lastname: e.target.value }))}
              />
            </FormField>
            <FormField label="Имэйл">
              <Input
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm((p) => ({ ...p, email: e.target.value }))}
              />
            </FormField>
            <FormField label="Утас">
              <Input
                value={editForm.phoneNumber}
                onChange={(e) => setEditForm((p) => ({ ...p, phoneNumber: e.target.value }))}
              />
            </FormField>
            <FormField label="Эрх">
              <select
                className="border border-border rounded-md h-9 px-3 text-sm bg-background"
                value={editForm.role}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, role: e.target.value as ClientType["role"] }))
                }>
                <option value="EXECUTIVE">EXECUTIVE</option>
                <option value="MANAGEMENT">MANAGEMENT</option>
                <option value="MEMBER">MEMBER</option>
              </select>
            </FormField>
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleEditSubmit}
                disabled={saving}
                className="flex-1 bg-[#5048e5] hover:bg-[#4038d4] text-white">
                {saving ? "Хадгалж байна..." : "Хадгалах"}
              </Button>
              <Button variant="ghost" onClick={closeSheet}>
                Цуцлах
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
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
