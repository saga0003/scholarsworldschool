"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  CheckCircle2,
  Send,
  CheckCircle2 as Check,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SCHOOL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type FormState = {
  childName: string;
  dateOfBirth: string;
  gender: string;
  motherName: string;
  fatherName: string;
  phone: string;
  alternatePhone: string;
  address: string;
  queries: string;
};

const INITIAL: FormState = {
  childName: "",
  dateOfBirth: "",
  gender: "",
  motherName: "",
  fatherName: "",
  phone: "",
  alternatePhone: "",
  address: "",
  queries: "",
};

const PHONE_RE = /^[6-9]\d{9}$/;

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string; ref?: string } | null>(
    null
  );

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.childName.trim().length < 2) e.childName = "Please enter the child's full name.";
    if (!form.dateOfBirth) e.dateOfBirth = "Please select the date of birth.";
    if (!form.gender) e.gender = "Please select a gender.";
    if (form.motherName.trim().length < 2) e.motherName = "Please enter the mother's name.";
    if (form.fatherName.trim().length < 2) e.fatherName = "Please enter the father's name.";
    if (!PHONE_RE.test(form.phone.replace(/\D/g, "").slice(-10)))
      e.phone = "Please enter a valid 10-digit phone number.";
    if (
      form.alternatePhone &&
      !PHONE_RE.test(form.alternatePhone.replace(/\D/g, "").slice(-10))
    )
      e.alternatePhone = "Please enter a valid 10-digit phone number.";
    if (form.address.trim().length < 10) e.address = "Please enter the permanent address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setResult({ ok: true, message: data.message, ref: data.referenceId });
        setForm(INITIAL);
      } else {
        if (data.errors) setErrors(data.errors);
        setResult({ ok: false, message: data.message });
      }
    } catch {
      setResult({
        ok: false,
        message: "Network error. Please try again or call us at " + SCHOOL.phone + ".",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "h-12 rounded-xl border-input bg-white text-[15px] transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold";

  return (
    <div className="rounded-[2rem] bg-white p-6 text-navy shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-9">
      {result?.ok ? (
        <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <CheckCircle2 className="h-20 w-20 text-green-600" />
          </motion.div>
          <h3 className="mt-6 font-display text-3xl font-bold text-navy">
            Application received!
          </h3>
          <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
            {result.message}
          </p>
          {result.ref && (
            <p className="mt-5 rounded-xl bg-navy-mist px-5 py-3 text-sm font-bold text-navy">
              Reference ID: <span className="text-gold-deep">{result.ref}</span>
            </p>
          )}
          <button
            onClick={() => setResult(null)}
            className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-soft"
          >
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Online Application Form
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Fields marked <span className="font-bold text-gold-deep">*</span> are
            required. Your details stay private with our admissions office.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="childName" className="text-[13px] font-bold text-navy">
                Child&apos;s Name <span className="text-gold-deep">*</span>
              </Label>
              <Input
                id="childName"
                placeholder="e.g. Aarav Kumar"
                value={form.childName}
                onChange={(e) => set("childName", e.target.value)}
                className={cn(field, errors.childName && "border-destructive")}
                aria-invalid={!!errors.childName}
              />
              {errors.childName && (
                <p className="text-xs font-semibold text-destructive">{errors.childName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-[13px] font-bold text-navy">
                Date of Birth <span className="text-gold-deep">*</span>
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={form.dateOfBirth}
                onChange={(e) => set("dateOfBirth", e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className={cn(field, errors.dateOfBirth && "border-destructive")}
                aria-invalid={!!errors.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <p className="text-xs font-semibold text-destructive">{errors.dateOfBirth}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-[13px] font-bold text-navy">
                Gender <span className="text-gold-deep">*</span>
              </Label>
              <Select value={form.gender} onValueChange={(v) => set("gender", v)}>
                <SelectTrigger
                  className={cn(field, "w-full", errors.gender && "border-destructive")}
                  aria-invalid={!!errors.gender}
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-xs font-semibold text-destructive">{errors.gender}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[13px] font-bold text-navy">
                Phone (WhatsApp) <span className="text-gold-deep">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value.replace(/[^\d]/g, "").slice(0, 10))}
                className={cn(field, errors.phone && "border-destructive")}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-xs font-semibold text-destructive">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="motherName" className="text-[13px] font-bold text-navy">
                Mother&apos;s Name <span className="text-gold-deep">*</span>
              </Label>
              <Input
                id="motherName"
                placeholder="Full name"
                value={form.motherName}
                onChange={(e) => set("motherName", e.target.value)}
                className={cn(field, errors.motherName && "border-destructive")}
                aria-invalid={!!errors.motherName}
              />
              {errors.motherName && (
                <p className="text-xs font-semibold text-destructive">{errors.motherName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fatherName" className="text-[13px] font-bold text-navy">
                Father&apos;s Name <span className="text-gold-deep">*</span>
              </Label>
              <Input
                id="fatherName"
                placeholder="Full name"
                value={form.fatherName}
                onChange={(e) => set("fatherName", e.target.value)}
                className={cn(field, errors.fatherName && "border-destructive")}
                aria-invalid={!!errors.fatherName}
              />
              {errors.fatherName && (
                <p className="text-xs font-semibold text-destructive">{errors.fatherName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="alternatePhone" className="text-[13px] font-bold text-navy">
                Alternate Number
              </Label>
              <Input
                id="alternatePhone"
                type="tel"
                inputMode="numeric"
                placeholder="Optional"
                value={form.alternatePhone}
                onChange={(e) =>
                  set("alternatePhone", e.target.value.replace(/[^\d]/g, "").slice(0, 10))
                }
                className={cn(field, errors.alternatePhone && "border-destructive")}
                aria-invalid={!!errors.alternatePhone}
              />
              {errors.alternatePhone && (
                <p className="text-xs font-semibold text-destructive">{errors.alternatePhone}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="address" className="text-[13px] font-bold text-navy">
                Permanent Address <span className="text-gold-deep">*</span>
              </Label>
              <Textarea
                id="address"
                placeholder="House / Street / Area, Hassan, Karnataka"
                rows={3}
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
                className={cn(
                  "rounded-xl border-input bg-white text-[15px] transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold",
                  errors.address && "border-destructive"
                )}
                aria-invalid={!!errors.address}
              />
              {errors.address && (
                <p className="text-xs font-semibold text-destructive">{errors.address}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="queries" className="text-[13px] font-bold text-navy">
                Any Queries
              </Label>
              <Textarea
                id="queries"
                placeholder="Anything you'd like to ask us about admissions, transport, fees or programs"
                rows={3}
                value={form.queries}
                onChange={(e) => set("queries", e.target.value)}
                className="rounded-xl border-input bg-white text-[15px] transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold"
              />
            </div>
          </div>

          {result && !result.ok && (
            <p className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
              {result.message}
            </p>
          )}

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs leading-relaxed text-muted-foreground">
              <Check className="h-4 w-4 shrink-0 text-green-600" />
              No application fee · We reply within one working day
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-base font-bold text-navy shadow-[0_10px_30px_rgba(253,200,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(253,200,0,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Application
                  <Send className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
