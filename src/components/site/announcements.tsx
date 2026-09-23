"use client";

import { Sparkles, Megaphone } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/site-data";

export function Announcements() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  return (
    <div className="relative z-20 border-b border-navy/10 bg-gold">
      <div className="mx-auto flex max-w-7xl items-stretch">
        <div className="hidden shrink-0 items-center gap-2 bg-navy px-5 py-3 text-sm font-bold text-gold sm:flex">
          <Megaphone className="h-4 w-4" />
          News &amp; Events
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {items.map((text, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap px-8 py-3 text-sm font-semibold text-navy">
                <Sparkles className="h-3.5 w-3.5 text-navy/60" />
                {text}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gold to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gold to-transparent" />
        </div>
      </div>
    </div>
  );
}
