import Image from 'next/image'
import React from 'react'

const Button = ({name}) => {
  return (
    <button className='text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] w-[6rem] font-inter text-primary  py-2 px-[0.8rem] rounded-[0.7rem] hover:bg-blue-100 hover:text-blue-500 focus-visible:text-blue-500 transition-colors duration-300'>
      {name}
    </button>
  )
}

export default Button