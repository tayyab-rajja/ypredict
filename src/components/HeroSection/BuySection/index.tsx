/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// All the Sales include the BuySection

// React & Next Standards

import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import React from 'react';
import Web3Modal from 'web3modal';
import WalletConnect from '@walletconnect/web3-provider';
import { hexToNumber } from 'web3-utils';
// import { Route } from "@lifi/sdk";
// import { RouteExecutionUpdate } from "@lifi/widget";
// import { useWidgetEvents, WidgetEvent } from "@lifi/widget";

// Wallet Management

import { BigNumber, ethers } from 'ethers';

// const MoralisFetch = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/common-evm-utils");
// const API_KEY =
//   "EAXoGdwRSiM0Ea8PUhac8lKFHtRXNzl0T5HB4lUV19d24aynvHqgm5AcSZHpjcxr";

// import TransAK

import { infuraId } from '../../../../config';
import {
  MATIC_NETWORK_INFO,
  MIN_AMOUNT_TO_INVEST,
  createPreSaleVestingContract,
  createUSDTContract,
  createYPredictPreSaleContract,
  getWeb3,
  DEFAULT_DECIMALS,
  USDT_PRICE_FOR_TOKEN,
  MIN_TOKEN_AMOUNT,
  USDT_CONTRACT_DECIMALS,
  STEPS_STATUS,
  aggregatorV3InterfaceABI,
} from '../../../../config/Mainnet/YPredictPreSale';
import BuyWithUSDT from './BuyWithUSDT';
import BuyWithMatic from './BuyWithMatic';
import BuyWithCard from './BuyWithCard';
import ModalNew from '../../ModalBuytoken/ModalNew';
import {
  YPredictPreSale_ABI,
  YPredictPreSale_address,
} from '../../../../config/Mainnet/YPredictPreSale';
import {
  PreSaleVesting_ABI,
  PreSaleVesting_Address,
} from '../../../../config/Mainnet/PreSaleVesting';
import BuyWithBSC from './BuyWithBSC';
import ModalBSCETH from '../../ModalBuytoken/ModalBSCETH';
import ModalBuytoken from '../../ModalBuytoken/ModalBuytoken';
import BuyWithETH from './BuyWithETH';
import { useRouter } from 'next/router';

interface NewBuySectionProps {
  walletAddress: string;
  setWalletAddress: (value) => void;
}

