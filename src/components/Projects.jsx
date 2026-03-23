import React from "react";
import { Link } from "react-router-dom";
import { projectsData as projects } from "../data/projects";

const Projects = () => {

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-bg-primary">

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_#1E1E1E_2px,_transparent_2px)] bg-[size:32px_32px]" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-24 px-4 flex flex-col items-center relative z-10">
        <h2 className="font-serif text-[clamp(60px,7vw,100px)] leading-[1] tracking-tight mb-6 text-text-primary">
          Selected Work.
        </h2>

        <p className="text-text-primary/70 max-w-xl mx-auto text-lg font-medium">
          A collection of things I’ve built, broken, and rebuilt better.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/projects/${index}`}
            className="group relative flex h-full"
          >

            {/* SHADOW LAYER */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-text-primary rounded-[1.5rem]" />

            {/* CARD */}
            <div className="relative flex flex-col w-full bg-[var(--bg-primary)] border-2 border-text-primary rounded-[1.5rem] overflow-hidden transition-all duration-300 group-hover:-translate-y-2">

              {/* IMAGE */}
              <div className="relative w-full aspect-[5/3] overflow-hidden border-b-2 border-text-primary">

                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className=" h-[250px] object-cover transition-all duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-serif text-text-primary/40 text-center px-4">
                    {project.title}
                  </div>
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow gap-4">

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-serif text-text-primary">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-text-primary/75 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`
                        text-[11px] font-bold px-3 py-1 rounded-lg border-2 border-text-primary 
                        bg-accent text-text-primary
                        shadow-[2px_2px_0px_var(--color-text-primary)]
                        transition-all duration-300
                        group-hover:-translate-y-1
                        ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default Projects;