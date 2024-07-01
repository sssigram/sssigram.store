import React from "react";
import { SiTicktick } from "react-icons/si";
import AdVertical from "./prime-components/ads/AdVertical";
import AdMobileLarge from "./prime-components/ads/AdMobileLarge";

const FeatureSection = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='hidden lg:block min-w-fit'>{/* <AdVertical /> */}</div>
      <div className='lg:hidden'>{/* <AdMobileLarge /> */}</div>
      <div className='w-full p-4 bg-gradient-to-br from-[#2c1b1b] via-[#3f344c] to-[#182644] rounded-xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200'>
        <div className='w-full text-center md:text-start'>
          <h5 className='mb-8 text-xl md:text-3xl font-bold text-gray-300 dark:text-white text-center'>
            Features of ...... Instagram video Downloader:
          </h5>
          <div className='flex flex-col md:flex-row justify-around items-center md:gap-10 sm-gap-5 my-4'>
            <ul className='mb-4 text-left text-gray-100 dark:text-gray-400'>
              <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                <SiTicktick
                  size={20}
                  className='flex-shrink-0 text-purple-500 '
                />
                <span>
                  Download Instagram Video with one click easily and safely in
                  fast speed.
                </span>
              </li>
              <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                <SiTicktick
                  size={20}
                  className='flex-shrink-0 text-purple-500 '
                />
                <span>
                  Download and Save unlimited pictures from any instagram link
                  on account with single tap.
                </span>
              </li>
              <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                <SiTicktick
                  size={20}
                  className='flex-shrink-0 text-purple-500 '
                />
                <span>
                  Download and save Instagram video from any personal account.
                </span>
              </li>
            </ul>
            <ul className='space-y-4 text-left text-gray-100 dark:text-gray-400'>
              <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                <SiTicktick
                  size={20}
                  className='flex-shrink-0 text-purple-500 '
                />
                <span>
                  Download Instagram content without logging in to your account.
                </span>
              </li>
              <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                <SiTicktick
                  size={20}
                  className='flex-shrink-0 text-purple-500 '
                />
                <span>
                  Videos and photos are availabe to download and save in their
                  original resolution and quality at out website.
                </span>
              </li>
              <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                <SiTicktick
                  size={20}
                  className='flex-shrink-0 text-purple-500 '
                />
                <span>
                  We offer High speed Downloads: ..... has the fastest download
                  speed available as compare to any other app.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='hidden lg:block min-w-fit'>{/* <AdVertical /> */}</div>
    </div>
  );
};

export default FeatureSection;
