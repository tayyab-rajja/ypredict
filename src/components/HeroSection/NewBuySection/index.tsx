/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// All the Sales include the BuySection

// React & Next Standards

import { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import React from 'react';
import Web3Modal from 'web3modal';
import { hexToNumber } from 'web3-utils';
import { BigNumber, ethers } from 'ethers';
import { infuraId } from '../../../../config';
import {
  createYPredictPreSaleContract,
  getWeb3,
  DEFAULT_DECIMALS,
  USDT_PRICE_FOR_TOKEN,
  MIN_TOKEN_AMOUNT,
  USDT_CONTRACT_DECIMALS,
  STEPS_STATUS,
  MIN_USD,
} from '../../../../constants';
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
import WalletConnectProvider from '@walletconnect/web3-provider';
import ModalQRPayment from '../../ModalBuytoken/ModalQRPayment';
import Link from 'next/link';
import { Range } from 'react-range';

interface NewBuySectionProps {
  walletAddress: string;
  setWalletAddress: (value) => void;
  isHiddenRewardInfo?: boolean;
  onChangePurchasedToken?: (value: string) => void;
  isStopBuy?: boolean;
}

export default function NewBuySection({
  walletAddress,
  setWalletAddress,
  isHiddenRewardInfo,
  onChangePurchasedToken,
  isStopBuy,
}: NewBuySectionProps) {
  const router = useRouter();
  const maticButtonRef = useRef<HTMLButtonElement>(null);

  const [myUsdt, setMyUsdt] = useState('0');
  const [myMatic, setMyMatic] = useState('0');
  const [isShowErrorModal, setShowErrorModal] = useState(false);
  const [userNumberOfTokens, setUserNumberOfTokens] = React.useState<number>(0);
  const [QRPaymentType, setQRPaymentType] = React.useState('');

  // default value to display
  const [inputState, setInputState] = React.useState<string>('500');
  const [tokenAmount_By_USDT, setTokenAmount_By_USDT] =
    React.useState<string>('0');
  const [showMinimumMessage, setShowMinimumMessage] =
    React.useState<boolean>(false);
  const [chainId, setChainID] = React.useState<number | string>();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [maticForButton, setMaticForButton] = React.useState<string>('');
  const [maticVsUSDT, setMaticVsUsdt] = React.useState<number>();
  const [web3ModalProvider, setWeb3ModalProvider] = useState<any>();
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>();
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

  const web3 = getWeb3(web3ModalProvider?.provider);
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

  const bonusTokenLabel = useMemo(() => {
    const amount = Number(inputState);
    if (amount >= 250 && amount <= 500) {
      const bonusToken = Number(tokenAmount_By_USDT) * 0.02;
      return `2% bonus YPREDs (${Number(bonusToken.toFixed(2))} YPRED)`;
    } else if (amount > 500 && amount <= 2500) {
      const bonusToken = Number(tokenAmount_By_USDT) * 0.03;
      return `3% bonus YPREDs (${Number(bonusToken.toFixed(2))} YPRED)`;
    } else if (amount > 2500 && amount <= 5000) {
      const bonusToken = Number(tokenAmount_By_USDT) * 0.04;
      return `4% bonus YPREDs (${Number(bonusToken.toFixed(2))} YPRED)`;
    } else if (amount > 5000 && amount <= 15000) {
      const bonusToken = Number(tokenAmount_By_USDT) * 0.05;
      return `5% bonus YPREDs (${Number(bonusToken.toFixed(2))} YPRED)`;
    } else {
      return 'Sorry, No bonus';
    }
  }, [inputState, tokenAmount_By_USDT]);

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
      if (Number(inputValue) < MIN_USD || Number(inputValue) > 15000) {
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
    if (chainId === 137 || chainId === '0x89') {
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

  const onClickAnyBuyButton = () => {
    //@ts-ignore
    window.coinzilla_performance = window.coinzilla_performance || [];
    //@ts-ignore
    coinzilla_performance.push({ event: 'register' });
    //@ts-ignore
    __adroll.track('pageView', { segment_name: '45bc3500' });
  };

  useEffect(() => {
    disconnect();
  }, []);

  useEffect(() => {
    const options = new WalletConnectProvider({
      rpc: {
        137: 'https://matic-mainnet.chainstacklabs.com',
      },
      infuraId: infuraId,
    });
    const modal = new Web3Modal({
      cacheProvider: false,
      network: 'mainnet',
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options,
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
  }, [inputState]);

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
        const chain = hexToNumber(_hexChainId);
        setChainID(chain);
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
  }, []);

  useEffect(() => {
    async function getUserMatic() {
      try {
        const message = await polygonProvider.getBalance(walletAddress);
        var mMatic = ethers.utils.formatUnits(message, DEFAULT_DECIMALS);
        if (!mMatic || Number(mMatic) <= 0) {
          // setShowErrorModal(true);
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
    if (tokenAmount_By_USDT && mPriceFor1Token) {
      const amount = BigNumber.from(tokenAmount_By_USDT).mul(
        BigNumber.from(mPriceFor1Token)
      );
      setMaticToSpend(amount.toString());
      setMaticForButton(Number(ethers.utils.formatEther(amount)).toString());
    }
  }, [tokenAmount_By_USDT, mPriceFor1Token]);

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

        web3.eth.setProvider(web3ModalProvider?.provider);

        await web3.eth
          .sendTransaction({
            from: walletAddress,
            to: sendOptions._parent._address,
            data: sendOptions.encodeABI(),
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
          .on('error', err => {
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
      <ModalQRPayment
        chainType={QRPaymentType}
        onClose={() => {
          setQRPaymentType('');
        }}
        amountUSD={Number(inputState)}
        onChangeAmountUSD={setInputState}
        onChangePurchasedToken={() =>
          onChangePurchasedToken?.(tokenAmount_By_USDT)
        }
      />
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
        {/* {walletAddress ? <IsWhiteListed /> : <ISNotConnected />} */}

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
              className="h-6 w-6"
              viewBox="0 0 235.517 235.517"
            >
              <g>
                <path
                  fill="#010002"
                  d="M118.1,235.517c7.898,0,14.31-6.032,14.31-13.483c0-7.441,0-13.473,0-13.473
                            c39.069-3.579,64.932-24.215,64.932-57.785v-0.549c0-34.119-22.012-49.8-65.758-59.977V58.334c6.298,1.539,12.82,3.72,19.194,6.549
                            c10.258,4.547,22.724,1.697,28.952-8.485c6.233-10.176,2.866-24.47-8.681-29.654c-11.498-5.156-24.117-8.708-38.095-10.236V8.251
                            c0-4.552-6.402-8.251-14.305-8.251c-7.903,0-14.31,3.514-14.31,7.832c0,4.335,0,7.843,0,7.843
                            c-42.104,3.03-65.764,25.591-65.764,58.057v0.555c0,34.114,22.561,49.256,66.862,59.427v33.021
                            c-10.628-1.713-21.033-5.243-31.623-10.65c-11.281-5.755-25.101-3.72-31.938,6.385c-6.842,10.1-4.079,24.449,7.294,30.029
                            c16.709,8.208,35.593,13.57,54.614,15.518v13.755C103.79,229.36,110.197,235.517,118.1,235.517z M131.301,138.12
                            c14.316,4.123,18.438,8.257,18.438,15.681v0.555c0,7.979-5.776,12.651-18.438,14.033V138.12z M86.999,70.153v-0.549
                            c0-7.152,5.232-12.657,18.71-13.755v29.719C90.856,81.439,86.999,77.305,86.999,70.153z"
                />
              </g>
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
                Number(inputState) < MIN_USD ? (
                  <span className="text-xs">Minimum is $100</span>
                ) : Number(inputState) > 15000 ? (
                  <span className="text-xs">Maximum is $15000</span>
                ) : null
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
        {!isHiddenRewardInfo && (
          <div className="w-full flex justify-center border-[#8913dd] border-[3px] rounded-lg pb-3">
            <div className="w-[85%] flex justify-center flex-col">
              <Range
                step={1}
                min={MIN_USD}
                max={15000}
                values={[
                  Number(inputState) > 15000
                    ? 15000
                    : Number(inputState) < MIN_USD
                    ? MIN_USD
                    : Number(inputState) ?? 0,
                ]}
                onChange={values => {
                  setInputState(values.toString());
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full h-2 pr-2 my-4 bg-gray-200 rounded-md"
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props}>
                    <div className="flex flex-col relative items-center">
                      <div className=" w-0 h-0 bg-transparent border-l-[12px] border-r-[12px] border-t-[24px] border-t-black border-l-transparent border-r-transparent transform rounded-b-full" />
                      <div className="absolute -bottom-6 font-semibold">{`$${inputState}`}</div>
                    </div>
                  </div>
                )}
              />
              <div className="mt-2 flex flex-col items-center">
                <div className="flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          fill="#FFEE43"
                          d="M480,252c-4.422,0-8,3.582-8,8H40c0-4.418-3.578-8-8-8s-8,3.582-8,8v208c0,22.055,17.945,40,40,40
			                  h384c22.055,0,40-17.945,40-40V260C488,255.582,484.422,252,480,252z"
                        />
                      </g>
                      <g>
                        <path
                          fill="#FFD100"
                          d="M480,164H32c-17.648,0-32,14.355-32,32v48c0,17.645,14.352,32,32,32h448c17.648,0,32-14.355,32-32
			                  v-48C512,178.355,497.648,164,480,164z"
                        />
                      </g>
                      <g>
                        <g>
                          <rect
                            x="224"
                            y="156"
                            fill="#FF4F19"
                            width="64"
                            height="352"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,407.313 288,471.313 288,448.688 224,384.688 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,367.313 288,431.313 288,408.688 224,344.688 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="288,231.313 288,208.688 235.313,156 224,156 224,167.313 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,327.313 288,391.313 288,368.688 224,304.688 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,424.688 224,447.313 284.688,508 288,508 288,488.688 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,287.313 288,351.313 288,328.688 224,264.688 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,207.313 288,271.313 288,248.688 224,184.688 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="267.313,508 224,464.688 224,487.313 244.688,508 			"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#E7001E"
                            points="224,247.313 288,311.313 288,288.688 224,224.688 			"
                          />
                        </g>
                      </g>
                      <g>
                        <path
                          fill="#E7001E"
                          d="M424,291.969c-31.586,0-50.203-32.934-68.203-64.785c-13.333-23.584-27.024-47.742-46.855-58.039
                            c37.64-14.671,85.006-34.957,99.145-49.094c26.516-26.512,26.516-69.652,0-96.164c-26.516-26.516-69.656-26.516-96.172,0
                            C295.42,40.378,270.544,102.129,256,140.862c-14.544-38.732-39.42-100.484-55.914-116.975c-26.516-26.516-69.656-26.516-96.172,0
                            c-26.516,26.512-26.516,69.652,0,96.164c14.139,14.137,61.504,34.423,99.145,49.094c-19.832,10.297-33.522,34.455-46.855,58.039
                            c-18,31.852-36.617,64.785-68.203,64.785c-6.625,0-12,5.371-12,12s5.375,12,12,12c45.586,0,68.703-40.895,89.094-76.977
                            c14.836-26.238,28.844-51.023,46.906-51.023V188h64v-0.031c18.063,0,32.07,24.785,46.906,51.023
                            c20.391,36.082,43.508,76.977,89.094,76.977c6.625,0,12-5.371,12-12S430.625,291.969,424,291.969z M328.883,40.855
                            c8.578-8.578,19.844-12.863,31.117-12.863c11.266,0,22.539,4.289,31.117,12.863c17.156,17.156,17.156,45.07,0,62.227
                            c-12.219,12.219-69.773,36.078-115.156,52.926C292.805,110.625,316.664,53.074,328.883,40.855z M120.883,40.855
                            c8.578-8.578,19.844-12.863,31.117-12.863c11.266,0,22.539,4.289,31.117,12.863c12.219,12.219,36.078,69.77,52.922,115.152
                            c-45.383-16.848-102.938-40.707-115.156-52.926C103.727,85.926,103.727,58.012,120.883,40.855z"
                        />
                      </g>
                    </g>
                  </svg>
                  <p
                    className="text-xl font-semibold"
                    style={{
                      background:
                        '-webkit-linear-gradient(top left, #f03985, #5144f8)',
                      //@ts-ignore
                      '-webkit-background-clip': 'text',
                      '-webkit-text-fill-color': 'transparent',
                    }}
                  >
                    Rewards
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      className="w-6 h-6"
                    >
                      <path
                        fill="#01A601"
                        d="M45.103,24.995l3.195-6.245l-5.892-3.807l-0.354-7.006l-7.006-0.35l-3.81-5.89l-6.242,3.2l-6.245-3.196l-3.806,5.893	L7.938,7.948l-0.352,7.007l-5.89,3.81l3.2,6.242L1.702,31.25l5.892,3.807l0.354,7.006l7.006,0.35l3.81,5.891l6.242-3.2l6.245,3.195	l3.806-5.893l7.005-0.354l0.352-7.006l5.89-3.81L45.103,24.995z M22.24,32.562l-6.82-6.819l2.121-2.121l4.732,4.731l10.202-9.888	l2.088,2.154L22.24,32.562z"
                      />
                    </svg>
                    <div>Lifetime Free Predictions via yPredict Analytics</div>
                  </div>
                  <div className="flex items-center space-x-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      className="w-6 h-6"
                    >
                      <path
                        fill="#01A601"
                        d="M45.103,24.995l3.195-6.245l-5.892-3.807l-0.354-7.006l-7.006-0.35l-3.81-5.89l-6.242,3.2l-6.245-3.196l-3.806,5.893	L7.938,7.948l-0.352,7.007l-5.89,3.81l3.2,6.242L1.702,31.25l5.892,3.807l0.354,7.006l7.006,0.35l3.81,5.891l6.242-3.2l6.245,3.195	l3.806-5.893l7.005-0.354l0.352-7.006l5.89-3.81L45.103,24.995z M22.24,32.562l-6.82-6.819l2.121-2.121l4.732,4.731l10.202-9.888	l2.088,2.154L22.24,32.562z"
                      />
                    </svg>
                    <div>{bonusTokenLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full row text-center" style={{ marginTop: ' 20px' }}>
          <div className="w-full text-center space-x-2 flex flex-col">
            <BuyWithMatic
              disabled={showMinimumMessage || !mPriceFor1Token || isStopBuy}
              maticButtonRef={maticButtonRef}
              maticForButton={maticForButton}
              handleBuyToken={() => {
                setQRPaymentType('polygon');
                onClickAnyBuyButton();
              }}
            />
            <div className="text-center grid grid-cols-2 gap-1">
              <BuyWithUSDT
                disabled={showMinimumMessage || !mPriceFor1Token || isStopBuy}
                handleBuyWithUSDT={() => {
                  setQRPaymentType('usdt');
                  onClickAnyBuyButton();
                }}
              />
              <BuyWithETH
                disabled={showMinimumMessage || !mPriceFor1Token || isStopBuy}
                handleBuyWithETH={() => {
                  setQRPaymentType('eth');
                  onClickAnyBuyButton();
                }}
              />
              <BuyWithBSC
                disabled={showMinimumMessage || !mPriceFor1Token || isStopBuy}
                handleBuyWithBSC={() => {
                  setQRPaymentType('bsc');
                  onClickAnyBuyButton();
                }}
              />
              <BuyWithCard
                disabled={showMinimumMessage || !mPriceFor1Token || isStopBuy}
              />
            </div>
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

          <Link href="https://ypredict.ai/app">
            <a
              target="_blank"
              style={{
                fontSize: '12px',
                color: 'blue',
                textDecoration: 'underline',
              }}
            >
              Check your YPRED balance
            </a>
          </Link>

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
                src={'https://ypredict.ai/gads.png'}
                // @ts-ignore
                //onLoad={() => gtag_report_conversion(isImgTrackerShown[1])}
                onLoad={handleImageLoad}
                width="1"
                height={'1'}
              />
              t
              <img
                className="hidden"
                src={
                  'https://d.adroll.com/ipixel/LEJIIZ33LNBX3KFS52AJIA/RFC36FDTHBHCXDG4VVPPDW?name=c2dcd5a0&conversion_value=' +
                  isImgTrackerShown[1] +
                  '&currency=USD'
                }
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
