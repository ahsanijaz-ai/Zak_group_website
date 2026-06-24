"use client";

import { motion } from "framer-motion";
import { 
  MessageSquareText, 
  FileSearch, 
  Files, 
  Send, 
  Users, 
  PlaneTakeoff 
} from "lucide-react";

const steps = [
  {
    title: "Free Consultation",
    desc: "We assess your profile, goals, and eligibility in a no-cost initial session.",
    icon: <MessageSquareText size={24} />
  },
  {
    title: "Document Assessment",
    desc: "Our team reviews and verifies all required documents for accuracy and completeness.",
    icon: <FileSearch size={24} />
  },
  {
    title: "Application Preparation",
    desc: "We prepare and compile your full application package to embassy standards.",
    icon: <Files size={24} />
  },
  {
    title: "Visa Submission",
    desc: "Your application is submitted through the correct official channel, fully tracked.",
    icon: <Send size={24} />
  },
  {
    title: "Interview Preparation",
    desc: "Where required, we run mock interviews to build confidence and readiness.",
    icon: <Users size={24} />
  },
  {
    title: "Approval & Briefing",
    desc: "Once approved, we brief you on travel, documentation, and next steps.",
    icon: <PlaneTakeoff size={24} />
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-ink-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-gold-light mb-2"
          >
            How It Works
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            A Seamless Process
          </motion.h3>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-gold-main/30 to-transparent -z-10" />
          
          {/* Background Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-[5%] bottom-[5%] left-[39px] w-0.5 bg-gradient-to-b from-transparent via-gold-main/30 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Number / Icon Node */}
                <div className="relative z-10 shrink-0 mb-0 lg:mb-6 mr-6 lg:mr-0">
                  <div className="w-20 h-20 rounded-full glass-panel flex flex-col items-center justify-center group-hover:scale-110 group-hover:border-gold-main transition-all duration-300">
                    <div className="text-gold-light mb-1">
                      {step.icon}
                    </div>
                    <span className="text-xs font-bold text-white/50 group-hover:text-gold-light transition-colors">
                      STEP {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 lg:pt-0">
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-off-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
