import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const PHONE_RE = /^[6-9]\d{9}$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      childName,
      dateOfBirth,
      gender,
      motherName,
      fatherName,
      phone,
      alternatePhone,
      address,
      queries,
    } = body ?? {};

    // --- Validation ---
    const errors: Record<string, string> = {};
    if (!childName || String(childName).trim().length < 2)
      errors.childName = "Please enter the child's full name.";
    if (!dateOfBirth) errors.dateOfBirth = "Please select the date of birth.";
    else {
      const dob = new Date(dateOfBirth);
      if (isNaN(dob.getTime())) errors.dateOfBirth = "Invalid date of birth.";
      else if (dob > new Date())
        errors.dateOfBirth = "Date of birth cannot be in the future.";
    }
    if (!gender || !["Male", "Female", "Others"].includes(gender))
      errors.gender = "Please select a gender.";
    if (!motherName || String(motherName).trim().length < 2)
      errors.motherName = "Please enter the mother's name.";
    if (!fatherName || String(fatherName).trim().length < 2)
      errors.fatherName = "Please enter the father's name.";
    if (!phone || !PHONE_RE.test(String(phone).replace(/\D/g, "").slice(-10)))
      errors.phone = "Please enter a valid 10-digit phone number.";
    if (
      alternatePhone &&
      !PHONE_RE.test(String(alternatePhone).replace(/\D/g, "").slice(-10))
    )
      errors.alternatePhone = "Please enter a valid 10-digit phone number.";
    if (!address || String(address).trim().length < 10)
      errors.address = "Please enter the permanent address.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, message: "Please correct the highlighted fields.", errors },
        { status: 400 }
      );
    }

    const clean = (v: unknown) =>
      String(v ?? "").trim().slice(0, 1000) || null;

    const application = await db.application.create({
      data: {
        childName: String(childName).trim(),
        dateOfBirth: String(dateOfBirth),
        gender: String(gender),
        motherName: String(motherName).trim(),
        fatherName: String(fatherName).trim(),
        phone: String(phone).replace(/\D/g, "").slice(-10),
        alternatePhone: alternatePhone
          ? String(alternatePhone).replace(/\D/g, "").slice(-10)
          : null,
        address: String(address).trim(),
        queries: clean(queries),
      },
    });

    return NextResponse.json({
      ok: true,
      message:
        "Application received! Our admissions team will reach out to you shortly.",
      referenceId: application.id.slice(-8).toUpperCase(),
    });
  } catch (err) {
    console.error("Application submission failed:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong while submitting the application. Please try again or call us at +91 81722 65608.",
      },
      { status: 500 }
    );
  }
}
