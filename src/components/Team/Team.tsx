import React from 'react';
import { TeamMembers } from '@/constant';
import Image from 'next/image';
const Team = () => {
  return (
    <section className="py-16 main-container">
      <h2 className="text-[1em] pb-2 md:text-[1.4em] font-medium text-white">
        Join the force with a global team
      </h2>
      <div className="div py-5 w-full place-items-center gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#161a25] rounded-xl min-h-[190px]">
        {TeamMembers.map((data, index) => (
          <div className="text-center space-y-1" key={index}>
            <Image className="max-w-[190px]" src={data.image} alt={data.name} />
            <h2 className="text-xl text-white font-medium">{data.name}</h2>
            <h3 className="text-base uppercase font-light text-white">
              ({data.role})
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
