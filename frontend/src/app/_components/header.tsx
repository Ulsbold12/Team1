"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Онцлог", href: "#features" },
  { label: "Үнэ тариф", href: "#pricing" },
  { label: "Холбоо барих", href: "#contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={{
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
            style={{ background: "#1A3560", fontFamily: "Syne, sans-serif" }}>
            ✦
          </div>
          <span
            className="font-bold text-lg"
            style={{
              color: "#1A3560",
              fontFamily: "Syne, sans-serif",
              letterSpacing: "-0.02em",
            }}>
            FlowAI
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="text-sm font-medium transition-colors hover:text-[#1A3560] cursor-pointer bg-transparent border-none p-0"
              style={{
                color: "#64748B",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}>
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                className="rounded-xl text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #0090CC)",
                  color: "#050B15",
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.25)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}>
                Эхлэх
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="rounded-xl text-sm"
                style={{
                  borderColor: "rgba(0, 212, 255, 0.2)",
                  color: "#E8F4FF",
                  background: "transparent",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}>
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
        <button
          className="md:hidden p-2 rounded-lg border transition-colors"
          style={{
            color: "#1A3560",
            borderColor: "#E2E8F0",
            background: mobileOpen ? "#F8FAFC" : "transparent",
          }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Цэс хаах" : "Цэс нээх"}>
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white px-6 pb-6 pt-2 flex flex-col gap-1"
          style={{ borderTop: "1px solid #E2E8F0" }}>
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="text-left w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors hover:bg-slate-50"
              style={{
                color: "#64748B",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}>
              {label}
            </button>
          ))}
          <div
            className="mt-3 pt-4 flex flex-col gap-2"
            style={{ borderTop: "1px solid #E2E8F0" }}>
            <SignedOut>
              <Link href="/sign-in" onClick={() => setMobileOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full rounded-xl text-sm font-medium"
                  style={{
                    color: "#1A3560",
                    borderColor: "#E2E8F0",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}>
                  Нэвтрэх
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: "#1A3560",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}>
                  Туршиж үзэх
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: "#1A3560",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}>
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
