const banks = ["Хаан банк", "Голомт банк", "Хас банк", "ТДБ банк", "Капитал банк", "Ариг банк"];

export default function TrustedBy() {
  return (
    <section className="bg-white" style={{ borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
      <div className="container mx-auto px-6 py-14">
        <p
          className="text-center text-xs font-semibold tracking-[0.15em] uppercase mb-8"
          style={{ color: "#94A3B8", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Монголын тэргүүлэх банкуудтай холбогддог
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {banks.map((bank) => (
            <div
              key={bank}
              className="px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#475569",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              {bank}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
          style={{ borderTop: "1px solid #E2E8F0" }}
        >
          {[
            { n: "500+", l: "Идэвхтэй бизнес" },
            { n: "10,000+", l: "Тайлан үүсгэгдсэн" },
            { n: "₮2.4 тэр.", l: "Боловсруулсан гүйлгээ" },
            { n: "99.9%", l: "Тайлангийн нарийвчлал" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{ color: "#F59E0B", fontFamily: "Syne, sans-serif" }}
              >
                {n}
              </div>
              <div
                className="text-sm"
                style={{ color: "#64748B", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
