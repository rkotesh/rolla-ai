"use client";

import { motion, useScroll, useTransform, type Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useCallback, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   FLOATING PARTICLE FIELD
   Lightweight canvas-based particles for depth and elegance
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
      const count = Math.floor((w * h) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          alpha: Math.random() * 0.5 + 0.15,
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
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
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
   ANIMATED COUNTER — counts up on mount
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
      const eased = 1 - Math.pow(1 - t, 3); // ease out cubic
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

/* ─────────────────────────────────────────────────────────────
   SYSTEM DIAGRAM (terminal window graphic)
───────────────────────────────────────────────────────────── */
function SystemDiagram() {
  const nodes = [
    { label: "Discovery", sub: "Requirements",  x: 20,  y: 50,  delay: 0.3 },
    { label: "Design",    sub: "UI/UX Arch.",   x: 175, y: 18,  delay: 0.5 },
    { label: "Build",     sub: "Full-Stack",    x: 330, y: 50,  delay: 0.7 },
    { label: "Deploy",    sub: "Production",    x: 175, y: 110, delay: 0.9 },
  ];
  const edges = [
    { x1: 100, y1: 64, x2: 166, y2: 31 },
    { x1: 202, y1: 18, x2: 320, y2: 50 },
    { x1: 335, y1: 72, x2: 215, y2: 100 },
    { x1: 170, y1: 110, x2: 98,  y2: 78 },
  ];

  return (
    <svg viewBox="0 0 430 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diag-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0L0 0 0 32" fill="none" stroke="#1e2028" strokeWidth="0.5" />
        </pattern>
        <marker id="arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <polygon points="0 0, 5 2.5, 0 5" fill="#6366F1" opacity="0.7" />
        </marker>
      </defs>
      <rect width="430" height="180" fill="url(#diag-grid)" />

      {/* Edges */}
      {edges.map((e, i) => (
        <motion.line
          key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke="#6366F1" strokeWidth="1" strokeDasharray="5 3"
          markerEnd="url(#arr)" opacity={0}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 0.6 + i * 0.18, duration: 0.5 }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: n.delay, type: "spring", stiffness: 220, damping: 24 }}
        >
          <rect x={n.x} y={n.y - 8} width="80" height="38" rx="1" fill="#0d0e12" stroke="#252830" strokeWidth="1" />
          <rect x={n.x} y={n.y - 8} width="80" height="2" fill="#6366F1" />
          <motion.circle cx={n.x + 71} cy={n.y - 4} r={3} fill="#4ADE80"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
          <text x={n.x + 40} y={n.y + 9}  textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="600">{n.label}</text>
          <text x={n.x + 40} y={n.y + 22} textAnchor="middle" fill="#8a91a0" fontSize="6"   fontFamily="monospace">{n.sub}</text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGGER VARIANTS
───────────────────────────────────────────────────────────── */
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const fade: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
};

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yText   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-[60px] overflow-hidden bg-[#08090C]">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-grid opacity-55 pointer-events-none" />
      <ParticleField />

      {/* Breathing glow orbs */}
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-[#6366F1] blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-[#818CF8] blur-[140px] pointer-events-none"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 45%, transparent, #08090C 72%)" }}
      />

      {/* ── Content ── */}
      <motion.div style={{ y: yText, opacity }} className="relative z-10 w-full">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-0 lg:min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">

            {/* ════════ LEFT — COPY ════════ */}
            <motion.div variants={stagger} initial="hidden" animate="visible">

              {/* Status pill */}
              <motion.div variants={fade} className="flex items-center gap-2.5 mb-10">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block w-2 h-2 rounded-full bg-[#4ADE80]"
                />
                <span className="font-mono text-[0.62rem] text-[#4ADE80] uppercase tracking-[0.2em]">
                  Now Accepting New Clients · 2026
                </span>
              </motion.div>

              {/* ── HEADLINE ──
                  Pure white on #08090C → maximum contrast
                  Serif italic for elegance on "Software of" line
              */}
              <motion.h1
                variants={fade}
                className="font-bold tracking-tight leading-[0.93] mb-8"
              >
                {/* Line 1 — solid white, large */}
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}
                >
                  Custom Web
                </span>

                {/* Line 2 — indigo gradient, serif italic */}
                <span
                  className="block font-serif italic"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                    background: "linear-gradient(95deg, #c7d2fe 0%, #818CF8 45%, #6366F1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Software of
                </span>

                {/* Line 3 — white + trademark */}
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}
                >
                  Tomorrow.
                  <sup className="font-sans font-light text-[#6366F1] ml-1" style={{ fontSize: "0.32em", verticalAlign: "super" }}>
                    ™
                  </sup>
                </span>
              </motion.h1>

              {/* Divider line */}
              <motion.div
                variants={fade}
                className="w-12 h-[1px] bg-gradient-to-r from-[#6366F1] to-transparent mb-8"
              />

              {/* Subheading — #C4C9D4 for readability on dark bg */}
              <motion.p
                variants={fade}
                className="text-[#C4C9D4] text-base leading-[1.75] mb-12 max-w-[510px]"
              >
                Rolla builds high-performance websites and web applications
                tailored to your business — so you launch faster, convert better,
                and scale without limits. India-based engineering.
                Startup-friendly pricing.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fade} className="flex flex-col sm:flex-row items-start gap-3 mb-14">
                <Link
                  href="#contact"
                  id="hero-cta-primary"
                  className="
                    group relative overflow-hidden
                    inline-flex items-center gap-2
                    bg-white text-black
                    text-[13px] font-semibold px-7 py-3.5
                    transition-all duration-250
                    hover:bg-[#6366F1] hover:text-white
                  "
                >
                  Start Your Project
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    ↗
                  </motion.span>
                </Link>
                <Link
                  href="#how-it-works"
                  id="hero-cta-secondary"
                  className="
                    inline-flex items-center gap-2
                    border border-[#2a2d38] text-[#C4C9D4]
                    hover:border-[#6366F1] hover:text-white
                    text-[13px] font-medium px-7 py-3.5
                    transition-all duration-250
                  "
                >
                  How It Works
                </Link>
              </motion.div>

              {/* Animated stats */}
              <motion.div variants={fade} className="flex flex-wrap gap-10">
                {[
                  { target: 50, suffix: "%",   label: "Cost savings vs US/UK" },
                  { target: 2,  suffix: "s",   label: "Avg page load time" },
                  { target: 100, suffix: "%",  label: "Bespoke — no templates" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col"
                  >
                    {/* Counter in bold white — high contrast */}
                    <span className="font-mono text-[1.55rem] font-bold text-white leading-none">
                      <Counter target={s.target} suffix={s.suffix} />
                    </span>
                    <span className="font-mono text-[0.57rem] text-[#C4C9D4] uppercase tracking-[0.16em] mt-1.5">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ════════ RIGHT — TERMINAL ════════ */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 28 }}
              >
                {/* Ambient glow behind terminal */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#6366F1] opacity-[0.07] blur-2xl" />

                {/* Terminal */}
                <div className="relative border border-[#1e2028]">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d0e12] border-b border-[#1e2028]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <span className="font-mono text-[0.57rem] text-[#8a91a0] ml-2">rolla — pipeline/core.ts</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"
                      />
                      <span className="font-mono text-[0.52rem] text-[#4ADE80] uppercase tracking-wider">LIVE</span>
                    </div>
                  </div>

                  {/* Diagram */}
                  <div className="bg-[#0d0e12] p-5">
                    <SystemDiagram />
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-mono text-[0.55rem] text-[#6366F1] uppercase tracking-widest">
                        sys.pipeline.v2.1
                      </span>
                      <span className="font-mono text-[0.55rem] text-[#4ADE80] uppercase tracking-widest">
                        ● All systems operational
                      </span>
                    </div>
                  </div>

                  {/* Code block */}
                  <div className="bg-[#0a0b0e] border-t border-[#1e2028] p-5 space-y-1.5 font-mono text-[0.62rem]">
                    {[
                      { ln: "01", kw: "#6366F1", code: "import",  rest: "{ Project } from 'rolla/core';" },
                      { ln: "02", kw: "#A5B4FC", code: "const",   rest: "client = await Project.init();" },
                      { ln: "03", kw: "#4ADE80", code: "await",   rest: "client.design({ bespoke: true });" },
                      { ln: "04", kw: "#4ADE80", code: "await",   rest: "client.build({ stack: 'MERN' });" },
                      { ln: "05", kw: "#F59E0B", code: "return",  rest: "client.deploy({ env: 'production' });" },
                    ].map((l, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 + i * 0.12 }}
                        className="flex gap-4"
                      >
                        <span className="text-[#252830] select-none w-4 text-right shrink-0">{l.ln}</span>
                        <span className="text-[#C4C9D4]">
                          <span style={{ color: l.kw }}>{l.code} </span>
                          {l.rest}
                        </span>
                      </motion.div>
                    ))}
                    {/* Blinking cursor */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0 }}
                      className="flex gap-4"
                    >
                      <span className="text-[#252830] select-none w-4 text-right shrink-0">06</span>
                      <motion.span
                        className="inline-block w-[5px] h-[10px] bg-[#6366F1]"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.9, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0], y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#6366F1] to-transparent origin-top"
        />
        <span className="font-mono text-[0.5rem] text-[#3a3d4e] uppercase tracking-[0.22em]">Scroll</span>
      </motion.div>
    </section>
  );
}
