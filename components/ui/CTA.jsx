import React from 'react'

const CTA = ({href, text}) => {
  return (
    <a className='w-full text-white text-[1.1rem] font-medium font-inter px-3 py-2 md:text-[1rem] lg:text-[1.1rem] xl:text-[1rem] rounded-[0.6rem] bg-cta focus-within:animate-gradientbg hover:animate-gradientbg transition-transform duration-500 cursor-pointer' href={href}>
      {text}
    </a>
  )
}

export default CTA
