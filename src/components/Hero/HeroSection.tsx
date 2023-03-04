import React, { FC } from 'react';
import Video from './Video';

const HeroSection: React.FC = () => {
  return (
    <section className="">
      <div className="main-container pt-12">
        <div className="heading text-center">
          <h2 className="text-[1.4em] md:text-[2.6em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
            YPRED, a token empowering world’s first
          </h2>
          <h2 className="text-[2.5em] md:text-[3.9em] font-extrabold text-stroke-white">
            “All-in-One” AI Ecosystem
          </h2>
          <p className="text-lg text-white font-light">
            Specifically Built for Developers, Traders, Investors, Quants and
            Analysts
          </p>
        </div>
        <div className="lg:flex my-24">
          <Video />

          <div className="basis-[55%]">2</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
