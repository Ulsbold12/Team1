"use client";

import { useState } from "react";
import { Bell, CheckCircle2, Trash2, X } from "lucide-react";
import { useNotificationStore } from "@/store/notificationStore";
import { Button } from "@/components/ui/button";

const FILTERS = [
  { key: "all", label: "Бүгд" },
  { key: "marketing", label: "Маркетинг" },
  { key: "finance", label: "Санхүү" },
  { key: "system", label: "Систем" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export default function NotificationsPage() {
  const {
    notifications,
    markAllRead,
    markOneRead,
    clearAll,
    deleteNotification,
  } = useNotificationStore();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.category === filter);

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-muted/30 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
            <Bell className="w-6 h-6 text-[#5048e5]" />
            Мэдэгдлийн түүх
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Нийт {notifications.length} мэдэгдэл,{" "}
            {unread > 0 ? (
              <span className="text-[#5048e5] font-medium">
                {unread} уншаагүй
              </span>
            ) : (
              "бүгд уншсан"
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {unread > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={markAllRead}
              className="text-xs gap-1"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Бүгдийг уншсан
            </Button>
          )}
          {notifications.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAll}
              className="text-xs gap-1 text-red-500 hover:text-red-500 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Бүгдийг устгах
            </Button>
          )}
        </div>
      </div>

      {/* Filter табууд */}
      <div className="flex gap-2 mb-6">
        {FILTERS.map((f) => {
          const count =
            f.key === "all"
              ? unread
              : notifications.filter((n) => !n.read && n.category === f.key)
                  .length;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-[#5048e5] text-white"
                  : "bg-background border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {f.label}
              {count > 0 && (
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    filter === f.key
                      ? "bg-white/20 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Жагсаалт */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
            <Bell className="w-6 h-6 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium text-foreground">
            Мэдэгдэл байхгүй байна
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Finance болон Marketing хуудаснаас үйлдэл хийхэд энд харагдана
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                onClick={() => markOneRead(n.id)}
                className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-colors group ${
                  !n.read
                    ? "bg-background border-[#5048e5]/20 hover:border-[#5048e5]/40"
                    : "bg-background border-border hover:bg-muted/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${n.iconBg}`}
                >
                  <Icon className={`w-5 h-5 ${n.iconColor}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className={`text-sm font-medium ${
                        !n.read ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {n.title}
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground">
                        {n.time}
                      </span>
                      {!n.read && (
                        <div className="w-2 h-2 rounded-full bg-[#5048e5]" />
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(n.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-all shrink-0"
                        title="Устгах"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-0.5">
                    {n.desc}
                  </p>

                  <span
                    className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-2 ${
                      n.category === "marketing"
                        ? "bg-violet-500/10 text-violet-500"
                        : n.category === "finance"
                          ? "bg-[#5048e5]/10 text-[#5048e5]"
                          : "bg-emerald-500/10 text-emerald-500"
                    }`}
                  >
                    {n.category === "marketing"
                      ? "Маркетинг"
                      : n.category === "finance"
                        ? "Санхүү"
                        : "Систем"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
