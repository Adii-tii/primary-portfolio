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

            {/* Links Column */}
            <div className="pt-8 border-t-2 border-text-primary/10">
              <span className="block text-[10px] font-black uppercase tracking-widest text-text-primary/40 mb-6">Links</span>
              <div className="flex flex-col gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-[#1E1E1E] text-[#FFFFEB] border-2 border-text-primary rounded-2xl shadow-[4px_4px_0px_#C8F7A6] hover:translate-y-[-2px] transition-all group">
                    <span className="font-black uppercase tracking-widest text-xs">Repository</span>
                    <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-[#C8F7A6] text-text-primary border-2 border-text-primary rounded-2xl shadow-[4px_4px_0px_#1E1E1E] hover:translate-y-[-2px] transition-all group">
                    <span className="font-black uppercase tracking-widest text-xs">Live Site</span>
                    <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
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

            {/* Problem Statement */}
            <section className="bg-[#1E1E1E] p-10 md:p-16 rounded-[2.5rem] text-[#FFFFEB] shadow-[10px_10px_0px_#ff6b57] border-2 border-text-primary">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#FFFFEB]/40 mb-8">02. The Problem</h3>
              <p className="font-serif text-2xl md:text-3xl font-black italic tracking-tight leading-tight">
                {project.problem || "Bridging technical constraints with high-level user expectations in a saturated market."}
              </p>
            </section>

            {/* Solution Approach */}
            <section className="bg-[#C8F7A6] p-10 md:p-16 rounded-[2.5rem] border-2 border-text-primary shadow-[10px_10px_0px_#1E1E1E]">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary/40 mb-8">03. The Solution</h3>
              <p className="font-serif text-2xl md:text-3xl font-black italic tracking-tight leading-tight text-text-primary">
                {project.approach || "A unified design system and state-driven architecture that prioritizes clarity and speed."}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary/30 mb-12">04. Features</h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {(project.features || []).map((feature, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <span className="font-serif italic font-black text-4xl text-[#ff6b57]">/0{i+1}</span>
                    <p className="font-bold text-lg text-text-primary pt-2 group-hover:translate-x-1 transition-transform">{feature}</p>
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
            {/* Main Primary View - Slightly Smaller */}
            <div className="relative w-full md:w-[75%] aspect-[16/10] border-2 border-text-primary rounded-3xl overflow-hidden shadow-[12px_12px_0px_#1E1E1E] group">
               <img 
                src={project.gallery[currentImageIndex]} 
                alt="Main View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
                 <button onClick={() => setCurrentImageIndex(p => p === 0 ? project.gallery.length - 1 : p - 1)} className="w-12 h-12 bg-white border-2 border-text-primary rounded-full shadow-[2px_2px_0px_#1E1E1E] flex items-center justify-center font-black hover:bg-accent transition-all active:translate-y-0.5 pointer-events-auto">←</button>
                 <button onClick={() => setCurrentImageIndex(p => (p + 1) % project.gallery.length)} className="w-12 h-12 bg-white border-2 border-text-primary rounded-full shadow-[2px_2px_0px_#1E1E1E] flex items-center justify-center font-black hover:bg-accent transition-all active:translate-y-0.5 pointer-events-auto">→</button>
              </div>
            </div>
            
            {/* Thumbnails Below */}
            <div className="flex gap-4 mt-12 overflow-x-auto pb-4 px-2 max-w-full no-scrollbar">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`relative w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 transform ${
                    currentImageIndex === i ? 'border-accent scale-110 shadow-lg' : 'border-text-primary opacity-50 hover:opacity-100 hover:scale-105 shadow-sm'
                  }`}
                >
                  <img src={img} alt={`Thumb ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MINIMALIST FOOTER ---------- */}
      <footer className="py-40 px-6 bg-[#F0D7FF] text-center border-t-2 border-text-primary">
        <Link to={`/project/${nextProjectIndex}`} className="group inline-block">
          <p className="text-xs font-black uppercase tracking-[0.6em] text-text-primary/40 mb-10">UP NEXT</p>
          <h2 className="font-serif text-[clamp(40px,8vw,120px)] italic font-black text-text-primary leading-none group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
            {nextProject.title}
          </h2>
          <div className="mt-12 h-0.5 w-full bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
        </Link>
      </footer>
    </div>
  );
};

export default ProjectDetail;