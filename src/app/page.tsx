import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <main className="relative">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
