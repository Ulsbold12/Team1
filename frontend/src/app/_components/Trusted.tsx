const banks = ["Хаан банк", "Голомт банк", "Хас банк", "ТДБ банк", "Капитал банк", "Ариг банк"];

export default function TrustedBy() {
  return (
    <section className="bg-white dark:bg-gray-900 border-t border-b border-slate-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-14">
        <p
          className="text-center text-xs font-semibold tracking-[0.15em] uppercase mb-8 text-slate-400 dark:text-slate-300"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Монголын тэргүүлэх банкуудтай холбогддог
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {banks.map((bank) => (
            <div
              key={bank}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {bank}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-200 dark:border-gray-700">
          {[
            { n: "500+", l: "Идэвхтэй бизнес" },
            { n: "10,000+", l: "Тайлан үүсгэгдсэн" },
            { n: "₮2.4 тэр.", l: "Боловсруулсан гүйлгээ" },
            { n: "99.9%", l: "Тайлангийн нарийвчлал" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{ color: "#F59E0B", fontFamily: "Inter, sans-serif" }}
              >
                {n}
              </div>
              <div
                className="text-sm text-slate-500 dark:text-slate-400"
                style={{ fontFamily: "Inter, sans-serif" }}
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
