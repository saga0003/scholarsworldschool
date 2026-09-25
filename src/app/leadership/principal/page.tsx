import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Principal's Message | Scholars' School, Hassan",
  description:
    "A message from the Principal of Scholars' School, Hassan — on helping every child explore their potential and develop a love for learning.",
};

export default function PrincipalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="/images/hero-campus.jpg"
          eyebrow="Leadership"
          title="Principal's Message"
          subtitle="Scholars' School, Hassan"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Principal's Message" },
          ]}
        />

        {/* Gold quote hero card + photo strip */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold to-gold-deep p-8 text-navy shadow-[0_30px_80px_rgba(253,200,0,0.3)] sm:p-12">
                <Quote
                  aria-hidden
                  className="absolute -right-6 -top-6 h-40 w-40 text-navy/10"
                />
                <div className="relative">
                  <h2 className="max-w-3xl text-balance font-display text-2xl font-bold leading-snug sm:text-4xl">
                    &ldquo;Helping every child explore their potential and develop a
                    love for learning.&rdquo;
                  </h2>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-navy font-display text-xl font-bold text-gold">
                      P
                    </span>
                    <div>
                      <p className="font-display text-xl font-bold">The Principal</p>
                      <p className="text-sm font-semibold uppercase tracking-wider text-navy/60">
                        Scholars&apos; School, Hassan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Message — trimmed */}
            <div className="mx-auto mt-14 max-w-3xl">
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Welcome to Scholars&apos;, where our passionate team of educators creates
                  an environment that challenges students academically while fostering
                  creativity, curiosity and confidence.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  With a curriculum that blends core subjects with the arts, music and
                  technology, we ensure each child has the opportunity to discover their
                  unique strengths and interests. We focus on developing not only academic
                  skills but also character, responsibility and empathy — preparing our
                  students to thrive both inside and outside the classroom.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  As we work alongside families and the community, we strive to make every
                  school year an exciting and rewarding experience. Together, we inspire
                  students to{" "}
                  <span className="font-semibold text-navy">
                    aim high, dream big and achieve their very best.
                  </span>
                </p>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/academics"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                  >
                    Explore our academics
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/leadership/secretary"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                  >
                    Read the Secretary&apos;s message
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Photo strip */}
            <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { src: "/images/about-students.jpg", alt: "Students growing together" },
                { src: "/images/gallery-16.jpg", alt: "Exploring letters and words" },
                { src: "/images/gallery-20.jpg", alt: "Joyful everyday moments" },
                { src: "/images/gallery-9.jpg", alt: "Focused hands-on practice" },
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
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
