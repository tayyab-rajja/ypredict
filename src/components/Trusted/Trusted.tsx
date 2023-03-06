import React from 'react';
import Image from 'next/image';
import smileLight from '../../../public/img/smile-light.png';

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
            <div className="bg-[#191d27]  rounded-2xl p-3">
              <Image
                src="/img/icon/settings.png"
                alt="setting"
                className="block mx-auto "
                width={100}
                height={80}
              />
              <div className="flex space-x-2">
                <hr className="w-[4px] rounded-3xl h-[70px] bg-skin-pink block" />
                <h2 className="text-base text-white font-normal">
                  A.I predictions by top 1% experts for your favorite coins
                </h2>
              </div>
            </div>
            <div className="bg-[#191d27]  rounded-2xl p-3">
              <Image
                src="/img/icon/graph.png"
                alt="setting"
                className="block mx-auto "
                width={100}
                height={80}
              />
              <div className="flex space-x-2">
                <hr className="w-[4px] rounded-3xl h-[70px] bg-skin-pink block" />
                <h2 className="text-base text-white font-normal">
                  A.I predictions by top 1% experts for your favorite coins
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
