import React from 'react';
import Card from './Card';
import { features } from '@/constant';
import VerticalImageSlider from './SliderImges';
import Patterns from '../Patterns/Patterns';
import Image from 'next/image';
const Features = () => {
  return (
    <section className="main-container">
      <div className="grid gap-4  grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Card items={features} />;
        </div>
        <div className="h-full relative">
          <VerticalImageSlider />
        </div>
      </div>
      <div className="grid mt-[18rem] lg:mt-11 space-y-5 space-x-0 lg:space-x-7 my-10 grid-cols-1 lg:grid-cols-2">
        <Patterns />
        <div className="bg-[#121621] mx-auto mt-16 p-4 rounded-3xl">
          <h2 className="text-[1.2em]  font-medium  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
            Patent-Pending Pattern Recognition algorithm
          </h2>
          <p className="text-sm font-light text-[#fefefe]">
            yPredict.ai automatically identifies hundreds of bullish and bearish
            chart patterns and candlestick patterns. It generates real-time
            alerts when these patterns are formed, along with a reliability
            score based on the overall past accuracy of the expected price
            behavior after the pattern is formed.
          </p>
        </div>
      </div>
      <div className="py-5 grid space-x-7 my-10 grid-cols-1 lg:grid-cols-2">
        <div className="flex space-x-5">
          <div>
            <Image
              alt="coin"
              src={'/img/features/coin.png'}
              width={580}
              height={100}
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-[1.2em]  font-medium  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
              10% Revenue Share through staking
            </h2>
            <p className="text-sm font-light leading-[1.5] text-[#fefefe]">
              10% percent of the subscription revenue will be shared with YPERD
              holders through an income-sharing staking pool. The platform
              generates revenue through the sale of subscriptions on its
              marketplace, which includes AI signals offered through various
              models listed on the platform.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div>
            <Image
              alt="coin"
              src={'/img/features/scan.png'}
              width={280}
              height={100}
            />
          </div>
          <div className="space-y-2 mt-3">
            <h2 className="text-[1.2em]  font-medium  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
              Platform Payment in YPRED
            </h2>
            <p className="text-sm font-light leading-[1.5] text-[#fefefe]">
              $YPRED works as default & discounted payment option for
              marketplace subscription payments and all premium offerings on
              yPredict app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
