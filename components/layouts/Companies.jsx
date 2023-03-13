import React, { useState, useEffect } from 'react';
import Company from '../ui/Company';

import VAILogo from "assets/images/svg/VAI logo.svg";
import UpflowLogo from "assets/images/svg/Upflow logo.svg";
import PersonioLogo from "assets/images/svg/Personio logo.svg";
import EatfirstLogo from "assets/images/svg/Eatfirst logo.svg";
import HarnessGivingLogo from "assets/images/svg/Harness Giving logo.svg";
import WallboxLogo from "assets/images/svg/Wallbox logo.svg";
import BookingkitLogo from "assets/images/svg/bookingkit logo.svg";
import CharthopLogo from "assets/images/svg/Charthop logo.svg";
import ChocoLogo from "assets/images/svg/Choco logo.svg";

const logos = [
  { src: VAILogo, alt: 'VAI Logo' },
  { src: UpflowLogo, alt: 'Upflow Logo' },
  { src: WallboxLogo, alt: 'Wallbox Logo' },
  { src: PersonioLogo, alt: 'Personio Logo' },
  { src: ChocoLogo, alt: 'Choco Logo' },
  { src: EatfirstLogo, alt: 'Eatfirst Logo' },
  { src: HarnessGivingLogo, alt: 'Harness Giving Logo' },
  { src: BookingkitLogo, alt: 'Bookingkit Logo' },
  { src: CharthopLogo, alt: 'Charthop Logo' },
];

const Companies = () => {
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingLogos = logos.filter((_, index) => index !== logoIndex);
      const newIndex = Math.floor(Math.random() * remainingLogos.length);
      const newLogoIndex = logos.indexOf(remainingLogos[newIndex]);
      setLogoIndex(newLogoIndex);
    }, Math.floor(Math.random() * 3000) + 2000); // random time between 2s and 5s
    return () => clearInterval(interval);
  }, [logoIndex]);

  const displayedLogos = logos
    .slice(logoIndex, logoIndex + 6)
    .concat(logos.slice(0, logoIndex))
    .slice(0, 6);

  return (
    <section className='mt-14 lg:mt-20'>
      <div className='w-[90vw] md:w-[85vw] xl:w-[80vw] max-w-[66rem] mx-auto text-center grid gap-10 py-5 pb-12 lg:py-[7rem]'>
        <div className='grid grid-cols-2 gap-y-2 gap-x-[8%] place-items-center sm:grid-cols-3 sm:gap-x-[5%] xl:grid-cols-6 xl:gap-x-[2%]'>
          {displayedLogos.map((logo) => (
            <Company key={logo.src} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
