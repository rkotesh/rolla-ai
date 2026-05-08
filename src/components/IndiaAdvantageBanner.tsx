"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndiaAdvantageBanner() {
  return (
    <div className="bg-[#534AB7]/5 border-y border-[#534AB7]/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-sm font-medium text-gray-700">
            <span className="mr-2">🇮🇳</span>
            India-based team · Agency-quality automation · Startup-friendly pricing
            <span className="hidden sm:inline mx-2">—</span>
            <span className="block sm:inline text-gray-500 font-normal">
              typically 40–60% less than US or UK agencies
            </span>
          </p>
          <Link 
            href="#pricing" 
            className="text-xs font-bold text-[#534AB7] hover:text-[#43399b] flex items-center gap-1 transition-colors group"
          >
            See Pricing
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
