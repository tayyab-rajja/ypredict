import Image from 'next/image';
import React from 'react';
import rewordImg from '../../../public/img/icon/reword.png';
const Presale = () => {
  return (
    <div className="bg-[#151923] p-6 rounded-2xl">
      <div className="top flex justify-between">
        <div className="flex gap-2 items-start">
          <Image
            width={8}
            height={8}
            src={'/img/icon/vaticalsape.png'}
            alt="vaticalsape.png"
          />
          <div>
            <h2 className="text-base lg:text-[1.7rem]  text-white">
              <span className="font-medium"> Presale 3</span>
              <span className="text-white font-extralight">
                (Next Price +5%)
              </span>
            </h2>
            <p className="text-white font-light text-sm">
              Upto 1% daily rewards until we list
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={'/img/icon/active.png'}
            alt="active-icon"
            width={10}
            height={10}
          />
          <span className="text-white">Open</span>
        </div>
      </div>
      <div className="prograssbar py-4">
        <p className="text-skin-pink pb-2 text-center text-sm lg:text-lg font-light">
          Softcap already reached
        </p>
        <div className="flex gap-x-2 items-center">
          <div className="w-full bg-[#2e3141] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7] h-2 rounded-full"
              style={{ width: '35%' }}
            ></div>
          </div>
          <p className="text-white text-xs lg:text-base">
            $1,180,196.863/<b>$2,072,000</b>
          </p>
        </div>

        <div className="flex mt-12 flex-col gap-y-8 pb-6 border-b-2 border-dotted border-[#2e3141]">
          <div className="flex mx-8 justify-between">
            <div>
              <span className="text-white leading-[2px] text-sm  font-extralight">
                Presale Price
              </span>
              <h2 className="text-[1.1em] md:text-[2em] font-bold  bg-clip-text text-transparent leading-[30px] bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                $0.0375
              </h2>
            </div>
            <div>
              <span className="text-white leading-[2px] text-sm  font-extralight">
                Presale Goal
              </span>
              <h2 className="text-[1.1em] md:text-[2em] font-bold  bg-clip-text text-transparent leading-[30px] bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                $300,000
              </h2>
            </div>
          </div>
          <div className="flex mx-8 justify-between">
            <div>
              <span className="text-white leading-[2px] text-sm  font-extralight">
                Listing Price
              </span>
              <h2 className="text-[1.1em] md:text-[2em] font-bold  bg-clip-text text-transparent leading-[30px] bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                $0.045
              </h2>
            </div>
            <div>
              <span className="text-white leading-[2px] text-sm  font-extralight">
                ROI at Listing
              </span>
              <h2 className="text-[1.1em] md:text-[2em] font-bold  bg-clip-text text-transparent leading-[30px] bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
                20%
              </h2>
            </div>
          </div>
        </div>
        {/* Adding Amout  */}
        <div className="flex my-6 items-center justify-center max-w-[70%] mx-auto ">
          <div className="flex items-center gap-x-3">
            <div className="flex min-w-[280px] w-full bg-[#2e3141]  rounded-2xl justify-between  items-center">
              <div className="min-w-[80px] px-2">
                <Image
                  src={'/img/icon/dollar.png'}
                  alt="dollar"
                  width={19}
                  height={19}
                />
              </div>
              <input
                type="number"
                className="bg-transparent max-w-[140px] block border-0 focus:outline-none text-white "
                placeholder="INPUT YOUR AMOUNT"
              />
              <Image
                src={'/img/icon/tarif.png'}
                alt="dollar"
                width={35}
                height={29}
              />
            </div>
            <h2 className="text-[1.3em]  font-bold  bg-clip-text text-transparent leading-[30px] bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
              266
            </h2>
          </div>
        </div>
        {/* Reward */}
        <div className="relative  w-full inline-flex items-center justify-center p-[1px] mb-2 mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
          <div className="relative  w-full px-5 bg-[#161a24] py-5 transition-all ease-in duration-75 text-white ">
            <div>
              <div>
                <div className="realative bg-[#2e3141] rounded-full relative h-2.5 mx-auto">
                  <div className="absolute left-2">
                    <Image
                      src="/img/icon/triangle.png"
                      width={15}
                      height={10}
                      alt="triangle"
                    />
                  </div>
                </div>
                <h5 className="text-skin-pink text-sm mt-2">$2500</h5>
              </div>
              <div className="reword my-3 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center">
                  <div className="">
                    <Image
                      alt="sdf"
                      className="max-w-[55px] block"
                      src={rewordImg}
                    />
                  </div>
                  <h2 className="text-white text-[1.5em] font-semibold ">
                    Reword
                  </h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex text-sm items-center gap-x-2">
                    <Image
                      width={12}
                      height={12}
                      alt="shell"
                      src="/img/icon/shell.png"
                    />
                    <span>
                      Lifetime Free Predictions via yPredict Analytics
                    </span>
                  </li>
                  <li className="flex text-sm items-center gap-x-2">
                    <Image
                      width={12}
                      height={12}
                      alt="shell"
                      src="/img/icon/shell.png"
                    />
                    <span>3% bonus YPREDs (806.4 YPRED)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Button Group */}
        <div>
          <ul className="grid py-5 w-full lg:w-[60%] mx-auto gap-2 grid-cols-2">
            <li>
              <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
                <span className="relative w-full px-1 lg:px-5 bg-[#161a24] py-2 transition-all ease-in duration-75 text-white ">
                  <div className="flex w-full items-center gap-2">
                    <Image
                      src="/img/icon/behance.png"
                      alt="behance"
                      width={15}
                      height={15}
                    />
                    <span> Buy with BNB</span>
                  </div>
                </span>
              </button>
            </li>
            <li>
              <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
                <span className="relative w-full px-1 lg:px-5 bg-[#161a24] py-2 transition-all ease-in duration-75 text-white ">
                  <div className="flex w-full items-center gap-2">
                    <Image
                      src="/img/icon/behance.png"
                      alt="behance"
                      width={15}
                      height={15}
                    />
                    <span> Buy with ETH</span>
                  </div>
                </span>
              </button>
            </li>
            <li>
              <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
                <span className="relative w-full px-1 lg:px-5 bg-[#161a24] py-2 transition-all ease-in duration-75 text-white ">
                  <div className="flex w-full items-center gap-2">
                    <Image
                      src="/img/icon/behance.png"
                      alt="behance"
                      width={15}
                      height={15}
                    />
                    <span> Buy with USD</span>
                  </div>
                </span>
              </button>
            </li>
            <li>
              <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
                <span className="relative w-full px-1 lg:px-5 bg-[#161a24] py-2 transition-all ease-in duration-75 text-white ">
                  <div className="flex w-full items-center gap-2">
                    <Image
                      src="/img/icon/behance.png"
                      alt="behance"
                      width={15}
                      height={15}
                    />
                    <span> Buy with Card</span>
                  </div>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presale;
