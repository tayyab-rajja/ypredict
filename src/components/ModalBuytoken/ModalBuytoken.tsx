/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// Modal Dialog on the BuyToken component.

import React from "react";
import ProgressBar from "./ProgressBar";
import { useRef, useEffect, useState } from "react";

const Step_1_initial_Error = ({ buyType }) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">
        {buyType === "usdt"
          ? "Step 1 : Failed Approving USDT transaction"
          : "Step 1 : Failed Approve transaction"}
      </span>
      <span className="text-center">
        Oops.. Failed to approve the transaction
        <br /> close the window and try again
      </span>
    </div>
  );
};

const Step_2_initial_Error = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 2 : Failed Buying YPRED token</span>
      <span className="text-center">
        Oops.. Failed to approve the transaction
        <br /> close the window and try again
      </span>
    </div>
  );
};

const Step_1_initial_waiting_transaction_Mining = ({ buyType }) => {
  return buyType === "usdt" ? (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 1 : Approving USDT transaction </span>
      <span className="text-center">
        USDT Approval transaction block is being initiated, it may take a few
        seconds.
      </span>
    </div>
  ) : (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 1 : Approving MATIC transaction </span>
      <span className="text-center">
        MATIC Approval transaction block is being initiated, it may take a few
        seconds.
      </span>
    </div>
  );
};

const Step_2_initial_waiting_transaction_Mining = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 2 : Please approve </span>
      <span className="text-center">
        Please wait a moment for transaction to be mined...
      </span>
    </div>
  );
};

const Step_3_success = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
      <span className="text-xl">Step 3 : Transaction Confirmed</span>
      <span className="text-center">
        You have successfully bought YPRED tokens
      </span>
    </div>
  );
};

export default function ModalBuytoken(props: {
  stepsStatus;
  setStepsStatus;
  showBuyTokenModal;
  setShowBuyTokenModal;
  buyType;
}) {
  const Step_1_initial_waiting_approve = () => {
    const secondsRef = useRef<HTMLSpanElement>(null);
    const seconds = useRef<number>(60);
    useEffect(() => {
      const timerInterval = setInterval(() => {
        if (props.stepsStatus.step_1.status === "waiting_approve") {
          if (seconds.current > 0) {
            seconds.current--;
            secondsRef.current!.innerHTML = seconds.current.toString();
          } else if (
            props.stepsStatus.step_1.status === "waiting_approve_switch"
          ) {
          } else {
            props.stepsStatus.step_1.status = "error";
            props.setStepsStatus({ ...props.stepsStatus });
            clearInterval(timerInterval);
          }
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
      return () => clearInterval(timerInterval);
    }, []);

    return (
      <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
        <span className="text-center text-lg sm:text-xl">
          {props.buyType === "usdt"
            ? "Step 1 : Approving USDT transaction"
            : "Step 1 : Please approve"}
        </span>
        <span className="text-center">
          Please approve the transaction in your wallet
        </span>
        <span className="">
          Waiting...<span ref={secondsRef}>{seconds.current}</span> sec
        </span>
        <span className="">
          <span className="text-red-400">Note : </span>Closing this window will
          terminate the request
        </span>
      </div>
    );
  };

  const Step_1_initial_waiting_approve_switching = () => {
    // const secondsRef = useRef<HTMLSpanElement>(null);
    // const seconds = useRef<number>(60);
    // useEffect(() => {
    //   const timerInterval = setInterval(() => {
    //     if (props.stepsStatus.step_1.status === "waiting_approve") {
    //       if (seconds.current > 0) {
    //         seconds.current--;
    //         secondsRef.current!.innerHTML = seconds.current.toString();
    //       } else {
    //         props.stepsStatus.step_1.status = "error";
    //         props.setStepsStatus({ ...props.stepsStatus });
    //         clearInterval(timerInterval);
    //       }
    //     } else {
    //       clearInterval(timerInterval);
    //     }
    //   }, 1000);
    //   return () => clearInterval(timerInterval);
    // }, []);

    return (
      <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
        <span className="text-center">
          Please approve switching to Polygon Network.
        </span>
        {/* <span className="">Waiting...</span>
        <span className="">
          <span className="text-red-400">Note : </span>Closing this window will
          terminate the request
        </span> */}
      </div>
    );
  };

  const Step_2_initial_waiting_approve = () => {
    const secondsRef = useRef<HTMLSpanElement>(null);
    const seconds = useRef<number>(30);

    useEffect(() => {
      const timerInterval = setInterval(() => {
        if (props.stepsStatus.step_2.status === "waiting_approve") {
          if (seconds.current > 0) {
            seconds.current--;
            secondsRef.current!.innerHTML = seconds.current.toString();
          } else {
            props.stepsStatus.step_2.status = "error";
            props.setStepsStatus({ ...props.stepsStatus });
            clearInterval(timerInterval);
          }
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
      return () => clearInterval(timerInterval);
    }, []);

    return (
      <div className="flex flex-col space-y-4 justify-center items-center py-8 ">
        <span className="text-center text-lg sm:text-xl">
          Step 2 : Buying YPRED - Waiting for transaction approval
        </span>
        <span className="text-center">
          Please approve the transaction in your wallet.
        </span>
        <span className="">
          Waiting...<span ref={secondsRef}>{seconds.current}</span> sec
        </span>
        <span className="">
          <span className="text-red-400">Note : </span>Closing this window will
          terminate the request
        </span>
      </div>
    );
  };
  const GetStepMessage = ({ stepsStatus_arg }) => {
    if (!(stepsStatus_arg.step_1.status === "blocked")) {
      if (stepsStatus_arg.step_1.status === "waiting_switching_network") {
        return <Step_1_initial_waiting_approve_switching />;
      }
      if (stepsStatus_arg.step_1.status === "waiting_approve")
        return <Step_1_initial_waiting_approve />;
      if (stepsStatus_arg.step_1.status === "waiting_transaction_Mining")
        return (
          <Step_1_initial_waiting_transaction_Mining buyType={props.buyType} />
        );
      if (stepsStatus_arg.step_1.status === "error")
        return <Step_1_initial_Error buyType={props.buyType} />;

      if (stepsStatus_arg.step_1.status === "success") {
        if (stepsStatus_arg.step_2.status === "waiting_approve")
          return <Step_2_initial_waiting_approve />;
        if (stepsStatus_arg.step_2.status === "error")
          return <Step_2_initial_Error />;
        if (stepsStatus_arg.step_2.status === "waiting_transaction_Mining")
          return <Step_2_initial_waiting_transaction_Mining />;
        if (stepsStatus_arg.step_2.status === "success")
          return <Step_3_success />;
      }
    }
  };

  return (
    <>
      {props.showBuyTokenModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-slate-200 rounded-t">
                  <div className="hero-title">
                    {/* <span className="empower ">Wallet Connected!</span> */}
                    Please Approve Notifications
                  </div>
                  <svg
                    onClick={() => props.setShowBuyTokenModal(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-red-500 hover:cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative p-6 flex flex-col">
                  <ProgressBar
                    stepsStatus={props.stepsStatus}
                    buyType={props.buyType}
                  />
                  <GetStepMessage stepsStatus_arg={props.stepsStatus} />
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      props.setStepsStatus({
                        step_1: { status: "blocked" },
                        step_2: { status: "blocked" },
                        step_3: { status: "blocked" },
                      });
                      props.setShowBuyTokenModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
