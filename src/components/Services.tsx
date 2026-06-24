"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Home, 
  Building2, 
  FileCheck2 
} from "lucide-react";

const countries = [
  {
    name: "United Kingdom",
    desc: "Study, work, and visit visas for one of the world's top education and career destinations.",
    tags: ["Student", "Work", "Visit"],
    flag: "🇬🇧"
  },
  {
    name: "United States",
    desc: "Tourist, business, and student visa guidance, including documentation and interview prep.",
    tags: ["Visit", "Student", "Business"],
    flag: "🇺🇸"
  },
  {
    name: "Canada",
    desc: "Study permits, work permits, and permanent residency pathways for Canada's growing immigration programs.",
    tags: ["Study", "PR", "Work"],
    flag: "🇨🇦"
  },
  {
    name: "Australia",
    desc: "Skilled migration and student visa support for Australia's competitive points-based system.",
    tags: ["Study", "Skilled Migration"],
    flag: "🇦🇺"
  },
  {
    name: "Schengen (Europe)",
    desc: "Visit and short-stay visas covering 27 European Schengen countries.",
    tags: ["Visit", "Business"],
    flag: "🇪🇺"
  },
  {
    name: "UAE / Dubai",
    desc: "Work and business visas for the Gulf's fastest-growing job market.",
    tags: ["Work", "Business", "Visit"],
    flag: "🇦🇪"
  },
  {
    name: "Turkey",
    desc: "Visit and study visa support for Turkey, a rising destination for affordable education.",
    tags: ["Visit", "Study"],
    flag: "🇹🇷"
  },
  {
    name: "New Zealand",
    desc: "Study and skilled migration guidance for New Zealand's points-based immigration system.",
    tags: ["Study", "Immigration"],
    flag: "🇳🇿"
  }
];

const services = [
  {
    title: "Student Visa",
    desc: "End-to-end support for university admissions and study visa applications.",
    icon: <GraduationCap size={28} />
  },
  {
    title: "Work Visa",
    desc: "Job-offer-based work permit and visa processing for international employers.",
    icon: <Briefcase size={28} />
  },
  {
    title: "Visit / Tourist Visa",
    desc: "Fast, accurate visit visa applications for tourism, family visits, and business trips.",
    icon: <Plane size={28} />
  },
  {
    title: "Immigration & PR",
    desc: "Permanent residency pathway guidance for Canada, Australia, and beyond.",
    icon: <Home size={28} />
  },
  {
    title: "Business Visa",
    desc: "Visa support for entrepreneurs, investors, and corporate travelers.",
    icon: <Building2 size={28} />
  },
  {
    title: "Document & Interview Prep",
    desc: "Document checklists, form-filling support, and mock visa interview sessions.",
    icon: <FileCheck2 size={28} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal/50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-gold-light mb-2"
          >
            Countries We Serve
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Global Destinations
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-off-white/80 text-lg"
          >
            We provide expert visa consultancy across the world&apos;s top study, work, and immigration destinations.
          </motion.p>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {countries.map((country, idx) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col h-full hover:shadow-[0_10px_30px_rgba(225,197,133,0.15)] group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform origin-left">{country.flag}</div>
              <h4 className="text-xl font-bold text-white mb-3">{country.name}</h4>
              <p className="text-sm text-off-white/70 mb-6 flex-grow">{country.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {country.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gold-light">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center"
          >
            Our Visa Services
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-gradient-gold text-ink-black p-3 rounded-xl shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-off-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
