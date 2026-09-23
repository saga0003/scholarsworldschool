import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://scholarshassan.com"),
  title: "Scholars' School, Hassan | ICSE School — Montessori to High School",
  description:
    "Scholars' School, Hassan — an initiative of Puttu Education Trust (R). Affiliated to CISCE, New Delhi (KA495). Italian-style Montessori blended with the ICSE syllabus across two campuses. Admissions open — apply online today.",
  keywords: [
    "Scholars School Hassan",
    "ICSE school Hassan",
    "Montessori Hassan",
    "Puttu Education Trust",
    "CISCE KA495",
    "best school Hassan Karnataka",
    "admissions Hassan school",
  ],
  authors: [{ name: "Scholars' School, Hassan" }],
  icons: {
    icon: "/images/logo-mark.png",
  },
  openGraph: {
    title: "Scholars' School, Hassan | Infinite Potential",
    description:
      "A nurturing, child-centered learning environment blending Italian-style Montessori with the academic rigour of the ICSE syllabus. Two campuses in Hassan. Admissions open.",
    url: "https://scholarshassan.com",
    siteName: "Scholars' School, Hassan",
    type: "website",
    images: [{ url: "/images/hero-campus.jpg", width: 1205, height: 907 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholars' School, Hassan | Infinite Potential",
    description:
      "Italian-style Montessori blended with the ICSE syllabus. Two campuses in Hassan, Karnataka. Admissions open.",
    images: ["/images/hero-campus.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#002147",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
