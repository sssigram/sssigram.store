import React from "react";
import Header from "../components/Header";
import Heading from "../components/prime-components/Heading";
import BodyContainer from "../components/BodyContainer";
import HowToDownload from "../components/HowToDownload";
import { igtvFeatureCardData } from "../data/featureCard";
import FeatureCard from "../components/FeatureCard";
import DownloadApp from "../components/DownloadApp";
import FeatureSection from "../components/FeatureSection";
import FAQs from "../components/FAQs";
import { howToDownloadData } from "../data/howToDownload";
import { faqIGTVData } from "../data/faqData";
const IGTV = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='IGTV Video Downloader'
        desc='Download Instagram IGTV Videos'
      />
      {/* heading and paragram */}
      <BodyContainer>
        <div className='flex flex-col gap-1.5 items-center my-6'>
          <Heading>Download Instagram IGTV Videos</Heading>
          <p className='text-lg'>
            Downloading Instagram videos with the IGTV video downloader is easy,
            fast, and time-saving. When browsing through Instagram or coming
            across a post with an IGTV video you want to download, simply copy
            the URL of that IGTV video and paste it into the designated field on
            the iGram page. Finally, click the Download button. That's it!
          </p>
        </div>

        {/* how to download section start */}
        <div>
          <Heading>How to download IGTV from Instagram?</Heading>
          <p className='text-lg text-center'>
            To download IGTV videos, follow these easy steps:
          </p>
        </div>
        <HowToDownload data={howToDownloadData} />
        {/* how to download section end */}

        <DownloadApp />

        {/* featureCard section start */}
        <Heading>Your_Domain IGTV Downloader</Heading>
        <FeatureCard data={igtvFeatureCardData} />
        {/* featureCard section end */}

        <FeatureSection />
        <FAQs data={faqIGTVData} />
      </BodyContainer>
    </div>
  );
};

export default IGTV;
