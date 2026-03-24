import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Background Text Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[clamp(150px,20vw,400px)] font-serif font-black text-text-primary/[0.03] whitespace-nowrap select-none pointer-events-none z-0 px-8">
        GET IN TOUCH
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 border-text-primary bg-accent text-text-primary text-[10px] uppercase font-black tracking-[0.2em] mb-8 shadow-[3px_3px_0px_#1E1E1E]">
              Opportunities
            </span>
            <h2 className="font-serif text-[clamp(60px,10vw,120px)] leading-[0.85] text-text-primary font-black mb-8 tracking-tighter">
              Let's build<br /> something <span className="italic text-text-primary/40 underline decoration-accent decoration-8 underline-offset-8">amazing.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-text-primary/70 font-medium leading-tight max-w-xl">
              I'm currently available for new projects and collaborations. Let’s start a conversation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Card - Deep Green Focus */}
          <a
            href="mailto:sableaditi8@gmail.com"
            className="group relative md:col-span-2 flex flex-col justify-between"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-text-primary rounded-[3rem]" />
            <div className="relative h-full bg-bg-green border-2 border-text-primary rounded-[3rem] p-10 md:p-14 overflow-hidden transition-all duration-500 group-hover:-translate-y-1.5 min-h-[350px]">
              <div className="relative z-10">
                <div className="text-accent text-sm font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                  <div className="w-12 h-px bg-accent/30" />
                  Drop a Line
                </div>
                <h3 className="font-serif text-[40px] md:text-[60px] lg:text-[75px] text-[#FFFFEB] font-black leading-[0.9] tracking-tighter mb-8 break-all">
                  sableaditi8<br />@gmail.com
                </h3>
              </div>

              <div className="relative z-10 flex items-center gap-6 mt-auto">
                <div className="px-8 py-4 bg-accent text-text-primary rounded-2xl font-black text-lg border-2 border-text-primary shadow-[4px_4px_0px_#1E1E1E] transition-all group-hover:bg-bg-primary cursor-pointer">
                  Copy Email Address
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-green transition-all duration-300 scale-125">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 text-[300px] text-[#FFFFEB]/5 font-serif select-none pointer-events-none rotate-12">@</div>
            </div>
          </a>

          {/* Secondary Grid for Socials & More */}
          <div className="grid grid-cols-1 gap-8">
            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/aditi-avinash-sable"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-text-primary rounded-[2.5rem]" />
              <div className="relative h-full bg-bg-secondary border-2 border-text-primary rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <span className="w-14 h-14 rounded-2xl bg-text-primary text-bg-primary flex items-center justify-center shadow-[3px_3px_0px_rgba(30,30,30,0.1)]">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </span>
                  <div className="w-10 h-10 rounded-full border border-text-primary/20 flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg-primary transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-text-primary mb-1">LinkedIn</h4>
                  <p className="text-text-primary/60 font-medium">Professional networking</p>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Adii-tii"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-text-primary rounded-[2.5rem]" />
              <div className="relative h-full bg-accent border-2 border-text-primary rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <span className="w-14 h-14 rounded-2xl bg-text-primary text-[#FFFFEB] flex items-center justify-center shadow-[3px_3px_0px_rgba(30,30,30,0.1)]">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </span>
                  <div className="w-10 h-10 rounded-full border border-text-primary/20 flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg-primary transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-text-primary mb-1">GitHub</h4>
                  <p className="text-text-primary/60 font-medium">Open source & code</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Final Footer Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="tel:+919121850093"
            className="group relative flex flex-col md:col-span-1"
          >
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-text-primary rounded-[2.5rem]" />
            <div className="relative h-full bg-[#FFFFEB] border-2 border-text-primary rounded-[2.5rem] p-8 transition-all duration-500 group-hover:-translate-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-text-primary/40">Voice & Mobile</p>
              <h4 className="text-xl font-bold text-text-primary mb-2">+91 91218 50093</h4>
              <p className="text-sm font-medium text-text-primary/60">Available for calls and messages.</p>
            </div>
          </a>

          <div className="md:col-span-2 flex items-center justify-between px-10 py-6 bg-bg-secondary border-2 border-text-primary rounded-[2.5rem] relative overflow-hidden group">
            <div className="flex items-center gap-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-text-primary/40 hidden sm:block">Explore more →</span>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Kaggle", url: "https://www.kaggle.com/aditis4ble" },
                  { name: "LeetCode", url: "https://leetcode.com/u/Adii_ti/" },
                  { name: "Behance", url: "https://www.behance.net/aditisable" }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-bg-primary border-2 border-text-primary rounded-xl text-sm font-black text-text-primary shadow-[3px_3px_0px_#1E1E1E] transition-all hover:bg-accent hover:-translate-y-1 hover:shadow-[5px_5px_0px_#1E1E1E]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-text-primary/20 flex items-center justify-center animate-spin-slow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20"><circle cx="12" cy="12" r="10" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;