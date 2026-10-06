"use client";

import { motion } from "framer-motion";
import { X, Check, AlertCircle, Sparkles } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export default function ProblemSolution() {
  const problems = [
    "Sluggish 4s+ page load speeds that leak inbound customer revenue daily",
    "Rigid pre-built templates that choke custom brand and product workflows",
    "Fragile CMS architectures that break under simple marketing changes",
    "Broken responsive user experience that destroys mobile conversion funnels",
  ];

  const solutions = [
    "Ultra-responsive Java, Spring Boot & modern React architectures",
    "100% bespoke engineering designed precisely around your business goals",
    "Structured, rock-solid databases & intuitive admin control panels",
    "Engineered mobile-first UX with sub-second page transitions",
  ];

  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="bento-pill mb-4">↳ The Difference</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F1014] tracking-tight mb-4">
            A generic template won&apos;t make you{" "}
            <span className="font-serif italic font-normal text-[#2554F6]">stand out.</span>
          </h2>
          <p className="text-lg text-[#686C78] max-w-xl mx-auto">
            A slow website actively costs you clients. We replace bloated themes with custom-engineered software.
          </p>
        </motion.div>

        {/* Bento Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Off-the-shelf Templates
                  </span>
                  <span className="text-xs font-mono text-[#9B9FA9]">STATUS: FAILING</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0F1014] mb-6">
                  Typical Website Bottlenecks
                </h3>

                <ul className="space-y-4">
                  {problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5 shrink-0">
                        <X className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-[#33363F] leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.06] text-xs text-[#686C78]">
                Average bounce rate: <span className="font-bold text-red-600">65%+ on slow templates</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between border-2 border-[#2554F6]/30 shadow-[0_16px_40px_rgba(37,84,246,0.06)]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2554F6]/10 border border-[#2554F6]/20 text-[#2554F6] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Engineered by Rolla
                  </span>
                  <span className="text-xs font-mono text-emerald-600 font-bold">STATUS: OPTIMAL</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0F1014] mb-6">
                  High-Performance Custom Build
                </h3>

                <ul className="space-y-4">
                  {solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#2554F6] flex items-center justify-center text-white mt-0.5 shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-[#0F1014] leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.06] text-xs text-[#2554F6] font-semibold flex items-center justify-between">
                <span>Production outcome</span>
                <span className="font-bold">Sub-second page load guaranteed</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
