/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// Modal Dialog when USDT or Matic is below zero

import React from "react";
import {
  LiFiWidgetBSCPOLNext,
  LiFiWidgetETHPOLNext,
  LiFiWidgetMaticNext,
  LiFiWidgetUSDTMATICNext,
  LiFiWidgetUSDTNext,
} from "../LiFi";
import transakSDK from "@transak/transak-sdk";

export default function ModalBSCETH(props: {
  ModalShowError;
  setModalShowError;
  myUsdt;
  myMatic;
  buyType;
  handleBuyToken;
  maticVsUSDT;
  disabled;
}) {
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
    <>
      {props.ModalShowError ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0">
            <div
              className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-25"
              onClick={() => {
                props.setModalShowError(false);
              }}
            ></div>
            <div className="relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full">
              <div className="absolute z-10 right-0 md:right-1 md:px-1 top-1 items-stretch px-0 py-1 text-black-500 font-bold uppercase outline-1 text-lg">
                <button
                  className="float-right align-right px-1 md:px-3 text-2xl"
                  type="button"
                  onClick={() => {
                    props.setModalShowError(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className="relative border-0 rounded-lg shadow-lg flex flex-col w-full justify-between h-[90vh] bg-white outline-none focus:outline-none overflow-y-auto  md:w-[80vw] lg:w-full text-sm lg-text-lg">
                <div className="font-lg mt-5 text-3xl mb-2 text-center px-4 error-not-enough-balance">
                  {props.buyType === "bsc"
                    ? "Swap from BSC to MATIC"
                    : props.buyType === "eth"
                    ? "Swap from ETH to MATIC"
                    : "Swap USDT to MATIC"}
                </div>
                {/* <div className="items-start justify-between px-5 py-3 error-message-wrapper">
                  <h1 className="font-medium text-lg mb-3">
                    Follow the steps to fund your Polygon chain wallet with
                    either just Matic or USDT (for buying) + Matic (for paying
                    gas fees)
                  </h1>
                  <p>
                    {" "}
                    If you have USDT on Polygon chain you can directly go to
                    step 3 for buying some MATIC (for paying gas fee). If you
                    have USDT on any chain other than Polygon go to step 2 if
                    you don't have USDT at all, start with step 1
                  </p>
                </div>

                <div className="px-5 py-3 step-wrapper">
                  <div className="p-2 border-2 border-black rounded">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="flex flex-col">
                          <p>Step 1:</p>
                          <p>
                            Swap any of your existing coins to USDT (the amount
                            that you would like to invest, minimum $101)
                          </p>
                          <p>
                            or use "Buy with Card" payment option to purchase
                            Matic coin straight in your wallet using your local
                            payment method.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="flex flex-col text-blue-500 font-bold text-center mt-4">
                          <a
                            href="https://pancakeswap.finance/"
                            target="_blank"
                          >
                            pancakeswap.finance
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 step-wrapper">
                  <div className="p-2 border-2 border-black rounded">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="flex flex-col">
                          <p>Step 2:</p>
                          <p>Bridge USDT to Polygon Chain</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="flex flex-col text-blue-500 font-bold text-center mt-2">
                          <a
                            href="https://cbridge.celer.network/"
                            target="_blank"
                          >
                            cbridge.celer.network
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 step-wrapper">
                  <div className="p-2 border-2 border-black rounded">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="flex flex-col">
                          <p>Step 3:</p>
                          <p>
                            Swap at least 0.10 USDT to Matic coin for paying gas
                            fees
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="flex flex-col text-blue-500 font-bold text-center mt-4">
                          <a href="https://app.uniswap.org/" target="_blank">
                            app.uniswap.org
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {props.buyType === "bsc" ? (
                  <LiFiWidgetBSCPOLNext />
                ) : props.buyType === "eth" ? (
                  <LiFiWidgetETHPOLNext />
                ) : (
                  <LiFiWidgetUSDTMATICNext />
                )}
                {props.disabled ? (
                  <p className="px-5 text-sm text-gray-800">
                    You don't have enough MATIC
                  </p>
                ) : (
                  <p className="px-5 text-sm text-gray-800">
                    You already have enough MATIC!
                  </p>
                )}
                <div className="lg:flex px-5 py-2 mt-2 font-lg text-lg gap-x-3 items-center justify-between mb-4">
                  <div className="text-left mt-1">
                    <p>{Number(props.myMatic).toFixed(2)} Matic</p>
                    {props.maticVsUSDT && (
                      <p className="text-xs text-gray-900">
                        ${(props.maticVsUSDT * props.myMatic).toFixed(2)}
                      </p>
                    )}
                  </div>
                  <div className="lg:mt-0 text-center">
                    <button
                      disabled={props.disabled}
                      onClick={props.handleBuyToken}
                      className="btn-grad-1 m-auto w-40 text-center mt-2 disabled:opacity-60"
                    >
                      <span>
                        <i className="fi fi-sr-wallet"></i>
                      </span>
                      <span className="pl-2">Buy with Matic</span>
                    </button>
                  </div>

                  {/* <div className="mb-3 border-2 border-blue-500 lg:mt-0">
                    <button
                      className={`w-full h-12 center text-${color}-500 font-bold uppercase outline-1 text-lg px-3`}
                      type="button"
                      onClick={() => {
                        props.setModalShowError(false);
                      }}
                    >
                      <div className="text-center">Proceed to buy</div>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
