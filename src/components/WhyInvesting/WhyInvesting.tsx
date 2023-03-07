import React from 'react';
import { whyInvesting } from '@/constant';
import Image from 'next/image';
const WhyInvesting = () => {
  return (
    <div id="why_investing" className="main-container relative py-12">
      <div className="hidden lg:block absolute -z-10 left-0 top-[10%] right-0">
        <Image
          src={'/img/icon/light2.png'}
          width={350}
          height={300}
          className="block -z-10  mx-auto"
          alt="taif"
        />
      </div>

      <div className="content z-[9999]">
        <h2 className="text-center text-xl md:text-4xl text-white font-bold">
          Why investing in YPRED tokens is ...{' '}
          <br className="hidden lg:block" /> absolutely a "no-brainer" deal?
        </h2>
        <div className="grid mt-9  z-[9999] place-items-center grid-cols-1 md:grid-cols-2">
          {whyInvesting.map((data, index) => (
            <div key={index} className="space-y-2 max-w-[405px] mt-3">
              <h2 className="text-[1.2em] z-[9999] font-medium  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                {data.title}
              </h2>
              <p className="text-sm font-light z-[9999] leading-[1.5] text-[#fefefe]">
                {data.descripetion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyInvesting;
