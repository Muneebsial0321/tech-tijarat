
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { Button } from "../ui/Button";


const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
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
    
    // Animate form and info section
    tl.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    
    tl.fromTo(
      infoRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5 },
      "-=0.5"
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="contact" 
      // ref={sectionRef}
      className="section pb-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div
        //  ref={headingRef}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative top-10  items-start w-[97%] sm:w-[80%] md:max-w-4xl mx-auto">
          <form 
          // ref={formRef}
           onSubmit={handleSubmit} className="p-8 rounded-lg border border-gray-800 animate-item">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="bg-[#121212] font-inter px-4 rounded-md py-2 w-full my-2 border-gray-700 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="bg-[#121212] font-inter px-4 w-full rounded-md py-2  my-2 border-gray-700 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..." 
                  rows={6}
                  className="w-full rounded-md border border-gray-700 bg-[#121212] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                <Send size={16} className="ml-2" />
              </Button>
            </div>
          </form>
          
          <div 
          // ref={infoRef}
           className="animate-item space-y-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <Mail className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Email Address</h4>
                    <p className="text-white">contact@agencyx.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <Phone className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Phone Number</h4>
                    <p className="text-white">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Office Address</h4>
                    <p className="text-white">123 Agency Street, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-white">Ready to start your project?</h3>
              <p className="text-blue-100 mb-4">Schedule a free consultation call with our experts</p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Book a Call <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
