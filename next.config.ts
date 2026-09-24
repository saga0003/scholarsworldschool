import type { NextConfig } from "next";

const assetRewrites = [
  ["/images/hero-campus.jpg", "https://scholarshassan.com/img/home-welcome.jpg"],
  ["/images/about-students.jpg", "https://scholarshassan.com/img/abt%20us.jpg"],
  ["/images/trust-event.jpg", "https://scholarshassan.com/img/Mission.JPG"],
  ["/images/leader-secretary.jpg", "https://scholarshassan.com/img/secretary.jpg"],
  ["/images/program-montessori.jpg", "https://scholarshassan.com/img/montes.png"],
  ["/images/program-primary.jpg", "https://scholarshassan.com/img/primarysch.png"],
  ["/images/program-higherprimary.jpg", "https://scholarshassan.com/img/higherpri.png"],
  ["/images/program-highschool.jpg", "https://scholarshassan.com/img/highschool.png"],
  ["/images/logo-mark.png", "https://scholarshassan.com/img/02%20%281%29.png"],
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 18, 19, 20].map(
    (n) => [`/images/gallery-${n}.jpg`, `https://scholarshassan.com/img/${n}.png`]
  ),
] as const;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "scholarshassan.com" },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: assetRewrites.map(([source, destination]) => ({ source, destination })),
      fallback: [],
    };
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
