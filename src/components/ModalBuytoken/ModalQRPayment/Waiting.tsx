import React from "react";
import { truncateHash } from ".";
import CountDown from "./CountDown";
import { toast } from "react-hot-toast";
import { MIN_USD } from "../../../constants";

const Waiting = ({
  amountUSD,
  chainType,
  YPREDAmount,
  qrAddress,
  onChangeTimeout,
  amountByChain,
  onChangeAmountUSD,
  network,
}) => {
  /**
   * It copies the text in the qrAddress variable to the clipboard.
   */
  const copyClipboard = () => {
    if (amountUSD >= MIN_USD) {
      navigator.clipboard.writeText(qrAddress);
    }
  };
  return (
    <>
      <div className="py-4 md:py-8 pt-0 px-6 md:px-10 flex flex-row justify-center flex-wrap md:flex-nowrap space-y-0 md:space-y-2 space-x-1 md:space-x-6 items-center">
        <div
          className="w-[100%] h-[6px] bg-black self-center rounded-xl mb-2"
          style={{
            background: "radial-gradient(circle at top left, #f03985, #5144f8)",
          }}
        />
        <div className="min-w-[98px]">
          <p className="text-[10px] text-[#5b5b5b]">
            <br />
          </p>
          <div className="flex items-center space-x-1 border p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            <input
              value={amountUSD}
              onChange={(e) => {
                onChangeAmountUSD(e.target.value ? e.target.value : "0");
                if (Number(e.target.value) < MIN_USD) {
                  toast.error("Minimum is $100");
                }
              }}
              className="w-[60px] flex-1 border-black outline-0 font-bold text-[16px] text-center placeholder-gray-500"
              placeholder="Enter your amount"
            />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[#5b5b5b]">
            <br />
          </p>
          <p className="text-[#dee2e6]">/</p>
        </div>
        <div className="min-w-[98px]">
          <p className="text-[10px] text-[#5b5b5b]">
            <br />
          </p>
          <div
            className="flex items-center space-x-1 p-2 rounded-xl max-h-[38px]"
            style={{
              background: "hsl(324deg 100% 94%)",
              border: "1.5px solid hsl(334deg 100% 74%)",
            }}
          >
            {chainType === "bsc" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 2000 2000"
                >
                  <g fill="#ed3a85">
                    <path d="M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z" />
                    <path d="M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11" />
                  </g>
                </svg>
                <p className="flex-1 font-bold text-[16px] text-center text-[#ed3a85]">
                  {amountByChain}
                </p>
              </>
            ) : chainType === "polygon" ? (
              <>
                <svg
                  viewBox="0 0 38.4 33.5"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                >
                  <g>
                    <path
                      fill="#ed3a85"
                      d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
                                c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
                                c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                                c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
                                L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                                c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"
                    />
                  </g>
                </svg>
                <p className="flex-1 font-bold text-[16px] text-center text-[#ed3a85]">
                  {amountByChain}
                </p>
              </>
            ) : chainType === "eth" ? (
              <>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path fill="#ed3a85" d="M11,24L25,2l14,22l-14,8L11,24z" />
                  <path fill="#ed3a85" d="M25,2l14,22l-14,8V2z" />
                  <path fill="#ed3a85" d="M11,27l14,8l14-8L25,46L11,27z" />
                  <path
                    fill="#ed3a85"
                    d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"
                  />
                  <path fill="#ed3a85" d="M25,18l14,6l-14,8V18z" />
                </svg>
                <p className="flex-1 font-bold text-[16px] text-center text-[#ed3a85]">
                  {amountByChain}
                </p>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-5 w-5"
                >
                  <polygon
                    fill="#ed3a85"
                    points="24,44 2,22.5 10,5 38,5 46,22.5"
                  />
                  <path
                    fill="#fff"
                    d="M38,22c0-1.436-4.711-2.635-11-2.929V16h8v-6H13v6h8v3.071C14.711,19.365,10,20.564,10,22	s4.711,2.635,11,2.929V36h6V24.929C33.289,24.635,38,23.436,38,22z M24,24c-6.627,0-12-1.007-12-2.25c0-1.048,3.827-1.926,9-2.176	v3.346c0.96,0.06,1.96,0.08,3,0.08s2.04-0.02,3-0.08v-3.346c5.173,0.25,9,1.128,9,2.176C36,22.993,30.627,24,24,24z"
                  />
                </svg>
                <p className="flex-1 font-bold text-[16px] text-center text-[#ed3a85]">
                  {amountUSD}
                </p>
              </>
            )}
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[#5b5b5b]">
            <br />
          </p>
          <p className="text-[#dee2e6] text-lg">=</p>
        </div>
        <div>
          <p className="text-[10px] text-[#5b5b5b]">
            <br />
          </p>
          <p
            className="text-[#dee2e6] text-lg font-bold"
            style={{
              background:
                "transparent linear-gradient(90deg, #ff387a 0%, #e6398c 17%, #a63eba 52%, #4845ff 100%) 0% 0% no-repeat padding-box",
              //@ts-ignore
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >{`${amountUSD > 0 ? YPREDAmount : 0} YPRED`}</p>
        </div>
      </div>
      <div className="relative flex flex-col items-center border-t-2 w-[80%] self-center flex-1 pt-2">
        <CountDown chainType={chainType} onChangeTimeout={onChangeTimeout} />
        <div className="text-lg -tracking-tighter mt-4 flex flex-row space-x-2">
          <p>PAY</p>
          <p className="font-semibold text-[#ed3a85]">{`${chainType === "usdt" ? amountUSD : amountByChain
            }  ${chainType === "bsc"
              ? "BNB"
              : chainType === "polygon"
                ? "MATIC"
                : "USDT"
            } ${chainType === "polygon"
              ? "(POLYGON)"
              : chainType === "bsc"
                ? "(BSC20)"
                : chainType === "eth"
                  ? "(ETH)"
                  : network === "eth" && chainType === "usdt"
                    ? "(ETH)"
                    : network === "bsc" && chainType === "usdt"
                      ? "(BSC20)"
                      : network === "polygon" && chainType === "usdt"
                        ? "(POLYGON)"
                        : ""
            }`}</p>
        </div>
        <div className="text-[#bdbdbd] text-[14px] font-medium">
          Make payment before time out!
        </div>
        {
          <div className="w-[30%] my-2 min-w-[200px] flex justify-center items-center">
            {qrAddress &&
              ((amountByChain && chainType !== "usdt") ||
                (chainType === "usdt" && amountUSD && qrAddress)) &&
              amountUSD >= MIN_USD ? (
              <img
                src={`https://chart.googleapis.com/chart?cht=qr&chl=ethereum%3A${qrAddress}%3Famount%3D${amountByChain}&chs=150x150&choe=UTF-8&chld=L%7C2`}
                className="w-[100%] lg:w-[100%]"
              />
            ) : (
              <div>
                <img className="w-8 h-8" src="img/icon/img-loading.gif" />
              </div>
            )}
          </div>
        }

        <div className="flex items-center space-x-2">
          <div>{amountUSD >= MIN_USD ? truncateHash(qrAddress, 5) : "...."}</div>
          <button
            onClick={copyClipboard}
            className="text-[#ed3a85] active:text-stone-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <button
        disabled
        className="flex disabled:opacity-100 mt-1 flex-row justify-center items-center btn-grad-1 mb-4 self-center w-full max-w-[300px] text-center"
      >
        <img className="w-4 h-4" src="img/icon/img-loading.gif" />
        <span className="pl-2">Waiting for the payment...</span>
      </button>
    </>
  );
};

export default Waiting;
