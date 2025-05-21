
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
    
    // Animate the content in
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    
    // Animate stats with staggered effect
    tl.fromTo(
      statsRef.current?.querySelectorAll('.stat-item')!,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 },
      "-=0.2"
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section py-20 md:py-32 bg-[#0f0f0f]"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Our Agency</h2>
            <p className="text-gray-400 mb-6">
              Founded in 2018, our agency has been at the forefront of digital innovation. 
              We combine creativity with technical expertise to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-400 mb-6">
              Our team of experts is passionate about creating digital solutions that not only look great 
              but also drive measurable business growth. We're committed to excellence in everything we do.
            </p>
            <ul className="space-y-3">
              {["Strategic approach to digital solutions", 
                "Client-focused development process", 
                "Innovative technology implementation"
              ].map((item, i) => (
                <li key={i} className="flex items-center animate-item">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {[
              {number: "150+", text: "Projects Completed"},
              {number: "15+", text: "Team Members"},
              {number: "10+", text: "Years Experience"},
              {number: "99%", text: "Client Satisfaction"},
            ].map((stat, i) => (
              <div key={i} className="stat-item bg-[#1a1a1a] p-6 rounded-lg text-center animate-item">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
