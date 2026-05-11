"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    priceSuffix: "From",
    subtitle: "Best for solopreneurs & small teams",
    features: [
      "1 automated workflow",
      "Up to 3 app integrations",
      "Email + Slack notifications",
      "2 rounds of revisions",
      "30-day support",
    ],
    cta: "Get Started",
    popular: false,
    style: "outlined",
  },
  {
    name: "Growth",
    priceSuffix: "From",
    subtitle: "Best for growing businesses",
    features: [
      "Up to 5 workflows",
      "Unlimited app integrations",
      "Lead & CRM automation",
      "AI-powered logic (GPT-4)",
      "Priority support for 60 days",
    ],
    cta: "Book a Call",
    popular: true,
    style: "highlighted",
  },
  {
    name: "Custom",
    priceSuffix: "",
    subtitle: "For agencies & complex systems",
    features: [
      "Unlimited workflows",
      "Custom AI agents",
      "Web app development",
      "Dedicated Slack channel",
      "Ongoing retainer available",
    ],
    cta: "Contact Us",
    popular: false,
    style: "outlined",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CECBF6]/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#534AB7]/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Transparent Pricing. Indian Value.
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get agency-quality automation at a fraction of the cost. No hidden fees, no complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? "bg-white border-2 border-[#534AB7] shadow-xl relative scale-105 z-10" 
                  : "bg-[#FAFAFA] border border-gray-100 hover:border-[#CECBF6] hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#534AB7] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.subtitle}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-[#534AB7]/10" : "bg-gray-200"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-[#534AB7]" : "text-gray-600"}`} />
                    </div>
                    <span className="text-gray-600 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular
                    ? "bg-[#534AB7] text-white hover:bg-[#43399b] shadow-lg shadow-purple-200"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#534AB7] hover:text-[#534AB7]"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-purple-50 px-6 py-4 rounded-2xl border border-[#CECBF6]/50">
            <HelpCircle className="w-5 h-5 text-[#534AB7]" />
            <p className="text-sm text-gray-700 font-medium">
              💡 <span className="text-gray-900 font-bold">India-based team.</span> Agency-quality automation at startup-friendly prices — typically 40–60% less than US/UK agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
