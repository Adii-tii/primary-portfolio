import React, { useState, useRef } from 'react';

const DraggableWrapper = ({ children, initialClasses, style = {} }) => {
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
        ...style
      }}
    >
      <div className={`transition-transform duration-300 ${isDragging ? "scale-105" : "hover:scale-105"}`}>
        {children}
      </div>
    </div>
  );
};

const WhatIBring = () => {
  return (
    <div className="py-24 relative flex flex-col items-center justify-center min-h-[900px] bg-bg-green shadow-xl px-4 overflow-hidden border border-[#1E1E1E]/10 rounded-t-[60px] pb-56">
      
      {/* Draggable SVG Art 1: Code Bracket */}
      <DraggableWrapper initialClasses="top-[18%] left-[10%] lg:left-[22%] hidden md:block">
        <div className="bg-[#F0D7FF] px-5 py-7 rounded-2xl border-2 border-[#1E1E1E] rotate-[-12deg] shadow-[6px_6px_0px_#1E1E1E] group hover:rotate-0 transition-transform duration-500">
          <span className="font-mono text-[#1E1E1E] font-black text-2xl tracking-tighter">&lt;/&gt;</span>
        </div>
      </DraggableWrapper>

      {/* Draggable SVG Art 2: Browser Window */}
      <DraggableWrapper initialClasses="top-[15%] right-[8%] lg:right-[18%] hidden md:block">
        <div className="bg-[#FFFFEB] w-56 h-[140px] rounded-2xl border-2 border-[#1E1E1E] shadow-[8px_8px_0px_#1E1E1E] flex flex-col rotate-[6deg]">
          <div className="h-7 w-full flex items-center px-4 gap-2 border-b-2 border-[#1E1E1E] bg-[#FFFFEB] rounded-t-2xl">
            <div className="w-3 h-3 rounded-full bg-[#ff6b57]" />
            <div className="w-3 h-3 rounded-full bg-[#F0D7FF]" />
          </div>
          <div className="p-5 flex flex-col gap-3 relative h-full bg-[#1E1E1E] rounded-b-xl">
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#FFFFEB]" />)}
            </div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => <div key={i} className="w-2.5 h-2.5 rounded-full bg-accent" />)}
            </div>
            <div className="w-16 h-1.5 bg-[#FFFFEB] mt-auto rounded-full" />
          </div>
        </div>
      </DraggableWrapper>

      {/* Draggable SVG Art 3: Pen/Design tool */}
      <DraggableWrapper initialClasses="bottom-[20%] left-[5%] lg:left-[12%] hidden lg:block" style={{ rotate: '15deg' }}>
         <div className="w-16 h-16 bg-accent border-2 border-[#1E1E1E] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#1E1E1E]">
            <svg className="w-8 h-8 text-[#1E1E1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L4 2l3.5 12.5L15 16l3-3z" />
            </svg>
         </div>
      </DraggableWrapper>

      {/* Draggable SVG Art 4: Settings/Gear */}
      <DraggableWrapper initialClasses="bottom-[25%] right-[10%] lg:right-[15%] hidden lg:block" style={{ rotate: '-10deg' }}>
         <svg className="w-20 h-20 text-[#1E1E1E]/20 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
         </svg>
      </DraggableWrapper>

      {/* Header Container */}
      <div className="text-center z-10 relative">
        <h2 className="font-serif text-[clamp(50px,9vw,110px)] leading-[0.9] text-[#FFFFEB] tracking-tighter select-none font-black italic">
          What I bring<br />to the table.
        </h2>
      </div>

      {/* Draggable skill pills */}
      <DraggableWrapper initialClasses="top-[12%] left-[42%] hidden xl:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">AI Systems Design</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="bottom-[30%] right-[22%] hidden md:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">Backend Architecture</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="top-[52%] left-[8%] hidden xl:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">Machine Learning Models</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="bottom-[18%] left-[28%] hidden md:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">Scalable APIs</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="top-[38%] right-[10%] hidden xl:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">System Design Thinking</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="top-[72%] left-[12%] hidden md:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">React & Modern Web</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="top-[62%] right-[6%] hidden md:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">Data Structures & Algorithms</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="bottom-[12%] right-[38%] hidden xl:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">Experimenting & Prototyping</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="top-[25%] left-[15%] hidden md:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">PostgreSQL & DB Design</div>
      </DraggableWrapper>
      <DraggableWrapper initialClasses="bottom-[40%] left-[5%] hidden md:block">
        <div className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-sm font-bold shadow-[3px_3px_0px_#1E1E1E]">Figma to Code</div>
      </DraggableWrapper>

      {/* Mobile pills */}
      <div className="flex flex-wrap justify-center gap-3 mt-16 md:hidden z-10 w-full px-4 text-center">
        {["AI Systems Design", "Backend Architecture", "ML Models", "Scalable APIs", "React & Web", "DB Design"].map((label, i) => (
          <span key={i} className="px-4 py-2 bg-[#FFFFEB] text-[#1E1E1E] border-2 border-[#1E1E1E] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#1E1E1E]">
            {label}
          </span>
        ))}
      </div>

    </div>
  );
};

export default WhatIBring;
