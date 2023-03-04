/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// Showing the video at the first screen of this website

import React, { useEffect } from "react";

export default function VideoSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const gifRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("pause", () => {
        videoRef.current.classList.add("hidden");
        gifRef.current.classList.remove("hidden");
        videoRef.current.controls = false;
        videoRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="col-md-6" style={{ marginRight: "-10px" }}>
      <div className="row">
        <div className=" col-md-12 ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/AH-IoubyHAM?controls=0&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      <div
        className="under-video-text fw-regular"
        style={{
          color: "#000",
          fontSize: "19px",
          marginTop: "10px",
          marginLeft: "10px",
          fontWeight: "200",
        }}
      >
        State-of-Art predictive models & data insights built by{" "}
        <span className="fw-bold text-grad1">
          top 1% AI Developers & Quants
        </span>{" "}
        enabling market participants to get an{" "}
        <span className="fw-bold text-grad1">unbeatable edge </span> in
        different industries including finance, health & human resource.
      </div>

      <div className="row video-feature">
        <div className="col-6 flex flex-row space-x-1 items-center">
          <img
            className="w-16 h-16 video-feature-image"
            src="/img/icon/POWERED_icon.png"
            alt=""
          />
          <div className="flex flex-col">
            <span className="first-line">Powered by</span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "16px",
              }}
            >
              Matic Polygon
            </span>
          </div>
        </div>
        <div className="col-6 flex flex-row space-x-1 items-center">
          <img
            className="w-16 h-16 video-feature-image"
            src="/img/icon/SUPPLY_icon.png"
            alt=""
          />
          <div className="flex flex-col">
            <span className="first-line">Supply</span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "24px",
              }}
            >
              100M
            </span>
          </div>
        </div>
        <div className="col-6 flex flex-row space-x-1 items-center">
          <img
            className="w-16 h-16 video-feature-image"
            src="/img/icon/AUDIT_icon.png"
            alt=""
          />
          <span className="kyc-audit">Audit</span>
        </div>
        <div className="col-6 flex flex-row space-x-1 items-center">
          <img
            className="w-16 h-16 video-feature-image"
            src="/img/icon/KYC_icon.png"
            alt=""
          />
          <span className="kyc-audit">KYC</span>
        </div>
      </div>
    </div>
  );
}
