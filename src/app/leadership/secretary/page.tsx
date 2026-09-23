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
  title: "Secretary's Message | Scholars' School, Hassan",
  description: "A message from Dr. Chandrashekar, Administrator of Scholars' School, Hassan — on blending the Montessori approach with the academic rigour of the ICSE syllabus.",
};

export default function SecretaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero image="https://scholarshassan.com/img/secretary.jpg" eyebrow="Leadership" title="Secretary's Message" subtitle="Dr. Chandrashekar — Administrator, Scholars' School, Hassan" crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Secretary's Message" }]} />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <div className="lg:sticky lg:top-32">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(0,19,41,0.25)]">
                  <Image src="https://scholarshassan.com/img/secretary.jpg" alt="Dr. Chandrashekar, Administrator of Scholars' School" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6"><p className="font-display text-2xl font-bold text-white">Dr. Chandrashekar</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Administrator</p></div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-3">
              <Reveal><Quote aria-hidden className="h-14 w-14 text-gold" /></Reveal>
              <Reveal delay={0.08}><h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">&ldquo;Every child is <span className="italic text-gold-deep">unique</span>.&rdquo;</h2></Reveal>
              <Reveal delay={0.14}><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Welcome to Scholars&apos;, where we offer a distinctive and enriching educational experience by blending the Montessori approach with the academic rigour of the ICSE syllabus — nurturing each child&apos;s intellectual, emotional and creative development.</p></Reveal>
              <Reveal delay={0.2}><p className="mt-5 leading-relaxed text-muted-foreground">We believe every child deserves an education that not only challenges them academically, but also fosters independence, curiosity and a strong sense of character. Our dedicated faculty guide each student with care and personalised attention, cultivating life skills such as resilience, empathy and leadership.</p></Reveal>
              <Reveal delay={0.26}><p className="mt-5 leading-relaxed text-muted-foreground">We are deeply grateful for the trust and involvement of our parents — it plays a vital role in our shared mission. Together, we aim to create a community where every child can embrace challenges with confidence.</p></Reveal>
              <Reveal delay={0.32}><div className="mt-8 border-l-4 border-gold bg-cream p-6"><p className="font-display text-xl font-semibold italic leading-relaxed text-navy">&ldquo;Together, we aim to create a community where every child can embrace challenges with confidence.&rdquo;</p></div></Reveal>
              <Reveal delay={0.38}><div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="/academics" className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft">Explore our academics<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></Link><Link href="/leadership/principal" className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white">Read the Principal&apos;s message</Link></div></Reveal>
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
