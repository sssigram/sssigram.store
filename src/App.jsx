import React from "react";
//component importHeading
import Header from "./components/Header";
import HowToDownload from "./components/HowToDownload";
import FeatureCard from "./components/FeatureCard";
import Heading from "./components/prime-components/Heading";
import BodyContainer from "./components/BodyContainer";
import FeatureSection from "./components/FeatureSection";
import FAQs from "./components/FAQs";
import DownloadApp from "./components/DownloadApp";
import { allFeatureCardData } from "./data/featureCard";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='Instagram Downloader'
        desc='Download Videos, Reels, Photos, IGTV, carousel from Instagram'
      />
      <BodyContainer>
        <div className='flex flex-col gap-1.5 items-center my-6'>
          <h3 className='text-4xl font-bold mb-4 text-violet-700'>
            Download Instagram IGTV Videos
          </h3>
          <p className='text-lg'>
            Downloading Instagram videos with the IGTV video downloader is easy,
            fast, and time-saving. When browsing through Instagram or coming
            across a post with an IGTV video you want to download, simply copy
            the URL of that IGTV video and paste it into the designated field on
            the iGram page. Finally, click the Download button. That's it!
          </p>
        </div>
        {/* How to download section start */}
        <div>
          <Heading>HOW TO DOWNLOAD ANYTHING FROM INSTAGRAM?</Heading>
          <p className='text-lg text-center'>
            Below are the three easy and quickest steps to download an Instagram
            Anything:
          </p>
        </div>
        <HowToDownload />
        {/* How to download section end */}

        {/* featureCard section start */}
        <Heading>Your Instagram Video Downloader Features</Heading>
        <FeatureCard data={allFeatureCardData} />
        {/* featureCard section end */}
        <FeatureSection />
        <FAQs />
        <DownloadApp />
      </BodyContainer>
    </div>
  );
};

export default App;
