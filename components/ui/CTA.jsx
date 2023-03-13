import React, { useState } from 'react'

const CTA = ({href, text, arrow}) => {
  
  return (
    <a className='flex justify-center items-center gap-2 w-full text-white text-center text-[1.1rem] font-medium font-inter px-3 py-2 md:text-[1rem] lg:text-[1.1rem] xl:text-[1rem] rounded-[0.6rem] bg-cta focus-within:animate-gradientbg hover:animate-gradientbg transition-transform duration-500 cursor-pointer' href={href}>
      {text}
      {arrow && 
        <div className="overflow-hidden mr-[-0.9rem]">
          <div aria-hidden="true" className="disabled:animate-none relative hover:animate-slide focus-visible:animate-slide pr-[0.9rem]">→
            <div className="absolute top-0 right-full select-none pr-[0.9rem]">→</div>
          </div>
        </div>
      }
      </a>
  )
}

export default CTA
