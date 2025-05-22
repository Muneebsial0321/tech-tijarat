import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TechItem {
  name: string;
  logo: string;
  category: string;
}

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const techListRef = useRef<HTMLDivElement>(null);

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

    // Animate tech items with stagger
    tl.fromTo(
      ".tech-item",
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.5 },
      "-=0.3"
    );

    // Horizontal scroll for mobile
    const techContainer = techListRef.current;
    if (techContainer && window.innerWidth < 768) {
      const scrollWidth = techContainer.scrollWidth;
      const containerWidth = techContainer.offsetWidth;

      gsap.to(techContainer, {
        scrollTrigger: {
          trigger: techContainer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        x: -(scrollWidth - containerWidth),
        ease: "none"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const techStack: TechItem[] = [
    {
      name: "AWS",
      logo: "/aws.png",
      category: "Cloud"
    },
    {
      name: "Azure",
      logo: "/azure.png",
      category: "Cloud"
    },
    {
      name: "gcp",
      logo: "/gcp.png",
      category: "Cloud"
    },
    {
      name: "typescript",
      logo: "/typescript.png",
      category: "Database"
    },
    {
      name: "python",
      logo: "/python.png",
      category: "Cloud"
    },
    {
      name: "java",
      logo: "/java.png",
      category: "DevOps"
    },
    {
      name: "sql",
      logo: "/sql.png",
      category: "Database"
    },
    {
      name: "mongo",
      logo: "/mongo.png",
      category: "Database"
    },
    {
      name: "postgres",
      logo: "/postgre.png",
      category: "Database"
    },
    {
      name: "tailwind",
      logo: "/css.png",
      category: "UI"
    },
    {
      name: "nextjs",
      logo: "/nextjs-white.png",
      category: "UI"
    },
    {
      name: "prisma",
      logo: "/prisma.png",
      category: "Database"
    },
    {
      name: "docker",
      logo: "/docker.png",
      category: "DevOps"
    },
    {
      name: "fig",
      logo: "/figma.png",
      category: "UI"
    },
    {
      name: "compose",
      logo: "/jetpack.png",
      category: "DevOps"
    },
    {
      name: "kafka",
      logo: "/kafka.png",
      category: "Cloud"
    },
    {
      name: "rabbitmq",
      logo: "/mq.png",
      category: "Cloud"
    },
    {
      name: "nestjs",
      logo: "/nestjs.png",
      category: "Cloud"
    },
    {
      name: "spring",
      logo: "/spring.png",
      category: "Cloud"
    },
    {
      name: "tf",
      logo: "/tf.png",
      category: "Cloud"
    },
    {
      name: "oracle",
      logo: "/oracle.png",
      category: "Cloud"
    },
    ];

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="section py-20 md:py-32 bg-[#080325]"
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
          <source src="/clock.webm" type="video/mp4" />
          {/* <source src="/video.mp4" type="video/mp4" /> */}
          {/* <source src="/video.mp4" type="video/mp4" /> */}
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000"
            alt="Agency hero background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs text-blue-400 font-semibold tracking-wider uppercase mb-2">Powered By</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary [text-shadow:0_0_20px_rgba(59,130,246,0.5)]">Our Tech Stack</h2>
          <p className="text-gray-400">
            We leverage cutting-edge technologies to build robust, scalable, and high-performance digital solutions.
          </p>
        </div>

        <div
          ref={techListRef}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 py-6"
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="tech-item bg-[#00000000] md:w-[10rem] md:min-w-0 glass-card rounded-lg p-6 flex flex-col items-center transition-all float-animation relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="w-16 h-16 flex items-center justify-center relative z-10">
                <img
                  src={"icons/" + tech.logo}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
              </div>
              {/* <h3 className="text-lg font-medium text-white mb-1 relative z-10">{tech.name}</h3> */}
              {/* <p className="text-sm text-blue-300 relative z-10">{tech.category}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;