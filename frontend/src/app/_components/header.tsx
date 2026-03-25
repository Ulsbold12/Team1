"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Онцлог", href: "#features" },
  { label: "Үнэ тариф", href: "#pricing" },
  { label: "Холбоо барих", href: "#contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0.5">
          <Image
            src="/logoblack.svg"
            alt="FlowAI"
            width={40}
            height={40}
            className="rounded-lg dark:invert"
          />
          <span
            className="font-bold text-lg text-black dark:text-white"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
          >
            FlowAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="text-sm font-medium transition-colors text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer bg-transparent border-none p-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400"
            aria-label={theme === "dark" ? "Цайвар горим" : "Харанхуй горим"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="w-5 h-5 dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block" />
          </Button>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                className="rounded-xl text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                  color: "#ffffff",
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.25)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Эхлэх
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="rounded-xl text-sm border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                style={{ background: "transparent", fontFamily: "Inter, sans-serif" }}
              >
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400"
            aria-label={theme === "dark" ? "Цайвар горим" : "Харанхуй горим"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="w-5 h-5 dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block" />
          </Button>
          <button
            className="p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 transition-colors"
            style={{ background: mobileOpen ? "#F8FAFC" : "transparent" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Цэс хаах" : "Цэс нээх"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-slate-200 dark:border-gray-700">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="text-left w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 border-none cursor-pointer"
              style={{ background: "transparent", fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </button>
          ))}
          <div className="mt-3 pt-4 flex flex-col gap-2 border-t border-slate-200 dark:border-gray-700">
            <SignedOut>
              <Link href="/sign-in" onClick={() => setMobileOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border-slate-200 dark:border-gray-700"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Нэвтрэх
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full rounded-xl text-sm font-semibold text-white"
                  style={{ background: "#1A3560", fontFamily: "Inter, sans-serif" }}
                >
                  Туршиж үзэх
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};
