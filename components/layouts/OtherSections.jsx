import React from 'react'
import Sections from '../ui/Sections';

import VaiLogo from "assets/images/svg/VAI logo.svg"
import PersonioLogo from "assets/images/svg/Personio logo.svg"
import ChocoLogo from "assets/images/svg/Choco logo.svg"

import philip from "assets/images/webp/philip.webp"
import gregor from "assets/images/webp/gregor.webp"
import anthony from "assets/images/webp/anthony.webp"

const OtherSections = () => {
  return (
    <section className='flex flex-col gap-20 md:gap-36 lg:px-20 mb-40'>
        <Sections 
            vidSrc='/videos/stack-cards.mp4'
            header= 'Simple guidelines for each stage'
            paragraphOne= 'Laserfocus will guide you on what to focus on at each stage.'
            paragraphTwo = 'You will never forget any step; nothing slips through the cracks again.'
            logoSrc = {VaiLogo}
            reviewText= '“My team increased productivity by 25% - more calls, more deals.”'
            reviewerPhoto = {philip}
            reviewerName = 'Philip'
            reviewerWork = 'VP Sales from Vai Trade'
            reverse={true}
        />

        <Sections vidSrc='/videos/marbles-slide.mp4'
            header= 'Make your Salesforce clean and usable again'
            paragraphOne= 'Eliminate duplicate fields and ambiguous data for consistency.'
            paragraphTwo = 'Your team will enjoy a streamlined interface while Salesforce runs the workflows behind the scene.'
            logoSrc = {PersonioLogo}
            reviewText = '“I am in love. My pipe is up to date for the first time.”'
            reviewerPhoto = {gregor}
            reviewerName = 'Gregor'
            reviewerWork = 'Account Executive from Personio'
        />

        <Sections 
            vidSrc='/videos/pipeline-table.mp4' 
            header= 'Stay agile for your GTM'
            paragraphOne= 'Your business requirements and processes might change often.'
            paragraphTwo = 'Laserfocus ensures that everyone adapts to your new process by guiding everyone through the latest changes.'
            logoSrc = {ChocoLogo}
            reviewText = '“I started using it and now all the other departments are on Laserfocus, too.”'
            reviewerPhoto = {anthony}
            reviewerName = 'Anthony'
            reviewerWork = 'Operations at Choco'
            reverse={true}
        />
    </section>
  )
}

export default OtherSections