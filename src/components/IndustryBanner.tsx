"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  { name: "Real Estate", href: "/industries/real-estate", emoji: "🏠" },
  { name: "Marketing Agencies", href: "/industries/marketing-agencies", emoji: "📣" },
  { name: "E-commerce", href: "/industries/ecommerce", emoji: "🛒" },
  { name: "Recruitment", href: "/industries/recruitment", emoji: "🎯" },
  { name: "Coaches & Consultants", href: "/industries/coaches", emoji: "🚀" },
];

export default function IndustryBanner() {
  return (
    <div id="industries" className="py-14 bg-[#F4EFE6]/60 relative overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#2554F6]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-[#6366F1]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="bento-pill mb-8 text-center">
            ↳ Now Serving — 5+ Sectors & Industries Worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={industry.href}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-black/[0.08] text-[#0F1014] hover:border-[#2554F6]/40 hover:bg-[#2554F6]/5 hover:text-[#2554F6] transition-all duration-200 shadow-[0_4px_12px_rgba(15,16,20,0.06)] hover:shadow-[0_8px_20px_rgba(37,84,246,0.12)] group"
                >
                  <span className="text-base">{industry.emoji}</span>
                  <span className="text-sm font-semibold">{industry.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
