import React from 'react';
import checkBox from '../../../public/img/icon/checkbox.png';
import { comparison } from '@/constant';
import Image from 'next/image';
const Comparison = () => {
  return (
    <section className="main-container comparison  mb-20 mx-32 bg-[#141722] rounded-3xl">
      <table>
        <thead>
          <tr>
            <th className="tl  tl2"></th>
            <th className="product">
              <img
                className="w-[156px]"
                src="/ypred-coin.png"
                alt="logo header"
              />
            </th>
            <th className="product">defytrends</th>
            <th className="product">dash2trade</th>
            <th className="product">lunarcrush</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((data, index) => (
            <tr key={index}>
              <td className="flex flex-row items-center space-x-10 font-medium title-row">
                <Image src={data.icon} className="w-10 h-8 pr-2 " alt="tool" />
                {data.name}
              </td>
              <td className="compare-row">
                <span className="comp-tick-icon flex justify-center">
                  <Image width={40} src={checkBox} alt="checkbox" />
                </span>
              </td>
              <td>
                <span className="comp-tick-icon flex justify-center">
                  {data.defytrends ? (
                    <Image width={40} src={checkBox} alt="checkbox" />
                  ) : (
                    '-'
                  )}
                </span>
              </td>
              <td>
                <span className="comp-tick-icon flex justify-center">
                  {data.dash2trade ? (
                    <Image width={40} src={checkBox} alt="checkbox" />
                  ) : (
                    '-'
                  )}
                </span>
              </td>
              <td>
                <span className="comp-tick-icon flex justify-center">
                  {data.lunarcrush ? (
                    <Image width={40} src={checkBox} alt="checkbox" />
                  ) : (
                    '-'
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Comparison;
