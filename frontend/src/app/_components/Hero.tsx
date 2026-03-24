"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #1A3560, #F59E0B, #1A3560)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(26,53,96,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
            style={{
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.25)",
              color: "#B45309",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}>
            🇲🇳 &nbsp;Монгол жижиг бизнесүүдэд зориулагдсан
          </div>

          {/* Headline */}
          <h1
            className="text-5xl lg:text-[5.5rem] font-black leading-[0.95] mb-6 tracking-tight"
            style={{ color: "#0F172A", fontFamily: "Syne, sans-serif" }}>
            Санхүүгийн
            <br />
            тайлангаа
            <br />
            <span style={{ color: "#1A3560" }}>AI-д даатга</span>
          </h1>

          <p
            className="text-lg mb-10 max-w-md leading-relaxed"
            style={{
              color: "#64748B",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}>
            Банкны хуулгаа оруулж, НӨАТ · ААН · НД тайлангаа автоматаар үүсгэ.
            Facebook-т автоматаар нийтэл. Монгол хэлээр санхүүгийн зөвлөгөө ав.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-10">
            {[
              { n: "500+", l: "Бизнес" },
              { n: "10,000+", l: "Тайлан" },
              { n: "99.9%", l: "Нарийвчлал" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="text-3xl font-black"
                  style={{ color: "#F59E0B", fontFamily: "Syne, sans-serif" }}>
                  {n}
                </div>
                <div
                  className="text-sm mt-0.5"
                  style={{
                    color: "#64748B",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard mockup */}
        <div className="relative hidden md:block">
          {/* Main card */}
          <div
            className="rounded-2xl p-6 bg-white"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
            }}>
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span
                className="ml-3 text-xs font-medium"
                style={{
                  color: "#94A3B8",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}>
                FlowAI · Банкны хуулга шинжилгээ
              </span>
            </div>

            {/* Upload zone */}
            <div
              className="rounded-xl p-4 mb-5 flex items-center gap-3"
              style={{ background: "#F8FAFC", border: "1.5px dashed #CBD5E1" }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(26,53,96,0.08)" }}>
                <Upload className="w-4 h-4" style={{ color: "#1A3560" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-semibold truncate"
                  style={{
                    color: "#0F172A",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}>
                  Хаан_Банк_2024_12.xlsx
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>
                  AI шинжилгэж байна…
                </div>
              </div>
              <div
                className="text-sm font-bold"
                style={{ color: "#1A3560", fontFamily: "Syne, sans-serif" }}>
                87%
              </div>
            </div>

            {/* Analysis bars */}
            {[
              {
                label: "Нийт орлого",
                amount: "₮24,500,000",
                pct: "75%",
                color: "#1A3560",
              },
              {
                label: "Нийт зарлага",
                amount: "₮18,200,000",
                pct: "56%",
                color: "#F59E0B",
              },
              {
                label: "НӨАТ суурь",
                amount: "₮6,300,000",
                pct: "32%",
                color: "#10B981",
              },
            ].map(({ label, amount, pct, color }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span
                    style={{
                      color: "#64748B",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}>
                    {label}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      color: "#0F172A",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}>
                    {amount}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full"
                    style={{ background: color, width: pct }}
                  />
                </div>
              </div>
            ))}

            {/* Tax badges */}
            <div
              className="flex gap-2 mt-5 pt-5"
              style={{ borderTop: "1px solid #F1F5F9" }}>
              {["НӨАТ ✓", "ААН ✓", "НД ✓"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    background: "#ECFDF5",
                    color: "#059669",
                    border: "1px solid #A7F3D0",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}>
                  {badge}
                </span>
              ))}
              <span
                className="ml-auto text-xs"
                style={{
                  color: "#94A3B8",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}>
                2024 оны 12-р сар
              </span>
            </div>
          </div>

          {/* Floating AI advice card */}
          <div
            className="absolute -bottom-5 -left-8 rounded-xl px-4 py-3 flex items-center gap-3 bg-white"
            style={{
              border: "1px solid #FDE68A",
              boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
              minWidth: "220px",
            }}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#FFFBEB" }}>
              <TrendingUp className="w-4 h-4" style={{ color: "#F59E0B" }} />
            </div>
            <div>
              <div
                className="text-xs font-semibold"
                style={{
                  color: "#0F172A",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}>
                AI зөвлөгөө
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                ₮1.2M татварын хэмнэлт боломжтой
              </div>
            </div>
          </div>

          {/* Floating success card */}
          <div
            className="absolute -top-5 -right-6 rounded-xl px-4 py-3 flex items-center gap-3 bg-white"
            style={{
              border: "1px solid #A7F3D0",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}>
            <CheckCircle className="w-4 h-4" style={{ color: "#10B981" }} />
            <div
              className="text-xs font-semibold"
              style={{
                color: "#0F172A",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}>
              Facebook нийтлэл илгээгдлээ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  const { user } = useUser();

  const router = useRouter();
  useEffect(() => {
    if (user?.id) {
      router.push("/onboarding");
    }
  }, []);
  return <>{!user?.id && <Intro />}</>;
};

export default Hero;
