import Image from 'next/image'
import React from 'react'

const Reviews = ({logoSrc, reviewText, reviewerPhoto, reviewerName, reviewerWork}) => {
  return (
    <div className='grid gap-2'>
      <div className="bg-white">
        <Image className="h-12 lg:h-16 mix-blend-luminosity opacity-50 w-auto" src={logoSrc} alt='logo' />
      </div>
      <div className="grid gap-6 text-gray-700/60 justify-items-start">
        <p className="text-[1.2rem] lg:text-[1.4rem] leading-normal italic w-4/5">{reviewText}</p>
        <div className='grid grid-flow-col gap-[0.8rem] items-center content-start'>
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image  src={reviewerPhoto} alt='photo' />
          </div>
          <div className="text-[1.15rem] leading-[1.2] font-medium grid gap-[0.2rem]">
            <div>{reviewerName}</div>
            <div className="font-bold">{reviewerWork}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews