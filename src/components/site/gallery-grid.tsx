"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryItem = { src: string; alt: string };

export function GalleryGrid({
  images,
  aspect = "aspect-[4/3]",
  className = "",
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: {
  images: GalleryItem[];
  aspect?: string;
  className?: string;
  sizes?: string;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) =>
      setLightbox((i) =>
        i === null ? null : (i + d + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4",
          className
        )}
      >
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setLightbox(i)}
            aria-label={`Open photo: ${img.alt}`}
            className={cn(
              "group relative block w-full overflow-hidden rounded-2xl bg-navy-mist",
              aspect,
              i % 7 === 0 && "sm:col-span-2 sm:row-span-2"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={640}
              height={480}
              sizes={sizes}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 right-3 translate-y-3 rounded-lg bg-white/95 px-3 py-2 text-left text-xs font-semibold text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={860}
                height={645}
                className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
                priority
              />
              <figcaption className="mt-4 text-center text-sm font-medium text-white/80">
                {images[lightbox].alt} · {lightbox + 1} / {images.length}
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <Images className="h-4 w-4" />
        Tap any photo to view it full-screen
      </p>
    </>
  );
}
