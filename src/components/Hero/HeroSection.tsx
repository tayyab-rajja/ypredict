import React, { FC } from 'react';
import Presale from './Presale';
import Video from './Video';
import Image from 'next/image';
import gradient from '../../../public/img/icon/heroGradient.png';
const HeroSection: React.FC = () => {
  return (
    <section className="relative">
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
        <div className="lg:flex gap-10 my-24">
          <Video />

          <div className="basis-[55%]">
            <Presale />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[15%]">
        <Image src={gradient} className="max-w-[400px] " alt="gradient" />
      </div>
    </section>
  );
};

export default HeroSection;
