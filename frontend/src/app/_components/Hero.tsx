"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Upload, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #3c3fe8)" }}
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
              background: "rgba(57, 0, 114, 0.08)",
              border: "1px solid rgba(203, 135, 255, 0.25)",
              color: "#6366f1",
              fontFamily: "Inter, sans-serif",
            }}
          >
            🇲🇳 &nbsp;Монгол жижиг бизнесүүдэд зориулагдсан
          </div>

          <h1
            className="text-5xl lg:text-[5.5rem] font-black leading-[0.95] mb-6 tracking-tight"
            style={{ color: "#3c3fe8", fontFamily: "Inter, sans-serif" }}
          >
            Санхүүгийн
            <br />
            тайлангаа
            <br />
            <span style={{ color: "#3c3fe8" }}>AI-д даатга</span>
          </h1>

          <p
            className="text-lg mb-10 max-w-md leading-relaxed text-slate-500 dark:text-slate-400"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Банкны хуулгаа оруулж, НӨАТ · ААН · НД тайлангаа автоматаар үүсгэ.
            Facebook-т автоматаар нийтэл. Монгол хэлээр санхүүгийн зөвлөгөө ав.
          </p>

          <div className="flex gap-4 mb-10">
            <Link href="/sign-up">
              <button
                className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #3c3fe8)",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.45)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span className="relative z-10">Үнэгүй эхлэх</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed, #2563eb)" }}
                />
              </button>
            </Link>
            <Link href="#features">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-gray-800"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Дэлгэрэнгүй
              </button>
            </Link>
          </div>

          <div className="flex gap-10 mb-10">
            {[
              { n: "500+", l: "Бизнес" },
              { n: "10,000+", l: "Тайлан" },
              { n: "99.9%", l: "Нарийвчлал" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="text-3xl font-black"
                  style={{ color: "#3c3fe8", fontFamily: "Inter, sans-serif" }}
                >
                  {n}
                </div>
                <div
                  className="text-sm mt-0.5 text-slate-500 dark:text-slate-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div
            className="rounded-2xl p-6 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span
                className="ml-3 text-xs font-medium text-slate-400 dark:text-slate-500"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                FlowAI · Банкны хуулга шинжилгээ
              </span>
            </div>

            <div className="rounded-xl p-4 mb-5 flex items-center gap-3 bg-slate-50 dark:bg-gray-700 border border-dashed border-slate-300 dark:border-gray-600">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-indigo-50 dark:bg-indigo-900/30">
                <Upload className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-semibold truncate text-slate-900 dark:text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Хаан_Банк_2024_12.xlsx
                </div>
                <div className="text-xs mt-0.5 text-slate-400 dark:text-slate-500">
                  AI шинжилгэж байна…
                </div>
              </div>
              <div
                className="text-sm font-bold text-indigo-700 dark:text-indigo-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                87%
              </div>
            </div>

            {[
              { label: "Нийт орлого", amount: "₮24,500,000", pct: "75%", color: "#6366f1" },
              { label: "Нийт зарлага", amount: "₮18,200,000", pct: "56%", color: "#8b5cf6" },
              { label: "НӨАТ суурь", amount: "₮6,300,000", pct: "32%", color: "#a78bfa" },
            ].map(({ label, amount, pct, color }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span
                    className="text-slate-500 dark:text-slate-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-semibold text-slate-900 dark:text-white"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {amount}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-gray-700">
                  <div className="h-2 rounded-full" style={{ background: color, width: pct }} />
                </div>
              </div>
            ))}

            <div className="flex gap-2 mt-5 pt-5 border-t border-slate-100 dark:border-gray-700">
              {["НӨАТ ✓", "ААН ✓", "НД ✓"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-full font-semibold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {badge}
                </span>
              ))}
              <span
                className="ml-auto text-xs text-slate-400 dark:text-slate-500"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                2024 оны 12-р сар
              </span>
            </div>
          </div>

          <div
            className="absolute -bottom-5 -left-8 rounded-xl px-4 py-3 flex items-center gap-3 bg-white dark:bg-gray-800 border border-indigo-400 dark:border-indigo-500"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)", minWidth: "220px" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#e3cdfb" }}
            >
              <TrendingUp className="w-4 h-4" style={{ color: "#6b26d9" }} />
            </div>
            <div>
              <div
                className="text-xs font-semibold text-slate-900 dark:text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                AI зөвлөгөө
              </div>
              <div className="text-xs mt-0.5 text-slate-500 dark:text-slate-400">
                ₮1.2M татварын хэмнэлт боломжтой
              </div>
            </div>
          </div>

          <div
            className="absolute -top-5 -right-6 rounded-xl px-4 py-3 flex items-center gap-3 bg-white dark:bg-gray-800 border border-blue-500 dark:border-blue-400"
            style={{ boxShadow: "0 8px 24px rgba(1, 1, 1, 0.08)" }}
          >
            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <div
              className="text-xs font-semibold text-slate-900 dark:text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
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
