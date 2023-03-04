/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// HeroSection starts from the index.tsx as the main component of this website.

// React-Standards

import React, { useState } from 'react';
import { useEffect } from 'react';

// Wallet management

import { BigNumber, ethers } from 'ethers';
import {
  PrivateSaleVesting_ABI,
  PrivateSaleVesting_Address,
} from '../../../config/TestNet/PrivateSaleVesting';
import {
  YPredictPrivateSale_ABI,
  YPredictPrivateSale_address,
} from '../../../config/TestNet/YPredictPrivateSale';

// Importing and linking with other pages.

import PreSale from './PreSale';
import CardHeader from './CardHeader';
import PublicSale from './PublicSale';
import PrivateSale from './PrivateSale';
import VideoSection from './VideoSection';
import ProgressHeader from './ProgressHeader';
import SeedSale from './SeedSale';
import {
  DEFAULT_DECIMALS,
  createPreSaleVestingContract,
  createUSDTContract,
  createYPredictPreSaleContract,
  getWeb3,
} from '../../../constants';
import ScratchCardComponent from './ScratchCardComponent';

const getFormatDateTime = seconds => {
  const formatDateTime = time => {
    time = Number(time);
    if (time < 1) return 'Finished!';
    const d = Math.floor(time / (3600 * 24));
    const h = Math.floor((time % (3600 * 24)) / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60);

    const dDisplay = d > 0 ? (d == 1 ? d + 'day ' : d + ' days ') : '';
    const hDisplay = h > 9 ? h + ':' : '0' + h + ':';
    const mDisplay = m > 9 ? m + ':' : '0' + m + ':';
    const sDisplay = s > 9 ? s : '0' + s;
    return dDisplay + hDisplay + mDisplay + sDisplay;
  };
  return formatDateTime(seconds);
};

