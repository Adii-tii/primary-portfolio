import React, { useState, useRef, useCallback } from "react";

// Import graphic design images
import img1 from "../assets/graphic-design/1.png";
import img3 from "../assets/graphic-design/3.png";
import imgFrame from "../assets/graphic-design/Black and Orange Design Workshop Modern User Information Brochure.png";
import imgBrochure from "../assets/graphic-design/Frame 2.png";
import imgInsta2 from "../assets/graphic-design/Instagram post - 2.png";
import imgInsta3 from "../assets/graphic-design/Instagram post - 3.png";
import imgGroup from "../assets/graphic-design/Group 18.png";
import imgInsta32 from "../assets/graphic-design/Instagram post - 32 (12).png";

/* ─── Draggable Card ─── */
const DraggableCard = ({ children, initialStyle, className, onDragStart }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    setIsDragging(true);
    onDragStart?.();
  }, [offset, onDragStart]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - startRef.current.x,
      y: e.clientY - startRef.current.y,
    });
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      className={`absolute cursor-grab active:cursor-grabbing touch-none select-none ${className || ""}`}
      style={{
        ...initialStyle,
        transform: `${initialStyle.transform || ""} translate(${offset.x}px, ${offset.y}px)`,
        transition: isDragging ? "none" : "box-shadow 0.2s",
        zIndex: isDragging ? 100 : initialStyle.zIndex || 1,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {children}
    </div>
  );
};

