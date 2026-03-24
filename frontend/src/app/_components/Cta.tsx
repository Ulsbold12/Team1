import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-20 text-center"
          style={{ background: "#1A3560" }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(245,158,11,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 50%)",
            }}
          />
          {/* Top gold accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-b-full" style={{ background: "#F59E0B" }} />

          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.3)",
                color: "#FCD34D",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              ✦ &nbsp;14 хоногийн үнэгүй туршилт — карт шаардлагагүй
            </div>

            <h2
              className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white"
              style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.03em" }}
            >
              Өсөлтөө
              <br />
              <span style={{ color: "#F59E0B" }}>автоматжуулахад</span>
              <br />
              бэлэн үү?
            </h2>

            <p
              className="mx-auto max-w-xl mb-12 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              FlowAI ашиглан санхүүгийн тайлангаа цаг хэмнэн гаргадаг мянга мянган
              Монгол бизнес эрхлэгчтэй нэгдэж, татварын тооцоогоо автоматжуул.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sign-up">
                <button
                  className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold transition-all hover:opacity-90"
                  style={{
                    background: "#F59E0B",
                    color: "#1A3560",
                    boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  Үнэгүй эхлэх
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <button
                className="px-10 py-4 rounded-xl text-base font-semibold transition-all hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  background: "transparent",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Борлуулалтын багтай холбогдох
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
