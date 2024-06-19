import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { SiApple } from "react-icons/si";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className='w-full p-4 bg-gradient-to-br from-[#e7c9c9] via-[#cfc3e0] to-[#d2dbed] rounded-xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row md:gap-3 justify-stretch items-center dark:text-gray-200'>
      <div className='w-full text-center md:text-start mb-4'>
        <h5 className='mb-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white'>
          Download With Your-App-Name{" "}
        </h5>
        <p className='w-fit mb-2 text-base text-gray-700 sm:text-md dark:text-gray-400'>
          Download ...... app from Google Play or App store for unlimited fast
          and easy downloads with no watermark and HD quality.
        </p>
      </div>

      <div className='items-center md:items-end justify-center space-y-2 sm:flex md:flex-col lg:flex-row lg:gap-0 md:gap-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-fit'>
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
    </div>
  );
};

export default DownloadApp;
