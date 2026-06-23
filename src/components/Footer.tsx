"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

/* ─────────────────────────────────────────────────────────────
   UNIQUE ROLLA LOGO MARK
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
      <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12" y1="12" x2="12" y2="32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="26" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="24" y1="22" x2="38" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

const footerCols = [
  {
    title: "Platforms",
    links: [
      { name: "Custom Web Apps", href: "/#services" },
      { name: "E-Commerce Solutions", href: "/#services" },
      { name: "API Integrations", href: "/#services" },
      { name: "UI/UX Design", href: "/#services" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { name: "MERN Stack", href: "/#tools" },
      { name: "Django & Python", href: "/#tools" },
      { name: "Performance Optimization", href: "/#services" },
      { name: "SEO Engineering", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About / Founder", href: "/#about" },
      { name: "Case Studies", href: "/#results" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { name: "Book a Call", href: "/#contact" },
      { name: "Contact Us", href: "/#contact" },
      { name: "Industries", href: "/#industries" },
      { name: "rolla.aiagency@gmail.com", href: "mailto:rolla.aiagency@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="bg-rolla-bg border-t border-[#1e2028] pt-16 pb-8 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="text-white group-hover:text-[#A5B4FC] transition-colors duration-300">
                <RollaLogoMark className="w-[28px] h-[28px]" />
              </div>
              <span className="text-white font-semibold text-[15px] tracking-tight leading-none select-none">
                Rolla
              </span>
            </Link>
            <p className="text-[0.7rem] text-[#C4C9D4] leading-relaxed mb-5 max-w-[180px]">
              Custom websites & web applications built for growth. India-based. Global quality.
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                href="https://linkedin.com/in/sankulakoteswararao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="border border-[#252830] hover:border-[#6366F1]/50 p-2 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#C4C9D4] hover:text-[#A5B4FC]" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/rkotesh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="border border-[#252830] hover:border-[#6366F1]/50 p-2 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#C4C9D4] hover:text-[#A5B4FC]" />
              </motion.a>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[0.6rem] text-[#818CF8] uppercase tracking-widest mb-4">
                ↳ {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#C4C9D4] hover:text-white transition-colors font-sans"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#1e2028] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[0.6rem] text-[#8a91a0] uppercase tracking-widest">
            © {new Date().getFullYear()} Rolla Digital Engineering. All rights reserved.
          </p>
          <p className="font-mono text-[0.6rem] text-[#8a91a0] uppercase tracking-wider">
            Founded by{" "}
            <span className="text-[#C4C9D4]">Koteswararao Sankula</span>
            {" "}·{" "}
            Co-founded by{" "}
            <span className="text-[#C4C9D4]">Narendra Kumar</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
