import React from 'react';
import Image from 'next/image';
const Card = ({ img, name }) => {
  return (
    <div className="bg-[#191d27]  rounded-2xl p-3">
      <Image
        src={img}
        alt="setting"
        className="block mx-auto "
        width={100}
        height={80}
      />
      <div className="flex space-x-2">
        <hr className="w-[4px] rounded-3xl h-[70px] bg-skin-pink block" />
        <h2 className="text-base text-white font-normal">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
