"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed R.",
    destination: "Canada",
    text: "ZAK Consultants made my study permit process so much easier than I expected. Clear guidance every step of the way."
  },
  {
    name: "Sana K.",
    destination: "UK",
    text: "Professional, honest, and quick to respond. My visit visa was approved without any issues."
  },
  {
    name: "Bilal M.",
    destination: "UAE",
    text: "Got my work visa sorted in record time. Highly recommend their team."
  },
  {
    name: "Fatima A.",
    destination: "Australia",
    text: "From document prep to interview practice, they covered everything for my student visa."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal/30 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-gold-light mb-2"
          >
            Client Success
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            Stories of Trust
          </motion.h3>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-gold-main/20" size={64} />
              
              <div className="flex gap-1 mb-6 text-gold-light">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-off-white/90 text-lg mb-8 leading-relaxed italic relative z-10">
                &quot;{t.text}&quot;
              </p>

              <div className="mt-auto border-t border-white/10 pt-4">
                <h5 className="font-bold text-white">{t.name}</h5>
                <p className="text-sm text-gold-light">Visa to {t.destination}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
