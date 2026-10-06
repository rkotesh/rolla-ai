"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

const tools = [
  { name: "Java", code: "LANG", letter: "Ja", desc: "Enterprise-grade high-throughput programming", core: true, color: "#DC2626" },
  { name: "Spring Boot", code: "WEB", letter: "Sb", desc: "Hardened microservice backend web framework", core: true, color: "#16A34A" },
  { name: "React / Next.js", code: "UI", letter: "R", desc: "Interactive reactive frontend UI platform", core: true, color: "#0284C7" },
  { name: "Node.js", code: "RUNTIME", letter: "N", desc: "High-concurrency event-driven runtime", core: true, color: "#15803D" },
  { name: "PostgreSQL & Mongo", code: "DB", letter: "DB", desc: "ACID-compliant relational & document storage", core: false, color: "#2554F6" },
  { name: "Tailwind & Motion", code: "DESIGN", letter: "TW", desc: "Bespoke styling and fluid spring physics", core: false, color: "#6366F1" },
];

export default function Tools() {
  return (
    <section id="tools" className="py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2554F6]/4 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6366F1]/4 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bento-pill mb-5">↳ Battle-Tested Tooling</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0F1014] leading-[1.08] tracking-tight">
            Powered by Modern,{" "}
            <span className="font-serif italic font-normal text-[#2554F6]">
              Production-Grade
            </span>{" "}
            Technologies
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -5 }}
            >
              <SpotlightCard
                className="bg-white rounded-[26px] border border-black/[0.07] p-7 shadow-[0_8px_28px_rgba(15,16,20,0.05)] hover:shadow-[0_16px_40px_rgba(15,16,20,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[210px] group cursor-pointer"
                spotlightColor="rgba(37,84,246,0.06)"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Letter Badge */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-[0_4px_12px_rgba(0,0,0,0.18)] group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.letter}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.65rem] text-[#686C78] uppercase tracking-wider bg-[#F4EFE6] rounded-full px-2.5 py-1">
                        {tool.code}
                      </span>
                      {tool.core && (
                        <span className="font-mono text-[0.6rem] text-white bg-[#2554F6] rounded-full px-2.5 py-1 uppercase tracking-wider font-semibold">
                          CORE
                        </span>
                      )}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-[#0F1014] group-hover:text-[#2554F6] transition-colors duration-200 mb-2"
                  >
                    {tool.name}
                  </h3>
                  <p className="text-sm text-[#686C78] leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
