import React from 'react';

const Intro = () => {
  return (
    <section id="intro" className="py-32 relative bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-serif text-[32px] md:text-5xl leading-[1.3] md:leading-[1.3] text-[#1E1E1E] text-left mb-6">
          I build because I am endlessly curious about how things work. My inspiration comes from the desire to create seamless digital experiences that solve real problems.
        </p>
        <p className="font-sans text-xl md:text-2xl text-[#1E1E1E]/60 font-medium text-left">
          Marrying robust engineering with thoughtful design, to bring bold ideas to life.
        </p>
      </div>
    </section>
  );
};

export default Intro;
