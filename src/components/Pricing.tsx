"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

const plans = [
  {
    index: "01",
    name: "Starter",
    tier: "Fast-Track Foundation",
    subtitle: "High-impact single-page & landing platforms",
    features: [
      "Custom landing or marketing page",
      "Fully responsive modern UI layout",
      "Sub-second load speed guarantee",
      "Integrated lead capture form",
      "30-day post-launch warranty",
    ],
    cta: "Start Starter Project",
    popular: false,
  },
  {
    index: "02",
    name: "Growth",
    tier: "Scale Architecture",
    subtitle: "Multi-page portals & headless systems",
    features: [
      "Custom multi-page website or portal",
      "Headless CMS integration (Sanity)",
      "Payment gateway setup (Stripe)",
      "Interactive UI micro-animations",
      "Priority engineering support (60 days)",
    ],
    cta: "Lock Growth Tier",
    popular: true,
  },
  {
    index: "03",
    name: "Custom",
    tier: "Full-Stack Enterprise",
    subtitle: "Full-scale bespoke web applications & SaaS",
    features: [
      "Bespoke SaaS platform or client portal",
      "Database schema design & secure auth",
      "Custom REST / GraphQL APIs",
      "Dedicated senior developer team",
      "Ongoing maintenance retainer",
    ],
    cta: "Speak with Architects",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="bento-pill mb-4">↳ Transparent Scoping</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F1014] tracking-tight mb-4">
            Fixed milestone pricing.{" "}
            <span className="font-serif italic font-normal text-[#2554F6]">Indian engineering value.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#686C78]">
            Agency-quality software at a fraction of Western costs. Clear scopes, guaranteed milestone deliverables, and zero surprise fees.
          </p>
        </motion.div>

        {/* Pricing Cards Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex"
            >
              {plan.popular ? (
                /* Popular Card (Obsidian Black Luxury Finish) */
                <div className="w-full rounded-[26px] bg-[#0F1014] text-white p-8 sm:p-10 flex flex-col justify-between border-2 border-[#2554F6] shadow-[0_24px_50px_rgba(37,84,246,0.18)] lg:-translate-y-3 relative overflow-hidden">
                  {/* Subtle glow orb */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2554F6]/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono font-bold text-[#A5B4FC] uppercase tracking-wider">
                        TIER [{plan.index}/03]
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2554F6] text-white text-[0.68rem] font-bold uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#93C5FD] uppercase tracking-widest font-semibold mb-1">
                      {plan.tier}
                    </p>
                    <h3 className="text-3xl font-extrabold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#D1D5DB] mb-8 pb-6 border-b border-white/10">
                      {plan.subtitle}
                    </p>

                    <ul className="space-y-3.5 mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#2554F6] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-[#E2E5EC] font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#contact"
                    className="relative z-10 w-full text-center py-3.5 rounded-full font-bold text-sm bg-white text-[#0F1014] hover:bg-[#2554F6] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{plan.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                /* Regular Cards */
                <SpotlightCard className="w-full p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono font-bold text-[#686C78] uppercase tracking-wider">
                        TIER [{plan.index}/03]
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#686C78] uppercase tracking-widest font-semibold mb-1">
                      {plan.tier}
                    </p>
                    <h3 className="text-3xl font-extrabold text-[#0F1014] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#686C78] mb-8 pb-6 border-b border-black/[0.06]">
                      {plan.subtitle}
                    </p>

                    <ul className="space-y-3.5 mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black/[0.06] text-[#0F1014] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-[#33363F] font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#contact"
                    className="w-full text-center py-3.5 rounded-full font-bold text-sm bg-[#FAF7F2] text-[#0F1014] border border-black/[0.1] hover:bg-[#0F1014] hover:text-white transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>{plan.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </SpotlightCard>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#686C78]">
            ✦ All projects include complete source code ownership, repository handover, and zero platform lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}
