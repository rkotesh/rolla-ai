"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10x", label: "Faster than manual work", sub: "on average" },
  { value: "100%", label: "No-code solutions", sub: "no dev required" },
  { value: "24/7", label: "Automations run", sub: "while you sleep" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#534AB7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[#CECBF6] font-semibold text-base md:text-lg">
                {stat.label}
              </span>
              <span className="text-white/50 text-sm mt-1">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
