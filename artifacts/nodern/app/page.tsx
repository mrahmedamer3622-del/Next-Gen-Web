import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <ChatWidget />
      <BackToTop />
    </main>
  );
}
