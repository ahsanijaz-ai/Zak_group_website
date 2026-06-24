"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 mb-20 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-main/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/10 rounded-full blur-[80px]" />
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 relative z-10">
            Ready to Start Your Visa Journey?
          </h2>
          <p className="text-off-white/80 text-lg mb-8 relative z-10">
            Book your free consultation today and take the first step toward your global destination.
          </p>
        </motion.div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info & Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-off-white/80 mb-8">
                Our experts are ready to answer your questions and guide you through the process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-charcoal p-3 rounded-full text-gold-light">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Phone</h4>
                  <p className="text-off-white/70">0342-1222777</p>
                  <p className="text-off-white/70">0333-8642226</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-charcoal p-3 rounded-full text-gold-light">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-off-white/70">zakconsultants21@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-charcoal p-3 rounded-full text-gold-light">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Office</h4>
                  <p className="text-off-white/70">
                    Office No. G-62, 5th Floor, GS Tower,<br />
                    Ring Road, Near Hayatabad Toll Plaza,<br />
                    Peshawar
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 glass-panel rounded-2xl flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/256/0/0/0.png')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity grayscale" />
              <div className="absolute inset-0 bg-ink-black/40" />
              <MapPin className="text-gold-main relative z-10 animate-bounce" size={32} />
              <span className="relative z-10 font-bold text-white ml-2">Peshawar Office</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 rounded-3xl relative"
          >
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-charcoal/95 backdrop-blur-md rounded-3xl z-20 flex flex-col items-center justify-center text-center p-8 border border-gold-main/30"
                >
                  <div className="w-16 h-16 bg-gold-main/20 rounded-full flex items-center justify-center text-gold-main mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-off-white/80">
                    Thank you for reaching out. We&apos;ll contact you shortly to schedule your free consultation.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-serif font-bold text-white mb-6">Book Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-off-white/70 pl-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    id="name"
                    className="w-full bg-ink-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-main/50 focus:ring-1 focus:ring-gold-main/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-off-white/70 pl-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    id="phone"
                    className="w-full bg-ink-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-main/50 focus:ring-1 focus:ring-gold-main/50 transition-all"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-off-white/70 pl-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    className="w-full bg-ink-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-main/50 focus:ring-1 focus:ring-gold-main/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm text-off-white/70 pl-1">Destination Country</label>
                  <select 
                    required
                    id="country"
                    defaultValue=""
                    className="w-full bg-ink-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-main/50 focus:ring-1 focus:ring-gold-main/50 transition-all appearance-none"
                  >
                    <option value="" disabled>Select a country</option>
                    <option value="UK">United Kingdom</option>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Schengen (Europe)</option>
                    <option value="UAE">UAE / Dubai</option>
                    <option value="Turkey">Turkey</option>
                    <option value="NewZealand">New Zealand</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-off-white/70 pl-1">Message (Optional)</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-ink-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-main/50 focus:ring-1 focus:ring-gold-main/50 transition-all resize-none"
                  placeholder="Tell us about your visa goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold text-ink-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(225,197,133,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-ink-black border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Submit Request
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
