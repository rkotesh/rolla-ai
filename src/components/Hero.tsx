"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const tools = [
  { name: "Make", color: "#6B6EFF", icon: "M" },
  { name: "Zapier", color: "#FF4A00", icon: "Z" },
  { name: "n8n", color: "#EA4B71", icon: "n" },
  { name: "Claude", color: "#10A37F", icon: "AI" },
  { name: "Notion", color: "#000000", icon: "N" },
  { name: "Sheets", color: "#0F9D58", icon: "G" },
];

const floatingNodes = [
  { x: "10%", y: "20%", delay: 0 },
  { x: "80%", y: "15%", delay: 0.4 },
  { x: "5%", y: "65%", delay: 0.8 },
  { x: "85%", y: "60%", delay: 1.2 },
  { x: "50%", y: "80%", delay: 0.6 },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-[#FAFAFA] to-[#CECBF6]/20">
      {/* Animated background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#CECBF6]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#534AB7]/8 blur-3xl pointer-events-none" />

      {/* Floating tool nodes (background) */}
      {floatingNodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-[#534AB7]/20 hidden lg:block"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: node.delay }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-[#534AB7] px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#534AB7] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#534AB7]" />
              </span>
              Now accepting new clients — 2026
            </motion.div>

            {/* AI Pill */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#534AB7]/10 to-[#10A37F]/10 border border-[#534AB7]/20 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 ml-3"
            >
              <span className="text-[#534AB7]">✦</span>
              AI-Powered Automation
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08] mb-6">
              Your business{" "}
              <span className="text-[#534AB7] relative">
                on autopilot.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <motion.path
                    d="M2 6 C80 2, 160 2, 298 6"
                    stroke="#CECBF6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              We build smart automated workflows — and intelligent AI-powered systems — using Make, Zapier, n8n, and GPT-4, so you stop doing things manually and start growing faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#contact"
                id="hero-cta-primary"
                className="bg-[#534AB7] hover:bg-[#43399b] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
              >
                Let's automate your business
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                id="hero-cta-secondary"
                className="bg-white border-2 border-gray-200 hover:border-[#534AB7] text-gray-700 hover:text-[#534AB7] px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-base"
              >
                See how it works
              </Link>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 font-medium">
              {["No coding required", "Built for non-technical teams", "Results in days"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Animated workflow diagram (client-only to prevent hydration mismatch) */}
          {mounted && <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Central automation hub */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-28 h-28 bg-[#534AB7] rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white"
                >
                  <svg className="w-10 h-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">ROLLA</span>
                </motion.div>
              </div>

              {/* Orbiting tool nodes */}
              {tools.map((tool, i) => {
                const angle = (i * 360) / tools.length;
                const rad = (angle * Math.PI) / 180;
                const r = 42; // % radius
                const cx = 50 + r * Math.cos(rad);
                const cy = 50 + r * Math.sin(rad);
                return (
                  <motion.div
                    key={tool.name}
                    className="absolute z-10"
                    style={{ left: `${cx}%`, top: `${cy}%`, transform: "translate(-50%, -50%)" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                      className="w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-xl border-2 border-white"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.icon}
                    </motion.div>
                    <p className="text-center text-[10px] font-semibold text-gray-500 mt-1">{tool.name}</p>
                  </motion.div>
                );
              })}

              {/* Animated connecting lines SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {tools.map((_, i) => {
                  const angle = (i * 360) / tools.length;
                  const rad = (angle * Math.PI) / 180;
                  const r = 42;
                  const cx = 50 + r * Math.cos(rad);
                  const cy = 50 + r * Math.sin(rad);
                  const x = (cx / 100) * 400;
                  const y = (cy / 100) * 400;
                  return (
                    <motion.line
                      key={i}
                      x1="200" y1="200" x2={x} y2={y}
                      stroke="#CECBF6"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    />
                  );
                })}
                {/* Animated pulse circle */}
                <motion.circle
                  cx="200" cy="200" r="0" fill="none" stroke="#534AB7" strokeWidth="1.5" opacity="0.3"
                  animate={{ r: [0, 85], opacity: [0.5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                />
              </svg>
            </div>
          </motion.div>}

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
