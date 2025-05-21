
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechGrowth Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
      quote: "Working with this agency transformed our digital presence completely. Their team delivered beyond our expectations with a website that truly represents our brand.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GlobalReach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200",
      quote: "The attention to detail and technical expertise of the team is outstanding. Our e-commerce platform has seen a 40% increase in conversions since the redesign.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      position: "Product Manager",
      company: "InnovateX",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200",
      quote: "The agency's strategic approach to UX design resulted in a significant improvement in user engagement metrics. We couldn't be happier with the results.",
      rating: 4
    },
    {
      name: "David Park",
      position: "CTO",
      company: "FutureSoft",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200",
      quote: "Their development team tackled complex technical challenges with impressive solutions. The project was delivered on time and exceeded our performance benchmarks.",
      rating: 5
    }
  ];
  
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
    
    // Animate testimonial items
    tl.fromTo(
      ".testimonial-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      "-=0.3"
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section py-20 md:py-32 bg-[#0f0f0f]"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-gray-400">
            Hear what our clients have to say about working with us and the results we've delivered.
          </p>
        </div>
        
        {/* Desktop View with 2-column grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Mobile View with Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="testimonial-item bg-[#1a1a1a] rounded-lg p-8 border border-gray-800 relative">
    <Quote className="absolute top-8 right-8 text-blue-500/20" size={48} />
    
    <div className="flex items-center mb-6">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
        <p className="text-gray-400">
          {testimonial.position}, {testimonial.company}
        </p>
      </div>
    </div>
    
    <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
    
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-600"}`} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" 
          />
        </svg>
      ))}
    </div>
  </div>
);

export default TestimonialsSection;
