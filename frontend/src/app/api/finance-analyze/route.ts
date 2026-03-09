import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { transactions } = await request.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API түлхүүр олдсонгүй" }, { status: 500 });
        }

        const ai = new GoogleGenAI({ apiKey });

        const chat = ai.chats.create({
            model: "gemini-2.0-flash",
            config: {
                systemInstruction: `Чи бол туршлагатай санхүүгийн зөвлөх. Хэрэглэгчийн банкны хуулгыг уншиж анализ хийнэ. 
                Хариуг ЗААВАЛ дараах JSON бүтцээр буцаах ёстой. Өөр илүү үг, тайлбар битгий бич:
                {
                  "summary": "Ерөнхий дүгнэлт (2-3 өгүүлбэр)",
                  "categories": [
                    { "name": "Хоол хүнс", "total": 150000 },
                    { "name": "Тээвэр", "total": 20000 }
                  ],
                  "tips": [
                    "Хэмнэлт хийх зөвлөгөө 1",
                    "Хэмнэлт хийх зөвлөгөө 2"
                  ]
                }`,

                responseMimeType: "application/json",
            }
        });

        const prompt = `Дараах банкны гүйлгээнүүдэд анализ хийж, орлого зарлагыг ангилаад зөвлөгөө өгнө үү: \n ${JSON.stringify(sampleData)}`;

        const response = await chat.sendMessage(prompt);
        const aiResult = response.text;


        return NextResponse.json(JSON.parse(aiResult || "{}"));

    } catch (error) {
        console.error("AI Analysis Error:", error);
        return NextResponse.json({ error: "Анализ хийхэд алдаа гарлаа" }, { status: 500 });
    }
}