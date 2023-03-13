import Image from "next/image"
import { useState } from "react";
import videoThumb from "assets/images/webp/quick-demo-video-thumbnail.webp";
import VideoOverlay from "../ui/VideoOverlay";
import CTA from "../ui/CTA";

const ProductDisplay = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="mt-14 lg:mt-20">
        <div className='bg-yellow-50 py-32 md:py-36 lg:py-48 pt-12 pb-8 md:pt-14 lg:pt-16 md:pb-10 lg:pb-12'>
            <div className='w-[90vw] md:w-[85vw] xl:w-[80vw] mx-auto grid gap-6 text-center justify-items-center max-w-xl'>
                <a href="https://www.producthunt.com/posts/laserfocus?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-laserfocus" target="_blank" rel="noreferrer">
                    <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=351212&amp;theme=light" alt="Laserfocus - Beautiful UX for Salesforce users | Product Hunt" style="width:250px;height:54px" width={250} height={54}  />
                </a>
                <h2 className="font-libre font-bold text-[2rem] leading-[1.1] md:text-[2.3rem]">Beautiful, fast, simple to use</h2>
                <p className="font-inter text-[1.2rem] leading-normal">Organize your tasks, emails, events, notes, and Salesforce updates within one interface. Reduce jumping between different tabs and tools to increase your efficiency and focus.</p>
            </div>

            <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto rounded-xl mt-10">
              <Image className="rounded-[1.8rem] cursor-pointer" src={videoThumb} alt='video thumbnail' onClick={() => setShowVideo(true)} />

              {/* Video Overlay */}
              {showVideo && (
                <VideoOverlay
                  url="/videos/lf-demo-video.mp4"
                  onClose={() => setShowVideo(false)}
                />
              )}
            </div>

            <div className="flex justify-center items-center mt-8 w-[30%] md:w-[20%] lg:w-[15%] mx-auto">
              <CTA text='Try for free' arrow={true} />
            </div>
        </div>  
    </section>
  )
}

export default ProductDisplay