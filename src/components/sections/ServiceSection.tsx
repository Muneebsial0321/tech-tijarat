
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, ArrowRight, BarChart3, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Card className="bg-[#1a1a1a] border-gray-800 hover:border-blue-500/50 transition-all duration-300 animate-item">
    <CardContent className="p-6">
      <div className="mb-5 text-blue-500">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
        Learn more <ArrowRight size={16} className="ml-2" />
      </a>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        end: "center center",
        scrub: 0.5,
      }
    });
    
    // Animate heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    
    // Animate service cards
    tl.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      "-=0.3"
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies to deliver exceptional performance."
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences for your audience."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across devices."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions that increase visibility, drive traffic and boost conversion rates."
    },
    {
      icon: <Code size={32} />,
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business needs and challenges."
    },
    {
      icon: <Globe size={32} />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies that improve your search rankings and drive organic traffic."
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-400">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
