"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, Hammer, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      code: "PHASE.DISCOVERY",
      title: "Discovery & Design",
      subtitle: "Free — No obligation",
      description:
        "We align on your goals, map out user journeys, and wireframe the visual layout. No jargon, no pressure. Pure clarity.",
      icon: PhoneCall,
    },
    {
      number: "02",
      code: "PHASE.BUILD",
      title: "We Build It",
      subtitle: "Iterative development",
      description:
        "Our team designs the UI, writes clean frontend/backend code, and integrates all components. You review as we build.",
      icon: Hammer,
    },
    {
      number: "03",
      code: "PHASE.LAUNCH",
      title: "Launch & Scale",
      subtitle: "Production deployment",
      description:
        "Your platform is deployed to production. We monitor performance, optimize SEO, and provide post-launch support.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-rolla-bg relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="sys-label mb-4">↳ Project Lifecycle</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            From Concept to Launch{" "}
            <span className="font-serif italic text-[#A5B4FC]">in 3 Phases</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-[#1e2028] relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-rolla-bg p-8 md:p-10 group hover:bg-[#0D0E12] transition-all duration-300 relative hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Phase header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-3xl font-bold text-[#1e2028] group-hover:text-[#252830] transition-colors">{step.number}</span>
                  <div>
                    <div className="font-mono text-[0.55rem] text-[#818CF8] uppercase tracking-widest">
                      {step.code}
                    </div>
                    <div className="font-mono text-[0.55rem] text-[#8a91a0] uppercase tracking-wider">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 border border-[#1e2028] group-hover:border-[#6366F1]/40 flex items-center justify-center mb-6 transition-colors duration-300 bg-rolla-bg">
                  <Icon className="w-4 h-4 text-[#6366F1] group-hover:scale-1.05 transition-transform" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#C4C9D4] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} className="inline-flex">
            <Link
              href="#contact"
              className="font-mono text-xs text-[#818CF8] hover:text-[#A5B4FC] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              ↳ Book your free discovery call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
