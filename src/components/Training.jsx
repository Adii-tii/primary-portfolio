import React from 'react';

// Import logos
import shefiLogo from '../assets/SheFi_Black_Logo_with_Sparkle-removebg-preview.png';
import cipherLogo from '../assets/cipherschool_logo-removebg-preview.png';

const Training = () => {
  const trainingData = [
    {
      title: "SheFi| Web3 and DeFi Program",
      logo: shefiLogo,
      date: "Oct’ 25 - Present",
      points: [
        "Participated in a global Web3 and DeFi program with a cohort of 3,000+ female participants gaining exposure to blockchain and decentralized finance.",
        "Attended 20+ structured sessions on smart contracts, zero knowledge proof frameworks, consensus protocols, NFTs, and DEX mechanics."
      ],
      accent: "bg-[#F0D7FF]", // Light Purple
    },
    {
      title: "Cipher Schools| Full Stack Web Development (MERN)",
      logo: cipherLogo,
      date: "May’ 25 – Jun’ 25",
      points: [
        "Gained practical proficiency in MERN stack along with experience in building REST APIs, component driven UI, and data handling.",
        "Developed a habit tracker webapp with Firebase authentication, state retention, and database backed activity recording."
      ],
      accent: "bg-[#C8F7A6]", // Green
    }
  ];

  return (
    <section id="training" className="py-24 relative overflow-hidden bg-bg-primary">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(var(--color-text-primary) 2px, transparent 2px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[clamp(40px,5vw,60px)] text-text-primary leading-tight tracking-tight">
            Training & Programs
          </h2>
          <div className="mt-4 flex justify-center">
            <svg className="text-accent w-24 h-6 opacity-50" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M5 10 Q 50 20 95 0" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {trainingData.map((item, index) => (
            <div key={index} className="group relative flex flex-col h-full">
              {/* SHADOW */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-text-primary rounded-[2rem]" />
              
              {/* CARD */}
              <div className="relative flex-1 bg-bg-secondary border-2 border-text-primary rounded-[2rem] p-8 md:p-10 flex flex-col overflow-hidden">
                
                {/* WATERMARK LOGO */}
                {item.logo && (
                  <div className="absolute -bottom-20 -left-6 w-80 md:w-50 h-80 md:h-50 opacity-10 grayscale pointer-events-none select-none">
                    <img src={item.logo} alt="" className="w-full h-full object-contain" />
                  </div>
                )}

                {/* WATERMARK TEXT */}
                <div className="absolute -bottom-2 -right-4 text-text-primary/10 font-black text-4xl md:text-6xl uppercase tracking-tighter select-none pointer-events-none rotate-[-5deg] origin-bottom-right">
                  {item.watermark}
                </div>

                <div className="mb-6 relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`inline-block px-3 py-1 rounded-full border-2 border-text-primary ${item.accent} text-text-primary text-[10px] font-bold shadow-[2px_2px_0px_var(--color-text-primary)] uppercase tracking-wider`}>
                      Professional Training
                    </div>
                    {item.logo && (
                      <div className="w-16 h-10 flex items-center justify-end">
                        <img src={item.logo} alt="Program Logo" className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-text-primary leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-primary/60 font-bold text-xs uppercase tracking-widest">
                    {item.date}
                  </p>
                </div>

                <ul className="space-y-4 flex-grow relative z-10">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-text-primary/80 text-base leading-relaxed font-medium">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
