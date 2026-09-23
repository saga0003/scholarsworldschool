import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { PROGRAMS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Academics | Scholars' School, Hassan",
  description:
    "Four learning stages at Scholars' School, Hassan — Italian-style Montessori, Primary, Higher Primary and High School, blending the Montessori approach with the ICSE syllabus.",
};

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="https://scholarshassan.com/img/6.png"
          eyebrow="Academics"
          title="One journey. Four stages."
          subtitle="From the first classroom step to the final board exam — every stage builds on the last."
          crumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {PROGRAMS.map((p, i) => (
                <Reveal key={p.id} delay={0.06 * i}>
                  <Link href={p.href} className="group grid h-full overflow-hidden rounded-[2rem] border border-navy/8 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_50px_rgba(0,19,41,0.14)] sm:grid-cols-2" aria-label={`Explore ${p.label}`}>
                    <div className="relative h-64 overflow-hidden sm:h-full sm:min-h-[300px]">
                      <Image src={p.images[0].src} alt={p.images[0].alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-108" />
                      <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold backdrop-blur-sm">{p.kicker}</span>
                    </div>
                    <div className="flex flex-col justify-center p-7">
                      <h2 className="font-display text-2xl font-bold text-navy">{p.label}</h2>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-deep">{p.headline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.intro}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy">Explore the program<ArrowRight className="h-4 w-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5" /></span>
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
