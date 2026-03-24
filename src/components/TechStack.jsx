import React from "react";

const TechStack = () => {
  const techCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "PyTorch",
      "OpenCV"
    ],
  },
  {
    title: "Full Stack Development",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS"
    ],
  },
  {
    title: "Deployment & Infrastructure",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "Linux",
      "Git",
      "Github"
    ],
  },
  {
    title: "AI Toolkit",
    skills: [
      "OpenAI API",
      "LangChain",
      "FAISS",
      "RAG Pipelines"
    ],
  },
];

  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden bg-bg-green rounded-[60px] mx-4 lg:mx-8 mb-24 border-2 border-text-primary">
      {/* Background Decor - High Contrast version */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.1]">
        <div className="w-full h-full bg-[radial-gradient(circle,_#FFFFEB_2px,_transparent_2px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Simplified */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 border-text-primary bg-accent text-text-primary text-[10px] uppercase font-black tracking-[0.2em] mb-6 shadow-[3px_3px_0px_#1E1E1E]">
              The Toolkit
            </span>
            <h2 className="font-serif text-[clamp(50px,8vw,100px)] leading-[0.9] text-bg-primary mb-6">
              What I <span className="italic text-accent/80">build</span><br /> with.
            </h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Shadow - Solid Black for contrast */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-text-primary rounded-[2.5rem] transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Main Card - Warm Beige for maximum pop */}
              <div className="relative h-full bg-bg-primary border-2 border-text-primary rounded-[2.5rem] p-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-serif text-text-primary font-black select-none">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent border-2 border-text-primary shadow-[2px_2px_0px_#1E1E1E] group-hover:-rotate-12 transition-transform" />
                  </div>
                  <h3 className="text-3xl font-serif text-text-primary font-bold mb-6">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills - Balanced Size for Fit */}
                <div className="flex flex-wrap gap-2 pt-6 border-t-2 border-text-primary/10">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`
                        text-[13px] md:text-[14px] font-black px-4 py-2 rounded-xl border-2 border-text-primary bg-accent text-text-primary 
                        transition-all duration-300 hover:border-text-primary hover:translate-y-[-2px] hover:rotate-0
                        shadow-[3px_3px_0px_#1E1E1E]
                        ${sIdx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1deg]"}
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Note */}
        <div className="mt-24 pt-12 border-t-4 border-text-primary flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-text-primary bg-accent shadow-sm" />)}
            </div>
            <p className="text-lg font-bold text-bg-primary">Constantly learning and expanding</p>
          </div>
          <a href="#contact" className="px-10 py-4 bg-accent text-text-primary rounded-2xl font-black text-lg hover:scale-105 active:scale-95 border-2 border-text-primary shadow-[4px_4px_0px_#1E1E1E] transition-all duration-300">
            Let's build together →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;