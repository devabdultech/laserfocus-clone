import Image from 'next/image';
import { useEffect } from 'react';

import CTA from '../ui/CTA';
import wallet from "assets/images/svg/wallet.svg"

const MainPage = () => {

  useEffect(() => {
    const video = document.getElementById('myVideo');
    video.play();
  }, []);

  return (
    <section className=''>
      <div className='w-[90vw] md:w-[85vw] xl:w-[80vw] max-w-[66rem] mx-auto flex flex-col-reverse md:grid gap-1 md:gap-4 md:grid-cols-2 items-center'>
        <div className='text-center md:text-left md:row-start-1 md:-mr-24 md:py-16 lg:ml-20 lg:z-10 grid gap-12'>
          <h1 className='font-libre text-[2.3rem] font-bold md:text-[3rem] lg:text-[3.5rem] text-primary'>Make Salesforce easy to use</h1>
          <p className='font-inter text-[1.5rem] font-light text-primary'>Laserfocus makes your Salesforce process as simple as possible, but not simpler. Made for data-driven GTM teams who dont want to sacrifice efficiency.</p>

          <div className='flex flex-col justify-center items-center gap-6 pb-16 font-inter lg:justify-start lg:items-start '>
            <div className=''><CTA text='Sign up for free' /></div>
            <div className='flex items-center gap-2 text-secondary'>
              <Image src={wallet} alt='wallet' />
              <span>No credit card needed</span>
            </div>
          </div>
        </div>

        <div className='md:col-start-2 md:mb-auto max-h-[60vh] md:max-h-screen w-full h-full mx-auto'><video id="myVideo" src='/videos/marbles-on-helix-slide.mp4' autoPlay loop playsInline preload='auto'/></div>
      </div>

    </section>
  )
}

export default MainPage