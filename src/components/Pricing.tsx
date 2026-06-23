"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    index: "01",
    name: "Starter",
    tier: "Entry-Level Platform",
    subtitle: "Best for single-page & landing sites",
    features: [
      "Custom landing or marketing page",
      "Fully responsive modern layout",
      "SEO setup & sub-second loading",
      "Contact form integration",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    index: "02",
    name: "Growth",
    tier: "Enterprise Accelerator",
    subtitle: "Best for multi-page & CMS sites",
    features: [
      "Custom multi-page website",
      "Headless CMS integration (Sanity)",
      "Payment gateway setup (Stripe)",
      "Custom micro-animations",
      "Priority support for 60 days",
    ],
    cta: "Book a Call",
    popular: true,
  },
  {
    index: "03",
    name: "Custom",
    tier: "Full-Stack Engineering",
    subtitle: "For full-stack web applications",
    features: [
      "Bespoke SaaS platform or portal",
      "Database design & secure auth",
      "Custom APIs & integrations",
      "Dedicated developer support",
      "Ongoing maintenance retainer",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-rolla-bg relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6366F1] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="sys-label mb-4">↳ Pricing Modules</div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transparent Pricing.{" "}
              <span className="font-serif italic text-[#A5B4FC]">Indian Value.</span>
            </h2>
            <p className="text-[#C4C9D4] text-sm leading-relaxed max-w-md">
              Agency-quality web development at a fraction of the cost. No hidden fees, no complexity. Startup-friendly from the start.
            </p>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-[#1e2028]">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className={`flex flex-col p-8 md:p-10 relative transition-all duration-300 ${
                plan.popular
                  ? "bg-[#111318] shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                  : "bg-[#0D0E12] hover:bg-[#111318]"
              }`}
            >
              {/* Top accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] ${
                  plan.popular ? "bg-[#6366F1]" : "bg-transparent hover:bg-[#6366F1]/30 transition-colors"
                }`}
              />

              {/* Index + Popular badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[0.6rem] text-[#8a91a0] tracking-widest">
                  [{plan.index}/03]
                </span>
                {plan.popular && (
                  <span className="font-mono text-[0.55rem] text-[#818CF8] border border-[#6366F1]/40 px-2 py-0.5 uppercase tracking-widest bg-[#6366F1]/5">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Plan name */}
              <div className="mb-8">
                <p className="font-mono text-[0.6rem] text-[#8a91a0] uppercase tracking-widest mb-1.5">
                  {plan.tier}
                </p>
                <h3 className="text-2xl font-bold mb-1.5 text-white">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#C4C9D4]">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 border flex items-center justify-center ${
                        plan.popular ? "border-[#6366F1]/60" : "border-[#1e2028]"
                      }`}
                    >
                      <Check
                        className={`w-2.5 h-2.5 ${
                          plan.popular ? "text-[#818CF8]" : "text-[#C4C9D4]"
                        }`}
                      />
                    </div>
                    <span className="text-[#C4C9D4] text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`text-center py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200 border ${
                  plan.popular
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    : "border-[#3e4150] text-[#C4C9D4] hover:border-white hover:bg-white hover:text-black"
                }`}
              >
                {plan.cta} ↳
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center gap-4 border border-[#1e2028] p-6"
        >
          <span className="font-mono text-[0.6rem] text-[#818CF8] uppercase tracking-widest shrink-0">
            ↳ Note
          </span>
          <p className="text-xs text-[#C4C9D4]">
            All prices are project-based. Contact us for a custom quote tailored to your specific requirements. First consultation is always free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
