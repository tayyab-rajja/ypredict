import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="main-container hidden lg:flex  py-6  justify-between">
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
<<<<<<< HEAD
            <button className="text-skin-pink rounded-xl text-[1em] font-light border-2  border-skin-pink px-4 py-2 hover-btn">
=======
            <button className="text-skin-pink rounded-xl text-[1em] font-light border-2  border-skin-pink px-4 py-2">
>>>>>>> eccb218c5b0e47cba9ebbf343b52bb87864082b1
              Beta Access
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
