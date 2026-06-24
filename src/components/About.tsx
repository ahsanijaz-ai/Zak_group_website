"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Target, Users } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 bg-ink-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Story & Vision */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-bold tracking-widest uppercase text-gold-light mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Guiding Your Global Journey
              </h3>
              <p className="text-off-white/80 leading-relaxed text-lg">
                Founded in Peshawar, ZAK Consultants (Pvt.) Ltd. was built on a simple mission: make the visa process clear, honest, and stress-free for every client. Over the years, we&apos;ve guided students, professionals, and families through study, work, business, and immigration visa applications to destinations across the UK, North America, Europe, Australia, and the Gulf.
              </p>
              <p className="text-off-white/80 leading-relaxed text-lg mt-4">
                Our team combines hands-on visa expertise with a genuinely personal approach — because behind every application is someone&apos;s future.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl border-l-4 border-l-gold-main">
              <h4 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                <Target className="text-gold-main" size={20} />
                Our Mission
              </h4>
              <p className="text-off-white/80">
                To simplify global mobility for our clients by providing transparent, expert, and end-to-end visa consultancy — from the first consultation to the day they board their flight.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl border-l-4 border-l-gold-light">
              <h4 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                <Shield className="text-gold-light" size={20} />
                Our Vision
              </h4>
              <p className="text-off-white/80">
                To be Pakistan&apos;s most trusted visa consultancy, known for integrity, accuracy, and consistently high success rates across every country we serve.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Why Choose Us */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Why Choose Us</h3>
              <p className="text-off-white/70">The ZAK Consultants difference.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-charcoal w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-main/20 transition-colors">
                  <Users className="text-gold-light" size={24} />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Experienced Consultants</h5>
                <p className="text-sm text-off-white/70 leading-relaxed">
                  Our team has handled thousands of applications across dozens of visa categories and countries.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-charcoal w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-main/20 transition-colors">
                  <Target className="text-gold-light" size={24} />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Personalized Guidance</h5>
                <p className="text-sm text-off-white/70 leading-relaxed">
                  Every client gets a tailored visa strategy based on their profile, goals, and destination.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-charcoal w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-main/20 transition-colors">
                  <CheckCircle2 className="text-gold-light" size={24} />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">High Success Rate</h5>
                <p className="text-sm text-off-white/70 leading-relaxed">
                  A meticulous, document-first process that minimizes rejections and delays.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-charcoal w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-main/20 transition-colors">
                  <Shield className="text-gold-light" size={24} />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Transparent Process</h5>
                <p className="text-sm text-off-white/70 leading-relaxed">
                  Clear fees, honest timelines, and regular updates — no hidden surprises.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
