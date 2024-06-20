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
import { howToDownloadData } from "../data/howToDownload";
import { faqVideoData } from "../data/faqData";
import { useInstagram } from "../context/InstagramContext";
import { PropagateLoader } from "react-spinners";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Video = () => {
  const { instagramState } = useInstagram();

  return (
    <div className='flex flex-col items-center justify-center'>
      <Header
        heading='Instagram Video Downloader'
        desc='Download Videos from Instagram'
      />
      {instagramState.loading ? (
        <BodyContainer>
          <PropagateLoader
            className='m-10'
            color='#7554a7'
          />
        </BodyContainer>
      ) : instagramState.downloadURL === "" ? (
        <BodyContainer>
          <div className='flex flex-col gap-1.5 items-center my-6'>
            <Heading>Download Instagram Videos</Heading>
            <p className='text-lg'>
              Downloading Instagram videos with the IGTV video downloader is
              easy, fast, and time-saving. When browsing through Instagram or
              coming across a post with an IGTV video you want to download,
              simply copy the URL of that IGTV video and paste it into the
              designated field on the iGram page. Finally, click the Download
              button. That's it!
            </p>
          </div>

          {/* how to download section start */}
          <div>
            <Heading>How to download videos from Instagram?</Heading>
            <p className='text-lg text-center'>
              Below are the three easy and quickest steps to download an
              Instagram video:
            </p>
          </div>
          <HowToDownload data={howToDownloadData} />
          {/* how to download section end */}

          <DownloadApp />

          {/* featureCard section start */}
          <Heading>Download Instagram Video</Heading>
          <FeatureCard data={videoFeatureCardData} />
          {/* featureCard section end */}

          <FeatureSection />
          <FAQs data={faqVideoData} />
        </BodyContainer>
      ) : (
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          {/* <img
            className='rounded-t-lg'
            src='/docs/images/blog/image-1.jpg'
            alt=''
          /> */}
          <div className='p-5'>
            {/* <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5> */}
            {/* <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p> */}
            <Link
              to={instagramState.downloadURL}
              className='inline-flex items-center w-full md:w-fit justify-center py-4 px-3 md:-ml-3 text-sm  text-white bg-gradient-to-br from-blue-700 to-blue-500 rounded-md  hover:bg-gradient-to-br hover:from-[#c73a3a] hover:from-10% hover:via-[#7554a7] hover:via-60% hover:to-[#3f73e4] hover:to-100% focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <FaDownload
                size={24}
                className='pr-1.5'
              />
              <span className='text-md md:text-xl'>Download</span>
            </Link>
          </div>
        </div>
      )}
      {/* heading and paragram */}
    </div>
  );
};

export default Video;