const DesignShowcase = () => {
  return (
    <section className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_#1E1E1E_1px,_transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-16 md:mb-20 relative z-10 px-4">
        <h2 className="font-serif text-[40px] md:text-[64px] leading-tight text-text-primary tracking-tight">
          I design things too.
        </h2>
        <p className="mt-4 text-lg text-text-primary/60 max-w-xl mx-auto font-medium">
          Interfaces, experiments, and visual systems I've been exploring.
        </p>
      </div>

      {/* COLLAGE — Desktop */}
      <div className="hidden md:block relative max-w-[1200px] mx-auto h-[700px] px-4">

        {/* Card 6 — 200x200 small square, top-left area */}
        <DraggableCard
          initialStyle={{ left: "2%", top: "0%", transform: "rotate(-5deg)", zIndex: 8 }}
        >
          <div className="w-[200px] h-[200px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={img3} alt="Poster Art" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -bottom-4 left-2 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#C8F7A6] rotate-[4deg] select-none pointer-events-none whitespace-nowrap">
            Poster Art
          </div>
        </DraggableCard>

        {/* Card 1 — 310x310 square, left side lower */}
        <DraggableCard
          initialStyle={{ left: "0%", bottom: "2%", transform: "rotate(-8deg)", zIndex: 10 }}
        >
          <div className="w-[310px] h-[310px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={img1} alt="Visual Identity" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -top-4 -left-3 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#C8F7A6] rotate-[-5deg] select-none pointer-events-none whitespace-nowrap">
            Visual Identity
          </div>
        </DraggableCard>

        {/* Card 2 — 360x360 large, center-left */}
        <DraggableCard
          initialStyle={{ left: "22%", bottom: "0%", transform: "rotate(-2deg)", zIndex: 20 }}
        >
          <div className="w-[360px] h-[360px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={imgBrochure} alt="Brochure Design" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -bottom-4 -left-2 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#FFE28A] rotate-[3deg] select-none pointer-events-none whitespace-nowrap">
            Brochure Design
          </div>
        </DraggableCard>

        {/* Card 3 — 300x220 landscape, center top area */}
        <DraggableCard
          initialStyle={{ left: "38%", top: "8%", transform: "rotate(3deg)", zIndex: 25 }}
        >
          <div className="w-[300px] h-[220px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={imgFrame} alt="UI Concept" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -top-4 -right-3 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#F0D7FF] rotate-[5deg] select-none pointer-events-none whitespace-nowrap">
            UI Concept
          </div>
        </DraggableCard>

        {/* Card 4 — 400x280 wide landscape, right half */}
        <DraggableCard
          initialStyle={{ right: "0%", bottom: "5%", transform: "rotate(5deg)", zIndex: 18 }}
        >
          <div className="w-[400px] h-[280px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={imgInsta2} alt="Social Media" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -bottom-4 -right-2 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#BFE3FF] rotate-[-3deg] select-none pointer-events-none whitespace-nowrap">
            Social Media
          </div>
        </DraggableCard>

        {/* Card 5 — 190x240 small portrait, top-right */}
        <DraggableCard
          initialStyle={{ right: "3%", top: "0%", transform: "rotate(10deg)", zIndex: 12 }}
        >
          <div className="w-[190px] h-[240px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={imgInsta3} alt="Creative Post" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -top-4 -right-2 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#FFC6C6] rotate-[6deg] select-none pointer-events-none whitespace-nowrap">
            Creative Post
          </div>
        </DraggableCard>

        {/* Card 7 — 220x280, mid-left floating */}
        <DraggableCard
          initialStyle={{ left: "18%", top: "2%", transform: "rotate(4deg)", zIndex: 14 }}
        >
          <div className="w-[220px] h-[280px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={imgGroup} alt="Layout Design" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -top-4 left-2 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#FFE28A] rotate-[-4deg] select-none pointer-events-none whitespace-nowrap">
            Layout Design
          </div>
        </DraggableCard>

        {/* Card 8 — 250x180 landscape, right-center area */}
        <DraggableCard
          initialStyle={{ right: "24%", top: "42%", transform: "rotate(-3deg)", zIndex: 15 }}
        >
          <div className="w-[250px] h-[180px] rounded-2xl border-2 border-[#1E1E1E] overflow-hidden bg-[#FFFFEB]">
            <img src={imgInsta32} alt="Brand Design" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="absolute -bottom-4 -left-2 px-3 py-1 rounded-md border-2 border-[#1E1E1E] text-[11px] font-bold shadow-[2px_2px_0px_#1E1E1E] bg-[#F0D7FF] rotate-[3deg] select-none pointer-events-none whitespace-nowrap">
            Brand Design
          </div>
        </DraggableCard>

        {/* Rotating "coming soon" text ring */}
        <div className="absolute right-[18%] top-[2%] z-[6]">
          <svg
            className="w-[100px] h-[100px] animate-[spin_12s_linear_infinite] text-text-primary/25"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fontSize="11" fontWeight="bold" letterSpacing="3" fill="currentColor">
              <textPath href="#circlePath">
                coming soon · coming soon · 
              </textPath>
            </text>
          </svg>
        </div>

      </div>

      {/* COLLAGE — Mobile (stacked grid) */}
      <div className="md:hidden px-4 max-w-sm mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[220px]">
            <img src={img1} alt="Visual Identity" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[260px]">
            <img src={imgBrochure} alt="Brochure" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="col-span-2 rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[200px]">
            <img src={imgFrame} alt="UI Concept" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[240px]">
            <img src={imgInsta2} alt="Social Media" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[200px]">
            <img src={imgInsta3} alt="Creative Post" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[230px]">
            <img src={imgGroup} alt="Layout Design" className="w-full h-full object-cover" draggable={false} />
          </div>
          <div className="rounded-2xl border-2 border-[#1E1E1E] overflow-hidden h-[210px]">
            <img src={imgInsta32} alt="Brand Design" className="w-full h-full object-cover" draggable={false} />
          </div>
        </div>
      </div>

      {/* BEHANCE CTA BUTTON */}
      <div className="text-center md:mt-10 relative z-10">
        <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#1E1E1E] bg-[#1E1E1E] text-[#FFFFEB] font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1E1E1E]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
          </svg>
          Check out my Behance for more
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default DesignShowcase;