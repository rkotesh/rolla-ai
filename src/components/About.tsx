"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#F4EFE6]/60 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2554F6]/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6366F1]/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="bg-white rounded-[32px] border border-black/[0.07] shadow-[0_20px_60px_rgba(15,16,20,0.08)] overflow-hidden p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Main Content / Founder Letter */}
            <div className="lg:col-span-7">
              <div className="bento-pill mb-6">↳ Founder Letter · 2026</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1014] mb-6 leading-tight">
                Built by developers,{" "}
                <span className="font-serif italic font-normal text-[#2554F6]">
                  engineered for growth
                </span>
              </h2>

              <div className="w-12 h-1 bg-[#2554F6] rounded-full mb-8 opacity-60" />

              <p className="text-[#33363F] text-base md:text-lg leading-relaxed mb-6">
                &ldquo;I started Rolla to bridge the gap between complex software architecture and high-converting, user-friendly digital experiences.&rdquo;
              </p>
              <p className="text-[#33363F] text-base md:text-lg leading-relaxed mb-8">
                &ldquo;We don&apos;t build surface-level templates. We build high-throughput websites and full-stack software applications that give businesses durable competitive moats.&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-black/[0.07]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
                  <span className="font-mono text-xs text-[#059669] uppercase tracking-wider font-semibold">
                    Available for New Deployments
                  </span>
                </div>
                <div className="h-4 w-[1px] bg-black/10 hidden sm:block" />
                <div className="flex items-center gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    href="https://linkedin.com/in/sankulakoteswararao"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-black/[0.08] text-[#33363F] hover:text-[#2554F6] hover:border-[#2554F6]/30 flex items-center justify-center transition-all duration-200"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    href="https://github.com/rkotesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-black/[0.08] text-[#33363F] hover:text-[#0F1014] hover:border-black/20 flex items-center justify-center transition-all duration-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Leadership Cards */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#2554F6] font-semibold mb-4">
                Leadership Team
              </h3>
              {[
                {
                  name: "Koteswararao Sankula",
                  role: "Founder · Lead Systems Architect",
                  detail: "B.Tech CS, 2026",
                  bio: "Spearheading product design, architecture, and full-stack engineering."
                },
                {
                  name: "Narendra Kumar",
                  role: "Co-Founder · Systems Architect",
                  detail: "B.Tech CS, 2026",
                  bio: "Focusing on backend systems, infrastructure, and web performance."
                },
              ].map((person, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-6 rounded-2xl border border-black/[0.07] bg-[#FAF7F2] hover:border-[#2554F6]/30 hover:bg-[#2554F6]/[0.02] transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2554F6] to-[#6366F1] flex items-center justify-center text-white font-bold text-base shrink-0 shadow-sm">
                      {person.name[0]}
                    </div>
                    <div>
                      <h4 className="text-[#0F1014] text-base font-bold">{person.name}</h4>
                      <p className="font-mono text-[0.65rem] text-[#2554F6] uppercase tracking-wider mt-0.5 font-semibold">
                        {person.role}
                      </p>
                      <p className="text-[#686C78] text-xs leading-relaxed mt-2">
                        {person.bio}
                      </p>
                      <p className="font-mono text-[0.6rem] text-[#8E929E] mt-2">
                        {person.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
