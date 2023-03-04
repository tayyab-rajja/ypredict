/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// Private Sale belongs to the HeroSection to be connected.

// React-Standards

import React from "react";

// Wallet Management

import { useState, useEffect } from "react";

// SALE ENDING LIMIT TIME

const LIMIT_TIME_REMAINING = "2023-01-22T00:00:00Z";

interface DateTime {
  day: number;
  hour: number;
  min: number;
  sec: number;
}

const getFormatDateTime = (seconds: number): DateTime => {
  const d = Math.floor(Number(seconds) / (3600 * 24));
  const h = Math.floor((Number(seconds) % (3600 * 24)) / 3600);
  const m = Math.floor((Number(seconds) % 3600) / 60);
  const s = Math.floor(Number(seconds) % 60);

  return { day: d, hour: h, min: m, sec: s };
};

const CountDown = (props: { timeRemaining }) => {
  const timeSpanRef = React.useRef<HTMLSpanElement>(null);
  const [time, setTime] = useState<DateTime>();
  useEffect(() => {
    let counter = Number(props.timeRemaining);
    const timer = setInterval(() => {
      counter--;
      setTime(getFormatDateTime(counter));
    }, 1000);
    return () => clearInterval(timer);
  }, [props.timeRemaining]);

  return time?.day >= 0 &&
    time?.hour >= 0 &&
    time?.min >= 0 &&
    time?.sec >= 0 ? (
    <div className="flex flex-row gap-[10px]">
      {time?.day !== 0 && (
        <div className="flex flex-col justify-center items-center rounded-md w-[60px] px-2 py-2">
          <span className="text-[20px]">{time?.day}</span>
          <span className="text-[10px]">Day{time?.day > 1 ? "s" : ""}</span>
        </div>
      )}
      <div className="flex flex-col justify-center items-center rounded-md w-[60px] px-2 py-2">
        <span className="text-[20px]">{time?.hour}</span>
        <span className="text-[10px]">{time?.hour > 1 ? "Hours" : "Hour"}</span>
      </div>
      <div className="flex flex-col justify-center items-center rounded-md w-[60px] px-2 py-2">
        <span className="text-[20px]">{time?.min}</span>
        <span className="text-[10px]">
          {time?.min > 1 ? "Minutes" : "Minute"}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center rounded-md w-[60px] px-2 py-2">
        <span className="text-[20px]">{time?.sec}</span>
        <span className="text-[10px]">
          {time?.sec > 1 ? "Seconds" : "Second"}
        </span>
      </div>
    </div>
  ) : (
    <span
      ref={timeSpanRef}
      className="font-semibold text-3xl sm:text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500"
    >
      {time?.day > 0 &&
        time?.hour > 0 &&
        time?.min > 0 &&
        time?.sec > 0 &&
        "Finished"}
    </span>
  );
};

export default function SeedSale() {
  const ISNotConnected = () => {
    return (
      <>
        <div className="absolute w-full h-full bg-white opacity-80 flex justify-center items-center"></div>
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <div className="flex flex-col space-y-4 items-center justify-center ">
            <div className="text-grad1 " style={{ fontSize: " 100px" }}>
              <i className="fi fi-rr-lock"></i>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="" id="public" role="tabpanel" aria-labelledby="deals-tab">
      <div className="wrapper ">
        {/* Lock */}
        <div className="relative">
          <ISNotConnected />
          <div className="row" style={{ marginTop: " 20px" }}>
            <div className=" col-6 text-center">
              <p className="text-dark2 text-box-sub-title">
                Private Sale Price
              </p>
              <p className="text-box-content">Equity Sale</p>
            </div>
            <div className=" col-6 text-center">
              <p className="text-dark2 text-box-sub-title ">
                Private Sale Goal
              </p>
              <p className="text-box-content">$1,000,000</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: " 20px" }}>
            <div className=" col-6 text-center">
              <p className="text-dark2 text-box-sub-title"> Listing Price</p>
              <p className="text-box-content">Equity Sale</p>
            </div>
            <div className=" col-6 text-center">
              <p className="text-dark2 text-box-sub-title"> ROI at Listing</p>
              <p className="text-box-content">Equity Sale</p>
            </div>
          </div>
          <div className="w-full flex flex-row space-x-4 justify-center mt-4 mb-4">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-7 w-7 "
              >
                <polygon
                  fill="#4db6ac"
                  points="24,44 2,22.5 10,5 38,5 46,22.5"
                />
                <path
                  fill="#fff"
                  d="M38,22c0-1.436-4.711-2.635-11-2.929V16h8v-6H13v6h8v3.071C14.711,19.365,10,20.564,10,22	s4.711,2.635,11,2.929V36h6V24.929C33.289,24.635,38,23.436,38,22z M24,24c-6.627,0-12-1.007-12-2.25c0-1.048,3.827-1.926,9-2.176	v3.346c0.96,0.06,1.96,0.08,3,0.08s2.04-0.02,3-0.08v-3.346c5.173,0.25,9,1.128,9,2.176C36,22.993,30.627,24,24,24z"
                />
              </svg>

              <div className="flex flex-col font-normal">
                <input
                  type="number"
                  className="hidden sm:block border-b-[1px] border-black outline-0 w-48 h-10 text-center font-semibold placeholder-gray-500"
                  placeholder="please input amount of USDT"
                />
                <input
                  type="number"
                  className="block sm:hidden border-b-[1px] border-black outline-0 w-28 h-10 text-center font-semibold placeholder-gray-500"
                  placeholder="please input amount of USDT"
                />
              </div>
            </div>

            <div className="flex flex-row space-x-2 items-center fw-semibold">
              =
              <img
                src="/ypred-coin.png"
                alt=""
                style={{ width: " 30px", marginLeft: " 10px" }}
              />
              <span id="ypred-amount">0</span>
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-2">
            <button className="btn-grad-1 flex ">
              <i className="fi fi-sr-wallet"></i> Buy with USDT
            </button>

            <button className="btn-grad-1 ">
              <i className="fi fi-sr-interrogation"></i> Need Help
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full flex justify-center items-center mt-4 py-4"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        {/* {isStarted === null ? null : isStarted === true ? (
          timeRemaining ? (
            <div className="w-full flex flex-col space-y-3 justify-center items-center">
              <h5 className="text-center text-grad1">Sale starting in</h5>
              <CountDown timeRemaining={timeRemaining} />
            </div>
          ) : null
        ) : timeRemaining ? (
          <div className="w-full flex flex-col space-y-3 justify-center items-center">
            <h5 className="text-center text-grad1">Sale starting in</h5>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
