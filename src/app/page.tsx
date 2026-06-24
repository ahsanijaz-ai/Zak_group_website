import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-black text-off-white selection:bg-gold-main/30 selection:text-white">
      <Navbar />
      
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      
      <Footer />
    </main>
  );
}
