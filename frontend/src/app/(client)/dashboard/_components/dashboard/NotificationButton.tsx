"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useNotificationStore } from "@/store/notificationStore";

const FILTERS = [
  { key: "all", label: "Бүгд" },
  { key: "marketing", label: "Маркетинг" },
  { key: "finance", label: "Санхүү" },
  { key: "system", label: "Систем" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export function NotificationButton() {
  const { notifications, markOneRead, markAllRead, deleteNotification } =
    useNotificationStore();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<FilterKey>("all");
  const ref = useRef<HTMLDivElement>(null);

  const unread = notifications.filter((n) => !n.read).length;
  const filtered =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.category === filter);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Bell товч */}
      <Button
        variant="ghost"
        size="icon"
        className="relative text-muted-foreground"
        aria-label="Мэдэгдэлүүд"
        onClick={() => setOpen((v) => !v)}
      >
        <Bell className="w-5 h-5" />
        {unread > 0 && (
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
        )}
      </Button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-11 w-80 bg-background border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Мэдэгдэл</span>
              {unread > 0 && (
                <span className="text-xs bg-[#5048e5] text-white px-2 py-0.5 rounded-full font-medium">
                  {unread}
                </span>
              )}
            </div>
            <button
              onClick={markAllRead}
              className="text-xs text-[#5048e5] hover:underline"
            >
              Бүгдийг уншсан
            </button>
          </div>

          {/* Filter табууд */}
          <div className="flex gap-1 px-3 py-2 border-b border-border">
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
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    filter === f.key
                      ? "bg-[#5048e5] text-white"
                      : "text-muted-foreground hover:bg-muted"
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
          <div className="divide-y divide-border max-h-72 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                Мэдэгдэл байхгүй байна
              </p>
            ) : (
              filtered.map((n) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.id}
                    className={`flex gap-3 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors group ${!n.read ? "bg-muted/30" : ""}`}
                  >
                    <div
                      onClick={() => markOneRead(n.id)}
                      className="flex-1 min-w-0 flex gap-3"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${n.iconBg}`}
                      >
                        <Icon className={`w-4 h-4 ${n.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${
                            n.read ? "text-muted-foreground" : "text-foreground"
                          }`}
                        >
                          {n.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {n.desc}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {n.time}
                        </p>
                      </div>
                      {!n.read && (
                        <div className="w-2 h-2 rounded-full bg-[#5048e5] shrink-0 mt-1.5" />
                      )}
                    </div>
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
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-border text-center">
            <Link
              href="/notifications"
              onClick={() => setOpen(false)}
              className="text-xs text-[#5048e5] font-medium hover:underline"
            >
              Бүх мэдэгдэл харах →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
