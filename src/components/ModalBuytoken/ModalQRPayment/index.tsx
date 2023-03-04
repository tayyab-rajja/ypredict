import { BigNumber, ethers } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import {
  USDT_PRICE_FOR_TOKEN,
  USDT_CONTRACT_DECIMALS,
} from "../../../constants";
import Waiting from "./Waiting";
import Success from "./Success";
import Failed from "./Failed";
import SendEmail from "./SendEmail";
import ChooseNetworkUSDT from "./ChooseNetworkUSDT";

type imgTracker = [boolean, number];

interface ModalQRPaymentProps {
  onClose: () => void;
  chainType: string;
  amountUSD: number;
  onChangeAmountUSD: (value: string) => void;
  onChangePurchasedToken: () => void;
}

const ModalQRPayment: React.FC<ModalQRPaymentProps> = ({
  onClose,
  chainType,
  amountUSD,
  onChangeAmountUSD,
  onChangePurchasedToken,
}) => {
  const [qrAddress, setQRAddress] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [email, setEmail] = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const [bnbPrice, setBnbPrice] = useState();
  const [maticPrice, setMaticPrice] = useState();
  const [ethPrice, setEthPrice] = useState();
  const [network, setNetwork] = useState("ERC20");
  const [isImgTrackerShown, setIsImgTrackerShown] = React.useState<imgTracker>([
    false,
    0,
  ]);

  const amountByChain = useMemo(() => {
    if (chainType === "bsc" && bnbPrice) {
      return Number(Math.ceil((amountUSD / bnbPrice) * 1000) / 1000);
    } else if (chainType === "polygon" && maticPrice) {
      return Number(Math.ceil((amountUSD / maticPrice) * 1000) / 1000);
    } else if (chainType === "eth" && ethPrice) {
      return Number(Math.ceil((amountUSD / ethPrice) * 1000) / 1000);
    }
    return 0;
  }, [bnbPrice, maticPrice, chainType, amountUSD, ethPrice]);

  const fetchPrice = () => {
    if (chainType === "bsc") {
      fetch(`https://rpc.ankr.com/multichain`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "ankr_getTokenPrice",
          params: {
            blockchain: "bsc",
          },
          id: 1,
        }),
      })
        .then((res) => res.json())
        .then(
          ({ result }) => {
            setBnbPrice(result?.usdPrice);
          },
          (error) => {
            console.log(error);
          }
        );
    } else if (chainType === "polygon") {
      fetch(`https://rpc.ankr.com/multichain`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "ankr_getTokenPrice",
          params: {
            blockchain: "polygon",
          },
          id: 1,
        }),
      })
        .then((res) => res.json())
        .then(
          ({ result }) => {
            setMaticPrice(result?.usdPrice);
          },
          (error) => {
            console.log(error);
          }
        );
    } else if (chainType === "eth") {
      fetch(`https://rpc.ankr.com/multichain`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "ankr_getTokenPrice",
          params: {
            blockchain: "eth",
          },
          id: 1,
        }),
      })
        .then((res) => res.json())
        .then(
          ({ result }) => {
            setEthPrice(result?.usdPrice);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const handleClose = () => {
    onClose();
    setQRAddress("");
    setTransactionStatus("");
    setFromAddress("");
    setEmail("");
    setEmailDraft("");
    setBnbPrice(undefined);
    setMaticPrice(undefined);
    setEthPrice(undefined);
    setNetwork("ERC20");
    setIsImgTrackerShown([false, 0]);
  };

  const YPREDAmount = useMemo(() => {
    return ethers.utils
      .parseUnits(amountUSD.toString(), USDT_CONTRACT_DECIMALS)
      .div(BigNumber.from(USDT_PRICE_FOR_TOKEN))
      .toString();
  }, [amountUSD]);

  const onSubmitEmail = () => {
    // fetch(
    //   `https://emailoctopus.com/api/1.6/lists/50f76b42-a520-11ed-8f9d-6501eb678ecd/contacts`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       api_key: "48147edb-9e58-453d-89b4-0f2d9060f7ec",
    //       email_address: emailDraft,
    //       fields: {
    //         FirstName: "",
    //         LastName: "",
    //         Birthday: "",
    //       },
    //       tags: ["cart"],
    //       status: "SUBSCRIBED",
    //     }),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then(
    //     () => {
    //       setEmail(emailDraft);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    setEmail(emailDraft);
  };

  useEffect(() => {
    if (chainType === "usdt") {
      setNetwork("");
    }
  }, [chainType]);

  useEffect(() => {
    fetchPrice();
  }, [chainType]);

  useEffect(() => {
    if (chainType) {
      fetch(`https://rensketech.com/api/scrach_cards/qr/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chainType: "ERC20",
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setQRAddress(result?.address ?? "");
          },
          (error) => {
            console.log(error);
          }
        );
    }
    return () => {
      setQRAddress("");
    };
  }, [chainType]);

  useEffect(() => {
    if (
      amountUSD &&
      YPREDAmount &&
      chainType &&
      qrAddress &&
      email &&
      network
    ) {
      let chain = "polygon";
      let currency = "Matic";
      switch (chainType) {
        case "polygon":
          chain = "polygon";
          currency = "MATIC";
          break;
        case "bsc":
          chain = "bsc";
          currency = "BNB";
          break;
        case "usdt":
          chain = network;
          currency = "USDT";
          break;
        case "eth":
          chain = "eth";
          currency = "ETH";
          break;
      }
      const timerInterval = setInterval(() => {
        fetch(`https://rensketech.com/api/scrach_cards/check/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chain,
            walletAdress: qrAddress,
            currency,
            value:
              chainType === "usdt" ? Number(amountUSD) : Number(amountByChain),
            ypred: Number(YPREDAmount),
            email,
          }),
        })
          .then((res) => res.json())
          .then(
            (result) => {
              if (result?.success) {
                setTransactionStatus("success");
                onChangePurchasedToken?.();
                setFromAddress(result.from);
                setIsImgTrackerShown([true, Number(amountUSD)]);
                clearInterval(timerInterval);
              }
            },
            (error) => {
              console.log(error);
            }
          );
      }, 10000);
      return () => clearInterval(timerInterval);
    }
  }, [amountByChain, chainType, qrAddress, email, amountUSD, network]);

  return (
    <>
      {Boolean(chainType) && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0">
            <div
              className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-25"
              onClick={handleClose}
            ></div>
            <div className="relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full">
              <div className="absolute z-10 right-2 md:px-1 top-1 items-stretch px-0 py-1 text-black-500 font-bold uppercase outline-1 text-lg">
                <button
                  className="float-right align-right px-1 md:px-3 text-2xl"
                  type="button"
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
              <div
                className={`${transactionStatus === "failed" ? "md:w-[70vw]" : "md:w-[60vw]"
                  } relative border-0 rounded-2xl shadow-lg flex flex-col w-[90vw] justify-between bg-white outline-none focus:outline-none overflow-y-auto text-sm lg-text-lg`}
              >
                {!Boolean(email) &&
                  transactionStatus !== "success" &&
                  transactionStatus !== "failed" && (
                    <SendEmail
                      amountUSD={amountUSD}
                      email={emailDraft}
                      onChangeEmail={setEmailDraft}
                      onNext={onSubmitEmail}
                      network={network}
                      chainType={chainType}
                      amountByChain={amountByChain}
                      YPREDAmount={YPREDAmount}
                      onChangeAmountUSD={onChangeAmountUSD}
                    />
                  )}
                {!Boolean(network) &&
                  transactionStatus !== "success" &&
                  transactionStatus !== "failed" &&
                  Boolean(email) &&
                  chainType === "usdt" && (
                    <ChooseNetworkUSDT
                      chainType={chainType}
                      amountByChain={amountByChain}
                      amountUSD={amountUSD}
                      onNext={setNetwork}
                      YPREDAmount={YPREDAmount}
                    />
                  )}
                {transactionStatus !== "success" &&
                  Boolean(network) &&
                  transactionStatus !== "failed" &&
                  Boolean(email) && (
                    <Waiting
                      amountUSD={amountUSD}
                      chainType={chainType}
                      YPREDAmount={YPREDAmount}
                      qrAddress={qrAddress}
                      amountByChain={amountByChain}
                      onChangeTimeout={() => {
                        setTransactionStatus("failed");
                      }}
                      onChangeAmountUSD={onChangeAmountUSD}
                      network={network}
                    />
                  )}
                {transactionStatus === "success" && Boolean(network) && (
                  <Success
                    YPREDAmount={YPREDAmount}
                    qrAddress={qrAddress}
                    fromAddress={fromAddress}
                    onClose={handleClose}
                    emailStep1={email}
                    isImgTrackerShown={isImgTrackerShown}
                  />
                )}
                {transactionStatus === "failed" && Boolean(network) && (
                  <Failed
                    onClose={handleClose}
                    onTryAgain={() => {
                      setTransactionStatus("");
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalQRPayment;

export const truncateHash = (
  hashString,
  startLength = 4,
  endLength = 4,
  fallback = "..."
) => {
  if (!hashString?.length) return fallback;
  return `${hashString.substring(0, startLength)}...${hashString.substring(
    hashString.length - endLength
  )}`;
};
