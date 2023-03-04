import React, { useRef } from "react";

interface BuyWithBSC {
  disabled?: boolean;
  handleBuyWithBSC: () => void;
}

const BuyWithBSC: React.FC<BuyWithBSC> = ({ disabled, handleBuyWithBSC }) => {
  const cardButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={cardButtonRef}

      onClick={() => {
        handleBuyWithBSC();
        // @ts-ignore
        gtag('event', 'conversion', {
        'send_to': 'AW-962660998/rkqtCIu_mY4YEIaVhMsD',
        'value': 1.0,
        'currency': 'INR'
  });
}}

      className="btn-grad-1 m-auto w-full max-w-60 text-center mt-2 disabled:opacity-60"
      disabled={disabled}
    >
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 2000 2000"
        >
          <g fill="#fff">
            <path d="M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z" />
            <path d="M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11" />
          </g>
        </svg>
        <span className="pl-2">Buy with BNB</span>
      </div>
    </button>
  );
};

export default BuyWithBSC;
