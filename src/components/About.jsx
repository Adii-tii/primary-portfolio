import React, { useState, useRef } from 'react';
import DesignShowcase from './DesignShowcase';
import Training from './Training';
import img from "../assets/profile.jpg";

/* ─── Draggable Pill ─── */
const DraggablePill = ({ children, initialClasses }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.target.setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startRef.current.x,
      y: e.clientY - startRef.current.y,
    });
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`absolute cursor-grab active:cursor-grabbing touch-none select-none ${initialClasses}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 50 : undefined,
      }}
    >
      <div
        className={`
          px-3 py-1.5 
          bg-[#FFFFEB] 
          text-[#034F46] 
          border border-transparent
          rounded-md 
          text-sm font-medium
          transition shadow-sm
          ${isDragging ? "shadow-md scale-105" : "hover:shadow-md hover:scale-105"}
        `}
      >
        {children}
      </div>
    </div>
  );
};

/* ─── About Section ─── */
const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-primary">

      {/* ═══════════════════════════════════════════
          PART 1 — Hero Introduction (editorial flow)
          ═══════════════════════════════════════════ */}
      <div className="pt-32 pb-32 relative">

        {/* Subtle dot grid — same as Home */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(var(--color-text-primary) 2px, transparent 2px)", backgroundSize: "32px 32px" }}
        />

        {/* Blur blobs — same style as Home */}
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-[#ff6b57]/10 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">

          {/* Centered hero heading — same approach as Home */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-[clamp(50px,9vw,120px)] leading-[0.95] tracking-tight text-text-primary mb-8 select-none">
              About <span className="italic text-text-primary/60">me</span>
            </h1>
            <p className="text-lg md:text-2xl text-text-primary/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Building things at the intersection of{' '}
              <strong className="text-text-primary font-semibold">design</strong>,{' '}
              <strong className="text-text-primary font-semibold">engineering</strong>, and{' '}
              <strong className="text-text-primary font-semibold">curiosity</strong>.
            </p>
          </div>

          {/* Photo + Intro paragraph side by side */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-14">

            {/* Photo — cleaner presentation */}
            <div className="relative flex-shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-accent rounded-[2rem]" />
              <div className="relative w-[220px] h-[280px] md:w-[260px] md:h-[330px] rounded-[2rem] border-2 border-[#1E1E1E] overflow-hidden bg-[#F0D7FF]">
                <img src={img} alt="Aditi" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Intro paragraph beside photo */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-serif text-[26px] md:text-[34px] leading-[1.35] text-text-primary">
                Hi, I'm Aditi — a computer science student based in{' '}
                <span className="inline-block bg-[#F0D7FF] text-[#1E1E1E] px-3 py-0.5 rounded-lg border-2 border-[#1E1E1E] rotate-0 mx-1 shadow-[2px_2px_0px_#1E1E1E] font-bold text-[22px] md:text-[28px]">
                  Jalandhar, India
                </span>{' '}
                who enjoys building AI systems, experimenting with bold ideas, and crafting tools that solve real problems.
              </p>
            </div>
          </div>

          {/* Following paragraphs — centered below */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-lg md:text-xl text-text-primary/60 font-medium leading-relaxed mb-6">
              What started as a messy hobby turned into a fascination with how robust systems work under the hood — from simple scripts to complex machine learning models. I'm currently deep into software architecture, AI, and building scalable full-stack applications.
            </p>

            <p className="font-sans text-lg md:text-xl text-text-primary/60 font-medium leading-relaxed">
              Right now, I'm focused on building{' '}
              <strong className="text-text-primary">intelligent layers</strong> and{' '}
              <strong className="text-text-primary">scalable architecture</strong> — marrying robust engineering with thoughtful design to bring bold ideas to life.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PART 3 — Timeline (Compact Edition)
          ═══════════════════════════════════════════ */}
      <div className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="font-serif text-[clamp(40px,5vw,60px)] text-text-primary mb-4 tracking-tight">
              My Timeline
            </h3>
          </div>
          <div className="relative border-l-2 border-accent/30 ml-4 md:ml-10 space-y-8 pb-4">
            {/* APS RK Puram — Matriculation (Oldest) */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg-secondary border-2 border-text-primary z-10" />
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-text-primary">Army Public School RK Puram</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-primary/40">Mar’ 20 – May’ 21</span>
                </div>
                <p className="text-text-primary/70 font-medium text-sm md:text-base mb-1">Matriculation • Secunderabad, Telangana</p>
              </div>
            </div>

            {/* APS RK Puram — Intermediate */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg-secondary border-2 border-text-primary z-10" />
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-text-primary">Army Public School RK Puram</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-primary/40">Mar’ 22 – May’ 23</span>
                </div>
                <p className="text-text-primary/70 font-medium text-sm md:text-base mb-1">Intermediate • Secunderabad, Telangana</p>
              </div>
            </div>

            {/* LPU (Newest) */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-2 border-text-primary z-10" />
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h4 className="font-serif text-xl md:text-2xl font-bold text-text-primary">Lovely Professional University</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-primary/40">Aug’ 23 – Present</span>
                </div>
                <p className="text-text-primary/70 font-medium text-sm md:text-base mb-1">Bachelor of Technology • Phagwara, Punjab</p>
                <div className="inline-block bg-[#FFFFEB] text-[#1E1E1E] px-3 py-1 rounded-lg border-2 border-[#1E1E1E] -rotate-1 shadow-[2px_2px_0px_#1E1E1E] font-bold text-xs mt-2 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                  Computer Science and Engineering
                </div>
              </div>
            </div>

            {/* Open to Work — Restored to Original Design */}
            <div className="relative pl-8 md:pl-12 pt-4">
              <div className="absolute -left-[10px] top-6 w-4 h-4 rounded-full bg-bg-secondary border-2 border-accent z-10">
                <span className="animate-ping absolute inset-0 rounded-full bg-accent opacity-60" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#1E1E1E] rounded-3xl" />
                <div className="relative bg-bg-green p-6 pr-8 rounded-3xl border-2 border-text-primary flex flex-col sm:flex-row items-start gap-6 overflow-hidden hover:-translate-y-1 transition-transform">
                  <div className="absolute -bottom-6 -right-6 text-[100px] opacity-15 rotate-12 select-none pointer-events-none text-[#FFFFEB]">✦</div>
                  <div className="flex-1 relative z-10">
                    <div className="inline-block px-3 py-1 rounded-full border-2 border-text-primary bg-accent text-text-primary text-xs font-bold shadow-sm -rotate-2 mb-3">
                      Open to Work
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-[#FFFFEB] mb-2 leading-tight drop-shadow-sm">
                      Looking for<br/>Internships.
                    </h4>
                    <p className="text-[#FFFFEB]/90 text-sm font-medium">
                      Actively seeking software engineering internships to solve hard problems and learn from great teams.
                    </p>
                    <a href="#contact" className="inline-block mt-4 text-sm font-bold border-b-2 border-[#FFFFEB] pb-0.5 text-[#FFFFEB] hover:text-accent hover:border-accent transition-colors">
                      Let's Talk →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PART 4 — Training & Programs
          ═══════════════════════════════════════════ */}
      <Training />

      {/* ═══════════════════════════════════════════
          PART 5 — What I Bring to the Table
          ═══════════════════════════════════════════ */}
      <div className="py-24 relative flex flex-col items-center justify-center min-h-[700px] bg-bg-green shadow-xl px-4 overflow-hidden border border-[#1E1E1E]/10 rounded-t-[60px] pb-32">

        {/* Code bracket floating element */}
        <div className="absolute top-[15%] left-[8%] lg:left-[18%] bg-[#F0D7FF] px-4 py-6 rounded-lg border-2 border-[#1E1E1E] rotate-[-12deg] shadow-[4px_4px_0px_#1E1E1E] z-0 hidden md:block">
          <span className="font-mono text-[#1E1E1E] font-bold text-lg tracking-tighter">&lt;/&gt;</span>
        </div>

        {/* Browser window mockup */}
        <div className="absolute top-[12%] right-[5%] lg:right-[15%] bg-[#FFFFEB] w-48 h-[120px] rounded-xl border-2 border-[#1E1E1E] shadow-[6px_6px_0px_#1E1E1E] flex flex-col rotate-[6deg] z-0 hidden md:block">
          <div className="h-6 w-full flex items-center px-3 gap-2 border-b-2 border-[#1E1E1E] bg-[#FFFFEB] rounded-t-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F0D7FF]" />
          </div>
          <div className="p-4 flex flex-col gap-2 relative h-full bg-[#1E1E1E] rounded-b-lg">
            <div className="flex gap-2 mt-1">
              {[...Array(6)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#FFFFEB]" />)}
            </div>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#FFFFEB]" />)}
            </div>
            <div className="w-12 h-1 bg-[#FFFFEB] mt-2" />
          </div>
          <svg className="absolute -bottom-8 -right-8 w-16 h-16 text-[#ff6b57] rotate-[-20deg] drop-shadow-lg z-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.5 3L18.5 13L12.5 14L15.5 21L12.5 22L9.5 15L4.5 18V3Z" stroke="#FFFFEB" strokeWidth="1"/>
          </svg>
        </div>

        {/* Large Title */}
        <div className="text-center z-10">
          <h2 className="font-serif text-[clamp(50px,9vw,100px)] leading-[1] text-[#FFFFEB] tracking-tight select-none">
            What I bring<br />to the table.
          </h2>
        </div>

        {/* Draggable skill pills — Desktop */}
        <DraggablePill initialClasses="top-[10%] left-[45%] z-20 hidden xl:block">AI Systems Design</DraggablePill>
        <DraggablePill initialClasses="bottom-[25%] right-[20%] z-20 hidden md:block">Backend Architecture</DraggablePill>
        <DraggablePill initialClasses="top-[55%] left-[6%] z-20 hidden xl:block">Machine Learning Models</DraggablePill>
        <DraggablePill initialClasses="bottom-[15%] left-[25%] z-20 hidden md:block">Scalable APIs</DraggablePill>
        <DraggablePill initialClasses="top-[35%] right-[8%] z-20 hidden xl:block">System Design Thinking</DraggablePill>
        <DraggablePill initialClasses="top-[75%] left-[15%] z-20 hidden md:block">React & Modern Web</DraggablePill>
        <DraggablePill initialClasses="top-[60%] right-[4%] z-20 hidden md:block">Data Structures & Algorithms</DraggablePill>
        <DraggablePill initialClasses="bottom-[10%] right-[35%] z-20 hidden xl:block">Experimentation & Prototyping</DraggablePill>

        {/* Mobile pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 md:hidden z-10 w-full px-2">
          {["AI Systems Design", "Backend Architecture", "Machine Learning", "Scalable APIs", "React & Web"].map((label, i) => (
            <span key={i} className="px-3 py-1.5 bg-[#FFFFEB] text-[#034F46] rounded-md text-sm font-medium">
              {label}
            </span>
          ))}
        </div>

      </div>

      {/* ═══════════════════════════════════════════
          PART 5 — Design Showcase
          ═══════════════════════════════════════════ */}
      <DesignShowcase />

    </section>
  );
};

export default About;