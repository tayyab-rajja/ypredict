import React, { useRef } from "react";
import transakSDK from "@transak/transak-sdk";

interface BuyWithCard {
  disabled?: boolean;
}

const BuyWithCard: React.FC<BuyWithCard> = ({ disabled }) => {
  const cardButtonRef = useRef<HTMLButtonElement>(null);

  const handleBuyWithCard = () => {
    // router.push("https://global.transak.com/?apiKey=0df58da1-d6f6-489d-a6a2-d04f2af837a5&network=polygon&defaultCryptoCurrency=MATIC");

    let transak = new transakSDK({
      apiKey: "0df58da1-d6f6-489d-a6a2-d04f2af837a5", // Your API Key
      environment: "PRODUCTION", // STAGING/PRODUCTION
      disableWalletAddressForm: true,
      cryptoCurrencyCode: "MATIC", // Example 'ETH'
      network: "polygon",
      partnerOrderId: "gl7msw98suqe",
      sdkVersion: "",
      widgetHeight: "90%",
      redirectURL: "http://localhost:3000/",
    });

    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      console.log(data);
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      transak.close();
    });
  };

  return (
    <button
      ref={cardButtonRef}
      onClick={handleBuyWithCard}
      className="btn-grad-1 m-auto w-60 text-center mt-2 disabled:opacity-60"
      disabled={disabled}
    >
      <span>
        <i className="fi fi-sr-wallet"></i>
      </span>
      <span className="pl-2">Buy with Card</span>
    </button>
  );
};

export default BuyWithCard;
