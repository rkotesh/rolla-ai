"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap } from "lucide-react";

const results = [
  {
    industry: "Real Estate Agency",
    headline: "40% increase in online lead generation",
    body: "We designed and built a custom Django and React marketing site with an integrated booking calendar and interactive property filter. Potential buyers can view listings instantly and schedule viewings in just two clicks.",
    stat: "40% more online leads · 1.2s page load speed",
    icon: <Clock className="w-6 h-6" />,
    color: "blue",
  },
  {
    industry: "SaaS Start-up",
    headline: "Launched custom client dashboard in 4 weeks",
    body: "Built a secure, modern React web portal with user authentication, custom data visualization charts, and payment management (Stripe) allowing their clients to manage subscriptions directly.",
    stat: "4 weeks to launch · 100% self-serve onboarding",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "purple",
  },
  {
    industry: "E-commerce Brand",
    headline: "25% boost in checkout conversions",
    body: "Redesigned their storefront with a modern, responsive headless Shopify setup. We optimized the checkout flow and page speed, leading to a massive drop in cart abandonment.",
    stat: "25% increase in conversions · 50% bounce rate reduction",
    icon: <Zap className="w-6 h-6" />,
    color: "green",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#534AB7]/10 text-[#534AB7] text-sm font-bold mb-4"
          >
            Case Studies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Real Results. Real Businesses.
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we help businesses grow their online presence and launch high-performance digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#534AB7] bg-purple-50 px-3 py-1 rounded-full">
                  {item.industry}
                </span>
                <div className="text-[#534AB7]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                &ldquo;{item.headline}&rdquo;
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {item.body}
              </p>

              <div className="pt-6 border-t border-gray-50 mt-auto">
                <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  {item.stat}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-gray-400 italic">
          *Results are representative of typical client outcomes. Specific results vary by business.
        </p>
      </div>
    </section>
  );
}
