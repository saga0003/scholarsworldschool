import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { WHY_US, TRUST_CHIPS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Scholars' School, Hassan",
  description:
    "Scholars' School, Hassan — an initiative of Puttu Education Trust (R), affiliated to CISCE, New Delhi. A nurturing, child-centred learning environment from Montessori to High School.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="/images/about-students.jpg"
          eyebrow="About Us"
          title="A school built around the child"
          subtitle="An initiative of Puttu Education Trust (R), affiliated to CISCE, New Delhi."
          crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        {/* Welcome split — big photo, few words */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(0,19,41,0.22)]">
                  <Image
                    src="/images/hero-campus.jpg"
                    alt="Scholars' School campus life"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-4 hidden rounded-2xl bg-navy px-6 py-5 text-white shadow-2xl sm:block lg:-left-8">
                  <p className="font-display text-3xl font-bold text-gold">KA495</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-white/65">
                    CISCE Affiliation
                  </p>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                  Welcome to Scholars&apos;
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                  Where children love to{" "}
                  <span className="italic text-gold-deep">learn</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  At Scholars&apos; School we provide a nurturing, dynamic environment that
                  fosters academic and personal growth. Through innovative teaching and
                  holistic development, we shape well-rounded individuals ready to make a
                  positive impact in the world.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We prepare students not just for exams —{" "}
                  <span className="font-semibold text-navy">for life itself.</span>
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-4">
                  {TRUST_CHIPS.map((chip) => (
                    <div key={chip.label} className="bg-white px-4 py-4 text-center">
                      <div className="font-display text-2xl font-bold text-navy">
                        {chip.value}
                      </div>
                      <div className="mt-0.5 text-xs font-medium text-muted-foreground">
                        {chip.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Mission / Vision as photo cards */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  icon: Target,
                  label: "Our Mission",
                  text: "A nurturing, child-centred learning environment where each child's intellectual, emotional and creative growth is guided with care — building a strong foundation for lifelong learning.",
                  image: "/images/gallery-12.jpg",
                  alt: "Child focused on classroom materials",
                },
                {
                  icon: Eye,
                  label: "Our Vision",
                  text: "To empower every student with critical thinking, creativity and leadership — so they step into the world as confident, compassionate individuals ready to thrive in an ever-changing future.",
                  image: "/images/trust-event.jpg",
                  alt: "Students celebrating on stage",
                },
              ].map((card, i) => (
                <Reveal key={card.label} delay={0.08 * i}>
                  <article className="group relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[460px]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy/10" />
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                      <span className="inline-flex items-center gap-2.5 rounded-full bg-gold px-4 py-2 text-sm font-extrabold uppercase tracking-wider text-navy">
                        <card.icon className="h-4 w-4" />
                        {card.label}
                      </span>
                      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/90 sm:text-base">
                        {card.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values — compact chips */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                  What we stand for
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
                  Six promises to every{" "}
                  <span className="italic text-gold-deep">family</span>
                </h2>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={0.05 * i}>
                  <div className="flex h-full items-start gap-4 rounded-3xl border border-navy/8 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_rgba(0,19,41,0.10)]">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden
                      >
                        {w.icon === "Infinity" && (
                          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
                        )}
                        {w.icon === "HeartHandshake" && (
                          <path d="M19 14c1.5-1.5 3-3.2 3-5.5A4.5 4.5 0 0 0 17.5 4c-1.8 0-3.4 1-4.2 2.5a1.6 1.6 0 0 1-2.6 0A4.9 4.9 0 0 0 6.5 4 4.5 4.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7 7-7Z" />
                        )}
                        {w.icon === "Sparkles" && (
                          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
                        )}
                        {w.icon === "ShieldCheck" && (
                          <path d="M20 13c0 5-3.5 7.5-7.7 9a.6.6 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1v7Zm-9.3 1.9 4.6-4.6" />
                        )}
                        {w.icon === "Lightbulb" && (
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5A6 6 0 1 0 6 8c0 1.5.5 2.6 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6m-5 3h4" />
                        )}
                        {w.icon === "Users" && (
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m18-2v-2a4 4 0 0 0-3-3.9M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm7 14v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                        )}
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="bg-cream pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { src: "/images/gallery-9.jpg", alt: "Hands-on classroom practice" },
                { src: "/images/gallery-13.jpg", alt: "Learning letters by touch" },
                { src: "/images/gallery-20.jpg", alt: "Everyday joy at school" },
                { src: "/images/leader-secretary.jpg", alt: "Our leadership on campus" },
              ].map((img, i) => (
                <Reveal key={img.src} delay={0.05 * i}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-mist">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/gallery"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  See more moments
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/leadership/secretary"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy/15 px-8 py-4 text-base font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                >
                  Meet our leaders
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
