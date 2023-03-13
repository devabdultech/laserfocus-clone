import Image from 'next/image'
import React from 'react'

const Company = ({src, alt}) => {
  return (
    <div className='w-full relative h-16'>
        <div className='absolute bg-white inset-0'>
          <a className='h-full grid place-items-center grid-rows-1 mix-blend-luminosity opacity-50 hover:mix-blend-normal hover:opacity-100 focus-visible:mix-blend-normal focus-visible:opacity-100' href="">
            <Image className='transition duration-300 ease-in-out' src={src} alt={alt} />
          </a>
        </div>
    </div>
  )
}

export default Company