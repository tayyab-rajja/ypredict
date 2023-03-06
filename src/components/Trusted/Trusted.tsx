import React from 'react';
import Image from 'next/image';
import smileLight from '../../../public/img/smile-light.png';
import Card from './Card';
const Trusted = () => {
  return (
    <div className="main-container">
      <div className="flex space-x-1">
        <div className="basis-[60%]">
          <h2 className="text-xl md:text-3xl text-center text-white font-bold">
            Trusted & Backed by VCs <br /> and Pro traders for a reason.
          </h2>
          <Image src={smileLight} alt="smile" />
        </div>
        <div className="basis-[40%]">
          <div className="grid space-x-5 grid-cols-2">
            <Card
              img="/img/icon/settings.png"
              name=" A.I predictions by top 1% experts for your favorite coins"
            />
            <Card
              img="/img/icon/graph.png"
              name="A.I predictions by top 1% experts for your favorite coins"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
