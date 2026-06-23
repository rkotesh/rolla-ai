"use client";

import { motion } from "framer-motion";
import { Layers, Store, Laptop, Plug, Palette, Zap } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Custom Web Applications",
    description:
      "Bespoke SaaS platforms, client portals, internal dashboards, and custom database web applications built from scratch.",
    icon: Layers,
    tags: ["Django", "React", "PostgreSQL"],
    badge: "POPULAR",
  },
  {
    index: "02",
    title: "E-Commerce Solutions",
    description:
      "High-converting online stores built on modern architectures (Shopify, Django, Node.js, Stripe) for frictionless payments.",
    icon: Store,
    tags: ["Shopify", "Stripe", "Node.js"],
    badge: null,
  },
  {
    index: "03",
    title: "Corporate & Landing Pages",
    description:
      "Fast, SEO-optimized, and visually stunning marketing websites designed to convert visitors into clients.",
    icon: Laptop,
    tags: ["Next.js", "SEO", "CMS"],
    badge: null,
  },
  {
    index: "04",
    title: "API & Systems Integration",
    description:
      "Connect existing software, build custom REST/GraphQL APIs, and design robust backend architectures.",
    icon: Plug,
    tags: ["REST", "GraphQL", "Webhooks"],
    badge: null,
  },
  {
    index: "05",
    title: "UI/UX Design & Prototyping",
    description:
      "Responsive, intuitive, and modern interfaces designed with user-experience and conversion rate optimization in mind.",
    icon: Palette,
    tags: ["Figma", "CRO", "Motion"],
    badge: null,
  },
  {
    index: "06",
    title: "Performance & SEO Optimization",
    description:
      "Speed up slow pages, improve Core Web Vitals, and implement search engine optimization best practices.",
    icon: Zap,
    tags: ["Core Web Vitals", "Lighthouse", "CDN"],
    badge: "NEW",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0D0E12] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="sys-label mb-4">↳ Platform Capabilities</div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              What We{" "}
              <span className="font-serif italic text-[#A5B4FC]">Build</span>{" "}
              for You
            </h2>
            <p className="text-[#C4C9D4] text-sm leading-relaxed max-w-md">
              From modern marketing sites to full-stack SaaS portals and API integrations — we build the digital foundation your business needs to grow and compete at scale.
            </p>
          </div>
        </motion.div>

        {/* Service Blueprint Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e2028]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-[#0D0E12] p-8 group hover:bg-[#111318] transition-all duration-300 relative hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Top accent border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[0.6rem] text-[#8a91a0] tracking-widest">
                    [{service.index}/06]
                  </span>
                  {service.badge && (
                    <span className="font-mono text-[0.55rem] text-[#818CF8] border border-[#6366F1]/40 px-2 py-0.5 uppercase tracking-widest bg-[#6366F1]/5">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 border border-[#1e2028] group-hover:border-[#6366F1]/40 flex items-center justify-center mb-5 transition-colors duration-300 bg-[#0D0E12]">
                  <Icon className="w-4 h-4 text-[#6366F1] group-hover:scale-1.10 transition-transform duration-300" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#A5B4FC] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[#C4C9D4] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.55rem] text-[#C4C9D4] border border-[#1e2028] px-2 py-0.5 uppercase tracking-wider bg-[#0D0E12] group-hover:border-[#3e4150] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
