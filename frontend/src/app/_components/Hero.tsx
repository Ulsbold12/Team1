"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, TrendingUp, CheckCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Intro = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #050B15 0%, #081426 60%, #050B15 100%)",
      }}
    >
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          transform: "translateY(-30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
          transform: "translateY(30%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[18px] font-meinbold tracking-wide"
            style={{
              background: "rgba(0, 212, 255, 0.08)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              color: "#00D4FF",
              fontFamily: "Syne, sans-serif",
            }}
          >
            🇲🇳 &nbsp;Монгол жижиг бизнесүүдэд зориулагдсан
          </div>

          <h1
            className="text-5xl lg:text-[5.5rem] font-black leading-[0.9] mb-6 tracking-tight"
            style={{ color: "#E8F4FF", fontFamily: "Syne, sans-serif" }}
          >
            Санхүүгийн
            <br />
            тайлангаа
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00D4FF, #7DD3FC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Syne, sans-serif",
              }}
            >
              AI-д даатга
            </span>
          </h1>

          <p
            className="text-lg mb-10 max-w-md leading-relaxed"
            style={{
              color: "#6B8BAE",
              fontFamily: "Syne, sans-serif",
            }}
          >
            Банкны хуулгаа оруулж, НӨАТ · ААН · НД тайлангаа автоматаар үүсгэ.
            Facebook-т автоматаар нийтэл. Монгол хэлээр санхүүгийн зөвлөгөө ав.
          </p>

          <div
            className="flex gap-10 mb-10 font-medium"
            style={{ color: "#6B8BAE", fontFamily: "Syne, sans-serif" }}
          >
            {[
              { n: "500+", l: "Бизнес" },
              { n: "10,000+", l: "Тайлан" },
              { n: "99.9%", l: "Нарийвчлал" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="text-3xl font-black"
                  style={{
                    color: "#00D4FF",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {n}
                </div>
                <div
                  className="text-sm mt-0.5"
                  style={{
                    color: "#6B8BAE",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  size="lg"
                  className="rounded-xl font-semibold text-base px-8"
                  style={{
                    background: "linear-gradient(135deg, #00D4FF, #0090CC)",
                    color: "#050B15",
                    boxShadow: "0 0 32px rgba(0, 212, 255, 0.3)",
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  Үнэгүй эхлэх
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "#0D1829",
              border: "1px solid rgba(0, 212, 255, 0.12)",
              boxShadow:
                "0 0 80px rgba(0, 212, 255, 0.06), 0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#FF5F57" }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#FEBC2E" }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#28C840" }}
              />
              <span
                className="ml-3 text-xs"
                style={{
                  color: "#6B8BAE",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                FlowAI · Банкны хуулга шинжилгээ
              </span>
            </div>

            <div
              className="rounded-xl p-4 mb-5 flex items-center gap-3"
              style={{
                background: "rgba(0, 212, 255, 0.04)",
                border: "1px dashed rgba(0, 212, 255, 0.25)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0, 212, 255, 0.12)" }}
              >
                <Upload className="w-4 h-4" style={{ color: "#00D4FF" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-semibold truncate"
                  style={{
                    color: "#E8F4FF",
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  Хаан_Банк_2024_12.xlsx
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#6B8BAE" }}>
                  AI шинжилгэж байна…
                </div>
              </div>
              <div
                className="text-sm font-bold"
                style={{
                  color: "#00D4FF",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                87%
              </div>
            </div>

            {[
              {
                label: "Нийт орлого",
                amount: "₮24,500,000",
                pct: "75%",
                color: "#00D4FF",
              },
              {
                label: "Нийт зарлага",
                amount: "₮18,200,000",
                pct: "56%",
                color: "#F5A623",
              },
              {
                label: "НӨАТ суурь",
                amount: "₮6,300,000",
                pct: "32%",
                color: "#28C840",
              },
            ].map(({ label, amount, pct, color }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span
                    style={{
                      color: "#6B8BAE",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      color: "#E8F4FF",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {amount}
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      background: color,
                      width: pct,
                      boxShadow: `0 0 8px ${color}60`,
                    }}
                  />
                </div>
              </div>
            ))}

            <div
              className="flex gap-2 mt-5 pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
            >
              {["НӨАТ ✓", "ААН ✓", "НД ✓"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    background: "rgba(40, 200, 64, 0.1)",
                    color: "#28C840",
                    border: "1px solid rgba(40, 200, 64, 0.2)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {badge}
                </span>
              ))}
              <span
                className="ml-auto text-xs font-semibold"
                style={{
                  color: "#6B8BAE",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                2024 оны 12-р сар
              </span>
            </div>
          </div>

          <div
            className="absolute -bottom-5 -left-8 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            style={{
              background: "#0D1829",
              border: "1px solid rgba(245, 166, 35, 0.2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
              minWidth: "220px",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245, 166, 35, 0.1)" }}
            >
              <TrendingUp className="w-4 h-4" style={{ color: "#F5A623" }} />
            </div>
            <div>
              <div
                className="text-xs font-semibold"
                style={{
                  color: "#E8F4FF",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                AI зөвлөгөө
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#6B8BAE" }}>
                ₮1.2M татварын хэмнэлт боломжтой
              </div>
            </div>
          </div>

          <div
            className="absolute -top-5 -right-6 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            style={{
              background: "#0D1829",
              border: "1px solid rgba(40, 200, 64, 0.2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
          >
            <CheckCircle className="w-4 h-4" style={{ color: "#28C840" }} />
            <div
              className="text-xs font-semibold"
              style={{
                color: "#E8F4FF",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
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
