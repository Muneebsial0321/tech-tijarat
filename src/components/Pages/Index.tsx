
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../layout/Header";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServiceSection";
import TechStackSection from "../sections/TechStackSection";
import ProjectsSection from "../sections/ProjectSection";
import TestimonialsSection from "../sections/TestimonialSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../layout/Footer";
import { UnSureSection } from "../sections/UnSureSection";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Set up basic animations for all sections
      gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
        // Create timeline for each section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "center center",
            scrub: 0.5,
          }
        });

        // Animate section's opacity and Y position
        tl.fromTo(section, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.5 }
        );

        // Animate section's children with stagger
        tl.fromTo(
          section.querySelectorAll('.animate-item'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
          "-=0.3"
        );
      });
    }, mainRef);

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <TestimonialsSection />
        <UnSureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
