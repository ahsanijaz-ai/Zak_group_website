"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`glass-panel rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-charcoal/80" : "bg-charcoal/40 border-transparent"
        }`}>
          {/* Logo */}
          <Link href="#home" className="relative flex items-center shrink-0">
            <div className="w-32 h-10 relative">
              <Image 
                src="/assets/zak-logo.png" 
                alt="ZAK Consultants" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-off-white/80 hover:text-white hover:text-gradient-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link 
              href="#contact"
              className="bg-gradient-gold text-ink-black px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(225,197,133,0.4)] transition-all duration-300 inline-block"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold-light p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink-black/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-charcoal border-l border-gold-light/20 shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="w-24 h-8 relative">
                  <Image 
                    src="/assets/zak-logo.png" 
                    alt="ZAK Consultants" 
                    fill 
                    className="object-contain object-left"
                  />
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gold-light p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-off-white/90 hover:text-gold-light transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-white/10">
                <Link 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-gradient-gold text-ink-black px-6 py-3 rounded-full font-semibold"
                >
                  Book Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
