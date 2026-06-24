import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 border-t border-gold-main/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="w-40 h-12 relative mb-6">
              <Image 
                src="/assets/zak-logo.png" 
                alt="ZAK Consultants" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <p className="text-off-white/70 leading-relaxed max-w-sm mb-6">
              Your Trusted Partner for Global Visa Solutions. Expert visa consultancy for study, work, business, and immigration.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-ink-black flex items-center justify-center text-gold-light hover:bg-gold-main hover:text-ink-black transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-ink-black flex items-center justify-center text-gold-light hover:bg-gold-main hover:text-ink-black transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-ink-black flex items-center justify-center text-gold-light hover:bg-gold-main hover:text-ink-black transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-ink-black flex items-center justify-center text-gold-light hover:bg-gold-main hover:text-ink-black transition-colors">
                {/* WhatsApp custom icon */}
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="text-off-white/70 hover:text-gold-light transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-off-white/70 hover:text-gold-light transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-off-white/70 hover:text-gold-light transition-colors">Services</Link></li>
              <li><Link href="#process" className="text-off-white/70 hover:text-gold-light transition-colors">Process</Link></li>
              <li><Link href="#faqs" className="text-off-white/70 hover:text-gold-light transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-lg">Visa Services</h4>
            <ul className="space-y-3">
              <li className="text-off-white/70">Student Visa</li>
              <li className="text-off-white/70">Work Visa</li>
              <li className="text-off-white/70">Visit / Tourist Visa</li>
              <li className="text-off-white/70">Immigration & PR</li>
              <li className="text-off-white/70">Business Visa</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-off-white/50 text-sm text-center md:text-left">
            © 2026 ZAK Consultants (Pvt.) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-off-white/50">
            <Link href="#" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
