import React from "react";
import Header from "../components/Header";
import Heading from "../components/prime-components/Heading";
import BodyContainer from "../components/BodyContainer";
import HowToDownload from "../components/HowToDownload";
import { reelFeatureCardData } from "../data/featureCard";
import FeatureCard from "../components/FeatureCard";
import DownloadApp from "../components/DownloadApp";
import FeatureSection from "../components/FeatureSection";
import FAQs from "../components/FAQs";
import { howToDownloadData } from "../data/howToDownload";
import { faqReelPage } from "../data/faqData";
const Reel = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='Instagram Reels Downloader'
        desc='Download Instagram Reels videos easily!'
      />
      {/* heading and paragram */}
      <BodyContainer>
        <div className='flex flex-col gap-1.5 items-center my-6'>
          <h3 className='text-4xl font-bold mb-4 text-violet-700'>
            Instagram Reels Downloader
          </h3>
          <p className='text-lg'>
            Reels Downloader created by igram.world is a convenient application
            that enables you to download any Instagram Reels video to your
            device with complete anonymity. This Insta Reels downloader is an
            ideal solution for individuals who want to save Reels videos from
            Instagram. Whether you wish to repost, re-upload, or simply save
            them for future viewing with your friends, this app allows you to
            add Reels videos to your own media library without any restrictions.
            Enjoy the freedom to download and save as many Instagram Reels
            videos as you desire!
          </p>
        </div>
        {/* how to download section start */}
        <div>
          <Heading>How to download reels from Instagram?</Heading>
          <p className='text-lg text-center'>
            Downloading an Instagram Reels video is a simple process that can be
            done in just three easy steps:
          </p>
        </div>
        <HowToDownload data={howToDownloadData} />
        {/* how to download section end */}

        <DownloadApp />

        {/* featureCard section start */}
        <Heading>Reels Downloader Features</Heading>
        <FeatureCard data={reelFeatureCardData} />
        {/* featureCard section end */}

        <FeatureSection />
        <FAQs data={faqReelPage} />
      </BodyContainer>
    </div>
  );
};

export default Reel;
