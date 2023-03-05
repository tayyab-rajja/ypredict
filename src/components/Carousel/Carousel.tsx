import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 450,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div className="overflow-hidden main-container py-10 text-white">
      <div className="text-center md:pt-10">
        <h2 className="text-[1.3em] md:text-[2em] w-full md:w-[85%] mx-auto leading-tight font-extrabold text-skin-white">
          Explore some of the incredibly powerful products of yPredict.ai
          ecosystem
        </h2>
        <p className="text-skin-white pt-3 text-base">
          ...and why it's the only
          <span className="text-skin-pink">market research tool</span> you'll
          ever need.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <Image
            src={'/img/slide_photos/1.png'}
            alt="marletplease"
            className="block   mx-auto"
            width={700}
            height={450}
          />
        </div>
        <div>
          <Image
            src={'/img/slide_photos/2.png'}
            alt="marletplease"
            className="block mx-auto"
            width={700}
            height={450}
          />
        </div>
        <div>
          <Image
            src={'/img/slide_photos/3.png'}
            alt="marletplease"
            className="block mx-auto"
            width={700}
            height={450}
          />
        </div>
      </Slider>
      <div className="bg-[#141822] mt-10 h-10 rounded-bl-[45px] w-full rounded-br-[45px]"></div>
    </div>
  );
};

export default Carousel;
