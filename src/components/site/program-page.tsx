import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { Reveal } from "@/components/site/reveal";
import { PROGRAMS, type Program } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProgramPage({ program }: { program: Program }) {
  const others = PROGRAMS.filter((p) => p.id !== program.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image={program.heroImage}
          eyebrow={program.kicker}
          title={program.title}
          subtitle={program.intro}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics" },
            { label: program.label },
          ]}
          tall
        />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {program.chips.map((chip, i) => (
                <Reveal key={chip} delay={0.06 * i}>
                  <div className="flex h-full items-center gap-3.5 rounded-2xl border border-navy/8 bg-cream px-5 py-4 transition-all duration-300 hover:border-gold hover:shadow-md">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                      <Check className="h-5 w-5" />
                    </span>
                    <p className="text-[15px] font-bold leading-snug text-navy">{chip}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_30px_70px_rgba(0,19,41,0.16)] sm:p-6">
                  <Image
                    src={program.collageImage}
                    alt={`${program.title} at a glance`}
                    width={900}
                    height={640}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                  {program.headline}
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                  The Scholars&apos; <span className="italic text-gold-deep">difference</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 leading-relaxed text-muted-foreground">{program.intro}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/apply"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-navy shadow-[0_10px_30px_rgba(253,200,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(253,200,0,0.55)]"
                  >
                    Apply for this program
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/facilities"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                  >
                    See our facilities
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                  In pictures
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                  {program.label} — <span className="italic text-gold-deep">in action</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="mt-12">
              <GalleryGrid
                images={program.images}
                aspect="aspect-[4/3]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">Continue the journey</h2>
                <p className="mt-1 text-muted-foreground">Every stage builds on the one before it.</p>
              </div>
              <Link href="/academics" className="group inline-flex items-center gap-2 text-sm font-bold text-navy">
                All programs
                <ArrowRight className="h-4 w-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.id} delay={0.06 * i}>
                  <Link
                    href={p.href}
                    className="group relative block h-56 overflow-hidden rounded-3xl"
                    aria-label={`Explore ${p.label}`}
                  >
                    <Image
                      src={p.images[0].src}
                      alt={p.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent")} />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold">{p.kicker}</p>
                        <p className="mt-1 font-display text-xl font-bold text-white">{p.label}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
