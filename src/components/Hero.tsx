"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { ArrowUpRight, Sparkles, Activity } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   ANIMATED PARTICLES
───────────────────────────────────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number; }[] = [];

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const spawn = () => {
      particles.length = 0;
      const count = Math.floor((w * h) / 19000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.6,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.35 + 0.1,
        });
      }
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 84, 246, ${p.alpha * 0.4})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { resize(); spawn(); });
    ro.observe(canvas);
    resize(); spawn(); draw();

    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const dur = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { requestAnimationFrame(tick); observer.disconnect(); }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fade: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yText   = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [activeTab, setActiveTab] = useState<"architecture" | "specs">("architecture");

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden bg-[#FAF7F2]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-80" />
      <ParticleField />

      {/* Soft Apple Radial Glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2554F6]/[0.035] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6366F1]/[0.03] blur-[140px] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ y: yText, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ════════ LEFT: EDITORIAL COPY ════════ */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="lg:col-span-7">
            
            {/* Linear Pill Badge */}
            <motion.div variants={fade} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-xs mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
              </span>
              <span className="font-mono text-[0.68rem] text-[#0F1014] uppercase tracking-widest font-bold">
                Accepting Selected Clients · 2026
              </span>
              <span className="w-1 h-1 rounded-full bg-black/20" />
              <span className="text-[0.72rem] text-[#2554F6] font-semibold flex items-center gap-1">
                India Advantage <Sparkles className="w-3 h-3" />
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={fade}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0F1014] leading-[1.02] mb-8"
            >
              Custom web applications,{" "}
              <span className="font-serif italic font-normal text-[#2554F6] block mt-1">
                architected for scale.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fade}
              className="text-lg sm:text-xl text-[#33363F] leading-relaxed mb-10 max-w-xl font-normal"
            >
              Rolla designs and engineers high-throughput websites and full-stack software for modern businesses. Built with Java, Spring Boot, and Next.js. Startup-friendly milestone rates.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fade} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-14">
              <Link
                href="#contact"
                className="btn-primary flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="btn-secondary"
              >
                Explore Capabilities
              </Link>
            </motion.div>

            {/* Linear Bento Metric Pills */}
            <motion.div
              variants={fade}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-black/[0.08]"
            >
              {[
                { target: 50, suffix: "%", label: "Cost Savings vs US/UK" },
                { target: 2,  suffix: "s", label: "Average Render Time" },
                { target: 100, suffix: "%", label: "Custom · Zero Templates" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0F1014] tracking-tight">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-[#686C78] font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT: APPLE BENTO INTERACTIVE CONSOLE ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="p-2 sm:p-3">
              {/* Inner container */}
              <div className="bg-[#FAF7F2]/70 rounded-[22px] border border-black/[0.05] p-6 flex flex-col justify-between min-h-[460px]">
                
                {/* Header Switcher */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#0F1014]/15" />
                      <div className="w-3 h-3 rounded-full bg-[#0F1014]/15" />
                      <div className="w-3 h-3 rounded-full bg-[#0F1014]/15" />
                    </div>

                    {/* Apple Style Segmented Control */}
                    <div className="flex items-center bg-white/90 p-1 rounded-full border border-black/[0.06] shadow-xs">
                      {[
                        { id: "architecture", label: "Pipeline" },
                        { id: "specs", label: "Stack" },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id as typeof activeTab)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                            activeTab === tab.id
                              ? "bg-[#0F1014] text-white shadow-xs"
                              : "text-[#686C78] hover:text-[#0F1014]"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Body */}
                  {activeTab === "architecture" && (
                    <motion.div
                      key="arch"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-white rounded-2xl border border-black/[0.06] shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-[#2554F6]">01 / INITIALIZE</span>
                          <span className="text-[0.68rem] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Verified</span>
                        </div>
                        <p className="text-sm font-bold text-[#0F1014]">Client Funnel & Scope Wireframe</p>
                        <p className="text-xs text-[#686C78] mt-1">Interactive roadmap with milestone deliverables.</p>
                      </div>

                      <div className="p-4 bg-white rounded-2xl border border-black/[0.06] shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-[#2554F6]">02 / BUILD & AUDIT</span>
                          <span className="text-[0.68rem] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Java Based</span>
                        </div>
                        <p className="text-sm font-bold text-[#0F1014]">Multi-tenant Backend & PostgreSQL</p>
                        <p className="text-xs text-[#686C78] mt-1">Hardened API routing with continuous staging previews.</p>
                      </div>

                      <div className="p-4 bg-white rounded-2xl border border-black/[0.06] shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-[#2554F6]">03 / PRODUCTION</span>
                          <span className="text-[0.68rem] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-semibold">Edge CDN</span>
                        </div>
                        <p className="text-sm font-bold text-[#0F1014]">Deploy & Zero-Downtime Launch</p>
                        <p className="text-xs text-[#686C78] mt-1">100% code ownership handed over with documentation.</p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "specs" && (
                    <motion.div
                      key="specs"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 bg-white rounded-2xl border border-black/[0.06] shadow-xs space-y-3 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                        <span className="text-[#686C78]">Backend Framework</span>
                        <span className="font-bold text-[#0F1014]">Java 21 · Spring Boot</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                        <span className="text-[#686C78]">Frontend Layer</span>
                        <span className="font-bold text-[#0F1014]">React · Next.js · Tailwind</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                        <span className="text-[#686C78]">Relational DB</span>
                        <span className="font-bold text-[#0F1014]">PostgreSQL · Prisma</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5">
                        <span className="text-[#686C78]">Payments</span>
                        <span className="font-bold text-[#0F1014]">Stripe Connect API</span>
                      </div>
                    </motion.div>
                  )}


                </div>

                {/* Footer Bar */}
                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#33363F] font-semibold">
                    <Activity className="w-4 h-4 text-[#2554F6]" />
                    <span>Real-Time Engine Status</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-100/60 px-2.5 py-0.5 rounded-full text-[0.68rem]">
                    Optimal
                  </span>
                </div>

              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
