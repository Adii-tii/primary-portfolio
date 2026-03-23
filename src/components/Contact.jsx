import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-primary">
       <div className="max-w-6xl mx-auto px-4 relative z-10">
         <div className="text-center mb-12">
           <h2 className="font-serif text-[clamp(45px,7vw,70px)] leading-tight text-text-primary tracking-tight mb-4 font-black">
             Let's build something <span className="italic">amazing.</span>
           </h2>
           <p className="text-text-primary/70 text-base md:text-lg font-medium">
             I'm currently available for new opportunities. Let's connect!
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           {/* Main Email Card - Takes up 2 columns */}
           <a href="mailto:sableaditi8@gmail.com" className="group md:col-span-2 bg-[#F0D7FF] rounded-[2rem] p-8 border-2 border-text-primary shadow-[4px_4px_0px_#1E1E1E] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#1E1E1E] transition-all flex flex-col justify-between min-h-[220px] overflow-hidden relative cursor-crosshair">
             <div className="relative z-10">
               <span className="inline-block px-3 py-1 rounded-full border-2 border-text-primary bg-bg-secondary text-text-primary text-xs font-black font-sans shadow-sm mb-4">Email Me</span>
               <h3 className="font-serif text-[28px] sm:text-3xl lg:text-4xl text-text-primary font-bold leading-none">sableaditi8@<br/>gmail.com</h3>
             </div>
             
             <div className="flex justify-end mt-4 relative z-10">
               <div className="w-12 h-12 rounded-full bg-text-primary flex items-center justify-center text-bg-primary group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-md">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
               </div>
             </div>

             {/* Decorative */}
             <div className="absolute -bottom-6 -right-6 text-[100px] opacity-10 font-serif select-none pointer-events-none text-text-primary">@</div>
           </a>

           {/* LinkedIn Card */}
           <a href="https://linkedin.com/in/aditi-avinash-sable" target="_blank" rel="noreferrer" className="group bg-[#FFFFEB] rounded-[2rem] p-6 border-2 border-text-primary shadow-[4px_4px_0px_#1E1E1E] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#1E1E1E] transition-all flex flex-col justify-between min-h-[220px] cursor-alias">
             <div>
               <div className="w-10 h-10 rounded-xl bg-text-primary/10 flex items-center justify-center mb-4 border border-text-primary/20 transition-colors group-hover:bg-text-primary/20 hover:scale-110 transition-transform">
                 <svg className="w-5 h-5 text-text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </div>
               <h3 className="font-serif text-2xl font-bold text-[#1E1E1E]">LinkedIn</h3>
               <p className="text-[#1E1E1E]/70 font-medium mt-1 text-sm">Professional networking</p>
             </div>
             <div className="flex justify-end mt-2">
                <svg className="w-6 h-6 text-[#1E1E1E] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </div>
           </a>

           {/* GitHub Card */}
           <a href="https://github.com/Adii-tii" target="_blank" rel="noreferrer" className="group bg-bg-secondary rounded-[2rem] p-6 border-2 border-text-primary shadow-[4px_4px_0px_#1E1E1E] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#1E1E1E] transition-all flex flex-col justify-between min-h-[220px] cursor-alias">
             <div>
               <div className="w-10 h-10 rounded-xl bg-text-primary/10 flex items-center justify-center mb-4 border border-text-primary/20 transition-colors group-hover:bg-text-primary/20 hover:scale-110 transition-transform">
                 <svg className="w-5 h-5 text-text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               </div>
               <h3 className="font-serif text-2xl font-bold text-text-primary">GitHub</h3>
               <p className="text-text-primary/70 font-medium mt-1 text-sm">Open source & code</p>
             </div>
             <div className="flex justify-end mt-2">
                <svg className="w-6 h-6 text-text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </div>
           </a>
           
           {/* Mobile Contact Card */}
           <a href="tel:+919121850093" className="group bg-bg-green sm:col-span-2 md:col-span-1 rounded-[2rem] p-6 border-2 border-text-primary shadow-[4px_4px_0px_#1E1E1E] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#1E1E1E] transition-all flex flex-col justify-between min-h-[220px] cursor-alias relative overflow-hidden">
             <div className="relative z-10">
               <div className="w-10 h-10 rounded-xl bg-text-primary/10 flex items-center justify-center mb-4 border border-text-primary/20 transition-colors group-hover:bg-text-primary/20 hover:scale-110 transition-transform">
                 <svg className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 015.08 2h3a2 2 0 012 1.72 12.81 12.81 0 00.62 2.81 2 2 0 01-.45 2.11L8.99 9.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.62A2 2 0 0122 16.92z"/></svg>
               </div>
               <h3 className="font-serif text-2xl font-bold text-[#FFFFEB]">Mobile</h3>
               <p className="text-[#FFFFEB]/80 font-medium mt-1 text-sm">+91 91218 50093</p>
                <p className="text-[#FFFFEB]/60 text-[10px] font-black mt-2 uppercase tracking-[0.2em]">Contactable</p>
             </div>
             <div className="flex justify-end mt-2 relative z-10">
                <svg className="w-6 h-6 text-[#FFFFEB] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFFFEB]/10 text-[120px] pointer-events-none select-none font-serif font-black">P</div>
           </a>
         </div>

       </div>
    </section>
  );
};
export default Contact;