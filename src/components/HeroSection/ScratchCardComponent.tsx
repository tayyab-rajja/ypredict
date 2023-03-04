import React, { useEffect, useState } from "react";
// import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";
import { Icon } from "@iconify/react";

interface RewardInfo {
  Reward: number;
  NFT_reward: boolean;
}

interface ScratchCardComponentProps {
  rewardInfo: RewardInfo;
  setHiddenScratch: (newValue) => void;
  walletAddress: string;
  isFetching: boolean;
}

const ScratchCardComponent: React.FC<ScratchCardComponentProps> = ({
  rewardInfo,
  setHiddenScratch,
  walletAddress,
  isFetching,
}) => {
  // const [isScratchFinish, setScratchFinish] = useState(false);
  // const [scratchType, setScratchType] = useState<string>();
  // const [nextScratch, setNextScratch] = useState(false);
  // const [reset, setReset] = useState(false);
  // useEffect(() => {
  //   if (walletAddress) {
  //     setScratchType("");
  //     setScratchFinish(false);
  //   }
  // }, [walletAddress]);
  // useEffect(() => {
  //   if (!scratchType) {
  //     if (rewardInfo?.Reward > 0) {
  //       setScratchType("token");
  //     } else if (rewardInfo?.NFT_reward) {
  //       setScratchType("nft");
  //     }
  //   }
  // }, [rewardInfo?.Reward, rewardInfo?.NFT_reward]);
  // useEffect(() => {
  //   try {
  //     const scContainer = document.getElementById("js--sc--container");
  //     if (typeof window !== "undefined" || reset) {
  //       const { ScratchCard, SCRATCH_TYPE } = require("scratchcard-js");
  //       const sc = new ScratchCard("#js--sc--container", {
  //         scratchType: SCRATCH_TYPE.CIRCLE,
  //         containerWidth: scContainer.offsetWidth,
  //         containerHeight: 78,
  //         imageForwardSrc: walletAddress
  //           ? "./img/unlocked_card.jpg"
  //           : "./img/locked_card.jpg",
  //         clearZoneRadius: 15,
  //         nPoints: 0,
  //         pointSize: 0,
  //         callback: function () {
  //           setScratchFinish(true);
  //         },
  //       });
  //       // Init;
  //       sc.init()
  //         .then(() => {
  //           setReset(false);
  //           sc.canvas.addEventListener("scratch.move", () => {
  //             if (!walletAddress) {
  //               const connectWallet = document.getElementById("connect-wallet");
  //               connectWallet.click();
  //               setReset(true);
  //             }
  //           });
  //         })
  //         .catch((error) => {
  //           // image not loaded
  //           alert(error.message);
  //         });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [isFetching, nextScratch, reset]);
  // useEffect(() => {
  //   if (isScratchFinish && scratchType) {
  //     let timeleft = 5;
  //     const downloadTimer = setInterval(function () {
  //       if (timeleft <= 0) {
  //         if (scratchType === "token" && rewardInfo?.NFT_reward) {
  //           setNextScratch(true);
  //           setScratchType("nft");
  //         } else {
  //           setHiddenScratch(true);
  //           setNextScratch(false);
  //         }
  //         setScratchFinish(false);
  //         clearInterval(downloadTimer);
  //       }
  //       document.getElementById("count").innerText = timeleft.toString();
  //       timeleft -= 1;
  //     }, 1000);
  //     return () => {
  //       clearInterval(downloadTimer);
  //       if (scratchType === "token" && rewardInfo?.NFT_reward) {
  //         setNextScratch(true);
  //       } else {
  //         setNextScratch(false);
  //       }
  //     };
  //   } else {
  //   }
  // }, [isScratchFinish]);
  // return (
  //   <div className="w-[100%] h-[100%]">
  //     {/* <div className="sc__wrapper"> */}
  //     {/* {!isScratchFinish && !isFetching && (
  //           <h3 className="scratch-card">A new scratch card</h3>
  //         )} */}
  //     {walletAddress ? (
  //       <>
  //         {isScratchFinish && (
  //           <div id="count" className="scratch-card-countdown"></div>
  //         )}
  //         <div id="js--sc--container" className="h-[100%] sc__container">
  //           <div className="d-flex flex-column align-items-center justify-content-center h-100 font-medium">
  //             {scratchType && <p>Congrats</p>}
  //             {scratchType === "token" && (
  //               <p>{`You won ${rewardInfo?.Reward?.toLocaleString(undefined, {
  //                 maximumFractionDigits: 2,
  //               })} YPREDs`}</p>
  //             )}
  //             {scratchType === "nft" && <p>{`You won an NFT`}</p>}
  //             {!scratchType &&
  //               //@ts-ignore
  //               Object.values(rewardInfo) <= 0 &&
  //               !isFetching && <p>Please Connect Wallet</p>}
  //             {isFetching && (
  //               <Icon
  //                 icon="eos-icons:three-dots-loading"
  //                 width="58"
  //                 height="44"
  //               />
  //             )}
  //           </div>
  //         </div>
  //       </>
  //     ) : (
  //       <div id="js--sc--container" className="h-[100%] sc__container">
  //         <div className="d-flex flex-column align-items-center justify-content-center h-100 font-medium">
  //           Connect Wallet
  //         </div>
  //       </div>
  //     )}
  //     {/* </div> */}
  //   </div>
  // );
  return (
    <a
      href="https://www.youtube.com/embed/kpOcwLqhJ88"
      target="_blank"
      className="w-full rounded-md"
    >
      <img src="./img/how-to.png" className="w-full rounded-md" />
    </a>
  );
};

export default ScratchCardComponent;

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
