"use client";

import { motion } from "framer-motion";

const items = [
  "Bespoke Enterprise Web Applications",
  "Java & Spring Boot Architecture",
  "High-Performance React & Next.js",
  "Zero Templates · 100% Bespoke Code",
  "Sub-Second Core Web Vitals",
  "Hardened REST & GraphQL APIs",
  "Frictionless Payment Gateways",
  "Relational PostgreSQL at Scale",
];

export default function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden bg-[#F4EFE6]/80 backdrop-blur-sm border-y border-black/[0.07] py-3.5 select-none">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-semibold text-[#0F1014] tracking-wider uppercase font-mono">
                {text}
              </span>
              <span className="text-[#2554F6] text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
