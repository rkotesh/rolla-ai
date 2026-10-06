"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function RollaLogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="2.2" />
      <line x1="12" y1="12" x2="12" y2="32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="12" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="26" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="24" y1="22" x2="38" y2="38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

const navLinks = [
  { name: "Services",     href: "/#services" },
  { name: "Pricing",      href: "/#pricing" },
  { name: "Results",      href: "/#results" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About",        href: "/#about" },
  { name: "Contact",      href: "/#contact" },
];

export default function Navigation() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeAll = () => { setMenuOpen(false); setSearchOpen(false); };

  return (
    <>
      {/* Floating Apple/Linear Pill Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-6xl mx-auto rounded-full pointer-events-auto transition-all duration-300 px-5 sm:px-6 py-3 flex items-center justify-between border ${
            scrolled
              ? "bg-[#FAF7F2]/85 backdrop-blur-xl border-black/[0.1] shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              : "bg-[#FAF7F2]/60 backdrop-blur-md border-black/[0.06] shadow-xs"
          }`}
        >
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 group">
            <motion.div
              className="text-[#0F1014] group-hover:text-[#2554F6] transition-colors duration-200"
              whileHover={{ rotate: 10, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <RollaLogoMark className="w-[26px] h-[26px]" />
            </motion.div>
            <span className="text-[#0F1014] font-black text-[18px] tracking-tight select-none">
              Rolla<span className="text-[#2554F6]">.</span>
            </span>
          </Link>

          {/* Desktop Links (Linear Style) */}
          <div className="hidden md:flex items-center gap-1.5 bg-black/[0.03] p-1 rounded-full border border-black/[0.04]">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 text-xs font-semibold text-[#33363F] hover:text-[#0F1014] hover:bg-white rounded-full transition-all duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
              aria-label="Search"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#33363F] hover:text-[#0F1014] hover:bg-white border border-transparent hover:border-black/[0.08] transition-all"
            >
              <Search className="w-4 h-4" strokeWidth={2.2} />
            </button>

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0F1014] hover:bg-[#2554F6] text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-xs hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
              aria-label="Menu"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white border border-black/[0.08] text-[#0F1014]"
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span className={`block h-[1.8px] bg-current rounded-full transition-all ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block h-[1.8px] bg-current rounded-full transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.8px] bg-current rounded-full transition-all ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </div>
            </button>
          </div>
        </motion.nav>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="max-w-2xl mx-auto mt-3 p-3 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.09] shadow-xl pointer-events-auto"
            >
              <div className="flex items-center gap-3 px-3">
                <Search className="w-4 h-4 text-[#686C78]" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search capabilities, pricing, case studies..."
                  className="w-full bg-transparent text-sm font-medium text-[#0F1014] placeholder-[#9B9FA9] outline-none"
                />
                <button onClick={() => setSearchOpen(false)} className="text-[#686C78] hover:text-[#0F1014] p-1">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-2xl pt-28 px-6 pb-8 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-4">
              <span className="bento-pill mb-4">↳ Directory</span>
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeAll}
                  className="block text-3xl font-extrabold text-[#0F1014] hover:text-[#2554F6] py-2 border-b border-black/[0.05]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-black/[0.08]">
              <Link
                href="#contact"
                onClick={closeAll}
                className="w-full btn-primary"
              >
                Start Your Project ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
