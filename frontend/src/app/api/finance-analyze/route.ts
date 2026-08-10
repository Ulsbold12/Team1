import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { checkAiUsageAllowed } from "@/lib/aiUsage";

const MAX_TRANSACTIONS = 1000;

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY тохируулагдаагүй байна." },
        { status: 500 },
      );
    }

    const usage = await checkAiUsageAllowed();
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.message }, { status: usage.status });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const body = await request.json();
    const { transactions } = body;

    if (!transactions || transactions.length === 0) {
      return NextResponse.json(
        { error: "Гүйлгээний мэдээлэл олдсонгүй." },
        { status: 400 },
      );
    }

    if (transactions.length > MAX_TRANSACTIONS) {
      return NextResponse.json(
        {
          error: `Хэт олон гүйлгээ байна (${transactions.length}). Нэг удаад ${MAX_TRANSACTIONS} хүртэл гүйлгээг шинжлэх боломжтой — хугацааны хязгаараа багасгаад дахин оролдоно уу.`,
        },
        { status: 400 },
      );
    }

    const stringifiedData = JSON.stringify(transactions, null, 2);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 4000,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `Чи бол туршлагатай Монгол санхүүгийн зөвлөх. ХАРИУГ БҮХЭЛД НЬ МОНГОЛ ХЭЛЭЭР БИЧ. summary болон tips заавал монгол хэлээр байх ёстой — англи үг бүү хэрэглэ. Хариуг ЗААВАЛ дараах JSON бүтцээр буцаах ёстой. Гүйлгээнүүдийг огноогоор нь сар бүрт ангилж орлого/зарлагын ангилал гаргана. ӨӨР ТЭКСТ БИТГИЙ БИЧ.

Ангилалын дүрэм — ОЙЛ ОЙЛГОМЖТОЙ АНГИЛАХ:
- "Цалин" → "цалин", "ажлын хөлс", "цалингийн шилжүүлэг", "цалин олгов", "tsalin", "ajliinhuls", "salary", "payroll", "wages", "bonus", "урамшуулал", "шагнал", "TS1", "ts1", "Ts1", "ЦА", "ца" гэх мэт
- "Хоол хүнс" → "хоол", "lunch", "dinner", "food", "café", "coffee", "xool", "hool", "ресторан", "restaurant", "cafe", "гуанз", "цай", "tea", "bakery", "маркет", "market", "supermarket", "дэлгүүр", "grocery", "хүргэлт", "delivery", "nomin", "emart", "circle k", "petrovis shop", "ХХ", "хх" гэх мэт
- "Тээвэр" → "bus", "taxi", "ubcab", "flight", "нислэг", "бензин", "benzin", "tulsh", "түлш", "тээвэр", "transport", "fuel", "petrol", "шатахуун", "зогсоол", "parking", "toll", "машины засвар", "car wash", "car service", "ТВ", "тв" гэх мэт
- "Бараа материал" → "бараа", "material", "baraa", "building material", "construction", "материал", "b1", "нийлүүлэлт", "supply", "supplies", "нийлүүлэгч", "vendor", "БМ", "бм", "BM" гэх мэт
- "Тоног төхөөрөмж" → "тоног", "tonog", "t1", "т1", "equipment", "machine", "техник", "компьютер", "computer", "laptop", "phone", "утас", "ТТ", "тт" гэх мэт
- "Орон байр/Түрээс" → "түрээс", "rent", "лизинг", "lease", "building", "байр", "office", "оффис", "агуулах", "warehouse", "ОБ", "об", "TR", "tr" гэх мэт
- "Нийтийн аж ахуй" → "цахилгаан", "electricity", "ус", "water", "халаалт", "heating", "дулаан", "УКТС", "ДЦС", "нийтийн аж ахуй", "utility", "utilities" гэх мэт
- "Харилцаа холбоо" → "internet", "интернэт", "phone bill", "утасны", "мобикон", "mobicom", "unitel", "skytel", "gmobile", "г-мобайл", "cable tv", "олон суваг", "ХХ1", "хх1" гэх мэт
- "Татвар" → "татвар", "tax", "ХХОАТ", "ААНОАТ", "НӨАТ", "НДШ", "нийгмийн даатгал", "social insurance", "гааль", "customs", "торгууль", "fine" гэх мэт
- "Даатгал" → "даатгал", "insurance", "бодд", "practical", "МИГ", "нэргэлт" гэх мэт (эрүүл мэнд, эд хөрөнгө, тээврийн хэрэгслийн даатгал)
- "Зар сурталчилгаа" → "реклам", "сурталчилгаа", "advertising", "ads", "marketing", "facebook ads", "google ads", "маркетинг" гэх мэт
- "Программ хангамж" → "subscription", "захиалга", "software", "saas", "adobe", "microsoft", "google workspace", "zoom", "хостинг", "hosting", "domain" гэх мэт
- "Банкны шимтгэл" → "шимтгэл", "гүйлгээний шимтгэл", "commission", "fee", "service charge", "bank fee", "atm", "БШ", "бш" гэх мэт
- "Бусад" → дээрх ангилалд тохирохгүй зарлагууд ЗӨВХӨН ЭНД орно. Аль болох цөөн гүйлгээ "Бусад"-д оруул. Гүйлгээний утга дотор товчилсон код (жнь: "TS1", "BM", "ТТ") байвал дээрх ангилалуудтай тааруулж ангилах.
Орлогын дүрэм:
- "Борлуулалтын орлого" → борлуулалт, худалдаа, үйлчилгээний орлого, payment received, sales, revenue гэх мэт
- "Зээл" → зээл, loan, credit, овердрафт, overdraft гэх мэт
- "Хөрөнгө оруулалт" → хөрөнгө оруулалт, investment, хувьцаа, хувь нийлүүлэгч, shareholder гэх мэт
- "Буцаалт" → буцаалт, refund, буцаан олголт, tax refund, буцаан төлөлт гэх мэт

{
  "summary": "Ерөнхий дүгнэлт монгол хэлээр (3-4 өгүүлбэр, тоон үзүүлэлт оруул)",
  "income": [
    { "name": "Борлуулалтын орлого", "total": 0 },
    { "name": "Зээл", "total": 0 },
    { "name": "Хөрөнгө оруулалт", "total": 0 },
    { "name": "Буцаалт", "total": 0 }
  ],
  "expenses": [
    { "name": "Цалин", "total": 0 },
    { "name": "Хоол хүнс", "total": 0 },
    { "name": "Тээвэр", "total": 0 },
    { "name": "Бараа материал", "total": 0 },
    { "name": "Тоног төхөөрөмж", "total": 0 },
    { "name": "Орон байр/Түрээс", "total": 0 },
    { "name": "Нийтийн аж ахуй", "total": 0 },
    { "name": "Харилцаа холбоо", "total": 0 },
    { "name": "Татвар", "total": 0 },
    { "name": "Даатгал", "total": 0 },
    { "name": "Зар сурталчилгаа", "total": 0 },
    { "name": "Программ хангамж", "total": 0 },
    { "name": "Банкны шимтгэл", "total": 0 },
    { "name": "Бусад", "total": 0 }
  ],
 "monthly": [
    {
      "month": "2025-01",
      "income": [
        { "name": "Борлуулалтын орлого", "total": 0 },
        { "name": "Зээл", "total": 0 },
        { "name": "Хөрөнгө оруулалт", "total": 0 },
        { "name": "Буцаалт", "total": 0 }
      ],
      "expenses": [
        { "name": "Цалин", "total": 0 },
        { "name": "Хоол хүнс", "total": 0 },
        { "name": "Тээвэр", "total": 0 },
        { "name": "Бараа материал", "total": 0 },
        { "name": "Тоног төхөөрөмж", "total": 0 },
        { "name": "Орон байр/Түрээс", "total": 0 },
        { "name": "Нийтийн аж ахуй", "total": 0 },
        { "name": "Харилцаа холбоо", "total": 0 },
        { "name": "Татвар", "total": 0 },
        { "name": "Даатгал", "total": 0 },
        { "name": "Зар сурталчилгаа", "total": 0 },
        { "name": "Программ хангамж", "total": 0 },
        { "name": "Банкны шимтгэл", "total": 0 },
        { "name": "Бусад", "total": 0 }
      ]
    }
  ],
  "tips": ["Монгол хэлээр зөвлөгөө 1", "Монгол хэлээр зөвлөгөө 2", "Монгол хэлээр зөвлөгөө 3"]
}`,
        },
        {
          role: "user",
          content: `Дараах банкны хуулганд анализ хийнэ үү:\n\n${stringifiedData}`,
        },
      ],
    });

    const responseText = response.choices[0].message.content;

    if (!responseText) {
      throw new Error("AI-аас хоосон хариу ирлээ");
    }

    const aiResult = JSON.parse(responseText);

    return NextResponse.json(aiResult, { status: 200 });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("finance-analyze алдаа:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
