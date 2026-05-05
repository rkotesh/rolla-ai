"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, Hammer, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery call (Free)",
      description: "We learn your workflow, your tools, and where you're losing time. No jargon, no pressure.",
      icon: <PhoneCall className="w-6 h-6 text-[#534AB7]" />,
    },
    {
      number: "02",
      title: "We build it",
      description: "Our team designs and builds your automation. You review it. We refine it.",
      icon: <Hammer className="w-6 h-6 text-[#534AB7]" />,
    },
    {
      number: "03",
      title: "It runs itself",
      description: "Your workflow is live. We monitor it, support it, and improve it over time.",
      icon: <Rocket className="w-6 h-6 text-[#534AB7]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From idea to automation in 3 steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0 origin-left"
          />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center relative"
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.35 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#534AB7] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                >
                  {step.number}
                </motion.div>
                <motion.div
                  whileHover={{ rotate: -6 }}
                  className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 mt-2"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} className="inline-flex">
          <Link
            href="#contact"
            className="inline-flex items-center text-[#534AB7] font-semibold text-lg hover:text-[#43399b] transition-colors"
          >
            Book your free discovery call <span className="ml-2">→</span>
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
