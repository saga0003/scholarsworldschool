"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HERO_SLIDES, TRUST_CHIPS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const DURATION = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % HERO_SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, DURATION);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next, paused]);

  const slide = HERO_SLIDES[index];

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt=""
              aria-hidden
              className="animate-kenburns h-full w-full object-cover"
            />
            <div className="hero-gradient absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep/90 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-28 pt-44 sm:px-6 lg:pb-32">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
                exit: { opacity: 0, y: -18, transition: { duration: 0.4 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 py-1.5 pl-2 pr-5 backdrop-blur-sm"
              >
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-navy">
                  {slide.eyebrow}
                </span>
                <span className="text-sm font-medium text-white/90">
                  An Initiative of Puttu Education Trust (R)
                </span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.65, 0.36, 1] } },
                }}
                className="text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-[4.4rem]"
              >
                {slide.pre}{" "}
                <span className="text-gold italic">{slide.highlight}</span>{" "}
                {slide.post}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  href={slide.primaryCta.href}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-navy shadow-[0_10px_30px_rgba(253,200,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(253,200,0,0.55)]"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/35 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-white/10"
                >
                  {slide.secondaryCta.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4 lg:mt-20"
        >
          {TRUST_CHIPS.map((chip) => (
            <div key={chip.label} className="bg-navy-deep/45 px-5 py-4">
              <div className="font-display text-3xl font-bold text-gold">
                {chip.value}
              </div>
              <div className="mt-0.5 text-[13px] font-medium text-white/75">
                {chip.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-24 right-6 z-20 hidden items-center gap-2 sm:flex lg:bottom-28">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-navy"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-navy"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-navy"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:left-6 sm:translate-x-0 lg:bottom-28">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === index ? "w-10 bg-gold" : "w-4 bg-white/35 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
