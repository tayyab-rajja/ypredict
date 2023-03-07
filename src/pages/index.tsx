import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';

import HeroSection from '@/components/Hero/HeroSection';
import Spomsors from '@/components/Sponsors';
import Carousel from '@/components/Carousel/Carousel';
import PlatformFeatures from '@/components/Features/Features';
import Trusted from '@/components/Trusted/Trusted';
import WhyInvesting from '@/components/WhyInvesting/WhyInvesting';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <HeroSection />
        <Spomsors />
        <Carousel />
        <PlatformFeatures />
        <Trusted />
        <WhyInvesting />
      </>
    </>
  );
}
