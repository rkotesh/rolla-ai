"use client";

import { motion } from "framer-motion";
import { Layers, Store, Laptop, Plug, Palette, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Bespoke SaaS platforms, client portals, internal dashboards, and custom database web applications built from scratch.",
      icon: <Layers className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.1,
      badge: "POPULAR",
    },
    {
      title: "E-Commerce Solutions",
      description: "High-converting online stores built on modern architectures (Shopify, Django, Node.js, Stripe) for frictionless payments.",
      icon: <Store className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.2,
      badge: null,
    },
    {
      title: "Corporate & Landing Pages",
      description: "Fast, SEO-optimized, and visually stunning marketing websites designed to convert visitors into clients.",
      icon: <Laptop className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.3,
      badge: null,
    },
    {
      title: "API & Systems Integration",
      description: "Connect your existing software, build custom REST/GraphQL APIs, and design robust backend architectures.",
      icon: <Plug className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.4,
      badge: null,
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Responsive, intuitive, and modern interfaces designed with user-experience and conversion rate optimization (CRO) in mind.",
      icon: <Palette className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.5,
      badge: null,
    },
    {
      title: "Performance & SEO Optimization",
      description: "Speed up slow pages, improve Core Web Vitals, and implement search engine optimization best practices to rank higher.",
      icon: <Zap className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.6,
      badge: "NEW",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What we build for you
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From modern marketing sites to full-stack SaaS portals and API integrations — we build the digital foundation your business needs to grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -8, scale: 1.015 }}
              className={`bg-white rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${
                service.badge
                  ? "border-[#CECBF6] shadow-md"
                  : "border-gray-100 hover:border-[#CECBF6]"
              }`}
            >
              {/* NEW badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 bg-[#534AB7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                  {service.badge}
                </span>
              )}

              {/* Featured card glow effect */}
              {service.badge === "POPULAR" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-50/70 via-transparent to-transparent pointer-events-none"
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <motion.div
                whileHover={{ rotate: 6 }}
                className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
