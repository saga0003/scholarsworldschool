"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ClipboardList } from "lucide-react";
import { SCHOOL } from "@/lib/site-data";

export function MobileCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/apply") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ duration: 0.35, ease: [0.21, 0.65, 0.36, 1] }} className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-navy-deep/95 px-4 py-3 backdrop-blur-md sm:hidden" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
          <div className="flex items-center gap-3">
            <a href={SCHOOL.phoneHref} className="grid h-12 w-14 place-items-center rounded-xl border border-white/20 text-white transition-colors hover:border-gold" aria-label={`Call ${SCHOOL.phone}`}>
              <Phone className="h-5 w-5" />
            </a>
            <a href="/apply" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gold text-base font-bold text-navy">
              <ClipboardList className="h-5 w-5" />Apply Online
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
