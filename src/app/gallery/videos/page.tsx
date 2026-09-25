import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SCHOOL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Videos | Scholars' School, Hassan",
  description:
    "Watch Scholars' School, Hassan in motion — event videos, campus life and celebrations on our official YouTube and social channels.",
};

const CHANNELS = [
  {
    Icon: Youtube,
    label: "YouTube",
    note: "Events, annual day & campus videos",
    href: SCHOOL.socials.youtube,
    accent: "from-red-600 to-red-500",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    note: "Live updates & photo stories",
    href: SCHOOL.socials.facebook,
    accent: "from-blue-700 to-blue-600",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    note: "Everyday moments in frames",
    href: SCHOOL.socials.instagram,
    accent: "from-pink-600 to-orange-500",
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="/images/gallery-20.jpg"
          eyebrow="Gallery · Videos"
          title="Scholars' in motion"
          subtitle="Event videos, campus life and celebrations — on our official channels."
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Gallery", href: "/gallery" },
            { label: "Videos" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {CHANNELS.map((ch, i) => (
                <Reveal key={ch.label} delay={0.06 * i}>
                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full overflow-hidden rounded-[2rem] border border-navy/8 bg-cream transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_24px_50px_rgba(0,19,41,0.13)]"
                    aria-label={`Watch Scholars' on ${ch.label}`}
                  >
                    <div
                      className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${ch.accent}`}
                    >
                      <ch.Icon className="h-16 w-16 text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-115" />
                      <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-7">
                      <h2 className="font-display text-xl font-bold text-navy">
                        {ch.label}
                      </h2>
                      <p className="mt-2 text-[15px] text-muted-foreground">
                        {ch.note}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Campus visit nudge */}
            <Reveal delay={0.15}>
              <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-2">
                <div className="p-9 sm:p-12">
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">
                    Nothing beats a{" "}
                    <span className="italic text-gold">real visit</span>
                  </h2>
                  <p className="mt-4 leading-relaxed text-white/75">
                    Walk our corridors, meet our educators and watch the classrooms come
                    alive. We welcome families at both campuses, Monday to Saturday.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={SCHOOL.phoneHref}
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-navy transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Phone className="h-5 w-5" />
                      Call {SCHOOL.phone}
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Scholars+School+Mahalakshmi+Layout+Hassan+Karnataka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-gold hover:bg-white/10"
                    >
                      <MapPin className="h-5 w-5" />
                      Get directions
                    </a>
                  </div>
                </div>
                <div className="relative min-h-64">
                  <Image
                    src="/images/hero-campus.jpg"
                    alt="Scholars' School campus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent lg:bg-gradient-to-r" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
