"use client";

import { motion } from "framer-motion";

const results = [
  {
    index: "01",
    industry: "Real Estate Agency",
    metric: "+40%",
    metricLabel: "Online Lead Generation",
    headline: "Launched custom property search & booking platform",
    body: "We designed and built a custom Django and React marketing site with an integrated booking calendar and interactive property filter. Potential buyers can view listings instantly and schedule viewings in two clicks.",
    stats: [
      { label: "Lead Growth", value: "+40%" },
      { label: "Page Load", value: "1.2s" },
    ],
  },
  {
    index: "02",
    industry: "SaaS Start-up",
    metric: "4 wks",
    metricLabel: "Launch Timeline",
    headline: "Custom client dashboard from zero to production",
    body: "Built a secure, modern React web portal with user authentication, custom data visualization charts, and payment management (Stripe) allowing their clients to manage subscriptions directly.",
    stats: [
      { label: "Time to Launch", value: "4 Weeks" },
      { label: "Onboarding", value: "100% Self-Serve" },
    ],
  },
  {
    index: "03",
    industry: "E-Commerce Brand",
    metric: "+25%",
    metricLabel: "Checkout Conversions",
    headline: "Redesigned headless storefront & checkout flow",
    body: "Rebuilt their storefront with a modern, responsive headless Shopify setup. We optimized the checkout flow and page speed, leading to a massive drop in cart abandonment.",
    stats: [
      { label: "Conversions", value: "+25%" },
      { label: "Bounce Rate", value: "-50%" },
    ],
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-[#0D0E12] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="sys-label mb-4">↳ Case Studies</div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Real Results.{" "}
              <span className="font-serif italic text-[#A5B4FC]">Real Businesses.</span>
            </h2>
            <p className="text-[#C4C9D4] text-sm leading-relaxed max-w-md">
              See how we help businesses grow their online presence and launch high-performance digital products across multiple industries.
            </p>
          </div>
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e2028]">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="bg-[#0D0E12] p-8 flex flex-col group hover:bg-[#111318] transition-all duration-300 relative hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Index */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[0.6rem] text-[#8a91a0] tracking-widest">
                  CASE [{item.index}/03]
                </span>
                <span className="font-mono text-[0.55rem] text-[#C4C9D4] border border-[#1e2028] px-2 py-0.5 uppercase tracking-wider bg-[#111318] group-hover:border-[#3e4150] transition-colors">
                  {item.industry}
                </span>
              </div>

              {/* Big Metric */}
              <div className="mb-6">
                <div className="font-mono text-4xl font-bold text-white leading-none mb-1">
                  {item.metric}
                </div>
                <div className="font-mono text-[0.6rem] text-[#818CF8] uppercase tracking-widest">
                  {item.metricLabel}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#1e2028] mb-6" />

              <h3 className="text-sm font-bold text-white mb-3 leading-snug">
                {item.headline}
              </h3>
              <p className="text-[#C4C9D4] text-xs leading-relaxed mb-8 flex-grow">
                {item.body}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1e2028]">
                {item.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-mono text-xs font-bold text-[#A5B4FC]">{stat.value}</div>
                    <div className="font-mono text-[0.55rem] text-[#C4C9D4] uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[0.6rem] text-[#8a91a0] uppercase tracking-widest">
          * Results are representative of typical client outcomes. Specific results vary by business and market conditions.
        </p>
      </div>
    </section>
  );
}
