"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const results = [
  {
    index: "01",
    industry: "Real Estate Brokerage",
    metric: "+40%",
    metricLabel: "Inbound Buyer Inquiries",
    headline: "Custom property discovery & instant viewing booking engine",
    body: "Engineered a bespoke Java Spring Boot & React platform featuring indexed filter search, real-time booking slots, and automated lead synchronization into their core sales pipeline.",
    stats: [
      { label: "Lead Growth", value: "+40%" },
      { label: "Load Time", value: "1.2s" },
    ],
  },
  {
    index: "02",
    industry: "B2B SaaS Scale-up",
    metric: "4 wks",
    metricLabel: "Time-to-Production",
    headline: "Zero to live production multi-tenant client console",
    body: "Architected a secure enterprise React dashboard with role-based auth, dynamic telemetry visualization, and native Stripe billing handling recurring subscriptions seamlessly.",
    stats: [
      { label: "Deployment", value: "28 Days" },
      { label: "Onboarding", value: "100% Self" },
    ],
  },
  {
    index: "03",
    industry: "Headless E-Commerce",
    metric: "+25%",
    metricLabel: "Checkout Conversion Lift",
    headline: "Headless storefront re-architecture & checkout redesign",
    body: "Rebuilt legacy storefront using headless Next.js & Shopify APIs. Eliminated cart friction and slashed render latencies to double-digit milliseconds.",
    stats: [
      { label: "Conversions", value: "+25%" },
      { label: "Bounce Rate", value: "-50%" },
    ],
  },
];

export default function Results() {
  return (
    <section id="results" className="py-28 bg-[#F4EFE6]/60 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bento-pill mb-4">↳ Case Studies</div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F1014] tracking-tight">
              Real results.{" "}
              <span className="font-serif italic font-normal text-[#2554F6]">Measurable growth.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#686C78] leading-relaxed max-w-md">
              Real commercial outcomes engineered for high-growth operators. We build technology that directly accelerates top-line revenue.
            </p>
          </div>
        </motion.div>

        {/* Bento Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex"
            >
              <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.08] text-xs font-semibold text-[#0F1014]">
                      {item.industry}
                    </span>
                    <span className="text-xs font-mono text-[#9B9FA9]">0{index + 1}</span>
                  </div>

                  {/* Big Clean Metric */}
                  <div className="mb-8">
                    <div className="text-5xl sm:text-6xl font-extrabold text-[#0F1014] tracking-tight mb-1 group-hover:text-[#2554F6] transition-colors">
                      {item.metric}
                    </div>
                    <p className="text-xs font-mono font-bold text-[#2554F6] uppercase tracking-wider">
                      {item.metricLabel}
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1014] mb-3 leading-snug">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-[#686C78] leading-relaxed mb-8">
                    {item.body}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/[0.06] grid grid-cols-2 gap-4">
                  {item.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="text-base font-bold text-[#0F1014]">{stat.value}</span>
                      <p className="text-[0.68rem] text-[#686C78] font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
