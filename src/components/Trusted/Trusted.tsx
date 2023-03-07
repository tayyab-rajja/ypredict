import React from 'react';
import Image from 'next/image';
import smileLight from '../../../public/img/smile-light.png';
import Card from './Card';
const Trusted = () => {
  return (
    <div className="main-container space-y-5">
      <div className="flex flex-col lg:flex-row  items-end space-x-1">
        <div className="basis-[60%] w-full">
          <h2 className="text-xl py-5 md:text-3xl text-center text-white font-bold">
            Trusted & Backed by VCs <br /> and Pro traders for a reason.
          </h2>
          {/* <Image src={smileLight} alt="smile" /> */}
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
      <div className=" flex flex-col lg:flex-row relative w-[95%] justify-center lg:justify-between">
        <div className="hiddex lg:block basis-1/2">
          <h2 className="sr-only">Hello</h2>
        </div>
        <div className="basis-1/2  bg-[#191d27] flex items-center  rounded-2xl p-2">
          <Image
            src={'/img/icon/lock.png'}
            className="block"
            alt="lock"
            width={60}
            height={30}
          />
          <p className="text-white font-normal text-base">
            Marketplace to select predictive models of your choice.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-end w- space-x-1">
        <div className="basis-[60%] z-10">
          <Image src={smileLight} alt="smile" />
        </div>
        <div className=" -z-10 left-[49%] static lg:absolute basis-[40%]">
          <div className="grid max-w-[500px] space-x-5 grid-cols-2">
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
