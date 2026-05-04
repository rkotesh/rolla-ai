"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    "Manually copying data between apps",
    "Sending the same follow-up emails every day",
    "Updating spreadsheets that could update themselves",
    "Missing leads because no one followed up in time",
  ];

  const solutions = [
    "Automated data sync across all your tools",
    "Email sequences triggered automatically",
    "Live dashboards that update themselves",
    "Instant lead notifications and CRM entries",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every hour you spend on manual work is an hour not spent growing.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50/50 rounded-2xl p-8 border border-red-100"
          >
            <h3 className="text-xl font-semibold text-red-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                <XCircle size={20} />
              </span>
              The Problem
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            <ul className="space-y-4 relative z-10">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
