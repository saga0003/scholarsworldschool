import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Images, Info, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Announcements } from "@/components/site/announcements";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { CtaBand } from "@/components/site/cta-band";
import { PROGRAMS } from "@/lib/site-data";

const EXPLORE = [
  {
    title: "About Scholars'",
    note: "Our story, philosophy and leadership",
    href: "/about",
    image: "https://scholarshassan.com/img/abt%20us.jpg",
    icon: Info,
  },
  {
    title: "Academics",
    note: "Montessori through High School",
    href: "/academics",
    image: "https://scholarshassan.com/img/6.png",
    icon: BookOpen,
  },
  {
    title: "Facilities",
    note: "Classrooms, labs, library, sport and transport",
    href: "/facilities",
    image: "https://scholarshassan.com/img/home-welcome.jpg",
    icon: Building2,
  },
  {
    title: "Gallery",
    note: "Photos and videos from life on campus",
    href: "/gallery",
    image: "https://scholarshassan.com/img/20.png",
    icon: Images,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Announcements />

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-navy-mist px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-navy">
                Explore Scholars&apos;
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
                Everything has its <span className="italic text-gold-deep">own place</span>
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                Choose where you want to go. Each section opens as a dedicated page with the full information.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {EXPLORE.map(({ title, note, href, image, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative min-h-[300px] overflow-hidden rounded-[2rem] bg-navy"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy/5" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-navy">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-bold text-white">{title}</h3>
                    <div className="mt-2 flex items-end justify-between gap-5">
                      <p className="max-w-md text-sm leading-relaxed text-white/75">{note}</p>
                      <span className="inline-flex shrink-0 items-center gap-2 font-bold text-gold">
                        Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-[.18em] text-gold-deep">Academic Journey</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">Choose a learning stage</h2>
              </div>
              <Link href="/academics" className="inline-flex items-center gap-2 font-bold text-navy">
                View academics overview <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROGRAMS.map((program) => (
                <Link
                  key={program.id}
                  href={program.href}
                  className="group rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
                >
                  <p className="text-xs font-extrabold uppercase tracking-wider text-gold-deep">{program.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy">{program.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{program.headline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy">
                    Open page <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center sm:px-6 md:flex-row md:text-left">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-navy">Planning a campus visit?</p>
                <p className="mt-1 text-sm text-muted-foreground">Find contact details and campus information on the Contact page.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 font-bold text-navy transition-colors hover:border-gold hover:bg-gold">
              Contact & directions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
