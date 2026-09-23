import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SCHOOL } from "@/lib/site-data";

export function CtaBand({
  title = "Ready to unlock your child's infinite potential?",
  note = "Seats are filling fast for the new academic year.",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold to-gold-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #002147 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 py-14 text-center sm:px-6 lg:flex-row lg:text-left">
        <div>
          <h2 className="text-balance font-display text-2xl font-bold leading-tight text-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 font-medium text-navy/70">{note}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/apply"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-8 py-4 text-base font-bold text-white shadow-[0_14px_36px_rgba(0,19,41,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,19,41,0.45)]"
          >
            Apply Online Now
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={SCHOOL.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy/25 px-8 py-4 text-base font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
          >
            <Phone className="h-5 w-5" />
            {SCHOOL.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
