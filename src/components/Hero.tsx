"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

// Dynamically import Globe3D to avoid SSR issues with Three.js
const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-main/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-dark/20 rounded-full blur-[150px] -z-10 mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Your Trusted Partner for{" "}
              <span className="text-gradient-gold">Global Visa Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-off-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Expert visa consultancy for study, work, business, and immigration — helping you reach your destination with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="#contact"
                className="w-full sm:w-auto bg-gradient-gold text-ink-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(225,197,133,0.4)] transition-all duration-300 text-center"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="#services"
                className="w-full sm:w-auto glass-panel px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-center text-gold-light"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* 3D Globe Area */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {mounted && <Globe3D />}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-panel rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-serif text-gradient-gold font-bold mb-2">5+</span>
              <span className="text-sm md:text-base text-off-white/70">Years of Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-serif text-gradient-gold font-bold mb-2">2,000+</span>
              <span className="text-sm md:text-base text-off-white/70">Visas Processed</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-serif text-gradient-gold font-bold mb-2">15+</span>
              <span className="text-sm md:text-base text-off-white/70">Countries Served</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-serif text-gradient-gold font-bold mb-2">98%</span>
              <span className="text-sm md:text-base text-off-white/70">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
