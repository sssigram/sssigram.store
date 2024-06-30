import React from "react";
import Header from "../components/Header";
import Heading from "../components/prime-components/Heading";
import BodyContainer from "../components/BodyContainer";
import HowToDownload from "../components/HowToDownload";
import { photoFeatureCardData } from "../data/featureCard";
import FeatureCard from "../components/FeatureCard";
import DownloadApp from "../components/DownloadApp";
import FeatureSection from "../components/FeatureSection";
import FAQs from "../components/FAQs";
import { howToDownloadData } from "../data/howToDownload";
import { faqPhotoPage } from "../data/faqData";
import { useInstagram } from "../context/InstagramContext";
import { FaDownload } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Photo = () => {
  const { instagramState, handleReset } = useInstagram();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Photo Page</title>
        <meta
          name='description'
          content='Welcome to the Photo Page'
        />
        <meta
          name='keywords'
          content='home, react, SEO'
        />
      </Helmet>
      <div className='flex flex-col items-center justify-center'>
        <Header
          heading='Instagram Photo Download'
          desc='Instagram Photo Downloader'
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
            {/* how to download section start */}
            <div>
              <Heading>How to download photos from Instagram?</Heading>
              <p className='text-lg text-center'>
                Below are the three easy and quickest steps to download an
                Instagram photo:
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
        )}
      </div>
    </HelmetProvider>
  );
};

export default Photo;
