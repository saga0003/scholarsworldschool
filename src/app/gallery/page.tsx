import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { PageHero } from "@/components/site/page-hero";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { Reveal } from "@/components/site/reveal";
import { GALLERY_IMAGES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Photo Gallery | Scholars' School, Hassan",
  description:
    "Life at Scholars' School, Hassan in frames — classrooms, celebrations, competitions and everyday joy across our two campuses.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image="/images/gallery-12.jpg"
          eyebrow="Gallery"
          title="Life at Scholars', in frames"
          subtitle="Classrooms, celebrations and everyday joy — the moments that make our campuses come alive."
          crumbs={[{ label: "Home", href: "/" }, { label: "Photo Gallery" }]}
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <GalleryGrid
              images={GALLERY_IMAGES}
              aspect="aspect-[4/3]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </section>

        {/* Videos teaser */}
        <section className="bg-navy py-16 text-white lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-6 lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
                Prefer watching?
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                See our school in motion — visit the video gallery
              </h2>
            </div>
            <Link
              href="/gallery/videos"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-base font-bold text-navy shadow-[0_10px_30px_rgba(253,200,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(253,200,0,0.55)]"
            >
              Watch videos
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
