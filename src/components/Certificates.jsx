import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: "Full-stack Development with MERN Stack",
      issuer: "Cipher Schools",
      date: "May’ 25",
      link: "#"
    },
    {
      title: "Affective Computing",
      issuer: "IIIT Delhi, NPTEL",
      date: "Apr’ 25",
      link: "#"
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM, Coursera",
      date: "Feb’ 25",
      link: "#"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "iamneo",
      date: "Sep’ 24",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-32 relative overflow-hidden bg-bg-primary">
      {/* HEADER */}
      <div className="text-center mb-24 relative z-10 px-4">
        <p className="text-text-primary/70 text-lg mb-4 font-medium tracking-wide">
          Continuous Learning
        </p>

        <h2 className="font-serif text-[clamp(50px,6vw,90px)] text-text-primary leading-tight">
          Certificates.
        </h2>

        {/* Squiggle */}
        <div className="mt-6 flex justify-center">
          <svg className="text-accent w-36 h-10" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 20C15 5 20 35 30 15C40 -5 50 35 60 15C70 -5 80 35 90 15" />
          </svg>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 relative z-10">

        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col h-full"
          >

            {/* SHADOW LAYER */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-text-primary rounded-[2rem]" />

            {/* CARD */}
            <div className="relative flex-1 flex flex-col bg-bg-secondary border-2 border-text-primary rounded-[2rem] p-6 transition-all duration-500 group-hover:-translate-y-3 h-full">

              {/* TOP */}
              <div className="mb-4 flex-1">

                {/* DATE BADGE */}
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold border-2 border-text-primary bg-bg-primary shadow-[2px_2px_0px_var(--color-text-primary)] group-hover:bg-accent transition-all duration-300">
                  {cert.date}
                </span>

                {/* TITLE */}
                <h3 className="font-serif text-2xl mt-5 text-text-primary leading-snug">
                  {cert.title}
                </h3>

                {/* ISSUER */}
                <p className="text-text-primary/70 text-sm font-medium mt-2">
                  {cert.issuer}
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-between items-center mt-auto">

                <span className="text-sm font-semibold text-text-primary/70 group-hover:text-text-primary transition">
                  View Certificate
                </span>

                <div className="w-11 h-11 rounded-full border-2 border-text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-text-primary group-hover:text-bg-primary group-hover:rotate-45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

              </div>

            </div>
          </a>
        ))}

      </div>
    </section>
  );
};

export default Certificates;