import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  crumbs,
  position = "center",
  tall = false,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  position?: string;
  tall?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy-deep",
        tall ? "min-h-[62svh]" : "min-h-[46svh]"
      )}
    >
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className={cn("object-cover", position)}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-40 sm:px-6 sm:pb-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-white/35"
                    aria-hidden
                  />
                )}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-gold"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold backdrop-blur-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
