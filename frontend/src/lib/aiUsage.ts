import { auth } from "@clerk/nextjs/server";

export type AiUsageCheck =
  | { allowed: true }
  | { allowed: false; status: number; message: string };

/**
 * Enforces the org's monthly AI usage cap (backend/src/routes/client/aiLimiting.ts)
 * before a costly OpenAI/GenAI call. The Next.js AI routes run in a separate
 * app from the Express backend and have no direct DB access, so this proxies
 * the check + usage recording through the backend over HTTP.
 */
export async function checkAiUsageAllowed(): Promise<AiUsageCheck> {
  const { userId, getToken } = await auth();
  if (!userId) {
    return { allowed: false, status: 401, message: "Нэвтрээгүй байна." };
  }

  const backendUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!backendUrl) {
    return {
      allowed: false,
      status: 500,
      message: "Backend URL тохируулагдаагүй байна.",
    };
  }

  try {
    const token = await getToken();
    const res = await fetch(`${backendUrl}/api/ai/usage/check`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 429) {
      return {
        allowed: false,
        status: 429,
        message:
          "Энэ сарын AI ашиглалтын хязгаарт хүрсэн байна. PRO багц руу шилжинэ үү.",
      };
    }
    if (!res.ok) {
      return {
        allowed: false,
        status: 502,
        message: "AI хэрэглээг шалгаж чадсангүй. Дахин оролдоно уу.",
      };
    }
    return { allowed: true };
  } catch (e) {
    console.error("aiUsage check failed:", e);
    return {
      allowed: false,
      status: 502,
      message: "AI хэрэглээг шалгаж чадсангүй. Дахин оролдоно уу.",
    };
  }
}
