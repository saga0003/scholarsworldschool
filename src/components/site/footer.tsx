"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Youtube,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { SCHOOL, FOOTER_QUICK_LINKS, NAV_LINKS } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-deep text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="relative h-24 w-64 sm:h-28 sm:w-72">
            <Image
              src="/images/logo-white.png"
              alt="Scholars' — An Initiative of Puttu Education Trust (R)"
              fill
              sizes="288px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-white/65">
            A nurturing, child-centred learning environment rooted in Italian-style
            Montessori and integrated with the rigorous ICSE syllabus — shaping
            well-rounded individuals ready to make a positive impact in the world.
          </p>
          <div className="mt-6 flex items-center gap-3">
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
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h3 className="font-display text-lg font-bold text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-2.5">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div className="lg:col-span-2">
          <h3 className="font-display text-lg font-bold text-gold">Explore</h3>
          <ul className="mt-5 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <h3 className="font-display text-lg font-bold text-gold">Get in Touch</h3>
          <ul className="mt-5 space-y-5">
            {SCHOOL.campuses.map((campus) => (
              <li key={campus.id} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/8 text-gold">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <div className="text-[15px] leading-relaxed text-white/65">
                  <p className="font-semibold text-white">{campus.name}</p>
                  <p>{campus.address}</p>
                  <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                    <a
                      href={campus.phoneHref}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
                    >
                      <Phone className="h-3.5 w-3.5" /> {campus.phone}
                    </a>
                    <a
                      href={`mailto:${campus.email}`}
                      className="inline-flex items-center gap-1.5 break-all transition-colors hover:text-gold"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0" /> {campus.email}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-white/50 sm:px-6 md:flex-row">
          <p>
            © {year} Scholars&apos; School, Hassan · {SCHOOL.trust} · All rights
            reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="font-display italic text-gold">Infinite potential…</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-gold hover:text-gold"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
