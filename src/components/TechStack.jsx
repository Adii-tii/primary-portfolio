import React from "react";

const TechStack = () => {
  const techCategories = [
    {
      title: "AI & ML",
      skills: ["Python", "TensorFlow", "Scikit-Learn", "Computer Vision", "NLP", "Data Engineering"],
    },
    {
      title: "AI Toolkit",
      skills: ["PyTorch", "LangChain", "OpenAI APIs", "HuggingFace", "Vector DBs", "LLMs"],
    },
    {
      title: "Full Stack",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "SQL", "Tailwind CSS"],
    },
    {
      title: "Tools & Cloud",
      skills: ["Git & GitHub", "Docker", "AWS", "Figma", "Vercel", "Linux"],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="relative py-32 bg-bg-green text-[#1E1E1E] overflow-hidden mt-16 z-20 border-2 border-[#1E1E1E] rounded-[60px] mx-4 lg:mx-8 mb-16"
    >
      {/* STRONG DOT GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle,_#1E1E1E_2px,_transparent_2px)] bg-[size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 rounded-full border-2 border-[#1E1E1E] bg-[#FFFFEB] text-sm font-bold  rotate-1 mb-6">
            The Building Blocks
          </div>

          <h2 className="font-serif text-[clamp(50px,6vw,90px)] font-bold text-accent">
            What I build with.
          </h2>
        </div>

        {/* ONE ROW STACK */}
        <div className="flex flex-wrap justify-center gap-10">

          {techCategories.map((category, index) => (
            <div key={index} className="relative group w-[260px] flex">

              {/* shadow */}

              {/* card */}
              <div className="relative flex flex-col w-full bg-[#1E1E1E] border-2 border-accent rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1">

                <h3 className="font-serif text-2xl font-bold mb-4 text-[#FFFFEB]">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIndex) => {
                    return (
                      <div
                        key={sIndex}
                        className={`
                        px-3 py-1.5 rounded-lg border-2 border-[#FFFFEB]
                        text-[12px] font-bold text-[#1E1E1E]
                        bg-[#FFFFEB]
                        transition-all duration-300
                        ${sIndex % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
                      `}
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* index bubble */}
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FFFFEB] bg-[#1E1E1E] text-[#FFFFEB] font-bold">
                {index + 1}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechStack;