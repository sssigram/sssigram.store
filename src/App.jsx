import React from "react";
//component importHeading
import Header from "./components/Header";
import Body from "./components/Body";
import HowToDownload from "./components/HowToDownload";
import FeatureCard from "./components/FeatureCard";
import Heading from "./components/prime-components/Heading";
import BodyContainer from "./components/BodyContainer";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <BodyContainer>
        {/* How to download section start */}
        <Heading>HOW TO DOWNLOAD ANYTHING FROM INSTAGRAM?</Heading>
        <HowToDownload />
        {/* How to download section end */}

        {/* feature section start */}
        <Heading>Your Instagram Video Downloader Features</Heading>
        <FeatureCard />
        {/* feature section end */}

        <Body />
      </BodyContainer>
    </div>
  );
};

export default App;
