// import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { transactions } = body;

    if (!transactions || transactions.length === 0) {
      return NextResponse.json(
        { error: "Гүйлгээний мэдээлэл олдсонгүй." },
        { status: 400 },
      );
    }

    const stringifiedData = JSON.stringify(transactions, null, 2);

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `Чи бол туршлагатай санхүүгийн зөвлөх. Хариуг ЗААВАЛ дараах JSON бүтцээр буцаах ёстой. Гүйлгээнүүдийг огноогоор нь сар бүрт ангилж орлого/зарлага/цэвэр ашгийг тооцоолно. Мөн нийт дүн болон зарлагын ангилал гаргана. ӨӨР ТЭКСТ БИТГИЙ БИЧ.
{
  "summary": "Ерөнхий дүгнэлт (2-3 өгүүлбэр)",
  "revenue": 0,
  "expense": 0,
  "netProfit": 0,
  "monthly": [
    { "month": "2025-01-01", "revenue": 0, "expense": 0, "netProfit": 0 }
  ],
  "categories": [
    { "name": "Хоол хүнс", "total": 0 },
    { "name": "Тээвэр", "total": 0 },
    { "name": "Бараа материал", "total": 0 },
    { "name": "Цалин", "total": 0 },
    { "name": "Бусад", "total": 0 }
  ],
  "tips": ["Зөвлөгөө 1", "Зөвлөгөө 2"]
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
    console.error("Алдаа:", error);
    return NextResponse.json(
      { error: "Сервер дээр алдаа гарлаа." },
      { status: 500 },
    );
  }
}
