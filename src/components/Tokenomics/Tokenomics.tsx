import React from 'react';

const Tokenomics = () => {
  return (
    <section className="main-container">
      <header className="md:flex justify-between items-center">
        <h2 className="text-[1em] md:text-[1.8em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
          Tokenomics
        </h2>
        <ul className="flex items-center gap-x-3">
          <li>
            <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
              <span className="relative w-full px-1 lg:px-5 bg-[#0f131e] py-2 transition-all ease-in duration-75 text-white ">
                <div className="flex w-full items-center gap-2">
                  Sale Details
                </div>
              </span>
            </button>
          </li>
          <li>
            <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
              <span className="relative w-full px-1 lg:px-5 bg-[#0f131e] py-2 transition-all ease-in duration-75 text-white ">
                <div className="flex w-full items-center gap-2">
                  Allocation and Vesting
                </div>
              </span>
            </button>
          </li>
          <li>
            <button className="relative  w-auto inline-flex items-center justify-center p-[1px] mb-2 lg:mr-3 overflow-hidden text-xs font-medium  rounded-xl group bg-gradient-to-br from-[#6042ef] to-skin-pink  ">
              <span className="relative w-full  px-1 lg:px-5 bg-[#0f131e] py-2 transition-all ease-in duration-75 text-white ">
                <div className="flex w-full items-center gap-2">Road Map</div>
              </span>
            </button>
          </li>
        </ul>
      </header>
      {/* details  */}
      <div className="div w-full bg-[#161a25] rounded-xl min-h-[190px]"></div>
    </section>
  );
};

export default Tokenomics;
