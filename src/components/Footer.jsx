import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 pb-20 px-4 md:px-8 border-t-2 border-text-primary pt-24 bg-[#FFFFEB]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* GIANT QUOTE */}
        <div className="relative mb-24 max-w-5xl">
          <div className="absolute -top-12 -left-8 text-accent text-[120px] font-serif opacity-20 select-none">“</div>
          <h2 className="font-serif text-[clamp(32px,6vw,80px)] text-text-primary leading-[1.1] tracking-tighter italic font-black">
            I build for the joy of creation, <br /> and the challenge of <span className="underline decoration-accent decoration-4 underline-offset-4">intelligent</span> design.
          </h2>
          <div className="absolute -bottom-24 -right-8 text-accent text-[120px] font-serif opacity-20 select-none rotate-180">“</div>
        </div>

        {/* MINIMAL BRANDING */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-1 mt-2 mb-2 bg-[#ff6b57] rounded-full"></div>
          <p className="font-serif italic font-black text-4xl text-text-primary">aditi.</p>
          <p className="text-text-primary/40 text-[10px] font-black uppercase tracking-[0.5em] mt-4">
            &copy; {new Date().getFullYear()} ADITI SABLE. BEYOND THE SURFACE.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
