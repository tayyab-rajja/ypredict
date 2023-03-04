/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// Progres bar for showing how much should have done.

import React from "react";
import { Step_1, Step_2, Step_3 } from "./StepsComponents";

export default function ProgressBar(props: { stepsStatus; buyType }) {
  return (
    <div className="w-full h-12 ">
      <div className="w-full  flex flex-row sm:px-8">
        <div
          className={`flex flex-row items-center space-x-2 ${
            props.buyType === "usdt" ? "w-1/3" : "w-1/2"
          }`}
        >
          <Step_1 status={props.stepsStatus.step_1.status} />
        </div>
        {props.buyType === "usdt" && (
          <div className="w-1/3 flex flex-row items-center space-x-2 ">
            <Step_2 status={props.stepsStatus.step_2.status} />
          </div>
        )}
        <div
          className={`flex flex-row items-center space-x-2 ${
            props.buyType === "usdt" ? "w-1/3" : "w-1/2"
          }`}
        >
          <Step_3 status={props.stepsStatus.step_3.status} />
        </div>
      </div>
    </div>
  );
}
