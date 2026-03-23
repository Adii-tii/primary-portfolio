import React from "react";

const Hobbies = () => {
  const hobbies = [
    { 
      title: "Reading", 
      description: "Sci-fi, fantasy & technical books.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ), 
      color: "#F0D7FF" 
    },
    { 
      title: "Traveling", 
      description: "New places & good coffee.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ), 
      color: "#FFFFEB" 
    },
    { 
      title: "Photography", 
      description: "Experimenting with light.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ), 
      color: "#ff6b57" 
    },
    { 
      title: "Music", 
      description: "Live gigs & diverse genres.", 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ), 
      color: "bg-bg-secondary" 
    },
  ];

  return (
    <section id="hobbies" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="py-32 relative flex flex-col items-center justify-center min-h-[700px] bg-bg-green px-4 overflow-hidden border-t-2 border-[#1E1E1E] rounded-t-[60px]">

        {/* DOT GRID (consistent with your tech stack) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,_#1E1E1E_2px,_transparent_2px)] bg-[size:32px_32px]" />
        </div>

        {/* HEADER */}
        <div className="text-center mb-24 z-10 text-[#1E1E1E] relative">
          <div className="inline-block px-4 py-1.5 rounded-full border-2 border-[#1E1E1E] bg-[#FFFFEB] text-sm font-bold shadow-[2px_2px_0px_#1E1E1E] -rotate-2 mb-6">
            Off the Clock
          </div>

          <h2 className="font-serif text-[clamp(45px,8vw,90px)] leading-[1] tracking-tight mb-6 font-bold text-accent">
            Sometimes I<br />have fun too.
          </h2>

          <p className="text-[#1E1E1E] bg-[#FFFFEB] px-6 py-3 rounded-2xl border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E] text-[16px] md:text-lg max-w-xl mx-auto font-bold rotate-1">
            A glimpse into my life outside the IDE. Balance keeps the brain sharp.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto w-full z-10">

          {hobbies.map((hobby, index) => (
            <div key={index} className="relative group">

              {/* Shadow layer */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#1E1E1E] rounded-3xl" />

              {/* Card */}
              <div
                className={`relative flex flex-col items-center text-center p-8 rounded-3xl border-2 border-[#1E1E1E] transition-all duration-300 group-hover:-translate-y-2 ${
                  hobby.color.startsWith("#") ? "" : hobby.color
                }`}
                style={{
                  backgroundColor: hobby.color.startsWith("#") ? hobby.color : undefined,
                }}
              >

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#FFFFEB] border-2 border-[#1E1E1E] flex items-center justify-center text-[36px] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  {hobby.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl mb-2 font-bold text-[#1E1E1E]">
                  {hobby.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-relaxed font-bold text-[#1E1E1E]/70 max-w-xs">
                  {hobby.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 w-12 h-[3px] bg-[#1E1E1E] opacity-30 group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Hobbies;