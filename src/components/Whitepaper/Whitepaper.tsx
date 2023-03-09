import Image from 'next/image';
import React from 'react';
import whitePaper from '../../../public/img/whitepaper.png';
const Whitepaper = () => {
  return (
    <div className="main-container justify-center gap-x-10 flex flex-col md:flex-row items-center">
      <h2 className="text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
        <span className="ml-12"> Read Our</span>{' '}
        <span className="mt-2 block"> Whitepaper</span>
      </h2>
      <Image className="max-w-[220px]" src={whitePaper} alt="whitepapper" />
    </div>
  );
};

export default Whitepaper;
