import { NextRequest, NextResponse } from "next/server";

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function translateToMongolian(text: string): Promise<string> {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional Mongolian copywriter. Translate the following social media text into fluent, natural Mongolian (Cyrillic script) as if a native Mongolian speaker wrote it — not a direct translation.

Rules:
- Use natural Mongolian sentence structure (SOV word order)
- Use correct Mongolian grammar: suffixes, cases, verb conjugations
- Preserve all hashtags (do NOT translate hashtags), emojis, and line breaks
- Do NOT add exclamation marks (Mongolians don't use "!" in casual writing)
- Avoid loan words when a natural Mongolian equivalent exists
- Keep the tone calm, direct, and conversational — not salesy
- Return ONLY the translated text, nothing else`,
        },
        { role: "user", content: text },
      ],
    });
    return res.choices[0].message.content || text;
  } catch {
    return text;
  }
}

async function fixMongolianGrammar(
  text: string,
  _client: OpenAI,
): Promise<string> {
  return text;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productName, description, targetAudience } = body;

    if (!productName || !description || !targetAudience) {
      return NextResponse.json(
        {
          error:
            "Бүтээгдэхүүний нэр, тайлбар болон зорилгот хэрэглэгчийн мэдээлэл шаардлагатай.",
        },
        { status: 400 },
      );
    }

    const today = new Date();
    const todayISO = today.toISOString().split("T")[0];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are a social media marketer creating posts for a Mongolian brand. Write all posts in natural, engaging English — they will be translated into Mongolian afterward, so write clearly and avoid idioms or slang that don't translate well.

## GOAL
Generate 15 ready-to-publish Facebook posts for the given product. Posts must feel human, specific, and platform-native — not like ad copy or a brochure.

---

## STRICT DO NOT LIST
❌ No fake customer quotes or made-up testimonials
❌ No feature lists with colons: "Features: X, Y, Z"
❌ No generic CTAs like "Order today and get a discount!"
❌ No vague claims like "a huge difference in your experience"
❌ No self-introductions like "Hi, I'm a student at X university"
❌ No idioms or culturally specific slang that won't survive translation
❌ No exclamation marks anywhere — use periods or commas instead. Mongolians don't use "!" in casual writing.
❌ No overly enthusiastic or hype-y tone. Keep it calm, direct, and grounded. Think a knowledgeable friend, not a salesperson.

---

## PLATFORM RULES

### Facebook (15 posts) — 80–130 words each
- First line must stop the scroll — bold statement or short relatable moment
- Middle: one short story, tip, or real situation
- End: a comment-bait question OR a simple link CTA
- 1–2 emojis, placed naturally
- 2–3 hashtags

---

## CONTENT TYPES — cycle through all 5 types, 3 times each (15 posts total)

1. **Problem/Solution** — name a specific pain point, show how the product fixes it
2. **Before/After** — describe what life looks like before vs after using the product, from the brand's perspective. No fake customer voice.
3. **Educational tip** — one genuinely useful tip related to the product's domain
4. **Feature spotlight** — ONE specific feature + ONE concrete real-world benefit
5. **Call-to-action** — drive a specific next step: sign up, DM, try free, visit site

Each repetition of the same content type must use a different angle, story, or product aspect — no two posts should feel alike.

---

## GOOD EXAMPLES (match this quality)

**LinkedIn — Problem/Solution:**
Most wired earphones fail at the same two things: the cable breaks within months, and the audio cuts out at the worst moments.

We built around those exact failure points. Reinforced braided cable, stable analog connection, no battery to die on you mid-session.

If you've gone through three pairs of earphones this year — what kept breaking first?

#AudioGear #EverydayTech #MongoliaStartup

---

**Twitter — Educational tip:**
AUX beats Bluetooth for gaming. Zero compression, zero latency.
If your game has audio cues, this matters. #GamingAudio

---

**Facebook — Before/After:**
Most people pick earphones based on how they look.
Then the cable frays. The sound cuts out. The whole thing dies in six months.

After switching to a reinforced AUX option? The cable outlasts the phone.

What's the longest you've kept a pair of earphones alive? 👇 #EarphoneTips

---

## OUTPUT FORMAT
Return ONLY valid JSON. No markdown, no extra text.

{
  "advice": "Write 6–8 sentences of practical Facebook marketing advice tailored to this product and audience. Cover: (1) what content angle works best for this specific product on Facebook, (2) best posting times for a Mongolian audience, (3) how to use Facebook comments and replies to boost organic reach (the algorithm rewards engagement), (4) one specific first-week action — e.g. which post type to boost first and why, (5) a tip on using Facebook Page insights to see which posts perform best and adjust, (6) whether Facebook Groups, Stories, or Reels would help this brand and how. Be specific and actionable — no generic advice.",
  "posts": [
    {
      "platform": "LinkedIn" | "Facebook" | "Twitter",
      "contentType": "Problem/Solution" | "Before/After" | "Educational tip" | "Feature spotlight" | "Call-to-action",
      "content": "Full post content in English",
      "scheduledDate": "YYYY-MM-DD"
    }
  ]
}

Generate exactly 15 Facebook posts. Spread scheduledDate evenly across 30 days starting from the user's start date (roughly every 2 days).
All posts must have "platform": "Facebook".`,
        },
        {
          role: "user",
          content: `Generate a 30-day content plan for this product:

Product name: ${productName}
Description: ${description}
Target audience: ${targetAudience}
Start date: ${todayISO}`,
        },
      ],
    });

    const responseText = response.choices[0].message.content;
    if (!responseText) throw new Error("Empty response from AI");

    const aiResult = JSON.parse(responseText);

    // Step 2: Translate each post content + advice to Mongolian
    const [translatedAdvice, ...translatedContents] = await Promise.all([
      translateToMongolian(aiResult.advice),
      ...aiResult.posts.map((post: { content: string }) =>
        translateToMongolian(post.content),
      ),
    ]);

    const translatedPosts = aiResult.posts.map(
      (
        post: {
          platform: string;
          contentType: string;
          scheduledDate: string;
          content: string;
        },
        i: number,
      ) => ({
        ...post,
        content: translatedContents[i],
      }),
    );

    const [fixedAdvice, ...fixedContents] = await Promise.all([
      fixMongolianGrammar(translatedAdvice, openai),
      ...translatedPosts.map((post: { content: string }) =>
        fixMongolianGrammar(post.content, openai),
      ),
    ]);

    const fixedPosts = translatedPosts.map(
      (
        post: {
          platform: string;
          contentType: string;
          scheduledDate: string;
          content: string;
        },
        i: number,
      ) => ({
        ...post,
        content: fixedContents[i],
      }),
    );

    const cleanAdvice = fixedAdvice.replace(/!/g, ".");
    const cleanPosts = fixedPosts.map(
      (post: {
        platform: string;
        contentType: string;
        scheduledDate: string;
        content: string;
      }) => ({
        ...post,
        content: post.content.replace(/!/g, "."),
      }),
    );

    return NextResponse.json(
      { advice: cleanAdvice, posts: cleanPosts },
      { status: 200 },
    );
  } catch (error) {
    console.error("Маркетинг API алдаа:", error);
    return NextResponse.json(
      { error: "Сервер дээр алдаа гарлаа. Дахин оролдоно уу." },
      { status: 500 },
    );
  }
}
