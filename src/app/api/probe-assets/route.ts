import { NextResponse } from "next/server";
import crypto from "node:crypto";

const names = [
  "LOGO_WHITE.png", "02%20%281%29.png", "SCHOLARS_col.png",
  "home-welcome.jpg", "abt%20us.jpg", "abt_us.jpg", "Mission.JPG", "secretary.jpg",
  "montes.png", "primarysch.png", "higherpri.png", "highschool.png",
  "g1.png", "g2.png", "g3.png", "g4.png", "g5.png", "g6.png", "g7.png", "g8.png", "g9.png", "g10.png", "g12.png", "g13.png", "g14.png", "g16.png", "g18.png", "g19.png", "g20.png",
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "12.png", "13.png", "14.png", "16.png", "18.png", "19.png", "20.png"
];

export const dynamic = "force-dynamic";

export async function GET() {
  const out: Record<string, unknown> = {};
  for (const name of names) {
    const url = `https://scholarshassan.com/img/${name}`;
    try {
      const res = await fetch(url, { cache: "no-store" });
      const buf = Buffer.from(await res.arrayBuffer());
      out[name] = {
        status: res.status,
        type: res.headers.get("content-type"),
        bytes: buf.length,
        sha256: crypto.createHash("sha256").update(buf).digest("hex"),
      };
    } catch (e) {
      out[name] = { error: String(e) };
    }
  }
  return NextResponse.json(out);
}
