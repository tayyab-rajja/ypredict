import React from "react";

const Failed = ({ onClose, onTryAgain }) => {
  return (
    <div className="py-4 md:py-8 pt-0 px-6 md:px-10 flex flex-row justify-center flex-wrap md:flex-nowrap space-y-0 md:space-y-2 space-x-1 md:space-x-6 items-center">
      <div
        className="w-[100%] h-[6px] bg-black self-center rounded-xl mb-2"
        style={{
          background: "radial-gradient(circle at top left, #f03985, #5144f8)",
        }}
      />
      <div className="flex flex-row">
        <img
          className="w-32 h-44 lg:h-full lg:w-64"
          src="img/icon/FAILED_ICON.png"
        />
        <div className="flex flex-col">
          <p
            className="font-bold text-sm lg:text-xl mt-4 mb-2"
            style={{
              background:
                "transparent linear-gradient(90deg, #ff387a 0%, #e6398c 17%, #a63eba 52%, #4845ff 100%) 0% 0% no-repeat padding-box",
              //@ts-ignore
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Transaction timeout, try again!
          </p>
          <div
            className="px-3 py-1 bg-[#FEF0F7] text-[#f17eb7] rounded-2xl tracking-wide xs:mb-2 lg:mb-14"
            style={{ border: "1px solid #F199C5" }}
          >
            Your transaction has failed due to timeout
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <button
              onClick={onTryAgain}
              className="flex mt-1 flex-row justify-center items-center btn-grad-1 mb-1 lg:mb-4 self-center w-full max-w-[200px] text-center"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16s"
              >
                <path
                  fill="#fff"
                  d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z"
                />
                <path
                  fill="#fff"
                  d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z"
                />
              </svg>
              <span className="pl-2 font-normal tracking-widest">
                Try Again
              </span>
            </button>
            <button
              onClick={onClose}
              className="flex mt-1 flex-row justify-center items-center btn-grad-1 mb-1 lg:mb-4 self-center w-full max-w-[200px] text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512.021 512.021"
              >
                <g>
                  <path
                    fill="#fff"
                    d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
                  />
                </g>
              </svg>
              <span className="pl-2 font-normal tracking-widest">Close</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 p-3">
        <div className="flex flex-row space-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <path
              fill="#EC3583"
              d="M12.836.028A12,12,0,0,0,.029,12.855C.47,19.208,6.082,24,13.083,24H19a5.006,5.006,0,0,0,5-5V12.34A12.209,12.209,0,0,0,12.836.028ZM12,5a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,12,5Zm2,13a1,1,0,0,1-2,0V12H11a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2Z"
            />
          </svg>
          <p className="text-[#EC3583] font-bold text-[14px] tracking-wider">
            Support
          </p>
        </div>
        <div className="text-[12px] text-[#B0B0B0]">
          <p>Please contract team via telegram or official email,</p>
          <p>
            Please do not respond to any personal messages from scammers
            pretending to be group admin or official support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Failed;
