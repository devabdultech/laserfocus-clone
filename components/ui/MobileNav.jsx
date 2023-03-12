import Image from 'next/image'

import blob1 from "assets/images/blobs/blob1.svg"
import blob2 from "assets/images/blobs/blob2.svg"
import blob3 from "assets/images/blobs/blob3.svg"
import blob4 from "assets/images/blobs/blob4.svg"


const MobileNav = () => {
  return (
    <div className='z-30 bg-white h-screen pt-12'>
        <div className='w-[90vw] md:w-[85vw] xl:w-[80vw] max-w-[66rem] mx-auto'>
            <div className='overflow-y-scroll px-1 -mx-1 h-full overscroll-contain'>
                <div className='grid gap-6'>
                    {/* Product */}
                    <div className='grid gap-3'>
                        <h2 className='font-libre text-[1.3rem] font-semibold text-primary'>Product</h2>
                        <div className='grid gap-5'>
                            {/* Features */}
                            <div className='flex gap-2 font-inter font-medium text-[1.2rem] text-primary'>
                                <Image src={blob1} alt='blob' />
                                <span>Features</span>
                            </div>

                            {/* Solutions */}
                            <div className='grid gap-3'>
                                <div className='flex gap-2 font-inter font-medium text-[1.2rem] text-primary'>
                                    <Image src={blob2} alt='blob' />
                                    <span>Solutions</span>
                                </div>

                                <div className='grid gap-3 pl-8 text-secondary font-inter text-[1.1rem]'>
                                    <span>Team Leads</span>
                                    <span>FUll Cycle Sales</span>
                                    <span>SDRs / BDRs</span>
                                    <span>Customer Success</span>
                                    <span>Sales Operations</span>
                                    <span>Account Executives</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className='grid gap-3'>
                        <h2 className='font-libre text-[1.3rem] font-semibold text-primary'>Pricing</h2>
                        <div className='flex gap-2 font-inter font-medium text-[1.2rem] text-primary'>
                            <Image src={blob3} alt='blob' />
                            <span>Choose your plan</span>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className='grid gap-3'>
                        <h2 className='font-libre text-[1.3rem] font-semibold text-primary'>Resources</h2>
                        <div className='flex gap-2 font-inter font-medium text-[1.2rem] text-primary'>
                            <Image src={blob4} alt='blob' />
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div></div>
    </div>
  )
}

export default MobileNav