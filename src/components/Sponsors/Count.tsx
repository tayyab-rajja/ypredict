import React from 'react';

const Count = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#7940dd] to-[#c33ba6]">
          100M
        </h1>
        <span className="text-base pt-3 text-white font-normal">Supply</span>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#7940dd] to-[#c33ba6]">
          200+
        </h1>
        <span className="text-base pt-3  text-white fontnormalt">Data 2</span>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#7940dd] to-[#c33ba6]">
          1200+
        </h1>
        <span className="text-base pt-3 text-white font-normal">Data 2</span>
      </div>
    </div>
  );
};

export default Count;
