"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Results", href: "/#results" },
  ];

  const industries = [
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Marketing Agencies", href: "/industries/marketing-agencies" },
    { name: "E-commerce", href: "/industries/ecommerce" },
    { name: "Recruitment", href: "/industries/recruitment" },
    { name: "Coaches", href: "/industries/coaches" },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              Rolla<span className="text-[#534AB7]">.</span>
            </Link>
            </motion.div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.35 }}
                whileHover={{ y: -2 }}
              >
              <Link
                href={link.href}
                className="text-gray-600 hover:text-[#534AB7] font-medium transition-colors"
              >
                {link.name}
              </Link>
              </motion.div>
            ))}

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-[#534AB7] font-medium transition-colors py-2">
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 mt-1"
                  >
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#534AB7] hover:bg-purple-50 transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="bg-[#534AB7] hover:bg-[#43399b] text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get a free consultation
            </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:hidden bg-white border-b border-gray-100 shadow-sm absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#534AB7] hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
              </motion.div>
            ))}

            {/* Mobile Industries */}
            <div className="pt-2">
              <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Industries</p>
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={industry.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#534AB7]"
                >
                  {industry.name}
                </Link>
              ))}
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 text-center bg-[#534AB7] text-white px-5 py-3 rounded-md font-medium"
            >
              Get a free consultation
            </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
