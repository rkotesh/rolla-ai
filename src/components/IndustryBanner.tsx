"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  { name: "Real Estate", href: "/industries/real-estate", code: "IND-01" },
  { name: "Marketing Agencies", href: "/industries/marketing-agencies", code: "IND-02" },
  { name: "E-commerce", href: "/industries/ecommerce", code: "IND-03" },
  { name: "Recruitment", href: "/industries/recruitment", code: "IND-04" },
  { name: "Coaches & Consultants", href: "/industries/coaches", code: "IND-05" },
];

export default function IndustryBanner() {
  return (
    <div id="industries" className="py-16 bg-rolla-bg border-y border-[#1e2028] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="sys-label mb-8">
            ↳ Now Serving — Over 5 Sectors & Industries Worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={industry.href}
                  className="flex items-center gap-2 px-4 py-2 border border-[#1e2028] text-[#C4C9D4] hover:border-[#6366F1]/55 hover:text-white hover:bg-[#0D0E12] transition-all duration-200 group"
                >
                  <span className="font-mono text-[0.55rem] text-[#818CF8]/70 group-hover:text-[#818CF8] transition-colors uppercase tracking-wider">
                    {industry.code}
                  </span>
                  <span className="text-xs font-sans font-medium">
                    {industry.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
