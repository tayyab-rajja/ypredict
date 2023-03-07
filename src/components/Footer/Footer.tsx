import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/ypred-coin.png';
const Footer = () => {
  return (
    <footer className="border-t border-[#646464] ">
      <div className="main-container pt-8">
        <div className="flex flex-col gap-5 lg:flex-row justify-between">
          <div className="basis-[35%] space-y-3">
            <div className="logo">
              <Image width={100} src={Logo} alt="ypredict" />
            </div>
            <p className="text-sm font-light text-white leading-7">
              Cutting-edge crypto research & trading platform that provides
              traders and investors access to dozens of AI-powered crypto
              analysis tools.
            </p>
            <ul className="flex items-center gap-x-4">
              <li>
                <Link href={'https://telegram.com'}>
                  <Image
                    src={'/img/icon/telegram.png'}
                    alt="telegram"
                    width={20}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href={'https://twitter.com'}>
                  <Image
                    src={'/img/icon/twitter.png'}
                    alt="telegram"
                    width={20}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href={'https:// youtube.com/tarifalhasan'}>
                  <Image
                    src={'/img/icon/youtube.png'}
                    alt="telegram"
                    width={20}
                    height={30}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-x-16">
            <div>
              <h3 className="font-semibold text-white ">PLATFORM</h3>
              <ul className="text-white mt-4 space-y-2 font-light">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">App Beta Access</Link>
                </li>
                <li>
                  <Link href="/">Token</Link>
                </li>
                <li>
                  <Link href="/">Dapp</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white ">HELP</h3>
              <ul className="text-white mt-4 space-y-2 font-light">
                <li>
                  <Link href="/">Email</Link>
                </li>
                <li>
                  <Link href="/">FAQ</Link>
                </li>
                <li>
                  <Link href="/">Education</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright pt-44 pb-3">
          <p className="text-white text-center font-normal">
            © 2023 All right reserved by yPredict.ai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
