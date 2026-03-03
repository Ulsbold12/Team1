import { Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const posts = [
  {
    id: 1,
    title: "10 AI Trends in 2024",
    platform: "Instagram",
    time: "2 цагийн өмнө нийтлэгдсэн",
    reach: "1.2k",
    gradient: "from-indigo-500 to-indigo-400",
  },
  {
    id: 2,
    title: "Q3 Product Roadmap",
    platform: "LinkedIn",
    time: "1 өдрийн өмнө нийтлэгдсэн",
    reach: "4.8k",
    gradient: "from-blue-400 to-emerald-400",
  },
  {
    id: 3,
    title: "Customer Success Story",
    platform: "Twitter",
    time: "3 өдрийн өмнө нийтлэгдсэн",
    reach: "850",
    gradient: "from-rose-400 to-orange-300",
  },
];

function PostRow({
  title,
  platform,
  time,
  reach,
  gradient,
}: (typeof posts)[number]) {
  return (
    <div className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded bg-gradient-to-br ${gradient} shrink-0`}
        />
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-muted-foreground">
            {platform} • {time}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold">{reach}</p>
        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
          ХҮРЭЛТ
        </p>
      </div>
    </div>
  );
}

function RecentPosts() {
  return (
    <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <span className="text-sm font-bold">Сүүлийн постууд</span>
        <span className="text-xs text-muted-foreground">Идэвхтэй аян</span>
      </div>
      <div className="divide-y divide-border">
        {posts.map((post) => (
          <PostRow key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

function ContentProgress() {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
      <div>
        <h4 className="text-sm font-bold text-foreground">
          Контент төлөвлөгөөний явц
        </h4>
        <p className="text-xs text-muted-foreground mt-1">Сарын зорилтууд</p>
      </div>

      {/* Circular progress ring */}
      <div className="py-8 flex flex-col items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path
              className="stroke-border"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeWidth="3"
            />
            <path
              stroke="#5048e5"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="68, 100"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-xl font-black">68%</span>
            <span className="text-[10px] text-muted-foreground uppercase">Дууссан</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Нийтлэлүүд</span>
          <span className="font-bold">12 / 18</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Сошиал материалууд</span>
          <span className="font-bold">24 / 40</span>
        </div>
      </div>
    </div>
  );
}

export function MarketingSection() {
  return (
    <section className="space-y-4">
      <SectionHeader
        icon={Rocket}
        title="Маркетингийн гүйцэтгэл"
        linkLabel="Контент студи"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentPosts />
        <ContentProgress />
      </div>
    </section>
  );
}
