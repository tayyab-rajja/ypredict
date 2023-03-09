/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// ProgressHeader information for the well being

// React-Standards
import React from "react";
import { useEffect } from "react";

import { BigNumber, ethers } from "ethers";

import {
  YPredictPreSale_ABI,
  YPredictPreSale_address,
} from "../../../config/Mainnet/YPredictPreSale";

export default function Progress() {
  const [vestingContractTarget] = React.useState(2072000); // Set the target value here : Total value to be invested
  const [vestingContractAlreadyInvested, setVestingContractAlreadyInvested] =
    React.useState<number>(1092062); // set the initial value here : I think this value came from the seed sale.
  const [
    vestingContract_All_SoldedToken,
    setVestingContract_All_SoldedToken_USDT,
  ] = React.useState<number>(null); // this will be in Float USD not USDT : Private_Sale_Smart_Contract

  const getAllSoldedToken = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-rpc.com"
    );
    const contract = new ethers.Contract(
      YPredictPreSale_address,
      YPredictPreSale_ABI,
      provider
    );

    const tokenSold_BigNumber = await contract.s_tokenSold();
    const tokenSold = BigNumber.from(tokenSold_BigNumber.toString())
      .div(BigNumber.from("1000000000000000000"))
      .toNumber();
    const pricePerToken_BigNumber = await contract.s_usdtPrice();

    const pricePerToken = (
      parseFloat("1") /
      (parseFloat("1000000") / parseFloat(pricePerToken_BigNumber.toString()))
    ).toFixed(3);

    const allSoldedToken_USD_without_decimals = (
      parseFloat(tokenSold.toString()) * parseFloat(pricePerToken.toString())
    ).toFixed(0);
    setVestingContract_All_SoldedToken_USDT(
      Number(allSoldedToken_USD_without_decimals)
    );
  };

  useEffect(() => {
    getAllSoldedToken();
    fetch(`https://rensketech.com/api/scrach_cards/balance/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.total) {
            setVestingContractAlreadyInvested(
              vestingContractAlreadyInvested + data.total
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div id="public" role="tabpanel" aria-labelledby="deals-tab">
      <div className="flex p-1 ">
        <div className="flex align-center w-full">
          <div>
            <img className="h-full" src="/img/icon/icon_stick.png"></img>
          </div>

          <div className="w-full p-1">
            <h2 className="card-text text-start text-dark2 text-2xl font-semibold">
              Presale 3 (Next Price +5%)
            </h2>

            <div className="flex justify-between w-full">
              <p className="text-red">Upto 1% daily rewards until we list</p>
              <div className="fw-semibold ">
                OPEN <span className="blink_me"></span>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex w-full p-2 items-center space-x-1">
        <div>
          <div className="dropdown w-12">
            <button
              className="btn dropdown-toggle flex items-center"
              style={{ border: " 0", backgroundColor: "white" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/polygon.png"
                alt="Polygon image"
                style={{ width: "30px" }}
              />
            </button>
            <ul
              className="dropdown-menu"
              style={{ width: "10px", fontSize: " 10px" }}
            >
              <li className="flex items-center hover:cursor-pointer">
                <img
                  src="/polygon.png"
                  alt=""
                  style={{
                    width: " 30px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                />
                <span>Polygon Matic Chain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="progress w-full">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            style={{
              width:
                (
                  (vestingContractAlreadyInvested * 100) /
                  vestingContractTarget
                ).toString() + "%",
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <div className="private-on text-success flex items-center">
          $
          {vestingContract_All_SoldedToken != null ? (
            vestingContractAlreadyInvested.toLocaleString("en-US")
          ) : (
            <div className="flex space-x-1 animate-pulse ml-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
          )}
        </div>
        <span className="private-total text-success fw-semibold">
          /${vestingContractTarget.toLocaleString("en-US")}
        </span>
      </div>
    </div>
  );
}
