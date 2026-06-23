"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Python", code: "LANG", letter: "Py", desc: "General-purpose programming", core: true },
  { name: "Django", code: "WEB", letter: "Dj", desc: "High-level Python web framework", core: true },
  { name: "React", code: "UI", letter: "R", desc: "Interactive frontend UI library", core: true },
  { name: "Node.js", code: "RUNTIME", letter: "N", desc: "JavaScript server environment", core: true },
  { name: "MongoDB", code: "DB", letter: "M", desc: "NoSQL document database", core: false },
  { name: "Express.js", code: "API", letter: "Ex", desc: "Fast framework for Node", core: false },
];

const letters: Record<string, string> = {
  Py: "#3776AB",
  Dj: "#092E20",
  R: "#61DAFB",
  N: "#339933",
  M: "#47A248",
  Ex: "#888",
};

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-[#0D0E12] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="sys-label mb-4">↳ Technology Stack</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Powered by Modern,{" "}
            <span className="font-serif italic text-[#A5B4FC]">Industry-Standard</span>{" "}
            Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#1e2028]">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-[#0D0E12] p-6 flex flex-col gap-4 group hover:bg-[#111318] transition-all duration-300 relative hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div
                className="w-9 h-9 flex items-center justify-center text-white font-bold text-sm font-mono transition-transform duration-300 group-hover:scale-1.05"
                style={{ backgroundColor: letters[tool.letter] ?? "#333", boxShadow: `0 0 12px ${letters[tool.letter] ?? "#333"}30` }}
              >
                {tool.letter}
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-mono text-[0.55rem] text-[#818CF8]/80 uppercase tracking-wider">
                    {tool.code}
                  </span>
                  {tool.core && (
                    <span className="font-mono text-[0.45rem] text-[#818CF8] border border-[#6366F1]/40 px-1 py-0.5 uppercase tracking-widest bg-[#6366F1]/5">
                      Core
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-white">{tool.name}</p>
                <p className="text-[0.65rem] text-[#C4C9D4] mt-1 leading-tight">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
