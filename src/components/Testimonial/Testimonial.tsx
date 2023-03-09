import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react'
import quatationIcon from '../../../public/img/icon/quotes.png';
import testimonal1 from '../../../public/img/testimonial.png';
import blueLight from '../../../public/img/icon/blue_light_rotate.png';
import playButton from "../../../public/img/icon/play-btn.png"
const Testimonial: React.FC = () => {
  // useEffect(() => {
  //   const modal = document.getElementById("myModal");
  //   const btn = document.getElementById("playBtn");
  //   const btnMobile = document.getElementById("playBtnMobile");
  //   const span = document.getElementsByClassName("close")[0];
  //   const video = document.getElementById("video-testimonial");

  //   btn.addEventListener("click", () => {
  //     modal.style.display = "block";
  //     video.currentTime = 0;
  //     video.play();
  //   });
  //   btnMobile.addEventListener("click", () => {
  //     modal.style.display = "block";
  //     video.currentTime = 0;
  //     video.play();
  //   });
  //   span.addEventListener("click", () => {
  //     modal.style.display = "none";
  //     video.pause();
  //   });
  //   window.addEventListener("click", () => {
  //     if (event.target == modal) {
  //       video.pause();
  //       modal.style.display = "none";
  //     }
  //   });
  // }, []);
  return (
    <div className="flex flex-col space-y-10 w-full lg:w-[80%] mx-auto  lg:flex-row main-container pb-10 justify-center lg:justify-between ">
      <div className="lg:flex relative gap-x-2  basis-[65%]">
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row gap-x-3">
            <div>
              <Image
                className="w-[75px] mx-auto  block lg:inline object-cover"
                src={quatationIcon}
                alt="quetes"
              />
            </div>
            <div className="flex flex-col gap-y-1 lg:gap-y-3">
              <span className="text-[1em]   md:text-[1.4em] font-medium text-white">
                Join the force with a global team
              </span>
              <p className="text-base w-full lg:w-[80%]  font-extralight z-[9999] leading-[1.6] text-[#fefefe]">
                "These guys legit know how to build crazy scarcity. I have been
                a part of their previous token projects, in one of them their
                token sold out in under 10 seconds. I'm in yPredict."
              </p>
            </div>
          </div>

          <div className="hidden lg:block absolute margin-glow">
            <Image src={blueLight} alt="tarif" />
          </div>
        </div>
      </div>
      <div className="text-center lg:text-left basis-[25%]">
        <Image
          className="mx-auto pb-2 max-w-[190px]"
          src={testimonal1}
          alt="tarif"

        />
        {/* <Image
          src={playButton}
          alt="play button"
          className="testimonial-play-button"
          id="playBtn"
        /> */}
        <div className="text-center">
          <h2 className="text-[1em] md:text-[1.6em] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-skin-pink  via-skin-pink  to-[#572bf7]">
            Tokenomics
          </h2>
          <p className="text-white text-base font-medium">
            Quant at Hillhouse Capital
          </p>
        </div>
        {/* <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="close">&times;</div>
            <video src="/video/testimonial_1.mp4" id="video-testimonial" />
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Testimonial;
