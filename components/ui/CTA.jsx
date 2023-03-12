import React from 'react'

const CTA = ({href, text}) => {
  return (
    <a className='text-white text-[0.6rem] font-medium font-inter px-3 py-2 md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] rounded-[0.8rem] bg-cta focus-within:animate-gradientbg hover:animate-gradientbg' href={href}>
      {text}
    </a>
  )
}

export default CTA