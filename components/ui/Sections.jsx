import { useEffect } from "react";
import Reviews from "./Reviews";

const Sections = ({ vidSrc, header, paragraphOne, paragraphTwo, reviewText, reviewerPhoto, reviewerName, reviewerWork, logoSrc, reverse }) => {
    
  useEffect(() => {
    const video = document.getElementById('myVideo');
    video.play();
  }, []);

  return (
    <div className={`flex flex-col gap-10 lg:flex-row px-8 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className='rounded-lg md:w-[50%]'><video className='rounded-2xl md:max-h-[80%]' id="myVideo" src={vidSrc} autoPlay loop muted playsInline controls={false}/></div>

        <div className='lg:w-[50%]'>
            <div className="flex flex-col gap-5 text-primary mb-10">
                <h1 className="text-[2rem] lg:text-[2.5rem] leading-[1.4] font-libre font-bold">{header}</h1>
                <p className="text-[1.4rem] lg:text-[1.6rem] font-inter">{paragraphOne}</p>
                <p className="text-[1.4rem] lg:text-[1.6rem] font-inter">{paragraphTwo}</p>
            </div>
            <Reviews logoSrc={logoSrc} reviewText={reviewText} reviewerPhoto={reviewerPhoto} reviewerName={reviewerName} reviewerWork={reviewerWork} />
        </div>
    </div>
  )
}

export default Sections;
