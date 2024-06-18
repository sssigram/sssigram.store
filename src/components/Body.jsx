import React, { useState } from "react";
import { Link } from "react-router-dom";
//react icons
import { SiApple } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import Accordion from "./Accordion";
import BodyContainer from "./BodyContainer";

const Body = () => {
  return (
    <BodyContainer>
      {/* section 1 start */}
      <section className='flex flex-col gap-1.5 items-center my-6 mt-20'>
        <h3 className='text-4xl font-bold mb-4 text-violet-700'>
          Download Instagram IGTV Videos
        </h3>
        <p className='text-lg'>
          Downloading Instagram videos with the IGTV video downloader is easy,
          fast, and time-saving. When browsing through Instagram or coming
          across a post with an IGTV video you want to download, simply copy the
          URL of that IGTV video and paste it into the designated field on the
          iGram page. Finally, click the Download button. That's it!
        </p>
      </section>
      {/* section 1 end */}
      {/* section 2 start */}
      <section className='flex flex-col gap-1.5 items-center my-6 mt-10'>
        <h3 className='text-4xl font-bold mb-4 text-violet-700'>
          How to download IGTV from Instagram?
        </h3>
        <p className='text-lg'>
          To download IGTV videos, follow these easy steps:
        </p>
      </section>
      {/* section 2 end */}
      {/* download app section start */}
      <section className='w-full p-4 bg-gradient-to-br from-[#e7c9c9] via-[#cfc3e0] to-[#d2dbed] rounded-xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center dark:text-gray-200'>
        <div className='w-full text-center md:text-start mb-4'>
          <h5 className='mb-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white'>
            Download With Your-App-Name{" "}
          </h5>
          <p className='mb-2 text-base text-gray-500 sm:text-md dark:text-gray-400'>
            Download ...... app from Google Play or App store for unlimited fast
            and easy downloads with no watermark and HD quality.
          </p>
        </div>

        <div className='items-center md:items-end justify-center space-y-2 sm:flex md:flex-col lg:flex-row lg:gap-0 md:gap-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
          <Link
            to={"#"}
            className='w-full sm:w-44 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'>
            <SiApple
              size={30}
              className='mr-3'
            />
            <div className='text-left rtl:text-right'>
              <div className='mb-1 text-xs'>Download on the</div>
              <div className='-mt-1 font-sans text-sm font-semibold'>
                Mac App Store
              </div>
            </div>
          </Link>
          <Link
            to={"#"}
            className='w-full sm:w-44 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 shadow-sm'>
            <FaGooglePlay
              size={30}
              className='mr-3'
            />
            <div className='text-left rtl:text-right'>
              <div className='mb-1 text-xs'>Get in on</div>
              <div className='-mt-1 font-sans text-sm font-semibold'>
                Google Play
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/* download app section end */}

      {/* features section start */}
      <section className='w-full p-4 bg-gradient-to-br from-[#2c1b1b] via-[#3f344c] to-[#182644] rounded-xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200'>
        <div className='w-full text-center md:text-start'>
          <h5 className='mb-8 text-xl md:text-3xl font-bold text-gray-300 dark:text-white text-center'>
            BodyContainer Features of ...... Instagram video Downloader:
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
      </section>
      {/* features section end */}
      <div>
        <Accordion />
      </div>

      {/* FAQ section start */}
    </BodyContainer>
  );
};

export default Body;
