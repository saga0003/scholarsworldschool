import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Please use the admission enquiry form to email our admissions team." },
    { status: 410 }
  );
}
