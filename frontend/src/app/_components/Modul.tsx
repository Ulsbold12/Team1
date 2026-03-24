import { Upload, FileText, Share2, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Upload,
    iconBg: "rgba(26,53,96,0.08)",
    iconColor: "#1A3560",
    accentColor: "#1A3560",
    title: "Банкны хуулга оруулах",
    subtitle: "AI шинжилгээ",
    desc: "Excel болон PDF хуулгаа оруулахад AI тань орлого, зарлагыг автоматаар ангилж, санхүүгийн дүр зургийг гаргана.",
    mock: (
      <div className="mt-5 rounded-xl p-4 bg-slate-50" style={{ border: "1px solid #E2E8F0" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(26,53,96,0.08)" }}>
            <Upload className="w-3.5 h-3.5" style={{ color: "#1A3560" }} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-800">Голомт_Банк_2024.xlsx</div>
            <div className="text-xs text-slate-400">245 гүйлгээ илрүүлсэн</div>
          </div>
        </div>
        {[
          { l: "Борлуулалт", v: "₮8.4M", c: "#1A3560" },
          { l: "Зардал", v: "₮5.1M", c: "#F59E0B" },
        ].map(({ l, v, c }) => (
          <div key={l} className="flex justify-between items-center py-1.5" style={{ borderBottom: "1px solid #F1F5F9" }}>
            <span className="text-xs text-slate-500">{l}</span>
            <span className="text-xs font-semibold" style={{ color: c }}>{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: FileText,
    iconBg: "rgba(245,158,11,0.10)",
    iconColor: "#D97706",
    accentColor: "#D97706",
    title: "Автомат татварын тайлан",
    subtitle: "НӨАТ · ААН · НД",
    desc: "Татварын алба руу илгээхэд бэлэн НӨАТ, ААН, НД тайлануудыг хоёр товшилтоор автоматаар үүсгэ.",
    mock: (
      <div className="mt-5 space-y-2">
        {[
          { label: "НӨАТ тайлан", status: "Бэлэн", bg: "#ECFDF5", color: "#059669", border: "#A7F3D0" },
          { label: "ААН тайлан", status: "Бэлэн", bg: "#ECFDF5", color: "#059669", border: "#A7F3D0" },
          { label: "НД тайлан", status: "Боловсруулж байна…", bg: "#FFFBEB", color: "#D97706", border: "#FDE68A" },
        ].map(({ label, status, bg, color, border }) => (
          <div key={label} className="flex items-center justify-between rounded-lg px-4 py-3 bg-white" style={{ border: `1px solid ${border}` }}>
            <span className="text-xs font-semibold text-slate-700">{label}</span>
            <span className="text-xs font-medium" style={{ color }}>{status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Share2,
    iconBg: "rgba(99,102,241,0.08)",
    iconColor: "#6366F1",
    accentColor: "#6366F1",
    title: "Facebook автомат нийтлэл",
    subtitle: "Маркетинг автоматжуулалт",
    desc: "Сарын санхүүгийн үр дүнгээс AI постын агуулга үүсгэж, таны Facebook хуудас руу автоматаар нийтэлнэ.",
    mock: (
      <div className="mt-5 rounded-xl p-4 bg-white" style={{ border: "1px solid #E0E7FF" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#1877F2" }}>
            f
          </div>
          <div className="text-xs font-semibold text-slate-700">Таны бизнесийн хуудас</div>
          <div className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#ECFDF5", color: "#059669" }}>
            Нийтлэгдлээ
          </div>
        </div>
        <div className="text-xs leading-relaxed text-slate-500">
          "2024 оны 12-р сард бидний борлуулалт 24% өслөө! 🎉 Та бидний үйлчилгээний талаар..."
        </div>
        <div className="flex gap-4 mt-3 text-xs text-slate-400">
          <span>👍 142</span>
          <span>💬 28</span>
          <span>↗ 19</span>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    iconBg: "rgba(16,185,129,0.08)",
    iconColor: "#059669",
    accentColor: "#059669",
    title: "AI санхүүгийн зөвлөгөө",
    subtitle: "Монгол хэлээр",
    desc: "Таны өгөгдлийг үндэслэн AI зардал хэмнэх, орлого нэмэгдүүлэх, татвар бууруулах тактикийг монгол хэлээр тайлбарлана.",
    mock: (
      <div className="mt-5 space-y-2">
        <div className="rounded-xl px-4 py-3 text-xs leading-relaxed" style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", color: "#047857" }}>
          🤖 &nbsp;"Таны зардлын 23% нь бэлэн мөнгөний гүйлгээ юм. Онлайн төлбөртэй шилжүүлбэл НӨАТ-ын буцаан олголтод хамрагдана."
        </div>
        <div className="rounded-xl px-4 py-3 text-xs leading-relaxed text-slate-500 bg-slate-50" style={{ border: "1px solid #E2E8F0" }}>
          💬 &nbsp;"Мөн ААН-ийн зардлаа нэмэгдүүлэх боломж байна…"
        </div>
      </div>
    ),
  },
];

export default function Modul() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
            style={{ color: "#F59E0B", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Боломжуудыг нь нээ
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight mb-4"
            style={{ color: "#0F172A", fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            Нэг платформ,
            <br />
            бүх санхүүгийн хэрэгтэй
          </h2>
          <p
            className="text-base"
            style={{ color: "#64748B", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Монгол жижиг бизнесүүдийн санхүүгийн бүх ажлыг автоматжуулсан AI систем.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, iconBg, iconColor, accentColor, title, subtitle, desc, mock }) => (
            <div
              key={title}
              className="rounded-2xl p-7 bg-white transition-shadow hover:shadow-md"
              style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: iconBg }}
              >
                <Icon className="w-5 h-5" style={{ color: iconColor }} />
              </div>

              {/* Text */}
              <div
                className="text-xs font-semibold tracking-wide uppercase mb-1"
                style={{ color: accentColor, fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {subtitle}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0F172A", fontFamily: "Syne, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748B", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {desc}
              </p>

              {mock}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