const CountDown = (props: { timeRemaining }) => {
  const timeSpanRef = React.useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let counter = Number(props.timeRemaining);
    const timer = setInterval(() => {
      if (timeSpanRef.current) {
        counter--;
        timeSpanRef.current.innerHTML = getFormatDateTime(counter);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [props.timeRemaining]);
  return (
    <span
      ref={timeSpanRef}
      className="font-semibold text-3xl sm:text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500"
    >
      {props.timeRemaining
        ? getFormatDateTime(props.timeRemaining)
        : '00:00:00'}
    </span>
  );
};

interface RewardInfo {
  Bonus_tokens: number;
  NFT_reward: boolean;
  NFTs: number;
  Reward: number;
  cards_claimed: number[];
  wallet_address: string;
}

export default function HeroSection() {
  const [timeRemaining, setTimeRemaining] = React.useState<number>(null);
  const [vestingContractAlreadyInvested, setVestingContractAlreadyInvested] =
    React.useState<number>(72000); // set the initial value here
  const [
    vestingContract_All_SoldedToken,
    setVestingContract_All_SoldedToken_USDT,
  ] = React.useState<number>(null); // this will be in Float USD not USDT
  const [pricePerToken, setPricePerToken] = React.useState<number>(null);
  const [vestingContractTarget, setVestingContractTarget] =
    React.useState(300000); // set the target value here
  const [selectedSection, setSelectedSection] = React.useState('presale');
  const [walletAddress, setWalletAddress] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [rewardInfo, setRewardInfo] = useState<RewardInfo>();
  const [userNumberOfTokens, setUserNumberOfTokens] = React.useState<number>();
  const [isHiddenScratch, setHiddenScratch] = useState(false);

  const web3 = getWeb3();
  const USDTContract = createUSDTContract(web3);
  const PreSaleVestingContract = createPreSaleVestingContract(web3);
  const YPredictPreSaleContract = createYPredictPreSaleContract(web3);

  useEffect(() => {
    const getBlockTime = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://polygon-testnet-rpc.allthatnode.com:8545'
      );
      const currentBlock = await provider.getBlockNumber();
      const blockTimestamp = (await provider.getBlock(currentBlock)).timestamp; // this is in seconds
      const contract = new ethers.Contract(
        PrivateSaleVesting_Address,
        PrivateSaleVesting_ABI,
        provider
      );
      const endDate_sec = (await contract.endDate()).toString(); // call endDate() function of the contract
      const timeRemaining = endDate_sec - blockTimestamp;
      setTimeRemaining(timeRemaining);
    };
    getBlockTime();
    const getAllSoldedToken = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://polygon-testnet-rpc.allthatnode.com:8545'
      );
      const contract = new ethers.Contract(
        YPredictPrivateSale_address,
        YPredictPrivateSale_ABI,
        provider
      );
      const tokenSold_BigNumber = await contract.s_tokenSold();
      const tokenSold = BigNumber.from(tokenSold_BigNumber)
        .div(BigNumber.from('1000000000000000000'))
        .toNumber();
      const pricePerToken_BigNumber = await contract.s_usdtPrice();
      const pricePerToken = (
        parseFloat('1') /
        (parseFloat('1000000') / parseFloat(pricePerToken_BigNumber.toString()))
      ).toFixed(3);
      const allSoldedToken_USD_without_decimals = (
        parseFloat(tokenSold.toString()) * parseFloat(pricePerToken.toString())
      ).toFixed(0);
      setVestingContract_All_SoldedToken_USDT(tokenSold);
      setVestingContract_All_SoldedToken_USDT(
        Number(allSoldedToken_USD_without_decimals)
      );
    };
    getAllSoldedToken();
  }, []);

  useEffect(() => {
    async function getAllocatedTokens() {
      try {
        if (PreSaleVestingContract && walletAddress) {
          setIsFetching(true);

          const message = await PreSaleVestingContract.methods
            .getAllocatedTokens(walletAddress)
            .call();
          const allocatedTokens = Number(
            ethers.utils.formatUnits(message.toString(), DEFAULT_DECIMALS)
          );
          setUserNumberOfTokens(allocatedTokens);
          fetch(`https://rensketech.com/api/scrach_cards/cards/`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              wallet_address: walletAddress,
              ypred_balance: Number(allocatedTokens),
            }),
          })
            .then(res => res.json())
            .then(
              result => {
                setIsFetching(false);
                setRewardInfo(result);
              },
              error => {
                console.log(error);
                setIsFetching(false);
              }
            );
        }
      } catch (error) {
        setUserNumberOfTokens(0);
      }
    }
    getAllocatedTokens();
  }, [walletAddress]);

  return (
    <>
      <div id="HeroSection" className="hero-section ">
        <div className="hero-title">
          {/* Join the <span className="empower">AI Revolution</span>  */}

          {/* Invest in the <span className="empower">next big thing</span> in AI with a <span className="empower">low-cap, low-supply</span> AI token */}

          <span className="empower">
            {' '}
            YPRED, a token empowering world’s first <br></br>
            <span
              style={{
                textDecoration: 'underline',
                textDecorationColor: 'blueviolet',
              }}
            >
              “All-in-One” AI Ecosystem
            </span>
          </span>
        </div>

        <div className="hero-subtitle">
          <span
            className="under-video-text fw-regular"
            style={{
              color: '#000',
              fontSize: '19px',
              marginTop: '10px',

              fontWeight: '400',
            }}
          >
            Specifically Built for Developers, Traders, Investors, Quants and
            Analysts{' '}
          </span>
        </div>

        {/* <div className="under-video-text fw-regular"
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          maxWidth: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          fontWeight: "200",
          textAlign: "center"
        }}>
          yPredict is the{" "}
          <b
            style={{
              textDecoration: "underline",
              textDecorationColor: "black",
            }}
          >
            real-time AI driven
          </b>{" "}
          insights & predictions terminal backed by <b>world’s top 1%</b> AI
          developers, traders and investors. <br></br>Ride the growth wave of AI, with{" "}
          <b
            style={{
              textDecoration: "underline",
              textDecorationColor: "black",
            }}
          >
            10-100x potential returns
          </b>{" "}
          through <b>low cap, low supply</b> tokens
        </div> */}

        <br></br>
        <div className="container lg:px-32">
          <div className="row" style={{ marginTop: '0px' }}>
            <VideoSection />
            <div className="col-md-6">
              <div className="card custom-card-buy">
                <ProgressHeader />
                <CardHeader
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                />
                <div className="card-body">
                  <div className="tab-content mt-3">
                    <div className="tab-pane " id="seed" role="tabpanel">
                      <a href="#" className="card-link text-danger">
                        Read more
                      </a>
                    </div>
                    {selectedSection === 'seed' && <SeedSale />}
                    {selectedSection === 'private' && <PrivateSale />}
                    {selectedSection === 'presale' && (
                      <PreSale
                        walletAddress={walletAddress}
                        setWalletAddress={setWalletAddress}
                      />
                    )}
                    {selectedSection === 'public' && <PublicSale />}

                    <div
                      className="tab-pane"
                      id="public"
                      role="tabpanel"
                      aria-labelledby="deals-tab"
                    >
                      <p className="card-text"></p>
                      <a href="#" className="btn btn-danger btn-sm"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-2 flex-row justify-center flex items-center ">
                <ScratchCardComponent
                  rewardInfo={{
                    Reward: rewardInfo?.Reward ?? 0,
                    NFT_reward: Boolean(rewardInfo?.NFT_reward),
                  }}
                  setHiddenScratch={setHiddenScratch}
                  walletAddress={walletAddress}
                  isFetching={isFetching}
                />
                {/* {(rewardInfo?.NFT_reward ||
                  rewardInfo?.Reward > 0 ||
                  !walletAddress) &&
                !isHiddenScratch ? (
                  <ScratchCardComponent
                    rewardInfo={{
                      Reward: rewardInfo?.Reward ?? 0,
                      NFT_reward: Boolean(rewardInfo?.NFT_reward),
                    }}
                    setHiddenScratch={setHiddenScratch}
                    walletAddress={walletAddress}
                    isFetching={isFetching}
                  />
                ) : (
                  <>
                    <div className="px-2 mx-3 flex flex-col items-center">
                      <p className="text-md md:text-sm font-medium">
                        YPRED Balance
                      </p>
                      {walletAddress ? (
                        <>
                          <p className="text-sm md:text-xs">
                            {(
                              Number(userNumberOfTokens ?? 0) +
                              (rewardInfo?.Bonus_tokens ?? 0)
                            ).toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            }) ?? 0}
                          </p>
                          <p className="text-xs">{`(inc. ${
                            rewardInfo?.Bonus_tokens?.toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 2,
                              }
                            ) ?? 0
                          } bonus)`}</p>
                        </>
                      ) : (
                        <p className="text-sm md:text-xs">Connect Wallet</p>
                      )}
                    </div>
                    <div className="border-r-2 h-[90%] mx-1.5"></div>
                    <div className="flex flex-row grow justify-center h-[100%] items-center">
                      <div className="flex flex-col items-center grow">
                        <p className="text-md md:text-sm font-medium">
                          Cards Claimed
                        </p>
                        {walletAddress ? (
                          <>
                            <p className="text-sm md:text-xs">
                              {rewardInfo?.cards_claimed?.length ?? 0}
                            </p>
                            <p className="text-xs">{`${
                              rewardInfo?.Bonus_tokens?.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 2,
                                }
                              ) ?? 0
                            } YPREDs`}</p>
                          </>
                        ) : (
                          <p className="text-sm md:text-xs">Connect Wallet</p>
                        )}
                      </div>
                      <div className="border-r-2 h-[90%] mx-1.5"></div>
                      <div className="flex flex-col items-center grow">
                        <p className="text-md md:text-sm font-medium">NFTs</p>
                        {walletAddress ? (
                          <p className="text-sm md:text-xs">
                            {rewardInfo?.NFTs ?? 0}
                          </p>
                        ) : (
                          <p className="text-sm md:text-xs">Connect Wallet</p>
                        )}
                      </div>
                    </div>
                  </>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
