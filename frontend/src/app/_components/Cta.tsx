import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-20 text-center"
          style={{ background: "#6382f1" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(245,158,11,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 50%)",
            }}
          />

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-b-full"
            style={{ background: "#00268d" }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: "rgba(26, 18, 149, 0.15)",
                border: "1px solid rgba(13, 0, 250, 0.3)",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              ✦ &nbsp;14 хоногийн үнэгүй туршилт — карт шаардлагагүй
            </div>

            <h2
              className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}
            >
              Өсөлтөө
              <br />
              <span style={{ color: "#072360" }}>автоматжуулахад</span>
              <br />
              бэлэн үү?
            </h2>

            <p
              className="mx-auto max-w-xl mb-12 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              FlowAI ашиглан санхүүгийн тайлангаа цаг хэмнэн гаргадаг мянга
              мянган Монгол бизнес эрхлэгчтэй нэгдэж, татварын тооцоогоо
              автоматжуул.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sign-up">
                <button
                  className="group relative flex items-center gap-2.5 px-10 py-4 rounded-2xl text-base font-bold overflow-hidden transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "#ffffff",
                    color: "#3c3fe8",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span className="relative z-10">Эхлэх</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 bg-indigo-600"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
