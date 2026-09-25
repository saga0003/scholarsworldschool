import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SCHOOL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Scholars' School, Hassan",
  description:
    "Visit Scholars' School, Hassan — Mahalakshmi Layout & Northern Extension campuses. Call +91 81722 65608 or write to infoscholars@gmail.com.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="/images/gallery-9.jpg"
          eyebrow="Contact"
          title="We'd love to meet you"
          subtitle="Two campuses in Hassan. One phone call away."
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />

        {/* Campus cards */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {SCHOOL.campuses.map((campus, i) => (
                <Reveal key={campus.id} delay={0.08 * i}>
                  <article className="flex h-full flex-col rounded-[2rem] border border-navy/8 bg-cream p-8 transition-all duration-300 hover:border-gold hover:shadow-[0_24px_50px_rgba(0,19,41,0.12)] sm:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-gold">
                      <MapPin className="h-3.5 w-3.5" />
                      Campus {i + 1}
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-bold text-navy">
                      {campus.name}
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {campus.address}
                    </p>
                    <dl className="mt-6 space-y-3.5 text-[15px]">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4.5 w-4.5 shrink-0 text-gold-deep" />
                        <dt className="sr-only">Phone</dt>
                        <dd>
                          <a
                            href={campus.phoneHref}
                            className="font-semibold text-navy transition-colors hover:text-gold-deep"
                          >
                            {campus.phone}
                          </a>
                        </dd>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4.5 w-4.5 shrink-0 text-gold-deep" />
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            href={`mailto:${campus.email}`}
                            className="break-all font-semibold text-navy transition-colors hover:text-gold-deep"
                          >
                            {campus.email}
                          </a>
                        </dd>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4.5 w-4.5 shrink-0 text-gold-deep" />
                        <dt className="sr-only">Hours</dt>
                        <dd className="text-muted-foreground">{campus.hours}</dd>
                      </div>
                    </dl>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          campus.name + " Hassan Karnataka"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                      >
                        <Navigation className="h-4.5 w-4.5" />
                        Get directions
                      </a>
                      <Link
                        href="/apply"
                        className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-navy/15 px-6 py-3.5 text-[15px] font-bold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                      >
                        Apply online
                        <ArrowRight className="h-4.5 w-4.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Socials row */}
            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-navy p-8 text-white sm:p-10 lg:flex-row">
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    Follow the Scholars&apos; story
                  </h2>
                  <p className="mt-2 text-white/65">
                    Events, celebrations and everyday joy — as it happens.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { href: SCHOOL.socials.facebook, label: "Facebook", Icon: Facebook },
                    { href: SCHOOL.socials.youtube, label: "YouTube", Icon: Youtube },
                    { href: SCHOOL.socials.instagram, label: "Instagram", Icon: Instagram },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Scholars' on ${label}`}
                      className="grid h-13 w-13 place-items-center rounded-full border border-white/15 p-3.5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Photo strip */}
        <section className="bg-cream pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { src: "/images/hero-campus.jpg", alt: "Campus buildings and grounds" },
                { src: "/images/gallery-6.jpg", alt: "Pink tower in progress" },
                { src: "/images/gallery-13.jpg", alt: "Sandpaper letter practice" },
                { src: "/images/trust-event.jpg", alt: "School celebration" },
              ].map((img, i) => (
                <Reveal key={img.src} delay={0.05 * i}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-mist">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
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
