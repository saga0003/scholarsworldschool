import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MonitorSmartphone,
  LibraryBig,
  FlaskConical,
  Cpu,
  Trophy,
  BusFront,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FACILITIES, FACILITY_STRIP } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Facilities | Scholars' School, Hassan",
  description:
    "Smart classrooms, library, laboratories, computer labs, playground and safe bus transport — everything your child needs at Scholars' School, Hassan.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MonitorSmartphone,
  LibraryBig,
  FlaskConical,
  Cpu,
  Trophy,
  BusFront,
};

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="/images/hero-campus.jpg"
          eyebrow="Facilities"
          title="Everything they need to grow"
          subtitle="Smart classrooms, labs, library, playground and safe transport — on both campuses."
          crumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
        />

        {/* Facility cards */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FACILITIES.map((f, i) => {
                const Icon = ICONS[f.icon];
                return (
                  <Reveal key={f.title} delay={0.06 * i}>
                    <article className="group h-full rounded-[2rem] border border-navy/8 bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_24px_50px_rgba(0,19,41,0.13)]">
                      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h2 className="mt-6 font-display text-xl font-bold text-navy">
                        {f.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {f.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Campus photo band */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                  Campus life
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
                  Come and <span className="italic text-gold-deep">see it</span> for
                  yourself
                </h2>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FACILITY_STRIP.map((img, i) => (
                <Reveal key={img.src} delay={0.05 * i}>
                  <figure
                    className={`group relative overflow-hidden rounded-3xl bg-navy-mist ${
                      i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] lg:mt-10"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep/85 to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                      {img.alt}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  Book a campus visit
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy/15 px-8 py-4 text-base font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                >
                  Browse the gallery
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
