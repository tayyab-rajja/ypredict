import Image from 'next/image';
import React from 'react';
import { Feature } from '../../types';

interface Props {
  items: Feature[];
}

const Card: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <div
          className="relative w-full inline-flex items-center justify-center p-[1px] mb-2 mr-3 overflow-hidden text-xs font-medium group rounded-xl bg-gradient-to-br from-[#6042ef] to-skin-pink  "
          key={i}
        >
          <span className="relative w-full px-5 bg-[#0f131e] py-2.5 transition-all ease-in duration-75 text-white ">
            <div className="flex w-full items-center gap-2">
              <div>
                <Image
                  src={item.image}
                  alt={item.titile}
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h2 className="text-lg lg:text-2xl font-medium text">
                  {item.titile}
                </h2>
                <p className="text-xs font-light">{item.subTitle}</p>
              </div>
            </div>
          </span>
        </div>
      ))}
    </>
  );
};

export default Card;
