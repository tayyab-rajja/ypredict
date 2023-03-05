import Image from 'next/image';
import Count from './Count';
const Spomsors = () => {
  return (
    <div className="main-container">
      <Count />;{/* Sponsor */}
      <div className="py-5">
        <h2 className="text-center text-white font-semibold ">
          POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
        </h2>
        <div className="grid pt-5 space-y-8 grid-cols-1 md:grid-cols-5 place-items-center">
          <div className="flex items-center">
            <Image
              src="/img/sponsors/1.png"
              width={100}
              height={50}
              alt="sponsors"
            />
          </div>
          <div>
            <Image
              src="/img/sponsors/2.png"
              width={120}
              height={50}
              alt="sponsors"
            />
          </div>
          <div>
            <Image
              src="/img/sponsors/3.png"
              width={100}
              height={50}
              alt="sponsors"
            />
          </div>
          <div>
            <Image
              src="/img/sponsors/4.png"
              width={100}
              height={50}
              alt="sponsors"
            />
          </div>
          <div>
            <Image
              src="/img/sponsors/5.png"
              width={100}
              height={50}
              alt="sponsors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spomsors;
