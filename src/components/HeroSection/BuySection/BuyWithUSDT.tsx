import React, { useEffect, useRef, useState } from 'react';
import { BigNumber } from 'ethers';
import { toast } from 'react-hot-toast';
import ModalNew from '../../ModalBuytoken/ModalNew';
import {
  MIN_AMOUNT_TO_INVEST,
  STEPS_STATUS,
  createUSDTContract,
  getWeb3,
  createPreSaleVestingContract,
  createYPredictPreSaleContract,
  GAS_LIMIT,
  MAX_FEE_PER_GAS,
} from '../../../../constants';
import ModalBuytoken from '../../ModalBuytoken/ModalBuytoken';
import { YPredictPreSale_address } from '../../../../config/Mainnet/YPredictPreSale';
import { toWei } from 'web3-utils';

interface BuyWithUSDTProps {
  disabled?: boolean;
  minAmountToInvest: string;
  tokenAmountByUSDT: string;
  myUsdt: string;
  myMatic: string;
  setMyUsdt: (newValue) => void;
  ypredAmountToBuy: null | string;
  ypresUSDTPricePerToken: null | string;
  walletAddress: string;
  clearData: () => void;
  web3ModalProvider: any;
  USDTContract: any;
  PreSaleVestingContract: any;
  YPredictPreSaleContract: any;
  usdtBalance: string;
  maticBalance: string;
  usdtToSpend: string;
  setToggleAllocatedTokens: () => void;
}

