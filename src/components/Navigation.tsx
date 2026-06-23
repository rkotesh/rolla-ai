"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────
   UNIQUE ROLLA LOGO MARK
   ─────────────────────────────────────────────────────────────
   Concept: A geometric "R" (stem + rectangular bowl + diagonal
   leg) enclosed in a thin circle ring.  The diagonal leg
   pierces THROUGH and beyond the ring — symbolising momentum
   and forward motion.  No other brand uses this exact mark.
───────────────────────────────────────────────────────────── */
function RollaLogoMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="1.6" />

      {/* R — vertical stem */}
      <line x1="12" y1="12" x2="12" y2="32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* R — top bar */}
      <line x1="12" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* R — right side of bowl (slight inward slope) */}
      <line x1="26" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* R — middle bar */}
      <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* R — diagonal leg, breaks out of the ring boundary */}
      <line x1="24" y1="22" x2="38" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED 3-LINE HAMBURGER
───────────────────────────────────────────────────────────── */
function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-[15px] flex flex-col justify-between">
      <motion.span
        animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="block h-[1.5px] w-full bg-current rounded-full origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18 }}
        className="block h-[1.5px] w-full bg-current rounded-full"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="block h-[1.5px] w-full bg-current rounded-full origin-center"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NAV DATA
───────────────────────────────────────────────────────────── */
const navLinks = [
  { num: "01", name: "Services",     href: "/#services" },
  { num: "02", name: "Pricing",      href: "/#pricing" },
  { num: "03", name: "Results",      href: "/#results" },
  { num: "04", name: "How It Works", href: "/#how-it-works" },
  { num: "05", name: "About",        href: "/#about" },
  { num: "06", name: "Contact",      href: "/#contact" },
];
const industries = [
  { name: "Real Estate",          href: "/industries/real-estate" },
  { name: "Marketing Agencies",   href: "/industries/marketing-agencies" },
  { name: "E-commerce",           href: "/industries/ecommerce" },
  { name: "Recruitment",          href: "/industries/recruitment" },
  { name: "Coaches & Consultants",href: "/industries/coaches" },
];

