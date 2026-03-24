import React from "react";
import { Link } from "react-router-dom";
import { projectsData as projects } from "../data/projects";

const Projects = () => {
  const featuredTitles = ["PR Tracker", "Sign Language Interpreter", "Expense Tracker"];
  
  const featuredProjects = projects.filter(p => featuredTitles.includes(p.title));
  // Sort to match requested order if possible, or just keep as is
  featuredProjects.sort((a, b) => featuredTitles.indexOf(a.title) - featuredTitles.indexOf(b.title));
  
  const otherProjects = projects.filter(p => !featuredTitles.includes(p.title));

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-bg-primary">

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_#1E1E1E_2px,_transparent_2px)] bg-[size:32px_32px]" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-16 px-4 flex flex-col items-center relative z-10">
        <h2 className="font-serif text-[clamp(60px,7vw,100px)] leading-[1] tracking-tight mb-6 text-text-primary">
          Selected Work.
        </h2>

        <p className="text-text-primary/70 max-w-xl mx-auto text-lg font-medium">
          A collection of things I’ve built, broken, and rebuilt better.
        </p>
      </div>

      {/* FEATURED PROJECTS GRID (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 relative z-10 mb-24">
        {featuredProjects.map((project) => {
          const projectIndex = projects.findIndex(p => p.title === project.title);
          
          return (
            <Link
              key={project.title}
              to={`/projects/${projectIndex}`}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-text-primary rounded-[2rem]" />
              <div className="relative flex-1 flex flex-col bg-bg-primary border-2 border-text-primary rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-secondary">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-serif text-text-primary/20 p-6 text-center leading-tight">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-text-primary mb-2 leading-tight transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-primary/60 text-sm font-medium leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* PROMINENT TAGS AFTER DESCRIPTION - Larger */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={tag} className={`text-[12px] font-black px-3.5 py-1.5 rounded-lg border-2 border-text-primary bg-accent text-text-primary shadow-[2px_2px_0px_var(--color-text-primary)] transition-all group-hover:scale-105 ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-text-primary/10 flex justify-between items-center text-text-primary/80 font-bold">
                    <span className="text-xs uppercase tracking-tighter">View Project</span>
                    <div className="w-8 h-8 rounded-full border-2 border-text-primary flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg-primary transition-all translate-y-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* DIVIDER HEADER FOR MORE PROJECTS */}
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex items-center gap-6">
          <h3 className="font-serif text-3xl md:text-4xl text-text-primary/50 whitespace-nowrap">
            More <span className="italic">Projects</span>
          </h3>
          <div className="h-px flex-1 bg-text-primary/10" />
        </div>
      </div>

      {/* OTHER PROJECTS GRID (2 columns - compact) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto px-6 relative z-10">
        {otherProjects.map((project) => {
          const projectIndex = projects.findIndex(p => p.title === project.title);
          
          return (
            <Link
              key={project.title}
              to={`/projects/${projectIndex}`}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-text-primary rounded-[2rem]" />
              <div className="relative flex-1 flex flex-col bg-bg-primary border-2 border-text-primary rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="relative w-full aspect-[2/1] overflow-hidden bg-bg-secondary">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-serif text-text-primary/20 p-6 text-center leading-tight">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-text-primary mb-3 leading-tight transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-primary/60 text-sm font-medium leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* COMPACT TECH STACK - Slightly larger */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={tag} className={`text-[12px] font-black px-3.5 py-1.5 rounded-lg border-2 border-text-primary bg-accent text-text-primary shadow-[2px_2px_0px_var(--color-text-primary)] transition-all ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-text-primary/10 flex justify-between items-center text-text-primary/80 font-bold">
                    <span className="text-xs uppercase tracking-tighter">View Details</span>
                    <div className="w-8 h-8 rounded-full border-2 border-text-primary flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg-primary transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;