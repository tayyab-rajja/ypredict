import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu2Line } from 'react-icons/ri';
const Header: React.FC = () => {
  return (
    <header className="main-container px-4 lg:px-0 py-6 flex justify-between">
      <div className="logo">
        <Image
          src={'/ypred-coin.png'}
          className=" lg:hidden"
          width={100}
          height={80}
          alt="logo"
        />
        <Image
          src={'/ypred-coin.png'}
          className="hidden lg:block"
          width={168}
          height={120}
          alt="logo"
        />
      </div>
      <nav>
        <ul className="hidden lg:flex items-center gap-x-8 nav-item">
          <li className="nav-link ">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="nav-link ">
            <Link href={'/app'}>App</Link>
          </li>
          <li className="nav-link ">
            <Link href={'/token'}>Token</Link>
          </li>
          <li className="nav-link ">
            <Link href={'/community'}>Community</Link>
          </li>
          <li className="beta_btn">
            <button className="text-skin-pink rounded-xl text-[1em] font-light border-2  border-skin-pink px-4 py-2">
              Beta Access
            </button>
          </li>
        </ul>
        <RiMenu2Line size={25} className="block text-white lg:hidden" />
      </nav>
    </header>
  );
};

export default Header;
