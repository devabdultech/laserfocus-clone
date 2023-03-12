import logo from "assets/images/svg/logo.svg"
import Image from "next/image"
import Button from "../ui/Button"
import CTA from "../ui/CTA"
import MobileNav from "../ui/MobileNav"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="">
      <div className="sticky top-0 z-10">
        <div className="px-[0.8rem] py-3 md:px-8 md:py-5 grid md:grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)] items-center z-10 relative">
          <Link href='/'>
            <div className="flex gap-2 justify-start items-center">
              <Image className="w-4 md:w-5 lg:w-6 xl:w-8" src={logo} alt='logo' />
              <span className="font-libre font-bold leading-none text-[#30333A]">laserfocus</span>
            </div>
          </Link>
          <div className="hidden lg:grid grid-flow-col gap-2">
            <Button name='Product'/>
            <Button name='Pricing' />
            <Button name='Blog' />
          </div>

          <div className="ml-auto pl-2 col-start-3 grid grid-flow-col gap-1 md:gap-2">
            <div className="hidden lg:block">
              <Button name='Log In' />
            </div>

            {!toggle && <CTA href='' text='Try for free'/>}
            
            {toggle ? (
              <button onClick={() => setToggle(!toggle)} type="button" aria-expanded="true" className="group w-[1.9444rem] h-[1.9444rem] rounded-[0.7rem] bg-blue-100 grid place-content-center gap-[4px] transition-colors lg:hidden" aria-controls="lf-nav-bar-mobile-menu">
                <div className="w-[14px] h-[2px] bg-blue-500 rounded-full col-start-1 row-start-1 transition rotate-45"></div>
                <div className="w-[14px] h-[2px] bg-blue-500 rounded-full col-start-1 row-start-1 transition -rotate-45"></div>
              </button>
              ) : (
              <button onClick={() => setToggle(!toggle)} type="button" aria-expanded="false" className="group w-[1.9444rem] h-[1.9444rem] rounded-[0.7rem] bg-blue-100 grid place-content-center gap-[4px] transition-colors lg:hidden cursor-pointer">
                <div className="w-[14px] h-[2px] bg-blue-500 rounded-full col-start-1 row-start-1 transition translate-y-[-0.1875rem]"></div>
                <div className="w-[14px] h-[2px] bg-blue-500 rounded-full col-start-1 row-start-1 transition translate-y-[0.1875rem]"></div>
              </button>
              )
            } 

          </div>
        </div>
      </div>

      {toggle && 
        <div className="absolute top-0 left-0 w-full h-full overflow-y-scroll  overscoll-x-hidden lg:hidden">
          <MobileNav />
        </div>
      }
    </nav>
  )
}

export default Header