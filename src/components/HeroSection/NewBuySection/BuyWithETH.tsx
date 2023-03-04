import React, { useRef } from "react";

interface BuyWithETH {
  disabled?: boolean;
  handleBuyWithETH: () => void;
}

const BuyWithETH: React.FC<BuyWithETH> = ({ disabled, handleBuyWithETH }) => {
  const cardButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={cardButtonRef}
      
      onClick={() => {
        handleBuyWithETH();
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
          viewBox="0 0 48 48"
          className="h-4 w-4"
        >
          <path fill="#fff" d="M11,24L25,2l14,22l-14,8L11,24z" />
          <path fill="#fff" d="M25,2l14,22l-14,8V2z" />
          <path fill="#fff" d="M11,27l14,8l14-8L25,46L11,27z" />
          <path
            fill="#fff"
            d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"
          />
          <path fill="#fff" d="M25,18l14,6l-14,8V18z" />
        </svg>
        <span className="pl-2">Buy with ETH</span>
      </div>
    </button>
  );
};

export default BuyWithETH;