const BuyWithUSDT: React.FC<BuyWithUSDTProps> = ({
  disabled,
  minAmountToInvest,
  ypredAmountToBuy,
  ypresUSDTPricePerToken,
  myUsdt,
  myMatic,
  setMyUsdt,
  walletAddress,
  clearData,
  web3ModalProvider,
  tokenAmountByUSDT,
  USDTContract,
  PreSaleVestingContract,
  YPredictPreSaleContract,
  usdtBalance,
  maticBalance,
  usdtToSpend,
  setToggleAllocatedTokens,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const allowanceRef = useRef(null);
  const transactionStatusRef = useRef(null);

  const [isShowErrorModal, setShowErrorModal] = useState(false);
  const [showBuyTokenModal, setShowBuyTokenModal] = useState(false);

  const [stepsStatus, setStepsStatus] = useState(STEPS_STATUS);
  const [isStep1TransactionMoining, setStep1TransactionMoining] =
    useState(false);
  const [isStep2Begin, setIsStep2Begin] = useState(false);
  const [alreadyApprovedUSDT, setAlreadyApprovedUSDT] = useState<any>();

  const web3 = getWeb3(web3ModalProvider?.provider);
  // const USDTContract = createUSDTContract();
  // const PreSaleVestingContract = createPreSaleVestingContract(web3);
  // const YPredictPreSaleContract = createYPredictPreSaleContract(web3);

  const handleBuyToken = async () => {
    // if (BigNumber.from(alreadyApprovedUSDT).gte(BigNumber.from(usdtToSpend))) {
    //   setStepsStatus({
    //     ...stepsStatus,
    //     step_1: { status: "success" },
    //   });
    //   toast.success("Transaction already mined successfully");
    //   setStep1TransactionMoining(false);
    //   setIsStep2Begin(true);
    //   clearInterval(allowanceRef.current);
    //   return;
    // }
    console.log('here1');
    buttonRef.current.disabled = true; // disable buy token button
    console.log('here2');
    if (!Number(ypredAmountToBuy)) {
      buttonRef.current.disabled = false;
      toast.error('Please enter a value');
      return;
    }
    //* test if the user typed minimum amount of tokens to buy
    if (parseFloat(ypredAmountToBuy) < Number(MIN_AMOUNT_TO_INVEST)) {
      buttonRef.current.disabled = false;
      toast.error('Minimum Amount is ' + MIN_AMOUNT_TO_INVEST);
      buttonRef.current.disabled = false;
      return;
    }

    console.log('here3');

    const approvedValueToSpend = BigNumber.from(ypredAmountToBuy)
      .mul(BigNumber.from(ypresUSDTPricePerToken))
      .toString();

    if (
      Number(myUsdt) <= 0 ||
      Number(myMatic) <= 0 ||
      Number(myUsdt) < Number(ypredAmountToBuy)
    ) {
      buttonRef.current.disabled = false;
      toast.error('You do not have enough USDT');
      setShowErrorModal(true);
      return;
    }

    console.log('here4');

    if (usdtBalance) {
      setMyUsdt(usdtBalance);
    }
    const hasUSDT = BigNumber.from(usdtBalance).gte(approvedValueToSpend);

    if (!hasUSDT) {
      buttonRef.current.disabled = false;
      toast.error('You do not have enough USDT');
      return;
    }

    console.log('here5');

    if (BigNumber.from(alreadyApprovedUSDT).gte(BigNumber.from(usdtToSpend))) {
      setShowBuyTokenModal(true);
      setStepsStatus({
        ...stepsStatus,
        step_1: { status: 'success' },
        step_2: { status: 'waiting_approve' },
      });
      setIsStep2Begin(true);
    } else {
      setStepsStatus({ ...stepsStatus, step_1: { status: 'waiting_approve' } });
      setShowBuyTokenModal(true);
      approveUSDT();
    }
  };

  const approveUSDT = async () => {
    //** Approve USDC to be spent by the contract */
    let IsErrorOccured = false;
    let transaction = null;
    const approvedValueToSpend = BigNumber.from(Number(tokenAmountByUSDT))
      .mul(BigNumber.from(Number(ypresUSDTPricePerToken)))
      .toString();
    console.log({
      approvedValueToSpend,
      ypresUSDTPricePerToken,
      tokenAmountByUSDT,
    });
    const options = await USDTContract.methods.approve(
      YPredictPreSale_address,
      approvedValueToSpend
    );
    const gasPrice = await web3.eth.getGasPrice();
    await web3.eth
      .sendTransaction({
        from: walletAddress,
        to: options._parent._address,
        data: options.encodeABI(),
        gasPrice: gasPrice,
      })
      .on('transactionHash', hash => {
        console.log({ hash });
        transaction = hash;
      })
      .on('receipt', function (receipt) {
        if (receipt) {
          // on signing the approve usdt transaction
          setStepsStatus({
            ...stepsStatus,
            step_1: { status: 'waiting_transaction_Mining' },
          });
          setStep1TransactionMoining(true);
        }
      })
      .on('error', error => {
        buttonRef.current.disabled = false;
        IsErrorOccured = true;
        toast.error('Error in Approving USDT transaction');
        setStepsStatus({ ...stepsStatus, step_1: { status: 'error' } });
      });
    console.log({ transaction });
    if (transaction) {
      const checkStatus = setInterval(async () => {
        const transactionData = await web3.eth.getTransactionReceipt(
          transaction
        );
        console.log({ transactionData });
        if (transactionData.status) {
          clearInterval(checkStatus);
          // when approve usdt transaction is in process
          setStepsStatus({
            ...stepsStatus,
            step_1: { status: 'waiting_transaction_Mining' },
          });
          setStep1TransactionMoining(true);
        }
      }, 2000);
    }
  };

  const handleSendUsdt = () => {
    allowanceRef.current = setInterval(async () => {
      const allowance = await USDTContract.methods
        .allowance(walletAddress, YPredictPreSale_address)
        .call();

      if (
        BigNumber.from(allowance.toString()).gte(BigNumber.from(usdtToSpend))
      ) {
        // on successful approve usdt transaction
        setStepsStatus({
          ...stepsStatus,
          step_1: { status: 'success' },
        });
        toast.success('Transaction mined successfully');
        setStep1TransactionMoining(false);
        setIsStep2Begin(true);
        clearInterval(allowanceRef.current);
      }
    }, 2000);
  };

  const step2 = async () => {
    let transaction = null;
    setStepsStatus({
      ...stepsStatus,
      step_2: { status: 'waiting_approve' },
    });

    const amount = BigNumber.from(tokenAmountByUSDT).toString();
    // console.log(amount.toString());

    const sendOptions = await YPredictPreSaleContract.methods.buyTokensUSDT(
      amount
    );

    const gasPrice = await web3.eth.getGasPrice();

    await web3.eth
      .sendTransaction({
        from: walletAddress,
        to: sendOptions._parent._address,
        data: sendOptions.encodeABI(),
        gasPrice: gasPrice,
      })
      .on('transactionHash', hash => {
        transaction = hash;
        setStepsStatus({
          ...stepsStatus,
          step_2: { status: 'waiting_transaction_Mining' },
        });
      })
      .on('receipt', async receipt => {
        if (receipt.status) {
          // const allocatedTokens = await PreSaleVestingContract.methods
          //   .getAllocatedTokens(walletAddress)
          //   .call();
          setStepsStatus({
            ...stepsStatus,
            step_2: { status: 'success' },
            step_3: { status: 'success' },
          });
          clearData();
          // setUserNumberOfTokens(
          //   BigNumber.from(allocatedTokens.toString().split(".")[0]).mul(
          //     BigNumber.from("1000000000000000000")
          //   )
          // );
          setToggleAllocatedTokens();
          buttonRef.current.disabled = false;
          toast.success('Transaction is Confirmed');
          // setUserNumberOfTokens(BigNumber.from(allocatedTokens));
          setIsStep2Begin(false);
        }
        // // const allocatedTokens = await PreSaleVestingContract.methods
        // //   .getAllocatedTokens(walletAddress)
        // //   .call();
        // setStepsStatus({
        //   ...stepsStatus,
        //   step_2: { status: "success" },
        //   step_3: { status: "success" },
        // });
        // clearData();
        // // setUserNumberOfTokens(
        // //   BigNumber.from(allocatedTokens.toString().split(".")[0]).mul(
        // //     BigNumber.from("1000000000000000000")
        // //   )
        // // );
        // setToggleAllocatedTokens();
        // buttonRef.current.disabled = false;
        // toast.success("Transaction is Confirmed");
        // // setUserNumberOfTokens(BigNumber.from(allocatedTokens));
        // setIsStep2Begin(false);
      })
      .on('error', () => {
        buttonRef.current.disabled = false;
        toast.error('Error in Send USDT transaction');
        setStepsStatus({ ...stepsStatus, step_2: { status: 'error' } });
      });
    // if (transaction) {
    //   transactionStatusRef.current = setInterval(async () => {
    //     await web3.eth
    //       .getTransactionReceipt(transaction)
    //       .then(async (receipt) => {
    //         if (receipt.status) {
    //           clearInterval(transactionStatusRef.current);
    //           const allocatedTokens = await PreSaleVestingContract.methods
    //             .getAllocatedTokens(walletAddress)
    //             .call();
    //           setStepsStatus({
    //             ...stepsStatus,
    //             step_2: { status: "success" },
    //             step_3: { status: "success" },
    //           });
    //           clearData();
    //           // setUserNumberOfTokens(
    //           //   BigNumber.from(allocatedTokens.toString().split(".")[0]).mul(
    //           //     BigNumber.from("1000000000000000000")
    //           //   )
    //           // );
    //           buttonRef.current.disabled = false;
    //           toast.success("Transaction is Confirmed");
    //           // setUserNumberOfTokens(BigNumber.from(allocatedTokens));
    //           setToggleAllocatedTokens();
    //           setIsStep2Begin(false);
    //         }
    //       });
    //   }, 2000);
    // }
  };

  useEffect(() => {
    if (isStep1TransactionMoining) {
      handleSendUsdt();
    }
    return () => {
      clearInterval(transactionStatusRef.current);
      clearInterval(allowanceRef.current);
    };
  }, [isStep1TransactionMoining]);

  useEffect(() => {
    if (isStep2Begin) {
      setIsStep2Begin(false);
      step2();
    }
  }, [isStep2Begin]);

  useEffect(() => {
    async function getAllowance() {
      const allowance = await USDTContract.methods
        .allowance(walletAddress, YPredictPreSale_address)
        .call();
      setAlreadyApprovedUSDT(allowance.toString());
      // if (
      //   BigNumber.from(allowance.toString()).gte(BigNumber.from(usdtToSpend))
      // ) {
      //   setStepsStatus({
      //     ...stepsStatus,
      //     step_1: { status: "success" },
      //   });
      //   toast.success("Transaction mined successfully");
      //   setStep1TransactionMoining(false);
      //   setIsStep2Begin(true);
      //   clearInterval(allowanceRef.current);
      // }
    }
    try {
      if (walletAddress && YPredictPreSale_address) {
        getAllowance();
      }
    } catch (error) {
      console.error(error);
      setAlreadyApprovedUSDT('');
    }
  }, [YPredictPreSale_address, walletAddress]);

  console.log('alreadyApprovedUSDT');
  console.log(alreadyApprovedUSDT);
  console.log('tokenAmountByUSDT');
  console.log(tokenAmountByUSDT);
  console.log('ypredAmountToBuy');
  console.log(ypredAmountToBuy);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleBuyToken}
        className="btn-grad-1 m-auto w-60 text-center mt-2 disabled:opacity-60"
        disabled={disabled}
      >
        <span>
          <i className="fi fi-sr-wallet"></i>
        </span>
        <span className="pl-2">Buy with USDT</span>
      </button>
      <ModalNew
        ModalShowError={isShowErrorModal}
        setModalShowError={setShowErrorModal}
        myUsdt={myUsdt}
        myMatic={myMatic}
        buyType="usdt"
      />
      <ModalBuytoken
        stepsStatus={stepsStatus}
        setStepsStatus={setStepsStatus}
        showBuyTokenModal={showBuyTokenModal}
        setShowBuyTokenModal={setShowBuyTokenModal}
        buyType="usdt"
      />
    </>
  );
};

export default BuyWithUSDT;
