/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// HeroSection starts from the index.tsx as the main component of this website.

// React-Standards

import React from "react";
import { useEffect } from "react";

// Wallet Management
// import BuySection from "./BuySection";
import NewBuySection from "./NewBuySection";

// SALE ENDING LIMIT TIME

const LIMIT_TIME_REMAINING = "2023-01-22T00:00:00Z";

interface PreSaleProps {
  walletAddress: string;
  setWalletAddress: (value) => void;
  isHiddenRewardInfo?: boolean;
  onChangePurchasedToken?: (value: string) => void;
  isStopBuy?: boolean;
}

export default function PreSale({
  walletAddress,
  setWalletAddress,
  isHiddenRewardInfo,
  onChangePurchasedToken,
  isStopBuy,
}: PreSaleProps) {
  const getBlockTime = async () => {
    var cd_total =
      (Number(new Date(LIMIT_TIME_REMAINING)) - Number(new Date())) / 1000;
    if (cd_total < 0) {
      cd_total = 1;
    }
  };

  useEffect(() => {
    getBlockTime();
  }, []);

  return (
    <div className="" id="presale" role="tabpanel" aria-labelledby="deals-tab">
      <NewBuySection
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        isHiddenRewardInfo={isHiddenRewardInfo}
        onChangePurchasedToken={onChangePurchasedToken}
        isStopBuy={isStopBuy}
      />
    </div>
  );
}
