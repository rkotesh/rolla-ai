"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Marketing Agencies", href: "/industries/marketing-agencies" },
  { name: "E-commerce", href: "/industries/ecommerce" },
  { name: "Recruitment", href: "/industries/recruitment" },
  { name: "Coaches & Consultants", href: "/industries/coaches" },
];

export default function IndustryBanner() {
  return (
    <div id="industries" className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            We specialize in
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={industry.href}
                  className="px-6 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 font-medium hover:bg-[#534AB7] hover:text-white hover:border-[#534AB7] transition-all duration-200 block text-sm"
                >
                  {industry.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
