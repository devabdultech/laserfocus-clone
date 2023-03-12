import React from 'react'
import CTA from '../ui/CTA';
import wallet from "assets/images/svg/wallet.svg"
import Image from 'next/image';

const MainPage = () => {
  return (
    <section className='px-[0.8rem] md:px-9 py-10 lg:py-4'>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='grid gap-4 text-center lg:text-left'>
          <h1 className='font-libre text-[2.3rem] font-bold md:text-[3rem] lg:text-[3.5rem] text-primary'>Make Salesforce easy to use</h1>
          <p className='font-inter text-[1.5rem] font-light text-primary'>Laserfocus makes your Salesforce process as simple as possible, but not simpler. Made for data-driven GTM teams who dont want to sacrifice efficiency.</p>

          <div className='flex flex-col justify-center items-center gap-6 font-inter lg:justify-start lg:items-start'>
            <div className=''><CTA text='Sign up for free' /></div>
            <div className='flex items-center gap-2 text-secondary'>
              <Image src={wallet} alt='wallet' />
              <span>No credit card needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage