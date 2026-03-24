import { create } from "zustand";
import { ElementType } from "react";

export type Notification = {
  id: number;
  category: "marketing" | "finance" | "system";
  title: string;
  desc: string;
  time: string;
  read: boolean;
  icon: ElementType;
  iconColor: string;
  iconBg: string;
};

type NotificationStore = {
  notifications: Notification[];
  addNotification: (n: Omit<Notification, "id" | "read" | "time">) => void;
  markOneRead: (id: number) => void;
  markAllRead: () => void;
  clearAll: () => void;
  deleteNotification: (id: number) => void;
};

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  addNotification: (n) =>
    set((state) => ({
      notifications: [
        { ...n, id: Date.now(), read: false, time: "Саяхан" },
        ...state.notifications,
      ],
    })),

  markOneRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n,
      ),
    })),

  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
    })),

  clearAll: () => set({ notifications: [] }),

  deleteNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
