import React, { useRef } from "react";

const Home = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center bg-bg-primary pt-20">
      
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