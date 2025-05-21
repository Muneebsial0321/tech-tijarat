import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "../ui/Button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      textRef.current?.querySelectorAll('.hero-animate')!,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
    
    // Parallax effect for video container
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 200,
      ease: "none"
    });

    // Add ripple effect to buttons
    const buttons = buttonRef.current?.querySelectorAll('button');
    if (buttons) {
      buttons.forEach(button => {
        button.addEventListener('click', function(e) {
          const x = e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
          const y = e.clientY - (e.target as HTMLElement).getBoundingClientRect().top;
          
          const ripple = document.createElement('span');
          ripple.className = 'ripple';
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          
          button.appendChild(ripple);
          
          setTimeout(() => {
            ripple.remove();
          }, 600);
        });
      });
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="section relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background - replace with actual video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#090979]/50 to-[#020024]/70 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000"
        >
          <source src="/video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000"
            alt="Agency hero background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Hero content */}
      <div ref={textRef} className="container mx-auto px-4 z-10 text-center">
        <h1 className="hero-animate text-5xl md:text-7xl font-bold mb-6 text-gradient-primary [text-shadow:0_0_30px_rgba(59,130,246,0.5)]">
          We Build Digital <span className="text-blue-500">Experiences</span>
        </h1>
        <div className="hero-animate relative w-full max-w-2xl mx-auto mb-10">
          <p className="text-xl md:text-2xl text-gray-200">
            Transforming ideas into remarkable digital solutions that drive success
          </p>
          <div className="absolute -inset-1 bg-gradient-glow opacity-30 blur-xl"></div>
        </div>
        <div ref={buttonRef} className="hero-animate flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 ripple-button relative overflow-hidden animate-glow border border-blue-400/20"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 ripple-button relative overflow-hidden backdrop-blur-sm"
          >
            View Our Work
          </Button>
        </div>
        
        <div className="hero-animate absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-[pulse_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;