"use client";
import React, { useState } from "react";
import { useNotificationStore } from "@/store/notificationStore";
import { CalendarDays } from "lucide-react";
import {
  CalendarEvent,
  EventsMap,
  DAY_NAMES,
  MONTH_NAMES,
  PLATFORM_COLORS,
  Platform,
} from "../types";

interface CalendarProps {
  events: EventsMap;
  selectedDate: string | null;
  onSelectDate: (key: string) => void;
  onDeleteEvent: (dateKey: string, eventId: number) => void;
}

type DayCell = { day: number; cur: boolean };

function getKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export default function Calendar({
  events,
  selectedDate,
  onSelectDate,
  onDeleteEvent,
}: CalendarProps) {
  const [cur, setCur] = useState(new Date(2026, 2, 1));
  const [tooltip, setTooltip] = useState<{
    ev: CalendarEvent;
    x: number;
    y: number;
  } | null>(null);

  const { addNotification } = useNotificationStore();

  const y = cur.getFullYear();
  const m = cur.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const prevDays = new Date(y, m, 0).getDate();

  const days: DayCell[] = [];
  for (let i = firstDay - 1; i >= 0; i--)
    days.push({ day: prevDays - i, cur: false });
  for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, cur: true });
  while (days.length < 42)
    days.push({ day: days.length - daysInMonth - firstDay + 2, cur: false });

  const today = new Date(2026, 2, 11);
  const isToday = (d: number, c: boolean) =>
    c &&
    d === today.getDate() &&
    m === today.getMonth() &&
    y === today.getFullYear();

  const handleSelectDate = (key: string) => {
    onSelectDate(key);
    const dayEvents = events[key] || [];
    const [yyyy, mm, dd] = key.split("-");

    addNotification({
      title: `${yyyy}/${mm}/${dd} өдөр сонгогдлоо`,
      desc:
        dayEvents.length > 0
          ? `${dayEvents.length} контент төлөвлөгдсөн байна`
          : "Энэ өдөр контент байхгүй байна",
      category: "marketing",
      icon: CalendarDays,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-500",
    });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="grid grid-cols-7 flex-1" style={{ gridAutoRows: "1fr" }}>
        {days.map(({ day, cur: isCur }: DayCell, idx: number) => {
          const key = isCur ? getKey(y, m, day) : "";
          const dayEvs: CalendarEvent[] = isCur ? events[key] || [] : [];
          const tod = isToday(day, isCur);
          const sel = key === selectedDate;

          return (
            <div key={idx} onClick={() => isCur && handleSelectDate(key)}></div>
          );
        })}
      </div>
    </div>
  );
}
