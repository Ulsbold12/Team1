import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Valid image file required." }, { status: 400 });
  }

  const apiKey = process.env.IMGBB_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "IMGBB_API_KEY not configured." }, { status: 500 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString("base64");

    const body = new URLSearchParams();
    body.append("key", apiKey);
    body.append("image", base64);

    const res = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body,
    });
    const data = await res.json();

    if (!res.ok || !data.data?.url) {
      return NextResponse.json({ error: data.error?.message ?? "Upload failed" }, { status: 500 });
    }

    return NextResponse.json({ url: data.data.url });
  } catch (e) {
    console.error("Upload error:", e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
