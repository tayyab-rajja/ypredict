import Image from 'next/image';
import React from 'react';

const Patterns = () => {
  return (
    <div className="relative patterns w-full ">
      <div className="flex min-h-[140px]  space-x-4">
        <div className="w-20 h-20 relative border-4 left-[87%] -top-[1%] border-[#1c2230] rounded-full">
          <h2 className="text-[#1c2230] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
            22
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Patterns;
