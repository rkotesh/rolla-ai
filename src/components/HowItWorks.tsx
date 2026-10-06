"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, Hammer, Rocket, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Architecture",
      subtitle: "Zero Cost · High Clarity",
      description:
        "We dissect your revenue goals, map user conversion funnels, and draft complete technical architecture blueprints with fixed timelines.",
      icon: PhoneCall,
      highlight: "Guaranteed 24h quote turnaround",
      accent: "#2554F6",
    },
    {
      number: "02",
      title: "Agile Development Sprints",
      subtitle: "Bi-Weekly Production Demos",
      description:
        "Our engineers build your platform using production-grade Java, Spring Boot, and React. You review live preview links as code is committed.",
      icon: Hammer,
      highlight: "Private staging environment access",
      accent: "#6366F1",
    },
    {
      number: "03",
      title: "Hardened Launch & Scale",
      subtitle: "Sub-Second Production Live",
      description:
        "We execute zero-downtime production deployment, optimize Core Web Vitals to 100%, and deliver comprehensive source code ownership.",
      icon: Rocket,
      highlight: "30-day post-launch warranty included",
      accent: "#059669",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[#F4EFE6]/60 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#2554F6]/4 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#6366F1]/4 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bento-pill mb-5">↳ The Engineering Protocol</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0F1014] leading-[1.08] tracking-tight">
            From Blueprint to Launch{" "}
            <span className="font-serif italic font-normal text-[#2554F6]">
              in 3 Milestones
            </span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <SpotlightCard
                  className="bg-white rounded-[26px] border border-black/[0.07] p-8 shadow-[0_8px_28px_rgba(15,16,20,0.05)] hover:shadow-[0_20px_50px_rgba(15,16,20,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[440px] group cursor-pointer"
                  spotlightColor="rgba(37,84,246,0.06)"
                >
                  <div>
                    {/* Step number + label */}
                    <div className="flex items-start justify-between mb-7">
                      <span
                        className="font-mono text-6xl md:text-7xl font-black leading-none"
                        style={{ color: `${step.accent}20` }}
                      >
                        {step.number}
                      </span>
                      <div className="text-right mt-1">
                        <div
                          className="font-mono text-[0.6rem] uppercase tracking-widest font-semibold mb-1"
                          style={{ color: step.accent }}
                        >
                          PHASE.{idx === 0 ? "DISCOVERY" : idx === 1 ? "ENGINEER" : "DEPLOY"}
                        </div>
                        <div className="font-mono text-[0.6rem] text-[#686C78] uppercase tracking-wider">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${step.accent}12` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.accent }} strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-bold text-[#0F1014] mb-3 group-hover:text-[#2554F6] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#686C78] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight badge */}
                  <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#059669] rounded-full" />
                    <span className="font-mono text-[0.68rem] text-[#33363F] font-semibold uppercase tracking-wide">
                      {step.highlight}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-between flex-wrap gap-5 p-7 bg-white rounded-[26px] border border-black/[0.07] shadow-[0_8px_28px_rgba(15,16,20,0.06)]"
        >
          <div>
            <p className="text-lg font-bold text-[#0F1014] mb-1">Need a custom scope evaluation?</p>
            <p className="text-sm text-[#686C78]">Speak directly with lead engineers — no pushy sales reps.</p>
          </div>
          <Link href="#contact" className="btn-primary whitespace-nowrap">
            Schedule Discovery Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
