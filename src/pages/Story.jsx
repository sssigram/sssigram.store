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
import { useInstagram } from "../context/InstagramContext";
import { FaDownload } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Story = () => {
  const { instagramState, handleReset } = useInstagram();

  return (
    <>
      <Helmet>
        <title>Story Page</title>
        <meta
          name='description'
          content='Welcome to the Story Page'
        />
        <meta
          name='keywords'
          content='home, react, SEO'
        />
      </Helmet>
      <div className='flex flex-col items-center justify-center'>
        <Header
          heading='Instagram Story Saver'
          desc='Download your Instagram story and highlights easily!
'
        />
        {/* heading and paragram */}
        {instagramState.loading ? (
          <BodyContainer>
            <PropagateLoader
              className='m-10'
              color='#7554a7'
            />
          </BodyContainer>
        ) : instagramState.downloadObj.video != "" &&
          instagramState.error === "" ? (
          // download card
          <BodyContainer>
            <div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col items-center md:items-stretch md:flex-row justify-center gap-10 m-5 p-5 md:px-0'>
              <img
                className='rounded-lg w-60'
                src={instagramState.downloadObj.thumb}
                alt=''
              />
              <div className='flex flex-col items-center justify-between'>
                <div>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Your Requested File is ready to Download...!!!
                  </h5>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    Click the Download button below for saving file to your
                    device.
                  </p>
                </div>
                <div className='flex flex-col gap-5 w-full'>
                  <Link
                    to={instagramState.downloadObj.video}
                    className='inline-flex items-center w-full justify-center py-4 px-3 text-sm  text-white bg-gradient-to-br from-blue-700 to-blue-500 rounded-md  hover:bg-gradient-to-br hover:from-[#c73a3a] hover:from-10% hover:via-[#7554a7] hover:via-60% hover:to-[#3f73e4] hover:to-100% focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <FaDownload
                      size={24}
                      className='pr-1.5'
                    />
                    <span className='text-md md:text-xl'>Download</span>
                  </Link>
                  <button
                    onMouseDown={handleReset}
                    className='inline-flex items-center w-full justify-center py-4 px-3  text-sm text-white bg-green-500 hover:bg-green-600 focus:ring-green-300 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md'>
                    <LuRefreshCcw
                      size={28}
                      className='pr-2'
                    />
                    <span className='text-md md:text-xl'>Refresh Page</span>
                  </button>
                </div>
              </div>
            </div>
          </BodyContainer>
        ) : instagramState.error != "" &&
          instagramState.downloadObj.video === "" ? (
          <BodyContainer>
            <div className='m-8'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-red-500 text-center mb-5'>
                {instagramState.error}
              </p>
              <button
                onMouseDown={handleReset}
                className='inline-flex items-center w-full justify-center py-4 px-3  text-sm text-white bg-green-500 hover:bg-green-600 focus:ring-green-300 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md'>
                <LuRefreshCcw
                  size={28}
                  className='pr-2'
                />
                <span className='text-md md:text-xl'>Refresh Page</span>
              </button>
            </div>
          </BodyContainer>
        ) : (
          <BodyContainer>
            <div className='flex flex-col gap-1.5 items-center my-6'>
              <Heading>Instagram Story Saver</Heading>
              <p className='text-lg text-center'>
                Story Saver created by igram.world, is a convenient application
                that enables you to download any Instagram story to your device
                with complete anonymity. This Insta story saver is an ideal
                solution for individuals who want to save stories from
                Instagram. Whether you wish to repost, re-upload or simply save
                them for future viewing with your friends, this app allows you
                to add stories to your own media library without any
                restrictions. Enjoy the freedom to download and save as many
                Instagram stories as you desire!
              </p>
            </div>

            {/* how to download section start */}
            <div>
              <Heading>How to download Story from Instagram?</Heading>
              <p className='text-lg text-center'>
                Below are the three easy and quickest steps to download an
                Instagram Story:
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
        )}
      </div>
    </>
  );
};

export default Story;
