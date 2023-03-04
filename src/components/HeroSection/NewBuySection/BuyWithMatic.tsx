import React, { useEffect, useRef, useState } from "react";
interface BuyWithMatic {
  disabled?: boolean;
  maticForButton: string;
  handleBuyToken: () => void;
  maticButtonRef: React.MutableRefObject<HTMLButtonElement>;
}

const BuyWithMatic: React.FC<BuyWithMatic> = ({
  disabled,
  maticForButton,
  handleBuyToken,
  maticButtonRef,
}) => {
  return (
    <>
      <button
        ref={maticButtonRef}

        onClick={() => {
        handleBuyToken();
        // @ts-ignore
        gtag('event', 'conversion', {
        'send_to': 'AW-962660998/rkqtCIu_mY4YEIaVhMsD',
        'value': 1.0,
        'currency': 'INR'
  });
}}
        className="btn-grad-1 m-auto w-60 text-center mt-2 disabled:opacity-60"
        disabled={disabled}
      >
        <div className="flex justify-center">
          <svg
            viewBox="0 0 38.4 33.5"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
          >
            <g>
              <path
                fill="#fff"
                d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
                                c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
                                c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                                c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
                                L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                                c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"
              />
            </g>
          </svg>

          <span className="pl-2">
            Buy with{" "}
            {maticForButton !== "" && maticForButton !== "0"
              ? Number(maticForButton).toFixed(2)
              : ""}{" "}
            Matic
          </span>
        </div>
      </button>
      {/* <ModalNew
        ModalShowError={isShowErrorModal}
        setModalShowError={setShowErrorModal}
        myUsdt={myUsdt}
        myMatic={myMatic}
        buyType="matic"
      /> */}
      {/* <ModalBuytoken
        stepsStatus={stepsStatus}
        setStepsStatus={setStepsStatus}
        showBuyTokenModal={showBuyTokenModal}
        setShowBuyTokenModal={setShowBuyTokenModal}
        buyType="matic"
      /> */}
    </>
  );
};

export default BuyWithMatic;
