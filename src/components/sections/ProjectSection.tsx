
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e520?auto=format&fit=crop&w=800",
      description: "A full-featured e-commerce platform built with React and Node.js."
    },
    {
      title: "Finance Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800",
      description: "An intuitive financial dashboard with advanced data visualization."
    },
    {
      title: "Travel Mobile App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
      description: "A cross-platform travel app for trip planning and management."
    },
    {
      title: "Healthcare Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      description: "A secure healthcare portal for patient management and telemedicine."
    },
    {
      title: "Social Media Platform",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?auto=format&fit=crop&w=800",
      description: "A fully-featured social media platform with real-time messaging."
    },
    {
      title: "Brand Redesign",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800",
      description: "Complete brand identity redesign for a major retail client."
    }
  ];
  
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
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
    
    // Animate project items
    tl.fromTo(
      ".project-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      "-=0.3"
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Projects</h2>
          <p className="text-gray-400 mb-8">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeFilter === category 
                    ? "bg-blue-600 text-white" 
                    : "border-gray-700 text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-item group overflow-hidden rounded-lg bg-[#1a1a1a] border border-gray-800 transition-all duration-300 hover:border-blue-500/50">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-500 mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="project-item overflow-hidden rounded-lg bg-[#1a1a1a] border border-gray-800">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-blue-500 mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
