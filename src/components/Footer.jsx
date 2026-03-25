import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-40 mb-20 px-6 relative bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* BIG BLACK QUOTE BOX */}
        <div className="relative bg-text-primary p-12 md:p-24 rounded-[3.5rem] border-2 border-text-primary shadow-[15px_15px_0px_var(--color-accent)] overflow-hidden group">
          {/* Subtle glow/blur detail */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 text-center flex flex-col items-center">
           
            
            <h2 className="font-serif text-[clamp(35px,6vw,95px)] leading-[1] text-[#FFFFEB] font-black tracking-tighter max-w-5xl">
              I build for the <span className="italic text-accent underline decoration-[#FFFFEB] decoration-4 underline-offset-8">joy</span> of creation, and the challenge of <span className="italic opacity-70">intelligent</span> design.
              <br></br>
            </h2>
            
            
           
          </div>
        </div>

        {/* MINIMAL LEGAL */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-text-primary/30">
            &copy; {currentYear} ADITI SABLE.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
