"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  const problems = [
    "Slow loading times that drive potential visitors away",
    "Rigid templates that limit your unique brand identity",
    "Difficult CMS systems that waste your team's time",
    "Poor mobile layout and broken user experience (UX)",
  ];

  const solutions = [
    "High-performance Django & MERN stack architecture",
    "Fully bespoke designs tailored to your brand goals",
    "Intuitively organized databases & CMS interfaces",
    "Responsive, mobile-first design with smooth UX",
  ];

  const itemVars = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 bg-rolla-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="sys-label mb-4">↳ Problem / Solution Matrix</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A generic template{" "}
            <span className="font-serif italic text-[#A5B4FC]">
              won&apos;t help you stand out.
            </span>
            <br />
            <span className="text-[#C4C9D4] font-light text-2xl md:text-3xl mt-2 block">
              A slow site will actively lose you clients.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[#1e2028]">
          {/* Problem Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.005 }}
            className="bg-rolla-bg p-8 md:p-12 transition-all duration-300 hover:shadow-[inset_0_0_24px_rgba(239,68,68,0.03)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.6rem] text-red-400/70 uppercase tracking-widest">
                STATUS: FAILING
              </span>
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            </div>
            <h3 className="text-lg font-bold text-white mb-6 font-sans">
              Category-Defining Challenges
            </h3>
            <motion.ul
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {problems.map((problem, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVars}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 border border-red-400/40 flex items-center justify-center">
                    <span className="text-red-400 font-mono text-[0.65rem]">✕</span>
                  </div>
                  <span className="text-[#C4C9D4] text-sm leading-relaxed">{problem}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.005 }}
            className="bg-[#0D0E12] p-8 md:p-12 relative transition-all duration-300 hover:shadow-[inset_0_0_24px_rgba(99,102,241,0.05)]"
          >
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#6366F1] to-transparent" />

            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.6rem] text-[#4ADE80]/70 uppercase tracking-widest">
                STATUS: SOLVED
              </span>
              <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-6 font-sans">
              ↳ Engineered Solutions
            </h3>
            <motion.ul
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {solutions.map((solution, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVars}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 border border-[#6366F1]/40 flex items-center justify-center">
                    <span className="text-[#6366F1] font-mono text-[0.65rem]">✓</span>
                  </div>
                  <span className="text-white text-sm leading-relaxed font-medium">{solution}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
