/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// For more Specific options about the Card display

import React from "react";

export default function CardHeader(props: {
  selectedSection;
  setSelectedSection;
}) {
  return (
    <div
      className="card-header"
      style={{
        background: "radial-gradient(circle at top left, #f03985, #5144f8)",
        display: "none",
      }}
    >
      <ul
        className="nav nav-tabs card-header-tabs justify-content-center"
        id="bologna-list"
        role="tablist"
      >
        <li className="nav-item" style={{ flex: 1, maxWidth: "111px" }}>
          <div
            onClick={() => props.setSelectedSection("seed")}
            className={`nav-link hover:cursor-pointer flex-nowrap flex justify-center text-center ${
              props.selectedSection === "seed" ? "active" : "text-white"
            }`}
            role="tab"
            aria-controls="deals"
            aria-selected="false"
          >
            <i className="fi fi-sr-lock mr-1"></i>Seed
          </div>
        </li>
        <li className="nav-item" style={{ flex: 1, maxWidth: "111px" }}>
          <div
            onClick={() => props.setSelectedSection("private")}
            className={`nav-link hover:cursor-pointer flex-nowrap flex justify-center text-center ${
              props.selectedSection === "private" ? "active" : "text-white"
            }`}
            role="tab"
            aria-controls="deals"
            aria-selected="false"
          >
            <i className="fi fi-sr-lock mr-1"></i>Private
          </div>
        </li>
        <li className="nav-item" style={{ flex: 1, maxWidth: "111px" }}>
          <div
            onClick={() => props.setSelectedSection("presale")}
            className={`nav-link hover:cursor-pointer flex-nowrap flex justify-center text-center ${
              props.selectedSection === "presale" ? "active" : "text-white"
            }`}
            role="tab"
            aria-controls="deals"
            aria-selected="false"
          >
            <i className="fi fi-sr-unlock mr-1"></i>Presale
          </div>
        </li>
        <li className="nav-item" style={{ flex: 1, maxWidth: "111px" }}>
          <div
            onClick={() => props.setSelectedSection("public")}
            className={`nav-link hover:cursor-pointer flex-nowrap flex justify-center text-center ${
              props.selectedSection === "public" ? "active" : "text-white"
            }`}
            role="tab"
            aria-controls="deals"
            aria-selected="false"
          >
            <i className="fi fi-sr-lock mr-1"></i>Public
          </div>
        </li>
      </ul>
    </div>
  );
}
