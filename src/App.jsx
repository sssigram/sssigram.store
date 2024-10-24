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
import { howToDownloadData } from "./data/howToDownload";
import { faqData } from "./data/faqData";
import { useInstagram } from "./context/InstagramContext";
import { FaDownload } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  const { instagramState, handleReset } = useInstagram();
  //to download video
  function downloadFile(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          SSSiGram - Instagram Downloader - Save Instagram Videos, Photos and
          Reels Free
        </title>
        <meta
          name='description'
          content='SSSiGram is a versatile tool designed to assist you with downloading Instagram videos, Reels, photos, IGTV, and albums. Whether you are using a mobile device, tablet, or computer, SSSiGram makes the process quick and easy. Enjoy seamless downloads of your favorite Instagram content on any device with SSSiGram.'
        />
        <meta
          name='keywords'
          content='SSSiGram, Instagram video downloader, Download Instagram videos, IG video downloader, Save Instagram videos, Instagram reel downloader, Download IGTV videos, Instagram story downloader, Instagram video save, Download Instagram reel, Free Instagram video downloader, Online Instagram video downloader, Instagram video saver, Instagram post downloader, Download videos from Instagram, Instagram video download online free, Insta video downloader, Instagram download HD videos, IG video download, Instagram clip downloader.'
        />
      </Helmet>
      <div className='flex flex-col items-center justify-center'>
        <Header
          heading='SSSiGram - Instagram Free Downloader'
          desc='Download Instagram Video, Story, Photo, Reels, etc on SSSiGram.'
        />
        {instagramState.loading ? (
          <BodyContainer>
            <PropagateLoader
              className='m-10'
              color='#7554a7'
            />
          </BodyContainer>
        ) : instagramState.downloadObj.download_url != "" &&
          instagramState.downloadObj.error === false ? (
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
                    to={instagramState.downloadObj.download_url}
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
        ) : instagramState.downloadObj.error === true &&
          instagramState.downloadObj.download_url === "" ? (
          <BodyContainer>
            <div className='m-8'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-red-500 text-center mb-5'>
                {instagramState.downloadObj.message}
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
              <h3 className='text-4xl font-bold mb-4 text-violet-700'>
                Download Instagram IGTV Videos Free
              </h3>
              <p className='text-lg'>
                Downloading Instagram Videos using the IGTV Video Downloader is
                quick, efficient, and convenient. When you find an IGTV video on
                Instagram that you want to save, just copy the video's URL and
                paste it into the specified field on the SSSiGram website. Then,
                Click the Download Button. It's that simple!
              </p>
            </div>
            {/* How to download section start */}
            <div>
              <Heading>HOW TO DOWNLOAD ANY CONTENT FROM INSTAGRAM?</Heading>
              <p className='text-lg text-center'>
                Here are Three Simple and Fastest Steps to Download anything
                From Instagram:
              </p>
            </div>
            <HowToDownload data={howToDownloadData} />
            {/* How to download section end */}

            {/* featureCard section start */}
            <Heading>Your Instagram Video Downloader Features</Heading>
            <FeatureCard data={allFeatureCardData} />
            {/* featureCard section end */}
            <FeatureSection />
            <FAQs data={faqData} />
            <DownloadApp />
          </BodyContainer>
        )}
      </div>
    </HelmetProvider>
  );
};

export default App;
