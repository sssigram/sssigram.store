import React from "react";
import Header from "../components/Header";
import Heading from "../components/prime-components/Heading";
import BodyContainer from "../components/BodyContainer";
import HowToDownload from "../components/HowToDownload";
import { storyFeatureCardData } from "../data/featureCard";
import FeatureCard from "../components/FeatureCard";
import DownloadApp from "../components/DownloadApp";
import FeatureSection from "../components/FeatureSection";
import FAQs from "../components/FAQs";
import { howToDownloadStory } from "../data/howToDownload";
import { faqStoryPage } from "../data/faqData";
const Story = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='Instagram Story Saver'
        desc='Download your Instagram story and highlights easily!
'
      />
      {/* heading and paragram */}
      <BodyContainer>
        <div className='flex flex-col gap-1.5 items-center my-6'>
          <Heading>Instagram Story Saver</Heading>
          <p className='text-lg'>
            Story Saver created by igram.world, is a convenient application that
            enables you to download any Instagram story to your device with
            complete anonymity. This Insta story saver is an ideal solution for
            individuals who want to save stories from Instagram. Whether you
            wish to repost, re-upload or simply save them for future viewing
            with your friends, this app allows you to add stories to your own
            media library without any restrictions. Enjoy the freedom to
            download and save as many Instagram stories as you desire!
          </p>
        </div>

        {/* how to download section start */}
        <div>
          <Heading>How to download Story from Instagram?</Heading>
          <p className='text-lg text-center'>
            Below are the three easy and quickest steps to download an Instagram
            Story:
          </p>
        </div>
        <HowToDownload data={howToDownloadStory} />
        {/* how to download section end */}

        <DownloadApp />

        {/* featureCard section start */}
        <Heading>Download Instagram Video</Heading>
        <FeatureCard data={storyFeatureCardData} />
        {/* featureCard section end */}

        <FeatureSection />
        <FAQs data={faqStoryPage} />
      </BodyContainer>
    </div>
  );
};

export default Story;
