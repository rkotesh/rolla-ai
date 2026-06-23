"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function IndiaAdvantageBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-[#0D0E12] border-y border-[#1e2028] py-2.5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.6rem] text-[#818CF8] uppercase tracking-widest">
              ↳ Announcement
            </span>
            <span className="text-[#1e2028]">|</span>
            <p className="text-xs text-[#C4C9D4] font-sans">
              India-based elite engineering — typically{" "}
              <span className="text-[#A5B4FC] font-semibold">40–60% less</span> than US or UK agencies. Agency quality. Startup prices.
            </p>
          </div>
          <Link
            href="#pricing"
            className="font-mono text-[0.6rem] text-[#818CF8] hover:text-[#A5B4FC] uppercase tracking-widest transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            View Pricing ↳
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
