"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does the visa process take?",
    a: "Processing time varies by country and visa type, typically ranging from 2 to 12 weeks. We'll give you a realistic timeline during your free consultation based on your specific case."
  },
  {
    q: "What documents do I need to apply?",
    a: "Requirements vary by destination, but generally include a valid passport, financial statements, proof of purpose (admission letter, job offer, or itinerary), and supporting personal documents. We provide a full checklist for your specific visa."
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No consultancy can guarantee approval, as the final decision rests with the relevant embassy or immigration authority. What we guarantee is a meticulously prepared, accurate, and complete application that gives you the strongest possible chance."
  },
  {
    q: "What is your consultancy fee?",
    a: "Our fees depend on the visa category and destination country. We discuss all costs transparently during your free initial consultation — no hidden charges."
  },
  {
    q: "Can you help if my visa was previously rejected?",
    a: "Yes. We review your previous application, identify the likely reasons for rejection, and rebuild a stronger case before reapplying."
  },
  {
    q: "Do you offer services for all countries?",
    a: "We specialize in the UK, USA, Canada, Australia, Schengen Europe, UAE, Turkey, and New Zealand, with support available for other destinations on request."
  },
  {
    q: "How do I book a consultation?",
    a: "Simply click 'Book Free Consultation' on our website, or call us directly — our team will schedule a session at your convenience."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-ink-black relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-gold-light mb-2"
          >
            Got Questions?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            Frequently Asked Questions
          </motion.h3>
        </div>

        {/* Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={cn(
                "glass-card rounded-2xl overflow-hidden transition-all duration-300",
                openIdx === idx ? "border-gold-main/50 shadow-[0_0_20px_rgba(225,197,133,0.1)]" : ""
              )}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={cn(
                  "font-bold text-lg transition-colors",
                  openIdx === idx ? "text-gold-light" : "text-white"
                )}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={cn(
                    "shrink-0 text-gold-light transition-transform duration-300",
                    openIdx === idx ? "rotate-180" : ""
                  )} 
                />
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-off-white/80 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
