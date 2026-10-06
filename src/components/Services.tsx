"use client";

import { motion } from "framer-motion";
import { Layers, Store, Laptop, Plug, Palette, Zap, ArrowUpRight, CheckCircle2, ShieldCheck, Gauge } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F4EFE6]/70 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bento-pill mb-4">↳ Capabilities</div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F1014] tracking-tight">
              Software built to{" "}
              <span className="font-serif italic font-normal text-[#2554F6]">scale</span> your business.
            </h2>
            <p className="text-base sm:text-lg text-[#686C78] leading-relaxed max-w-md font-normal">
              From bespoke SaaS portals to high-converting marketing sites and robust API microservices — we build the technology foundation your company needs.
            </p>
          </div>
        </motion.div>

        {/* ─── LUXURY BENTO GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: FLAGSHIP (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-8"
          >
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#2554F6]/10 text-[#2554F6] flex items-center justify-center">
                    <Layers className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1014] text-white text-[0.68rem] font-bold uppercase tracking-wider">
                    Flagship Core
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1014] mb-3">
                  Custom Web Applications & SaaS
                </h3>
                <p className="text-base text-[#686C78] leading-relaxed max-w-xl mb-8">
                  Bespoke client portals, operational dashboards, and custom database web platforms engineered with Java, Spring Boot, React, and PostgreSQL. Tailored around your exact operational workflows.
                </p>

                {/* Micro interactive feature pills */}
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/[0.05]">
                    <ShieldCheck className="w-4 h-4 text-[#2554F6] mb-1.5" />
                    <p className="text-xs font-bold text-[#0F1014]">Role-based Access</p>
                    <p className="text-[0.68rem] text-[#686C78]">Granular security schemas</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/[0.05]">
                    <CheckCircle2 className="w-4 h-4 text-[#2554F6] mb-1.5" />
                    <p className="text-xs font-bold text-[#0F1014]">Relational DBs</p>
                    <p className="text-[0.68rem] text-[#686C78]">PostgreSQL & Prisma</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/[0.05]">
                    <Gauge className="w-4 h-4 text-[#2554F6] mb-1.5" />
                    <p className="text-xs font-bold text-[#0F1014]">High Throughput</p>
                    <p className="text-[0.68rem] text-[#686C78]">Spring Boot microservices</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-black/[0.06]">
                {["Java 21", "Spring Boot", "React", "PostgreSQL", "Tailwind"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#33363F]">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 2: E-COMMERCE (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-4"
          >
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Store className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#686C78]">02 / COMMERCE</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0F1014] mb-3">
                  Headless E-Commerce
                </h3>
                <p className="text-sm text-[#686C78] leading-relaxed mb-6">
                  High-converting digital storefronts connected to Shopify and custom Stripe gateways for sub-second, frictionless checkout flows.
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Checkout Conversion Lift</span>
                    <span>+25% Average</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
                {["Shopify Headless", "Stripe API", "Node.js"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#33363F]">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 3: LANDING & MARKETING (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-6 lg:col-span-4"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2554F6] flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#0F1014] mb-2">
                  Corporate & Marketing Sites
                </h3>
                <p className="text-sm text-[#686C78] leading-relaxed mb-6">
                  Fast, SEO-engineered marketing platforms with headless CMS integration, designed to convert executive visitors into closed leads.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
                {["Next.js", "Sanity CMS", "SEO"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#33363F]">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 4: API INTEGRATION (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-4"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <Plug className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#0F1014] mb-2">
                  API & Systems Integration
                </h3>
                <p className="text-sm text-[#686C78] leading-relaxed mb-6">
                  Connect third-party enterprise tools, build custom REST and GraphQL microservices, and automate backend data flows seamlessly.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
                {["REST APIs", "GraphQL", "Webhooks"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#33363F]">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 5: UI/UX & PERFORMANCE (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-12 lg:col-span-4"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#0F1014] mb-2">
                  UI/UX Design Systems & SEO
                </h3>
                <p className="text-sm text-[#686C78] leading-relaxed mb-6">
                  High-fidelity interface design in Figma and code-level Core Web Vitals performance tuning to guarantee 95+ Google Lighthouse scores.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
                {["Figma", "Design Systems", "Web Vitals"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#33363F]">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
