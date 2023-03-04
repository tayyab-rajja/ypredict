import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const gifRef = useRef<HTMLDivElement>(null);

  return (
    <div className="basis-[45%]">
      <div className="">
        <iframe
          src="https://www.youtube-nocookie.com/embed/AH-IoubyHAM?controls=0&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-[420px]"
        ></iframe>
      </div>

      <div>
        <p className="text-[1em] leading-[2] py-4 font-light text-white">
          State-of-Art predictive models & data insights built by top 1% AI
          Developers & Quants enabling market participants to get an unbeatable
          edge in different industries including finance, health & human
          resource.
        </p>
      </div>

      <div className="video-features  bg-skin-softDark p-4 rounded-2xl">
        <div className="p-4 flex flex-col gap-y-6 ">
          <div className="flex 	 justify-between grid-cols-2">
            <div className="flex items-center gap-3">
              <div>
                <Image
                  width={55}
                  height={55}
                  className="block"
                  src={'/img/icon/POWERED_icon.png'}
                  alt="powerd"
                />
              </div>
              <h4 className="block space-y-1">
                <span className="text-xs block text-white">Powered by</span>
                <span className="text-md block text-white">Matic Polygon</span>
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Image
                  width={55}
                  height={55}
                  className="block"
                  src={'/img/icon/AUDIT_icon.png'}
                  alt="powerd"
                />
              </div>
              <h4 className="block space-y-1">
                <span className="text-xs block text-white sr-only">
                  Powered by
                </span>
                <span className="text-md block text-white">Audit</span>
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <Image
                  width={55}
                  height={55}
                  className="block"
                  src={'/img/icon/SUPPLY_icon.png'}
                  alt="powerd"
                />
              </div>
              <h4 className="block space-y-1">
                <span className="text-xs block text-white sr-only"></span>
                <span className="text-md block text-white">Supply</span>
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Image
                  width={65}
                  height={65}
                  className="block"
                  src={'/img/icon/KYC_icon.png'}
                  alt="powerd"
                />
              </div>
              <h4 className="block space-y-1">
                <span className="text-xs block text-white sr-only"></span>
                <span className="text-md block text-white">KYC</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
