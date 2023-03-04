import React, { useEffect, useRef, useState } from 'react';
import ModalNew from '../../ModalBuytoken/ModalNew';
import ModalBuytoken from '../../ModalBuytoken/ModalBuytoken';
import {
  GAS_LIMIT,
  MIN_AMOUNT_TO_INVEST,
  STEPS_STATUS,
  createPreSaleVestingContract,
  createYPredictPreSaleContract,
  getWeb3,
} from '../../../../constants';
import { BigNumber, ethers } from 'ethers';
import { toast } from 'react-hot-toast';
import { toWei } from 'web3-utils';

interface BuyWithMatic {
  disabled?: boolean;
  tokenAmountByUSDT: string;
  myUsdt: string;
  myMatic: string;
  ypredAmountToBuy: null | string;
  ypresUSDTPricePerToken: null | string;
  web3ModalProvider: any;
  walletAddress: string;
  clearData: () => void;
  maticForButton: number;
  PreSaleVestingContract: any;
  YPredictPreSaleContract: any;
  setToggleAllocatedTokens: () => void;
}

const BuyWithMatic: React.FC<BuyWithMatic> = ({
  disabled,
  myUsdt,
  myMatic,
  web3ModalProvider,
  walletAddress,
  tokenAmountByUSDT,
  ypresUSDTPricePerToken,
  ypredAmountToBuy,
  clearData,
  maticForButton,
  PreSaleVestingContract,
  YPredictPreSaleContract,
  setToggleAllocatedTokens,
}) => {
  const maticButtonRef = useRef<HTMLButtonElement>(null);

  const [isShowErrorModal, setShowErrorModal] = useState(false);
  const [showBuyTokenModal, setShowBuyTokenModal] = useState(false);
  const [priceOfGivenTokenInMatic, setPriceOfGivenTokenInMatic] =
    React.useState<string>();
  // const [minAmountToInvest, setMinAmountToInvest] = React.useState<string>("2");

  const [stepsStatus, setStepsStatus] = useState(STEPS_STATUS);
  const [isStep1TransactionMoining, setStep1TransactionMoining] =
    useState(false);
  const [isStep2Begin, setIsStep2Begin] = useState(false);
  const [newPriceOfGivenTokenInMatic, setNewPriceOfGivenTokenInMatic] =
    React.useState<string>('');

  const web3 = getWeb3(web3ModalProvider?.provider);
  // const PreSaleVestingContract = createPreSaleVestingContract(web3);
  // const YPredictPreSaleContract = createYPredictPreSaleContract();
  // const YPredictPreSaleContractProvider = createYPredictPreSaleContract(web3);

  const handleBuyToken = async () => {
    maticButtonRef.current.disabled = true; // disable buy token button
    tokenAmountByUSDT.replace(' ', '') === '';
    if (tokenAmountByUSDT === '') {
      maticButtonRef.current.disabled = false;
      toast.error('Please enter a value');
      return;
    }
    //* test if the user typed minimum amount of tokens to buy
    // if (parseFloat(tokenAmountByUSDT.toString()) < parseFloat("2")) {
    //   maticButtonRef.current.disabled = false;
    //   toast.error("Minimum Amount is " + minAmountToInvest);
    //   return;
    // }
    console.log('1');
    let mMatic = myMatic;
    // if (web3ModalProvider) {
    //   const getUserMatic = async () => {
    //     const message = await web3ModalProvider.getBalance(walletAddress);

    //     return (message * 1e-18).toFixed(3);
    //   };

    //   mMatic = await getUserMatic();
    //   setMyMatic(mMatic);
    // }
    console.log('2');

    if (
      Number(mMatic) * 1e18 < Number(maticForButton) * 1e18 ||
      parseFloat(mMatic) <= 0 ||
      !mMatic
    ) {
      maticButtonRef.current.disabled = false;
      setShowErrorModal(true);
      return;
    }

    setStepsStatus({
      ...stepsStatus,
      step_1: { status: 'waiting_transaction_Mining' },
    });
    setShowBuyTokenModal(true);
    console.log('3');

    getPriceToken();
    return;
  };

  const getPriceToken = async () => {
    let transaction = null;
    try {
      let IsErrorOccured = false;
      console.log('4');

      const priceToken = await YPredictPreSaleContract.methods
        ._getPriceOfGivenTokenInMatic(ypredAmountToBuy)
        .call();
      console.log(priceToken);
      setPriceOfGivenTokenInMatic(priceToken.toString());

      if (!IsErrorOccured || transaction != null) {
        setStep1TransactionMoining(true);
        setIsStep2Begin(true);
        setStepsStatus({
          ...stepsStatus,
          step_1: { status: 'waiting_transaction_Mining' },
        });
      }
    } catch (error) {
      console.log(error);
      clearData();
      maticButtonRef.current.disabled = false;
      toast.error('Error in MATIC transaction');
      setStepsStatus({
        ...stepsStatus,
        step_1: { status: 'error' },
      });
    }
  };

  // const getYPREDPrice_PerToken = async () => {
  //   try {
  //     const amount = await YPredictPreSaleContract.methods
  //       .s_minAmountToInvest()
  //       .call();
  //     let minAmountToInvest = BigNumber.from(amount.toString())
  //       .div(BigNumber.from("1000000"))
  //       .toString();
  //     if (parseInt(minAmountToInvest) == 0) {
  //       minAmountToInvest = (
  //         parseFloat(amount.toString()) / parseFloat("1000000")
  //       ).toFixed(3);
  //     }
  //     setMinAmountToInvest((parseFloat(minAmountToInvest) + 1).toString());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getYPREDPrice_PerToken();
  // }, []);

  useEffect(() => {
    if (isStep2Begin) {
      setIsStep2Begin(false);
      const step2 = async () => {
        setStepsStatus({
          ...stepsStatus,
          step_2: { status: 'waiting_approve' },
        });

        const priceToken = await YPredictPreSaleContract.methods
          ._getPriceOfGivenTokenInMatic(tokenAmountByUSDT)
          .call();
        const priceTokenString = priceToken.toString();

        const sendOptions =
          await YPredictPreSaleContract.methods.buyTokensMATIC(
            tokenAmountByUSDT
          );
        const gasPrice = await web3.eth.getGasPrice();
        await web3.eth
          .sendTransaction({
            from: walletAddress,
            to: sendOptions._parent._address,
            data: sendOptions.encodeABI(),
            gasPrice: gasPrice,
            value: toWei(priceTokenString, 'wei'),
          })
          .on('transactionHash', hash => {
            setStepsStatus({
              ...stepsStatus,
              step_2: { status: 'waiting_transaction_Mining' },
            });

            //* create this interval when transaction is not null
            // if (hash != null) {
            //   setStepsStatus({
            //     ...stepsStatus,
            //     step_2: { status: "waiting_transaction_Mining" },
            //   });

            //   const AwaitTransactionMined_Interval = setInterval(async () => {
            //     const allocatedTokens =
            //       await PreSaleVestingContract.methods.getAllocatedTokens(
            //         walletAddress
            //       );
            //     const allocatedToken_Before = ethers.utils.formatEther(
            //       userNumberOfTokens.toString()
            //     );
            //     const allocatedToken_After = ethers.utils.formatEther(
            //       allocatedTokens.toString()
            //     );
            //     const requestedNumberOfTokens = ethers.utils.formatEther(
            //       BigNumber.from(ypredAmountToBuy)
            //         .mul(BigNumber.from("1000000000000000000"))
            //         .toString()
            //     );
            //     if (
            //       parseFloat(allocatedToken_Before) +
            //         parseFloat(requestedNumberOfTokens) ===
            //       parseFloat(allocatedToken_After)
            //     ) {
            //       setStepsStatus({
            //         ...stepsStatus,
            //         step_2: { status: "success" },
            //         step_3: { status: "success" },
            //       });
            //       clearData();
            //       setUserNumberOfTokens(
            //         BigNumber.from(allocatedToken_After.split(".")[0]).mul(
            //           BigNumber.from("1000000000000000000")
            //         )
            //       );
            //       maticButtonRef.current.disabled = false;
            //       toast.success("Transaction is Confirmed");
            //       setUserNumberOfTokens(BigNumber.from(allocatedTokens));
            //       setIsStep2Begin(false);

            //       clearInterval(AwaitTransactionMined_Interval);
            //     }
            //   }, 3000);
            // }
          })
          .on('receipt', async receipt => {
            if (receipt.status) {
              setStepsStatus({
                ...stepsStatus,
                step_2: { status: 'success' },
                step_3: { status: 'success' },
              });
              clearData();
              maticButtonRef.current.disabled = false;
              toast.success('Transaction is Confirmed');
              // setUserNumberOfTokens(BigNumber.from(allocatedTokens));
              setToggleAllocatedTokens();
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

  useEffect(() => {
    async function getMaticValueToBeSent() {
      setNewPriceOfGivenTokenInMatic('');
      try {
        const priceToken = await YPredictPreSaleContract.methods
          ._getPriceOfGivenTokenInMatic(tokenAmountByUSDT)
          .call();
        setNewPriceOfGivenTokenInMatic(priceToken.toString());
      } catch (error) {
        console.error(error);
        setNewPriceOfGivenTokenInMatic('');
      }
    }
    getMaticValueToBeSent();
  }, [tokenAmountByUSDT]);

  return (
    <>
      <button
        ref={maticButtonRef}
        onClick={handleBuyToken}
        className="btn-grad-1 m-auto w-60 text-center mt-2 disabled:opacity-60"
        disabled={disabled}
      >
        <span>
          <i className="fi fi-sr-wallet"></i>
        </span>
        <span className="pl-2">
          Buy with {maticForButton > 0 ? maticForButton.toFixed(2) : ''} Matic
        </span>
      </button>
      <ModalNew
        ModalShowError={isShowErrorModal}
        setModalShowError={setShowErrorModal}
        myUsdt={myUsdt}
        myMatic={myMatic}
        buyType="matic"
      />
      <ModalBuytoken
        stepsStatus={stepsStatus}
        setStepsStatus={setStepsStatus}
        showBuyTokenModal={showBuyTokenModal}
        setShowBuyTokenModal={setShowBuyTokenModal}
        buyType="matic"
      />
    </>
  );
};

export default BuyWithMatic;
