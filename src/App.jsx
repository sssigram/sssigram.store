import React from "react";
//component importHeading
import Header from "./components/Header";
import Body from "./components/Body";
import HowToDownload from "./components/HowToDownload";
import FeatureCard from "./components/FeatureCard";
import Heading from "./components/prime-components/Heading";
import BodyContainer from "./components/BodyContainer";
import FeatureSection from "./components/FeatureSection";
import Accordion from "./components/Accordion";
import DownloadApp from "./components/DownloadApp";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <BodyContainer>
        <div className='flex flex-col gap-1.5 items-center my-6 mt-20'>
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
        <Heading>HOW TO DOWNLOAD ANYTHING FROM INSTAGRAM?</Heading>
        <HowToDownload />
        {/* How to download section end */}

        {/* featureCard section start */}
        <Heading>Your Instagram Video Downloader Features</Heading>
        <FeatureCard />
        {/* featureCard section end */}
        <FeatureSection />
        <Accordion />
        <DownloadApp />
      </BodyContainer>
    </div>
  );
};

export default App;
