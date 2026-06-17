"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function ProblemSolution() {
  const problems = [
    "Slow loading times that drive potential visitors away",
    "Rigid templates that limit your unique brand identity",
    "Difficult content management systems that waste time",
    "Poor mobile layout and bad user experience (UX)",
  ];

  const solutions = [
    "High-performance Django & MERN architecture",
    "Fully bespoke designs tailored to your brand goals",
    "Intuitively organized database & CMS interfaces",
    "Responsive, mobile-first design with smooth interactions",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A generic template won&apos;t help you stand out. A slow site will actively lose you clients.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-red-50/50 rounded-2xl p-8 border border-red-100"
          >
            <h3 className="text-xl font-semibold text-red-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                <XCircle size={20} />
              </span>
              The Problem
            </h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {problems.map((problem, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{problem}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-green-50/50 rounded-2xl p-8 border border-green-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 className="w-32 h-32 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-6 flex items-center relative z-10">
              <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                <CheckCircle2 size={20} />
              </span>
              The Rolla Fix
            </h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 relative z-10"
            >
              {solutions.map((solution, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{solution}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
