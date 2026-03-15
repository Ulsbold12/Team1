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
          content: `Чи бол туршлагатай санхүүгийн зөвлөх. Гүйлгээ бүр дотор "_month" талбар байна (жишээ: "2024-06"). "Орлого" баганын утга > 0 бол орлого, "Зарлага" баганын утга > 0 бол зарлага. Тэдгээрийг сар сараар болон нийт тооцоол. Хариуг ЗААВАЛ дараах JSON бүтцээр буцаах ёстой. ӨӨР ТЭКСТ БИТГИЙ БИЧ.

ЗААВАЛ дагах зарлагын ангиллын дүрэм (гүйлгээний утга/тайлбар дотор):
- "X1" агуулсан бол → "Хоол хүнс"
- "T1" агуулсан бол → "Тээвэр"
- "B1" агуулсан бол → "Бараа материал"
- "TS1" агуулсан бол → "Цалин"
Эдгээр дүрэм бусад шинжилгээнээс давамгайлна.

{
  "summary": "Ерөнхий дүгнэлт (2-3 өгүүлбэр)",
  "monthly": [
    {
      "month": "2024-06",
      "income": [
        { "name": "Борлуулалтын орлого", "total": 0 },
        { "name": "Зээл", "total": 0 }
      ],
      "expenses": [
        { "name": "Хоол хүнс", "total": 0 },
        { "name": "Тээвэр", "total": 0 },
        { "name": "Бараа материал", "total": 0 },
        { "name": "Цалин", "total": 0 },
        { "name": "Бусад", "total": 0 }
      ]
    }
  ],
  "income": [
    { "name": "Борлуулалтын орлого", "total": 0 },
    { "name": "Зээл", "total": 0 }
  ],
  "expenses": [
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
