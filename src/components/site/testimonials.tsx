"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const DURATION = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((d: number) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => go(1), DURATION);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [go, index]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <Quote aria-hidden className="absolute left-1/2 top-14 h-64 w-64 -translate-x-1/2 text-navy/4" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gold">Parents&apos; Opinions</span>
        <h2 className="mt-6 font-display text-3xl font-bold text-navy sm:text-5xl">Trusted by <span className="italic text-gold-deep">families</span> like yours</h2>

        <div className="relative mt-12 min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure key={index} custom={dir} initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -60 }} transition={{ duration: 0.5, ease: [0.21, 0.65, 0.36, 1] }} className="absolute inset-0 flex flex-col items-center justify-start">
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}</div>
              <blockquote className="mt-6 text-balance font-display text-xl font-medium leading-relaxed text-navy sm:text-2xl">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 inline-flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-display text-lg font-bold text-gold">{t.authors.charAt(0)}</span>
                <span className="text-left"><span className="block font-bold text-navy">{t.authors}</span><span className="block text-sm text-muted-foreground">Parents, Scholars&apos;</span></span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-all hover:border-gold hover:bg-gold"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }} aria-label={`Testimonial ${i + 1}`} className={cn("h-2 rounded-full transition-all duration-400", i === index ? "w-8 bg-navy" : "w-2 bg-navy/20 hover:bg-navy/40")} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-all hover:border-gold hover:bg-gold"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
