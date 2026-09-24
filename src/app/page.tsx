import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Infinity as InfinityIcon,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Users,
  MonitorSmartphone,
  LibraryBig,
  FlaskConical,
  Cpu,
  Trophy,
  BusFront,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Announcements } from "@/components/site/announcements";
import { Testimonials } from "@/components/site/testimonials";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import {
  PROGRAMS,
  WHY_US,
  FACILITIES,
  HOME_GALLERY_PREVIEW,
} from "@/lib/site-data";

const WHY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Infinity: InfinityIcon,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Users,
};

const FACILITY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  MonitorSmartphone,
  LibraryBig,
  FlaskConical,
  Cpu,
  Trophy,
  BusFront,
};

function SectionHead({
  kicker,
  title,
  note,
  light = false,
}: {
  kicker: string;
  title: React.ReactNode;
  note?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span
          className={
            light
              ? "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gold"
              : "inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy"
          }
        >
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-5xl ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {note && (
        <Reveal delay={0.14}>
          <p
            className={`mt-4 text-[17px] leading-relaxed ${
              light ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            {note}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Announcements />

        {/* Programs — four photo cards, one destination each */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionHead
              kicker="Academics"
              title={
                <>
                  Choose their <span className="italic text-gold-deep">path</span>
                </>
              }
              note="Four stages. One journey — from first steps to final exams."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROGRAMS.map((p, i) => (
                <Reveal key={p.id} delay={0.06 * i} y={26}>
                  <Link
                    href={p.href}
                    className="group relative block h-[420px] overflow-hidden rounded-[1.75rem] bg-navy sm:h-[460px]"
                    aria-label={`Explore ${p.label}`}
                  >
                    <Image
                      src={p.images[0].src}
                      alt={p.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-navy">
                        {p.kicker}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white">
                        {p.label}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/75">
                        {p.headline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Campus life split — photos first, words few */}
        <section className="overflow-hidden bg-cream py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
            {/* Photo collage */}
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(0,19,41,0.25)]">
                  <Image
                    src="/images/hero-campus.jpg"
                    alt="Students learning together on campus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-3xl border-8 border-cream shadow-2xl sm:block lg:-right-10 lg:w-64">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/gallery-6.jpg"
                      alt="Hands-on Montessori learning"
                      fill
                      sizes="256px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Short copy + chips */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                  Why Scholars&apos;
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
                  A school that feels like{" "}
                  <span className="italic text-gold-deep">family</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
                  Montessori warmth meets ICSE rigour on two safe, joyful campuses in
                  Hassan — where every child is known by name.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {WHY_US.slice(0, 4).map((w, i) => {
                  const Icon = WHY_ICONS[w.icon];
                  return (
                    <Reveal key={w.title} delay={0.06 * i}>
                      <div className="flex h-full items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-bold text-navy">{w.title}</p>
                          <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                            {w.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.2}>
                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  Discover our story
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Leadership preview */}
        <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <SectionHead
              light
              kicker="Leadership"
              title={
                <>
                  Words from <span className="italic text-gold">our leaders</span>
                </>
              }
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {[
                {
                  href: "/leadership/secretary",
                  image: "/images/leader-secretary.jpg",
                  name: "Dr. Chandrashekar",
                  role: "Administrator",
                  quote:
                    "Every child is unique — and deserves an education that fosters independence, curiosity and character.",
                },
                {
                  href: "/leadership/principal",
                  image: "/images/about-students.jpg",
                  name: "The Principal",
                  role: "Scholars' School, Hassan",
                  quote:
                    "We inspire students to aim high, dream big and achieve their very best — in class and in life.",
                },
              ].map((leader, i) => (
                <Reveal key={leader.href} delay={0.08 * i}>
                  <Link
                    href={leader.href}
                    className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
                  >
                    <div className="relative h-60 overflow-hidden sm:h-72">
                      <Image
                        src={leader.image}
                        alt={`${leader.name}, ${leader.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent" />
                    </div>
                    <div className="p-7">
                      <Quote className="h-7 w-7 text-gold" />
                      <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                        &ldquo;{leader.quote}&rdquo;
                      </p>
                      <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-5">
                        <div>
                          <p className="font-display text-xl font-bold text-gold">
                            {leader.name}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/55">
                            {leader.role}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-gold">
                          Read message
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities strip */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionHead
              kicker="Facilities"
              title={
                <>
                  Everything they need to{" "}
                  <span className="italic text-gold-deep">grow</span>
                </>
              }
            />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {FACILITIES.map((f, i) => {
                const Icon = FACILITY_ICONS[f.icon];
                return (
                  <Reveal key={f.title} delay={0.05 * i} y={20}>
                    <Link
                      href="/facilities"
                      className="group flex h-full flex-col items-center rounded-3xl border border-navy/8 bg-cream px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_rgba(0,19,41,0.12)]"
                      aria-label={`${f.title} — see facilities`}
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-sm font-bold leading-snug text-navy">
                        {f.title}
                      </p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery preview mosaic */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionHead
              kicker="Gallery"
              title={
                <>
                  Life at Scholars&apos;, in{" "}
                  <span className="italic text-gold-deep">frames</span>
                </>
              }
            />
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {HOME_GALLERY_PREVIEW.map((img, i) => (
                <Reveal key={img.src} delay={0.04 * (i % 4)} y={20}>
                  <Link
                    href="/gallery"
                    aria-label={`View photo: ${img.alt}`}
                    className={`group relative block w-full overflow-hidden rounded-2xl bg-navy-mist ${
                      i === 0 ? "aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:h-full" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill={i === 0}
                      width={i === 0 ? undefined : 480}
                      height={i === 0 ? undefined : 360}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-10 text-center">
                <Link
                  href="/gallery"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  View full gallery
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CtaBand />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
