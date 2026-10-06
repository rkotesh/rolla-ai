"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

export default function IndiaAdvantageBanner() {
  return (
    <div className="py-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 border border-black/[0.08] rounded-2xl p-4 sm:px-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2554F6]/10 text-[#2554F6] text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              Global Engineering Hub
            </span>
            <p className="text-sm font-semibold text-[#0F1014]">
              India-based elite engineering — typically <span className="text-[#2554F6] font-bold">40–60% less</span> than US/UK agencies. Zero compromise on quality.
            </p>
          </div>

          <Link
            href="#pricing"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0F1014] hover:text-[#2554F6] whitespace-nowrap bg-[#FAF7F2] px-4 py-2 rounded-full border border-black/[0.08] hover:border-[#2554F6] transition-all"
          >
            <span>Compare Rates</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
