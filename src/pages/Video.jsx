import React from "react";
import Header from "../components/Header";
import Heading from "../components/prime-components/Heading";
import BodyContainer from "../components/BodyContainer";
import HowToDownload from "../components/HowToDownload";
import { videoFeatureCardData } from "../data/featureCard";
import FeatureCard from "../components/FeatureCard";
import DownloadApp from "../components/DownloadApp";
import FeatureSection from "../components/FeatureSection";
import FAQs from "../components/FAQs";
const Video = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='Instagram Video Downloader'
        desc='Download Videos from Instagram'
      />
      {/* heading and paragram */}
      <BodyContainer>
        <div className='flex flex-col gap-1.5 items-center my-6'>
          <Heading>Download Instagram Videos</Heading>
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
          <Heading>How to download videos from Instagram?</Heading>
          <p className='text-lg text-center'>
            Below are the three easy and quickest steps to download an Instagram
            video:
          </p>
        </div>
        <HowToDownload />
        {/* how to download section end */}

        <DownloadApp />

        {/* featureCard section start */}
        <Heading>Download Instagram Video</Heading>
        <FeatureCard data={videoFeatureCardData} />
        {/* featureCard section end */}

        <FeatureSection />
        <FAQs />
      </BodyContainer>
    </div>
  );
};

export default Video;