/* ─────────────────────────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────────────────────────── */
export default function Navigation() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeAll = () => { setMenuOpen(false); setSearchOpen(false); };

  /* Border always visible, BG always solid dark → "matches Palantir visible" */
  const barStyle = [
    "fixed top-0 w-full z-50 transition-all duration-300",
    "bg-[#08090C]/97 backdrop-blur-lg border-b border-[#1e2028]",
    scrolled ? "shadow-[0_1px_0_#1e2028]" : "",
  ].join(" ");

  return (
    <>
      {/* ════════════ NAV BAR ════════════ */}
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={barStyle}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between h-[60px]">

            {/* ── LOGO ── */}
            <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 group">
              <motion.div
                className="text-white group-hover:text-[#A5B4FC] transition-colors duration-300"
                whileHover={{ scale: 1.08, rotate: 4 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
              >
                <RollaLogoMark className="w-[28px] h-[28px]" />
              </motion.div>
              <span className="text-white font-semibold text-[15px] tracking-tight leading-none select-none">
                Rolla
              </span>
            </Link>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-1.5">
              {/* "Get Started" — Palantir-style outlined button */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  href="#contact"
                  id="nav-cta"
                  onClick={closeAll}
                  className="
                    hidden sm:inline-flex items-center
                    border border-[#3e4150]
                    hover:border-white hover:bg-white hover:text-black
                    text-white text-[12px] font-medium tracking-wide
                    px-4 py-[7px] mr-2
                    transition-all duration-200
                  "
                >
                  Get Started
                </Link>
              </motion.div>

              {/* Search */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
                aria-label="Search"
                className="flex items-center justify-center w-10 h-10 text-[#8a91a0] hover:text-white transition-colors duration-200"
              >
                <Search className="w-[17px] h-[17px]" strokeWidth={1.6} />
              </motion.button>

              {/* Hamburger */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
                aria-label="Toggle menu"
                className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-200"
              >
                <Hamburger open={menuOpen} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── SEARCH DROPDOWN ── */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              key="search"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#1e2028] bg-[#08090C]"
            >
              <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-4 flex items-center gap-3">
                <Search className="w-4 h-4 text-[#6b7280] shrink-0" strokeWidth={1.5} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search services, pricing, industries…"
                  className="flex-grow bg-transparent text-white text-sm placeholder-[#3a3d4e] outline-none font-sans"
                />
                <button onClick={() => setSearchOpen(false)} className="text-[#6b7280] hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ════════════ FULL-SCREEN OVERLAY ════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#08090C]"
              style={{ paddingTop: 60 }}
            >
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none" />

              {/* Glowing indigo orb */}
              <motion.div
                animate={{ opacity: [0.04, 0.09, 0.04], scale: [1, 1.12, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6366F1] blur-[120px] pointer-events-none"
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-grow overflow-y-auto">
                  <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">

                      {/* ── Main links ── */}
                      <nav>
                        <p className="font-mono text-[0.58rem] text-[#6366F1] uppercase tracking-[0.2em] mb-8">
                          ↳ Navigation
                        </p>
                        {navLinks.map((link, i) => (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -32 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ delay: 0.04 + i * 0.055, duration: 0.45, ease: "easeOut" }}
                          >
                            <Link
                              href={link.href}
                              onClick={closeAll}
                              className="
                                group flex items-center justify-between
                                py-4 border-b border-[#1a1c23]
                                text-white hover:text-[#A5B4FC]
                                transition-colors duration-200
                              "
                            >
                              <div className="flex items-baseline gap-4">
                                <span className="font-mono text-[0.55rem] text-[#3a3d4e] group-hover:text-[#6366F1] transition-colors w-5 shrink-0">
                                  {link.num}
                                </span>
                                <span className="text-3xl md:text-4xl font-light tracking-tight">
                                  {link.name}
                                </span>
                              </div>
                              <motion.span
                                className="text-[#3a3d4e] group-hover:text-[#6366F1] text-xl transition-colors"
                                whileHover={{ x: 5, y: -5 }}
                              >
                                ↗
                              </motion.span>
                            </Link>
                          </motion.div>
                        ))}
                      </nav>

                      {/* ── Right sidebar ── */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
                        className="space-y-12"
                      >
                        {/* Industries */}
                        <div>
                          <p className="font-mono text-[0.58rem] text-[#6366F1] uppercase tracking-[0.2em] mb-5">
                            ↳ Industries
                          </p>
                          <ul className="space-y-3">
                            {industries.map((ind, i) => (
                              <motion.li
                                key={ind.name}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.28 + i * 0.05 }}
                              >
                                <Link
                                  href={ind.href}
                                  onClick={closeAll}
                                  className="flex items-center gap-3 text-[#8a91a0] hover:text-white transition-colors duration-200 text-sm group"
                                >
                                  <span className="w-2.5 h-2.5 border border-[#2a2d38] group-hover:border-[#6366F1] group-hover:bg-[#6366F1] transition-all duration-200 shrink-0" />
                                  {ind.name}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact block */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.52 }}
                          className="border border-[#1e2028] p-6 space-y-4"
                        >
                          <p className="font-mono text-[0.58rem] text-[#6366F1] uppercase tracking-[0.2em]">
                            ↳ Start a Project
                          </p>
                          <a
                            href="mailto:rolla.aiagency@gmail.com"
                            className="block text-sm text-white hover:text-[#A5B4FC] transition-colors"
                          >
                            rolla.aiagency@gmail.com
                          </a>
                          <p className="font-mono text-[0.52rem] text-[#3a3d4e] uppercase tracking-wider">
                            Response within 12 hours
                          </p>
                          <Link
                            href="#contact"
                            onClick={closeAll}
                            className="
                              inline-flex items-center gap-2
                              border border-[#6366F1] text-[#6366F1]
                              hover:bg-[#6366F1] hover:text-white
                              text-[11px] font-mono uppercase tracking-widest
                              px-5 py-2.5 transition-all duration-200 mt-2
                            "
                          >
                            Book Free Call ↳
                          </Link>
                        </motion.div>
                      </motion.div>

                    </div>
                  </div>
                </div>

                {/* Footer strip */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="border-t border-[#1e2028] px-5 sm:px-8 lg:px-14 py-4 flex items-center justify-between"
                >
                  <p className="font-mono text-[0.52rem] text-[#3a3d4e] uppercase tracking-widest">
                    © {new Date().getFullYear()} Rolla Digital Engineering
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"
                    />
                    <span className="font-mono text-[0.52rem] text-[#4ADE80] uppercase tracking-widest">
                      Available for New Projects
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