export default function NewBuySection({
  walletAddress,
  setWalletAddress,
}: NewBuySectionProps) {
  const router = useRouter();
  const maticButtonRef = useRef<HTMLButtonElement>(null);

  const [myUsdt, setMyUsdt] = useState('0');
  const [myMatic, setMyMatic] = useState('0');
  const [isShowErrorModal, setShowErrorModal] = useState(false);
  const [userNumberOfTokens, setUserNumberOfTokens] = React.useState<number>(0);
  const [ypredAmountToBuy, setYpredAmountToBuy] = React.useState('0');

  const [ypresUSDTPricePerToken, setYpredUSDTPricePerToken] =
    React.useState(null);
  // default value to display
  const [inputState, setInputState] = React.useState<string>('100');
  const [tokenAmount_By_USDT, setTokenAmount_By_USDT] =
    React.useState<string>('0');
  const [minAmountToInvest, setMinAmountToInvest] =
    React.useState<string>(MIN_AMOUNT_TO_INVEST);
  const [showMinimumMessage, setShowMinimumMessage] =
    React.useState<boolean>(false);
  const [chainId, setChainID] = React.useState<number>();
  const [ChainIdDev] = React.useState<number>(137);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [maticForButton, setMaticForButton] = React.useState<string>('');
  const [maticVsUSDT, setMaticVsUsdt] = React.useState<number>();
  const [web3ModalProvider, setWeb3ModalProvider] = useState<any>();
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>();
  const [isSwitching, setIsSwitching] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [web3ModalInstance, setWeb3ModalInstance] = useState<any>();
  const [minimumUSDTAmount, setMinimumUSDTAmount] = useState<string>();
  // const [usdtBalance, setUsdtBalance] = useState<string>("");
  const [maticBalance, setMaticBalance] = useState<string>();
  const [usdtToSpend, setUsdtToSpend] = useState<string>('');
  const [maticToSpend, setMaticToSpend] = useState<string>();
  const [toggle, setToggle] = useState(false);
  const [toggleAllocatedTokens, setToggleAllocatedTokens] = useState(false);
  const [toggleFor1Token, setToggleFor1Token] = useState(false);
  const [mPriceFor1Token, setMPriceFor1Token] = useState<string>();
  const [showBuyTokenModal, setShowBuyTokenModal] = useState(false);
  const [stepsStatus, setStepsStatus] = useState(STEPS_STATUS);

  const [isStep1TransactionMoining, setStep1TransactionMoining] =
    useState(false);
  const [isStep2Begin, setIsStep2Begin] = useState(false);
  const [isPolygonNetwork, setIsPolygonNetwork] = useState(false);
  const [priceFeedContract, setPriceFeedContract] = useState<any>();

  const web3 = getWeb3(web3ModalProvider?.provider);
  // const USDTContract = createUSDTContract(web3);
  // const PreSaleVestingContract = createPreSaleVestingContract(web3);
  // const YPredictPreSaleContract = createYPredictPreSaleContract(web3);
  const [polygonProvider, setPolygonProvider] = useState<any>();
  const [ypredPresaleContractInstance, setYpredPresaleContractInstance] =
    useState<any>();

  const [ypredVestingContractInstance, setYpredVestingContractInstance] =
    useState<any>();

  const [showBSCLifi, setShowBSCLifi] = useState(false);
  const [fromToken, setFromToken] = useState<string>('bsc');

  type imgTracker = [boolean, number];
  const [isImgTrackerShown, setIsImgTrackerShown] = React.useState<imgTracker>([
    false,
    0,
  ]);

  // const getUserMatic = async () => {
  //   try {
  //     const message = await web3ModalProvider.getBalance(walletAddress);
  //     var mMatic = (message * 1e-18).toFixed(3);
  //     if (!mMatic || Number(mMatic) <= 0) {
  //       setShowErrorModal(true);
  //       throw new Error("error while fetching balance");
  //     }
  //     // setMaticBalance(message.toString());
  //     setMyMatic(mMatic);
  //   } catch (error) {
  //     console.error(error);
  //     setMyMatic("");
  //     // setMaticBalance("");
  //     // setToggle((prev) => !prev);
  //   }
  // };

  // const getMaticPrice = async () => {
  //   try {
  //     const priceFeed = priceFeedContract();
  //     priceFeed.methods
  //       .latestRoundData()
  //       .call()
  //       .then((roundData) => {
  //         if (roundData.answer) {
  //           setMaticVsUsdt(roundData.answer * 1e-8);
  //         }
  //       });
  //   } catch (error) {
  //     console.log({ error });
  //     setToggle((prev) => !prev);
  //   }
  // };

  // const getUserUSDT = async () => {
  //   try {
  //     if (USDTContract) {
  //       const balance = await USDTContract.methods
  //         .balanceOf(walletAddress)
  //         .call();
  //       setUsdtBalance(balance.toString());
  //       const mUsdt = (balance * 1e-6).toString();
  //       setMyUsdt(mUsdt);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setUsdtBalance("");
  //     setToggle((prev) => !prev);
  //   }
  // };

  const ISNotConnected = () => {
    return (
      <>
        <div className="absolute w-full h-full bg-white opacity-80 flex justify-center items-center"></div>
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <div className="flex flex-col space-y-4 items-center justify-center ">
            {/* <Lock /> */}
            <div className="text-grad1 " style={{ fontSize: ' 100px' }}>
              <i className="fi fi-rr-lock"></i>
            </div>
            <button
              onClick={async () => {
                handleConnectWallet();
                //@ts-ignore
                __adroll.track('pageView', { segment_name: '45bc3500' });
                //@ts-ignore
                _tfa.push({
                  notify: 'event',
                  name: 'add_to_cart',
                  id: 1506829,
                });
              }}
              disabled={isConnecting}
              className="btn-grad-1 px-4 -translate-y-8"
            >
              <i className="fi fi-sr-wallet"></i> Connect Wallet
            </button>
          </div>
        </div>
      </>
    );
  };

  const IsNotConnectedToPolygon = () => {
    return (
      <>
        <div className="absolute w-full h-full bg-white opacity-80 flex justify-center items-center"></div>
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <div className="flex flex-col space-y-4 items-center justify-center ">
            <div className="text-grad1 " style={{ fontSize: ' 100px' }}>
              <i className="fi fi-rr-lock"></i>
            </div>
            <button
              // onClick={() => switchNetwork(web3ModalProvider)}
              disabled={isSwitching}
              className="btn-grad-1 px-4 -translate-y-8"
            >
              <i className="fi fi-sr-wallet"></i> Switch Network
            </button>
          </div>
        </div>
      </>
    );
  };
  const IsWhiteListed = () => {
    return <></>;
    // I am not removing this code because it is more necessary when my client offers something with whitelist.
    // <div className="row align-items-center bg-green-50 mt-4 flex justify-center items-center p-3">
    //   <div className="col-md-12 ">
    //     <div className="flex space-x-2 justify-center items-center  " style={{ fontSize: " 13px" }}>
    //       <span className="text-green-700">You&apos;re allowlisted for pre sale</span>
    //     </div>
    //   </div>
    // </div>
  };

  const handleInputChange = event => {
    // setShowMinimumMessage(false); // hide the message of minimum amount
    setIsImgTrackerShown([false, 0]);
    if (event.target.value === '') {
      inputRef.current.value = '';
      // setMaticForButton(0);
    }
    const inputValue = event.target.value !== '' ? event.target.value : '0';
    const regex = /^[0-9]*(\.[0-9]{0,6})?$/;
    // setInputState(Number(event.target.value).toString());
    if (regex.test(inputValue)) {
      setInputState(
        inputValue != '0.' ? Number(inputValue).toString() : inputValue
      );
      if (
        Number(inputValue) <
        Number(
          ethers.utils.formatUnits(minimumUSDTAmount, USDT_CONTRACT_DECIMALS)
        )
      ) {
        setShowMinimumMessage(true);
      } else {
        setShowMinimumMessage(false);
      }
      // setInputState(Number(event.target.value).toString());
      const numOfTokens = ethers.utils
        .parseUnits(inputValue, USDT_CONTRACT_DECIMALS)
        .div(BigNumber.from(USDT_PRICE_FOR_TOKEN));
      setTokenAmount_By_USDT(numOfTokens.toString());
      // setMaticForButton(() => numOfTokens.toNumber() * mPriceFor1Token);
      const usdtPriceForTokens = numOfTokens.mul(
        BigNumber.from(USDT_PRICE_FOR_TOKEN)
      );
      // console.log(usdtPriceForTokens.toNumber());
      setUsdtToSpend(usdtPriceForTokens.toString());
    } else return;
  };

  const handleConnectWallet = async () => {
    try {
      if (!web3Modal) return;
      setIsConnecting(true);
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      const accounts = await web3ModalProvider.listAccounts();
      const network = await web3ModalProvider.getNetwork();
      if (accounts[0]) setWalletAddress(accounts[0]);
      setChainID(network.chainId);
      setWeb3ModalProvider(web3ModalProvider);
      setWeb3ModalInstance(web3ModalInstance);
      toast.success(`Wallet connected`);
      setIsConnecting(false);
      // if (network.chainId !== ChainIdDev) {
      //   switchNetwork(web3ModalProvider);
      // }
    } catch (error) {
      setIsConnecting(false);
      console.log(error);
    }
  };

  const switchToPolygon = async web3ModalProvider => {
    // setIsSwitching(true);
    await web3ModalProvider.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: toHex(137) }],
    });
  };

  const disconnect = async () => {
    if (web3ModalProvider) {
      // await web3ModalProvider.clearCachedProvider();
      // console.log("init provider disconnect");
    }
  };

  const clearData = () => {
    setInputState('1');
  };

  const handleBuyToken = async () => {
    setShowBSCLifi(false);
    setShowErrorModal(false);
    setIsImgTrackerShown([false, 0]);
    maticButtonRef.current.disabled = true; // disable buy token button
    tokenAmount_By_USDT.replace(' ', '') === '';
    if (tokenAmount_By_USDT === '') {
      maticButtonRef.current.disabled = false;
      toast.error('Please enter a value');
      return;
    }
    if (
      Number(myMatic) < Number(maticForButton) ||
      parseFloat(myMatic) <= 0 ||
      !myMatic
    ) {
      maticButtonRef.current.disabled = false;
      setShowErrorModal(true);
      return;
    }

    setShowBuyTokenModal(true);
    // console.log("3");

    checkIsPolygonNetwork();
    return;
  };

  const checkIsPolygonNetwork = async () => {
    if (chainId === 137) {
      setIsPolygonNetwork(true);
      setStep1TransactionMoining(true);
      setIsStep2Begin(true);
      setStepsStatus({
        ...stepsStatus,
        step_1: { status: 'waiting_approve' },
      });
    } else {
      toast.success('Please approve switch to polygon network');
      setStepsStatus({
        ...stepsStatus,
        step_1: { status: 'waiting_switching_network' },
      });
      switchToPolygon(web3ModalProvider)
        .then(() => {
          // console.log("switched to polygon");
          toast.success('switched to polygon network');
          setIsPolygonNetwork(true);
          setStep1TransactionMoining(true);
          setIsStep2Begin(true);
          setStepsStatus({
            ...stepsStatus,
            step_1: { status: 'waiting_approve' },
          });
        })
        .catch(error => {
          console.error('cancelled swtiching');
          setStep1TransactionMoining(false);
          setIsStep2Begin(false);
          setStepsStatus({
            ...stepsStatus,
            step_1: { status: 'error' },
          });
          setIsPolygonNetwork(false);
          maticButtonRef.current.disabled = false;
        });
    }
  };

  useEffect(() => {
    disconnect();
  }, []);

  useEffect(() => {
    const modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnect,
          options: {
            infuraId: infuraId,
            chainId: 137,
          },
        },
      },
    });
    setWeb3Modal(modal);
    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    const minusdt = BigNumber.from(USDT_PRICE_FOR_TOKEN).mul(
      BigNumber.from(MIN_TOKEN_AMOUNT)
    );
    setMinimumUSDTAmount(minusdt.toString());
  }, []);

  useEffect(() => {
    const numOfTokens = ethers.utils
      .parseUnits(inputState, USDT_CONTRACT_DECIMALS)
      .div(BigNumber.from(USDT_PRICE_FOR_TOKEN));
    setTokenAmount_By_USDT(numOfTokens.toString());
    const usdtPriceForTokens = numOfTokens.mul(
      BigNumber.from(USDT_PRICE_FOR_TOKEN)
    );
    setUsdtToSpend(usdtPriceForTokens.toString());
  }, []);

  useEffect(() => {
    if (web3ModalInstance?.on) {
      const handleAccountsChanged = accounts => {
        if (accounts) setWalletAddress(accounts[0]);
        if (accounts[0]) {
          toast.success(
            `Account changed ${accounts[0].slice(0, 6)}...${accounts[0].slice(
              accounts[0].length - 4
            )}`
          );
        }
      };

      const handleChainChanged = _hexChainId => {
        // console.log("hexChainId");
        // console.log(_hexChainId);
        const chain = hexToNumber(_hexChainId);
        setChainID(chain);
        // console.log("chain changes, new chainId");
        // console.log(chain);
        // if (chain !== ChainIdDev) {
        //   switchNetwork(web3ModalProvider);
        // }
      };

      const handleDisconnect = () => {
        // toast.error("Wallet disconnected");
        disconnect();
      };

      web3ModalInstance.on('accountsChanged', handleAccountsChanged);
      web3ModalInstance.on('chainChanged', handleChainChanged);
      web3ModalInstance.on('disconnect', handleDisconnect);

      return () => {
        if (web3ModalInstance.removeListener) {
          web3ModalInstance.removeListener(
            'accountsChanged',
            handleAccountsChanged
          );
          web3ModalInstance.removeListener('chainChanged', handleChainChanged);
          web3ModalInstance.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [web3ModalInstance]);

  useEffect(() => {
    if (walletAddress) {
      const provider = new ethers.providers.AlchemyProvider(
        'matic',
        'ZaqKtWswxMcGixceLAWI5eMXyl3cCi1O'
      );

      setPolygonProvider(provider);
      const contract = new ethers.Contract(
        YPredictPreSale_address,
        YPredictPreSale_ABI,
        provider
      );

      setYpredPresaleContractInstance(contract);

      const vestingConract = new ethers.Contract(
        PreSaleVesting_Address,
        PreSaleVesting_ABI,
        provider
      );
      setYpredVestingContractInstance(vestingConract);

      // const priceFeedContractIns = new ethers.Contract(
      //   "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
      //   aggregatorV3InterfaceABI,
      //   provider
      // );
      // setPriceFeedContract(priceFeedContractIns);
    }
  }, [walletAddress]);

  useEffect(() => {
    async function getUserMatic() {
      try {
        const message = await polygonProvider.getBalance(walletAddress);
        var mMatic = ethers.utils.formatUnits(message, DEFAULT_DECIMALS);
        if (!mMatic || Number(mMatic) <= 0) {
          setShowErrorModal(true);
          throw new Error('error while fetching balance');
        }
        setMaticBalance(message.toString());
        setMyMatic(mMatic);
      } catch (error) {
        console.error(error);
        setMyMatic('');
        setMaticBalance('');
        setToggle(prev => !prev);
      }
    }
    if (walletAddress && polygonProvider) {
      getUserMatic();
    }
  }, [walletAddress, polygonProvider, toggle]);

  useEffect(() => {
    async function getAllocatedTokens() {
      try {
        if (ypredVestingContractInstance && walletAddress) {
          const message = await ypredVestingContractInstance.getAllocatedTokens(
            walletAddress
          );

          const allocatedTokens = Number(
            ethers.utils.formatUnits(message.toString(), DEFAULT_DECIMALS)
          );
          setUserNumberOfTokens(allocatedTokens);
        }

        // if (priceFeedContract) {
        //   const priceFeed = await priceFeedContract.methods.latestRoundData();
        //   setMaticVsUsdt(() =>
        //     Number(ethers.utils.formatUnits(priceFeed.answer, 8))
        //   );
        // }
      } catch (error) {
        console.log(error);
        setUserNumberOfTokens(0);
        setToggleAllocatedTokens(prev => !prev);
      }
    }
    getAllocatedTokens();
  }, [walletAddress, ypredVestingContractInstance, toggleAllocatedTokens]);

  useEffect(() => {
    async function getPriceOfGivenTokenInMatic() {
      try {
        const priceToken =
          await ypredPresaleContractInstance._getPriceOfGivenTokenInMatic('1');
        setMPriceFor1Token(priceToken.toString());
        const maticPrice =
          Number(
            ethers.utils.formatUnits(
              USDT_PRICE_FOR_TOKEN,
              USDT_CONTRACT_DECIMALS
            )
          ) / Number(ethers.utils.formatEther(priceToken.toString()));
        // console.log("maticPrice");
        setMaticVsUsdt(maticPrice);
      } catch (error) {
        console.error(error);
        setToggleFor1Token(prev => !prev);
      }
    }
    if (polygonProvider && ypredPresaleContractInstance) {
      getPriceOfGivenTokenInMatic();
    }
  }, [polygonProvider, ypredPresaleContractInstance, toggleFor1Token]);

  useEffect(() => {
    if (walletAddress && tokenAmount_By_USDT && mPriceFor1Token) {
      const amount = BigNumber.from(tokenAmount_By_USDT).mul(
        BigNumber.from(mPriceFor1Token)
      );
      setMaticToSpend(amount.toString());
      setMaticForButton(Number(ethers.utils.formatEther(amount)).toString());
    }
  }, [walletAddress, tokenAmount_By_USDT, mPriceFor1Token]);

  useEffect(() => {
    if (isStep2Begin) {
      setIsStep2Begin(false);
      const step2 = async () => {
        setStepsStatus({
          ...stepsStatus,
          step_2: { status: 'waiting_approve' },
        });

        const priceToken =
          await ypredPresaleContractInstance._getPriceOfGivenTokenInMatic(
            tokenAmount_By_USDT
          );
        const priceTokenString = priceToken.toString();

        const priceTokenWithBuffer = BigNumber.from(priceToken.toString())
          .add(ethers.utils.parseEther('0.05'))
          .toString();

        const YPredictPreSaleContractSigner =
          createYPredictPreSaleContract(web3);

        const sendOptions =
          await YPredictPreSaleContractSigner.methods.buyTokensMATIC(
            tokenAmount_By_USDT
          );
        const gasPrice = await web3.eth.getGasPrice();

        const newGasPrice = BigNumber.from(gasPrice)
          .add(BigNumber.from('10000000000'))
          .toString();

        await web3.eth
          .sendTransaction({
            from: walletAddress,
            to: sendOptions._parent._address,
            data: sendOptions.encodeABI(),
            // maxFeePerGas: toWei("90", "Gwei"),
            gasPrice: newGasPrice,
            gas: 1500000,
            value: priceTokenWithBuffer,
          })
          .on('transactionHash', hash => {
            setStepsStatus({
              ...stepsStatus,
              step_1: { status: 'success' },
              step_2: { status: 'waiting_transaction_Mining' },
            });
          })
          .on('receipt', async receipt => {
            if (receipt.status) {
              setIsImgTrackerShown([true, Number(inputState)]);
              setStepsStatus({
                ...stepsStatus,
                step_1: { status: 'success' },
                step_2: { status: 'success' },
                step_3: { status: 'success' },
              });
              clearData();
              maticButtonRef.current.disabled = false;
              toast.success('Transaction is Confirmed');
              // setUserNumberOfTokens(BigNumber.from(allocatedTokens));
              setToggleAllocatedTokens(prev => !prev);
              setIsStep2Begin(false);
            }
          })
          .on('error', () => {
            maticButtonRef.current.disabled = false;
            toast.error('Error Occured while approving transaction');
            setStepsStatus({
              ...stepsStatus,
              step_1: { status: 'error' },
              step_2: { status: 'error' },
            });
            setIsStep2Begin(false);
            clearData();
          });
        // .catch((error) => {
        //   maticButtonRef.current.disabled = false;
        //   toast.error("Error Occured while approving transaction");
        //   setStepsStatus({
        //     ...stepsStatus,
        //     step_1: { status: "error" },
        //     step_2: { status: "error" },
        //   });
        //   setIsStep2Begin(false);
        //   clearData();
        // });
      };

      step2();
    }
  }, [isStep2Begin]);

  return (
    <>
      <ModalNew
        ModalShowError={isShowErrorModal}
        setModalShowError={setShowErrorModal}
        myUsdt={myUsdt}
        myMatic={myMatic}
        buyType="matic"
        handleBuyToken={handleBuyToken}
        maticVsUSDT={maticVsUSDT}
        disabled={Number(maticForButton) > Number(myMatic)}
      />
      <ModalBSCETH
        ModalShowError={showBSCLifi}
        setModalShowError={setShowBSCLifi}
        myUsdt={myUsdt}
        myMatic={myMatic}
        buyType={fromToken}
        handleBuyToken={handleBuyToken}
        maticVsUSDT={maticVsUSDT}
        disabled={Number(maticForButton) > Number(myMatic)}
      />
      <ModalBuytoken
        stepsStatus={stepsStatus}
        setStepsStatus={setStepsStatus}
        showBuyTokenModal={showBuyTokenModal}
        setShowBuyTokenModal={setShowBuyTokenModal}
        buyType="matic"
      />
      {showBSCLifi && (
        <CheckBalanceUpdate
          polygonProvider={polygonProvider}
          showBSCLifi={showBSCLifi}
          setToggle={() => setToggle(prev => !prev)}
        />
      )}
      <div className="relative">
        {walletAddress ? <IsWhiteListed /> : <ISNotConnected />}

        <div className="row" style={{ marginTop: ' 20px' }}>
          <div className=" col-6 text-center">
            <p className="text-dark2 text-box-sub-title"> Presale Price</p>
            <p className="text-box-content">
              {'$'}
              {'0.0375'}
            </p>
          </div>
          <div className=" col-6 text-center">
            <p className="text-dark2 text-box-sub-title "> Presale Goal</p>
            <p className="text-box-content"> $300,000</p>
          </div>
        </div>
        <div className="row" style={{ marginTop: ' 20px' }}>
          <div className=" col-6 text-center">
            <p className="text-dark2 text-box-sub-title"> Listing Price</p>
            <p className="text-box-content">$0.045</p>
          </div>
          <div className=" col-6 text-center">
            <p className="text-dark2 text-box-sub-title"> ROI at Listing</p>
            <p className="text-box-content">20%</p>
          </div>
        </div>

        <div className="w-full flex flex-row space-x-4 justify-center mt-4 mb-4">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-7 w-7 "
            >
              <polygon fill="#4db6ac" points="24,44 2,22.5 10,5 38,5 46,22.5" />
              <path
                fill="#fff"
                d="M38,22c0-1.436-4.711-2.635-11-2.929V16h8v-6H13v6h8v3.071C14.711,19.365,10,20.564,10,22	s4.711,2.635,11,2.929V36h6V24.929C33.289,24.635,38,23.436,38,22z M24,24c-6.627,0-12-1.007-12-2.25c0-1.048,3.827-1.926,9-2.176	v3.346c0.96,0.06,1.96,0.08,3,0.08s2.04-0.02,3-0.08v-3.346c5.173,0.25,9,1.128,9,2.176C36,22.993,30.627,24,24,24z"
              />
            </svg>

            <div className="flex flex-col font-normal">
              <input
                ref={inputRef}
                onKeyDown={e => {
                  ['e', 'E', '+', '-', ','].includes(e.key) &&
                    e.preventDefault();
                }}
                value={inputState}
                onChange={handleInputChange}
                type="number"
                className=" border-b-[1px] border-black outline-0 w-28 sm:w-48 h-10 text-center font-semibold placeholder-gray-500"
                placeholder="USDT - amount"
              />
              {showMinimumMessage ? (
                <span className="text-xs">
                  Minimum is{' '}
                  {ethers.utils.formatUnits(
                    minimumUSDTAmount,
                    USDT_CONTRACT_DECIMALS
                  )}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-center fw-semibold">
            =
            <img
              src="/ypred-coin.png"
              alt=""
              style={{ width: ' 30px', marginLeft: ' 10px' }}
            />
            <span id="ypred-amount">{tokenAmount_By_USDT}</span>
          </div>
        </div>

        <div className="w-full row text-center" style={{ marginTop: ' 20px' }}>
          <div className="py-2">
            <span className="text-sm font-medium">
              You own {userNumberOfTokens}
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                YPRED
              </span>
            </span>
          </div>

          <div className="w-full text-center space-x-2 flex flex-col">
            <BuyWithMatic
              disabled={showMinimumMessage || !mPriceFor1Token || !maticBalance}
              maticButtonRef={maticButtonRef}
              maticForButton={maticForButton}
              handleBuyToken={handleBuyToken}
            />
            {walletAddress && (
              <div className="text-center grid grid-cols-2 gap-1">
                <BuyWithUSDT
                  disabled={
                    showMinimumMessage || !mPriceFor1Token || !maticBalance
                  }
                  handleBuyWithUSDT={() => {
                    setFromToken('usdt');
                    setShowBSCLifi(true);
                  }}
                />
                <BuyWithETH
                  disabled={
                    showMinimumMessage || !mPriceFor1Token || !maticBalance
                  }
                  handleBuyWithETH={() => {
                    setFromToken('eth');
                    setShowBSCLifi(true);
                  }}
                />
                <BuyWithBSC
                  disabled={
                    showMinimumMessage || !mPriceFor1Token || !maticBalance
                  }
                  handleBuyWithBSC={() => {
                    setFromToken('bsc');
                    setShowBSCLifi(true);
                  }}
                />
                <BuyWithCard
                  disabled={showMinimumMessage || !mPriceFor1Token}
                />
              </div>
            )}
          </div>
          <div className="text-end mt-2">
            <a
              href="https://docs.ypredict.ai/ypredict-token/how-to-buy"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-xs italic underline-offset-auto text-blue-400 font-bold">
                <i className="fi fi-sr-interrogation"></i> Need Help?
              </button>
            </a>
          </div>

          {isImgTrackerShown[0] && (
            <>
              <img
                className="hidden"
                src={
                  'https://4111.kewozbho.com/conv-image?tid=&offerid=&amount=' +
                  isImgTrackerShown[1] +
                  '&subid=' +
                  router.query.subid +
                  '&s1=&s2=&s3=&s4=&s5='
                }
                loading="eager"
                alt="img tracking purchase"
              />

              <img
                className="hidden"
                src={
                  'https://rajsharma.iljmp.com/track/conversion?project=1&goal=sale&revenue=' +
                  isImgTrackerShown[1] +
                  '&reference=1160'
                }
                width="1"
                height={'1'}
              />

              <img
                className="hidden"
                src="https://d.adroll.com/ipixel/LEJIIZ33LNBX3KFS52AJIA/RFC36FDTHBHCXDG4VVPPDW?name=c2dcd5a0"
                width="1"
                height="1"
                alt="pixel img"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export const createSigner = async () => {
  const ethereum = (window as any).ethereum;
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  });
  const provider = new ethers.providers.Web3Provider(ethereum);
  const walletAddress = accounts[0];
  const signer = provider.getSigner(walletAddress);
  return { signer, walletAddress };
};

export const toHex = num => {
  const val = Number(num);
  return '0x' + val.toString(16);
};

const CheckBalanceUpdate = ({ polygonProvider, showBSCLifi, setToggle }) => {
  useEffect(() => {
    function getBalanceInterval() {
      const AwaitTransactionMined_Interval = setInterval(() => {
        setToggle();
      }, 5000);
      return AwaitTransactionMined_Interval;
    }
    let intervalId;

    if (showBSCLifi) {
      intervalId = getBalanceInterval();
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [showBSCLifi, polygonProvider]);
  return null;
};
