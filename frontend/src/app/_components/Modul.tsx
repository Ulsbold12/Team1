import { Upload, FileText, Share2, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Upload,
    iconBgClass: "bg-indigo-50 dark:bg-indigo-900/30",
    iconColorClass: "text-indigo-700 dark:text-indigo-400",
    accentClass: "text-indigo-700 dark:text-indigo-400",
    title: "Банкны хуулга оруулах",
    subtitle: "AI шинжилгээ",
    desc: "Excel болон PDF хуулгаа оруулахад AI тань орлого, зарлагыг автоматаар ангилж, санхүүгийн дүр зургийг гаргана.",
    mock: (
      <div className="mt-5 rounded-xl p-4 bg-slate-50 dark:bg-gray-700/60 border border-slate-200 dark:border-gray-600">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/30">
            <Upload className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              Голомт_Банк_2024.xlsx
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500">245 гүйлгээ илрүүлсэн</div>
          </div>
        </div>
        {[
          { l: "Борлуулалт", v: "₮8.4M", cls: "text-indigo-700 dark:text-indigo-400" },
          { l: "Зардал", v: "₮5.1M", cls: "text-blue-600 dark:text-blue-400" },
        ].map(({ l, v, cls }) => (
          <div
            key={l}
            className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-gray-600"
          >
            <span className="text-xs text-slate-500 dark:text-slate-400">{l}</span>
            <span className={`text-xs font-semibold ${cls}`}>{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: FileText,
    iconBgClass: "bg-blue-50 dark:bg-blue-900/30",
    iconColorClass: "text-blue-600 dark:text-blue-400",
    accentClass: "text-blue-600 dark:text-blue-400",
    title: "Автомат татварын тайлан",
    subtitle: "НӨАТ · ААН · НД",
    desc: "Татварын алба руу илгээхэд бэлэн НӨАТ, ААН, НД тайлануудыг хоёр товшилтоор автоматаар үүсгэ.",
    mock: (
      <div className="mt-5 space-y-2">
        {[
          { label: "НӨАТ тайлан", status: "Бэлэн", statusCls: "text-emerald-600 dark:text-emerald-400", borderCls: "border-emerald-200 dark:border-emerald-800" },
          { label: "ААН тайлан", status: "Бэлэн", statusCls: "text-emerald-600 dark:text-emerald-400", borderCls: "border-emerald-200 dark:border-emerald-800" },
          { label: "НД тайлан", status: "Боловсруулж байна…", statusCls: "text-blue-600 dark:text-blue-400", borderCls: "border-blue-200 dark:border-blue-800" },
        ].map(({ label, status, statusCls, borderCls }) => (
          <div
            key={label}
            className={`flex items-center justify-between rounded-lg px-4 py-3 bg-white dark:bg-gray-700/60 border ${borderCls}`}
          >
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{label}</span>
            <span className={`text-xs font-medium ${statusCls}`}>{status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Share2,
    iconBgClass: "bg-indigo-50 dark:bg-indigo-900/30",
    iconColorClass: "text-indigo-500 dark:text-indigo-400",
    accentClass: "text-indigo-500 dark:text-indigo-400",
    title: "Facebook автомат нийтлэл",
    subtitle: "Маркетинг автоматжуулалт",
    desc: "Сарын санхүүгийн үр дүнгээс AI постын агуулга үүсгэж, таны Facebook хуудас руу автоматаар нийтэлнэ.",
    mock: (
      <div className="mt-5 rounded-xl p-4 bg-white dark:bg-gray-700/60 border border-indigo-100 dark:border-gray-600">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "#1877F2" }}
          >
            f
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Таны бизнесийн хуудас
          </div>
          <div className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
            Нийтлэгдлээ
          </div>
        </div>
        <div className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          "2024 оны 12-р сард бидний борлуулалт 24% өслөө! 🎉 Та бидний үйлчилгээний талаар..."
        </div>
        <div className="flex gap-4 mt-3 text-xs text-slate-400 dark:text-slate-500">
          <span>👍 142</span>
          <span>💬 28</span>
          <span>↗ 19</span>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    iconBgClass: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColorClass: "text-emerald-600 dark:text-emerald-400",
    accentClass: "text-emerald-600 dark:text-emerald-400",
    title: "AI санхүүгийн зөвлөгөө",
    subtitle: "Монгол хэлээр",
    desc: "Таны өгөгдлийг үндэслэн AI зардал хэмнэх, орлого нэмэгдүүлэх, татвар бууруулах тактикийг монгол хэлээр тайлбарлана.",
    mock: (
      <div className="mt-5 space-y-2">
        <div className="rounded-xl px-4 py-3 text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
          🤖 &nbsp;"Таны зардлын 23% нь бэлэн мөнгөний гүйлгээ юм. Онлайн
          төлбөртэй шилжүүлбэл НӨАТ-ын буцаан олголтод хамрагдана."
        </div>
        <div className="rounded-xl px-4 py-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-gray-700/60 border border-slate-200 dark:border-gray-600">
          💬 &nbsp;"Мөн ААН-ийн зардлаа нэмэгдүүлэх боломж байна…"
        </div>
      </div>
    ),
  },
];

export default function Modul() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-indigo-600 dark:text-indigo-400"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Боломжийг нээ
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight mb-4 text-slate-900 dark:text-white"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
          >
            Нэг платформ,
            <br />
            бүх санхүүгийн хэрэгтэй
          </h2>
          <p
            className="text-base text-slate-500 dark:text-slate-400"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Монгол жижиг бизнесүүдийн санхүүгийн бүх ажлыг автоматжуулсан AI систем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, iconBgClass, iconColorClass, accentClass, title, subtitle, desc, mock }) => (
            <div
              key={title}
              className="rounded-2xl p-7 bg-white dark:bg-gray-800 transition-shadow hover:shadow-md border border-slate-200 dark:border-gray-700"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBgClass}`}>
                <Icon className={`w-5 h-5 ${iconColorClass}`} />
              </div>

              <div
                className={`text-xs font-semibold tracking-wide uppercase mb-1 ${accentClass}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {subtitle}
              </div>
              <h3
                className="text-xl font-bold mb-3 text-slate-900 dark:text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                style={{ fontFamily: "Inter, sans-serif" }}
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
