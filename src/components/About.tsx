"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#534AB7] rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Built by a developer,<br />
                <span className="text-[#CECBF6]">designed for non-developers</span>
              </h2>
              <div className="w-16 h-1 bg-[#CECBF6] mb-8 opacity-50" />
              <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
                "I started Rolla because I kept seeing small businesses lose hours every day to tasks that software could handle in seconds."
              </p>
              <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
                "I'm a Python developer and AI student — and I built Rolla to make automation accessible to everyone, not just those who can code."
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://linkedin.com/in/sankulakoteswararao" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 overflow-hidden mb-6 relative bg-white/10 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
                {/* Fallback avatar: an emoji or initial if image is not provided. In real world, use next/image here */}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Koteswararao Sankula</h3>
              <p className="text-[#CECBF6] font-medium text-center">
                Founder, Rolla · Python Developer<br />
                <span className="text-indigo-200 text-sm">B.Tech AI&ML 2026</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
