import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projectsData as projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectIndex = parseInt(id) || 0;
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-4xl mb-4">Project not found.</h1>
        <Link to="/" className="text-accent underline font-bold">Return Home</Link>
      </div>
    );
  }

  // Next Project Logic
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="bg-bg-primary min-h-screen selection:bg-accent selection:text-text-primary">
      
      {/* ---------- STICKY BACK BUTTON ---------- */}
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center justify-center w-12 h-12 bg-[#FFFFEB]/80 backdrop-blur-md text-text-primary border border-text-primary/10 rounded-full shadow-xl hover:bg-text-primary hover:text-white transition-all duration-300"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* ---------- HERO SECTION ---------- */}
      <header className="relative h-[70vh] w-full overflow-hidden border-b-2 border-text-primary bg-[#1E1E1E]">
        {/* Full-bleed Hero Image background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>

        {/* Hero Content - Bottom Left */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16">
          <div className="max-w-3xl translate-y-4">
            <h1 className="font-serif text-[clamp(40px,8vw,90px)] text-[#FFFFEB] leading-[0.9] mb-4 tracking-tighter italic font-black">
              {project.title}
            </h1>
            <p className="text-[#FFFFEB]/80 text-lg md:text-xl max-w-xl leading-relaxed font-bold italic">
              {project.description}
            </p>
          </div>
        </div>
      </header>

      {/* ---------- MAIN LAYOUT ---------- */}
      <main className="bg-[#FFFFEB] border-b-2 border-text-primary overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 min-h-screen">
          
          {/* LEFT SIDEBAR: METADATA & LINKS */}
          <aside className="lg:col-span-4 border-r-2 border-text-primary p-8 md:p-12 space-y-12 bg-[#FFFFEB]">
            {/* Project Roles */}
            <div>
              <span className="block text-[10px] font-black uppercase tracking-widest text-text-primary/40 mb-4">Roles</span>
              <ul className="space-y-2">
                {project.roles.map((role, i) => (
                  <li key={i} className="font-serif italic font-black text-2xl text-text-primary leading-none">
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div>
              <span className="block text-[10px] font-black uppercase tracking-widest text-text-primary/40 mb-3">Timeline</span>
              <span className="block font-serif italic text-2xl font-black text-text-primary tracking-tight">
                {project.timeline}
              </span>
            </div>

            {/* Tech Stack - Pink Highlighted */}
            <div>
              <span className="block text-[10px] font-black uppercase tracking-widest text-text-primary/40 mb-5">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-[#F0D7FF] border-2 border-text-primary rounded-xl text-text-primary text-xs font-black shadow-[3px_3px_0px_#1E1E1E]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Column - Enhanced Visibility */}
            <div className="pt-8 border-t-2 border-text-primary/10">
              <span className="block text-[10px] font-black uppercase tracking-widest text-text-primary/40 mb-6">Project Access</span>
              <div className="flex flex-col gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#1E1E1E] text-[#FFFFEB] border-2 border-text-primary rounded-2xl shadow-[6px_6px_0px_#C8F7A6] hover:translate-y-[-2px] transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      </div>
                      <span className="font-serif italic font-black text-lg">Code Repository</span>
                    </div>
                    <svg className="w-5 h-5 opacity-40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#C8F7A6] text-text-primary border-2 border-text-primary rounded-2xl shadow-[6px_6px_0px_#1E1E1E] hover:translate-y-[-2px] transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center group-hover:bg-[#1E1E1E] group-hover:text-[#FFFFEB] transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      </div>
                      <span className="font-serif italic font-black text-lg">Live Experience</span>
                    </div>
                    <svg className="w-5 h-5 opacity-40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: CONTENT SECTIONS */}
          <div className="lg:col-span-8 p-8 md:p-20 space-y-32">
            
            {/* Overview */}
            <section className="scroll-mt-32" id="overview">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary/30 mb-10 flex items-center gap-4">
                01. Overview <div className="h-px w-20 bg-text-primary/10"></div>
              </h2>
              <div className="font-medium text-lg md:text-xl text-text-primary/90 leading-relaxed italic max-w-2xl">
                {project.fullDetails}
              </div>
            </section>

            {/* Problem Statement - Normal Text */}
            <section className="scroll-mt-32">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary/30 mb-8 flex items-center gap-4">
                02. The Problem <div className="h-px w-20 bg-text-primary/10"></div>
              </h3>
              <div className="font-medium text-lg md:text-xl text-text-primary/90 leading-relaxed italic max-w-2xl">
                {project.problem || "Solving complex interaction patterns while maintaining a lightweight footprint."}
              </div>
            </section>

            {/* Solution Approach - Normal Text */}
            <section className="scroll-mt-32">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary/30 mb-8 flex items-center gap-4">
                03. The Solution <div className="h-px w-20 bg-text-primary/10"></div>
              </h3>
              <div className="font-medium text-lg md:text-xl text-text-primary/90 leading-relaxed italic max-w-2xl">
                {project.approach || "A unified design system and robust state management architecture."}
              </div>
            </section>

            {/* Core Features - Redesigned as Individual Blocks */}
            <section className="scroll-mt-32">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary/30 mb-12 flex items-center gap-4">
                04. Core Features <div className="h-px w-20 bg-text-primary/10"></div>
              </h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {(project.features || []).map((feature, i) => (
                  <div key={i} className="group p-5 md:p-7 bg-[#C8F7A6] border-2 border-text-primary rounded-[1.5rem] shadow-[6px_6px_0px_#1E1E1E] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 flex flex-col justify-between min-h-[120px]">
                    <span className="font-serif italic font-black text-2xl text-text-primary/20 mb-4">/0{i+1}</span>
                    <p className="font-serif italic font-black text-base md:text-lg text-text-primary tracking-tight leading-tight">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* ---------- GALLERY (THE FEED) ---------- */}
      <section className="py-24 px-6 bg-[#FFFFEB] border-b-2 border-text-primary">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl md:text-7xl italic font-black text-text-primary tracking-tighter">PROJECT FEED.</h2>
            <p className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-2">Shot {currentImageIndex + 1} of {project.gallery.length}</p>
          </div>

          <div className="flex flex-col items-center">
            {/* Main Primary View - Centered & Navigable */}
            <div className="relative w-full md:w-[85%] aspect-[16/10] border-2 border-text-primary rounded-3xl overflow-hidden shadow-[12px_12px_0px_#1E1E1E] group">
               <img 
                src={project.gallery[currentImageIndex]} 
                alt="Main View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-6 pointer-events-none">
                 <button onClick={() => setCurrentImageIndex(p => p === 0 ? project.gallery.length - 1 : p - 1)} className="w-14 h-14 bg-[#FFFFEB] border-2 border-text-primary rounded-full shadow-[3px_3px_0px_#1E1E1E] flex items-center justify-center font-black hover:bg-accent hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1E1E1E] transition-all active:translate-y-0.5 pointer-events-auto">←</button>
                 <button onClick={() => setCurrentImageIndex(p => (p + 1) % project.gallery.length)} className="w-14 h-14 bg-[#FFFFEB] border-2 border-text-primary rounded-full shadow-[3px_3px_0px_#1E1E1E] flex items-center justify-center font-black hover:bg-accent hover:translate-x-[2px] hover:translate-y-[-2px] hover:shadow-[-5px_5px_0px_#1E1E1E] transition-all active:translate-y-0.5 pointer-events-auto">→</button>
              </div>
            </div>
            
            {/* Thumbnails Below */}
            <div className="flex gap-4 mt-12 overflow-x-auto pb-4 px-2 max-w-full no-scrollbar">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`relative w-28 md:w-36 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 transform ${
                    currentImageIndex === i ? 'border-accent scale-110 shadow-lg' : 'border-text-primary opacity-40 hover:opacity-100 hover:scale-105 shadow-sm'
                  }`}
                >
                  <img src={img} alt={`Thumb ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;