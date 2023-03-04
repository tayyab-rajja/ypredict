import React, { useEffect, useRef, useState } from "react";

const CountDown = ({ chainType, onChangeTimeout }) => {
  const countDownRef = useRef(900);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  useEffect(() => {
    if (chainType) {
      const timerInterval = setInterval(() => {
        if (countDownRef.current > 0) {
          countDownRef.current = countDownRef.current - 1;
          setM(() => Math.floor(countDownRef.current / 60));
          setS(() => Math.floor(countDownRef.current % 60));
        } else {
          onChangeTimeout();
          clearInterval(timerInterval);
        }
      }, 1000);
      return () => clearInterval(timerInterval);
    } else {
      countDownRef.current = 900;
    }
  }, [chainType]);

  return (
    <div className="absolute right-0 flex items-center space-x-1 text-white text-xs">
      <div className="bg-[#e9398d] px-1 py-1 md:py-2 rounded-md min-w-[16px] md:min-w-[24px] text-center">
        {m >= 10 ? m.toString().slice(0, 1) : 0}
      </div>
      <div className="bg-[#e9398d] px-1 py-1 md:py-2 rounded-md min-w-[16px] md:min-w-[24px] text-center">
        {m >= 10 ? m.toString().slice(1) : m.toString().slice(0, 1)}
      </div>
      <div className="text-black">:</div>
      <div className="bg-[#e9398d] px-1 py-1 md:py-2 rounded-md min-w-[16px] md:min-w-[24px] text-center">
        {s >= 10 ? s.toString().slice(0, 1) : 0}
      </div>
      <div className="bg-[#e9398d] px-1 py-1 md:py-2 rounded-md min-w-[16px] md:min-w-[24px] text-center">
        {s >= 10 ? s.toString().slice(1) : s.toString().slice(0, 1)}
      </div>
    </div>
  );
};

export default CountDown;
