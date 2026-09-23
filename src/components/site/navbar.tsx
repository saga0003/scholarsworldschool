"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Youtube,
  Instagram,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { SCHOOL, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode; }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/85 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy">
      {children}
    </a>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("hidden overflow-hidden bg-navy-deep text-white/85 transition-all duration-500 lg:block", scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px]">
          <div className="flex items-center gap-6">
            <a href={`mailto:${SCHOOL.emailTop}`} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" />{SCHOOL.emailTop}
            </a>
            <a href={SCHOOL.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" />{SCHOOL.phone}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-xs tracking-wide text-white/55">{SCHOOL.affiliation}</span>
            <div className="flex items-center gap-2">
              <SocialIcon href={SCHOOL.socials.facebook} label="Facebook"><Facebook className="h-3.5 w-3.5" /></SocialIcon>
              <SocialIcon href={SCHOOL.socials.youtube} label="YouTube"><Youtube className="h-3.5 w-3.5" /></SocialIcon>
              <SocialIcon href={SCHOOL.socials.instagram} label="Instagram"><Instagram className="h-3.5 w-3.5" /></SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <nav className={cn("transition-all duration-500", scrolled ? "bg-navy/95 shadow-[0_10px_40px_rgba(0,19,41,0.35)] backdrop-blur-md" : "bg-navy/80 backdrop-blur-sm")} aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:py-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Scholars' School — home">
            <Image src="https://scholarshassan.com/img/02%20%281%29.png" alt="" aria-hidden width={56} height={33} priority className="h-auto w-11 sm:w-12" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[22px] font-bold tracking-wide text-white sm:text-2xl">Scholars<span className="text-gold">&rsquo;</span></span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-[10px]">Puttu Education Trust (R)</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <div key={link.label} className="group relative">
                  <Link href={link.href} className={cn("relative flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300", active ? "text-gold" : "text-white/85 hover:text-white")}>
                    {link.label}
                    {link.children && <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:rotate-180" aria-hidden />}
                    {active && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  </Link>

                  {link.children && (
                    <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-deep/98 shadow-[0_24px_60px_rgba(0,10,25,0.5)] backdrop-blur-xl">
                        <div className="flex flex-col p-2">
                          {link.children.map((child) => (
                            <Link key={child.href} href={child.href} className={cn("rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-white/10", pathname === child.href ? "bg-white/5" : "")}>
                              <span className={cn("block text-[15px] font-semibold", pathname === child.href ? "text-gold" : "text-white")}>{child.label}</span>
                              {child.note && <span className="mt-0.5 block text-xs text-white/50">{child.note}</span>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/apply" className={cn("group ml-3 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[15px] font-bold text-navy shadow-[0_6px_20px_rgba(253,200,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(253,200,0,0.5)]", isActive("/apply") && "ring-2 ring-white/60 ring-offset-2 ring-offset-navy")}>
              Apply Now<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }} className="fixed inset-0 top-[68px] z-40 flex flex-col bg-navy-deep/98 backdrop-blur-xl lg:hidden">
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <div className="flex flex-col">
                {NAV_LINKS.map((link, i) => {
                  const hasChildren = !!link.children;
                  const isOpen = expanded === link.label;
                  return (
                    <motion.div key={link.label} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i, duration: 0.3 }} className="border-b border-white/10">
                      <div className="flex items-center">
                        <Link href={link.href} onClick={() => setOpen(false)} className={cn("flex-1 py-4 font-display text-2xl font-semibold", isActive(link.href) ? "text-gold" : "text-white")}>{link.label}</Link>
                        {hasChildren && (
                          <button onClick={() => setExpanded(isOpen ? null : link.label)} aria-label={`${isOpen ? "Collapse" : "Expand"} ${link.label} submenu`} aria-expanded={isOpen} className="grid h-11 w-11 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10">
                            <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180 text-gold")} />
                          </button>
                        )}
                      </div>
                      <AnimatePresence initial={false}>
                        {hasChildren && isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                            <div className="flex flex-col gap-1 pb-4 pl-4">
                              {link.children!.map((child) => (
                                <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className={cn("flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-medium transition-colors", pathname === child.href ? "bg-white/10 text-gold" : "text-white/75 hover:bg-white/5 hover:text-white")}>
                                  {child.label}<ArrowRight className="h-4 w-4 opacity-50" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              <motion.a href="/apply" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} onClick={() => setOpen(false)} className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-gold py-4 text-lg font-bold text-navy">
                Apply Now <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 space-y-3 text-white/70">
                <a href={SCHOOL.phoneHref} className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> {SCHOOL.phone}</a>
                <a href={`mailto:${SCHOOL.emailTop}`} className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> {SCHOOL.emailTop}</a>
                <div className="flex items-center gap-3 pt-2">
                  <SocialIcon href={SCHOOL.socials.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialIcon>
                  <SocialIcon href={SCHOOL.socials.youtube} label="YouTube"><Youtube className="h-4 w-4" /></SocialIcon>
                  <SocialIcon href={SCHOOL.socials.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
