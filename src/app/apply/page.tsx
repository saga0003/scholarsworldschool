import type { Metadata } from "next";
import { CalendarDays, Phone, CheckCircle2, Info } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { PageHero } from "@/components/site/page-hero";
import { ApplyForm } from "@/components/site/apply-form";
import { Reveal } from "@/components/site/reveal";
import { SCHOOL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apply Online | Scholars' School, Hassan",
  description: "Admissions open at Scholars' School, Hassan — apply online in minutes. No application fee. Our admissions team calls you back within one working day.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero image="https://scholarshassan.com/img/Mission.JPG" eyebrow="Admissions Open" title="Apply online in minutes" subtitle="No application fee · We reply within one working day · Seats are limited to keep classes personal." crumbs={[{ label: "Home", href: "/" }, { label: "Apply Online" }]} />

        <section className="relative overflow-hidden bg-navy py-16 text-white lg:py-24">
          <div aria-hidden className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <Reveal><h2 className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">Give your child the gift of <span className="italic text-gold">infinite potential</span></h2></Reveal>
                <Reveal delay={0.08}><p className="mt-5 leading-relaxed text-white/75">Applications are open for the new academic year across all programs — from Montessori to High School, at both campuses.</p></Reveal>
                <Reveal delay={0.14}>
                  <ul className="mt-8 space-y-4">
                    {[
                      { icon: CheckCircle2, text: "Submit the form — our team calls you back" },
                      { icon: CalendarDays, text: "Visit either campus for a tour & interaction" },
                      { icon: Phone, text: "Questions? Call " + SCHOOL.phone },
                    ].map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3.5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold"><Icon className="h-5 w-5" /></span><span className="pt-2 text-[15px] leading-relaxed text-white/80">{text}</span></li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.2}><div className="mt-9 rounded-2xl border border-gold/30 bg-gold/10 p-5"><p className="flex items-start gap-3 text-sm leading-relaxed text-white/85"><Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />Early applications get priority for campus tours and interaction sessions.</p></div></Reveal>
              </div>

              <Reveal delay={0.15} className="lg:col-span-3"><ApplyForm /></Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
