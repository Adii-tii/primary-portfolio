import React, { useState, useEffect, useRef } from "react";

const MouseTrail = ({ containerRef }) => {
  const [trails, setTrails] = useState([]);
  const icons = ["✦", "✺", "✹", "✴", "✶", "✳"];
  // Theme aware fallback colors
  const colors = ["#ff6b57", "var(--color-accent)", "var(--color-text-primary)", "#F0D7FF"];

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    let timeoutId;
    
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newTrail = {
        id: Date.now() + Math.random(),
        x,
        y,
        icon: icons[Math.floor(Math.random() * icons.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.floor(Math.random() * 360)
      };

      setTrails((prev) => [...prev, newTrail].slice(-15));
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setTrails([]);
      }, 700);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [containerRef]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {trails.map((trail) => (
        <span
          key={trail.id}
          className="absolute font-serif font-bold drop-shadow-sm"
          style={{
            left: trail.x,
            top: trail.y,
            color: trail.color,
            animation: 'trailFade 700ms forwards ease-out',
            fontSize: '28px',
            transform: `translate(-50%, -50%) rotate(${trail.rotation}deg)`
          }}
        >
          {trail.icon}
        </span>
      ))}
      <style>{`
        @keyframes trailFade {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1.5) rotate(0deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.2) rotate(90deg); }
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center bg-bg-primary pt-20">
      
      <MouseTrail containerRef={sectionRef} />
      
      {/* Background Dots Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(var(--color-text-primary) 2px, transparent 2px)", backgroundSize: "32px 32px" }}
      ></div>

      {/* Decorative Blur Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-bg-green/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none z-0"></div>

      {/* Floating Elements (Notion/Figma style) */}
      

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-20 flex flex-col items-center text-center">

        {/* Top Badge */}
        

        {/* Heading */}
        <h1 className="font-serif text-[clamp(50px,9vw,120px)] leading-[0.95] tracking-tight text-text-primary mb-8 select-none">
          Building <span className="italic text-text-primary/60">thoughtful</span>
          <br className="hidden sm:block"/> digital products
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-2xl text-text-primary/70 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
          I design and develop scalable systems using <strong className="text-text-primary font-semibold">AI</strong>, <strong className="text-text-primary font-semibold">backend engineering</strong>, and modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-text-primary bg-accent border-2 border-text-primary rounded-2xl shadow-[6px_6px_0px_var(--color-text-primary)] hover:shadow-[2px_2px_0px_var(--color-text-primary)] hover:translate-y-1 hover:translate-x-1 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              View Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-text-primary bg-transparent border-2 border-text-primary rounded-2xl hover:bg-text-primary hover:text-bg-primary transition-colors text-lg"
          >
            Contact Me
          </a>
        </div>

      </div>

      {/* Decorative Bottom Arch */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor" className="text-text-primary/5"></path>
        </svg>
      </div>
      
    </section>
  );
};

export default Home;