import React from "react";
import Header from "../components/Header";
import Heading from "../components/prime-components/Heading";
import BodyContainer from "../components/BodyContainer";
import HowToDownload from "../components/HowToDownload";
import {
  photoFeatureCardData,
  storyFeatureCardData,
} from "../data/featureCard";
import FeatureCard from "../components/FeatureCard";
import DownloadApp from "../components/DownloadApp";
import FeatureSection from "../components/FeatureSection";
import FAQs from "../components/FAQs";
import { howToDownloadData, howToDownloadStory } from "../data/howToDownload";
import { faqPhotoPage, faqStoryPage } from "../data/faqData";
const Story = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='Instagram Photo Download'
        desc='Instagram Photo Downloader'
      />
      {/* heading and paragram */}
      <BodyContainer>
        {/* how to download section start */}
        <div>
          <Heading>How to download photos from Instagram?</Heading>
          <p className='text-lg text-center'>
            Below are the three easy and quickest steps to download an Instagram
            photo:
          </p>
        </div>
        <HowToDownload data={howToDownloadData} />
        {/* how to download section end */}

        <DownloadApp />

        {/* featureCard section start */}
        <Heading>Your_domain Photos Downloader Features </Heading>
        <FeatureCard data={photoFeatureCardData} />
        {/* featureCard section end */}

        <FeatureSection />
        <FAQs data={faqPhotoPage} />
      </BodyContainer>
    </div>
  );
};

export default Story;
