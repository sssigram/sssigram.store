import React from "react";
//react icons
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiFilmReelBold } from "react-icons/pi";
import { TbPhoto } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
import { FaRegPaste } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-gradient-to-bl from-red-600 via-pink-600 to-blue-600 pb-8'>
      {/* Icons and titles start */}
      <div className=' bg-white/25 w-full overflow-hidden flex items-center justify-center'>
        <div className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <MdOutlineVideoLibrary size={24} />
          <p className='hidden md:block text-md'>Video</p>
        </div>
        <div className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <PiFilmReelBold size={24} />
          <p className='hidden md:block text-md'>Reel</p>
        </div>
        <div className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <TbPhoto size={24} />
          <p className='hidden md:block text-md'>Photo</p>
        </div>
        <div className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <LuHistory size={24} />
          <p className='hidden md:block text-md'>Story</p>
        </div>
        <div className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white cursor-pointer hover:text-white/70 ease-in duration-300'>
          <PiTelevisionSimpleBold size={24} />
          <p className='hidden md:block text-md'>Video</p>
        </div>
      </div>
      {/* Icons and titles end */}

      {/* heading and tagline start*/}
      <div className='flex flex-col gap-1.5 items-center my-6 text-white'>
        <h2 className='text-4xl font-bold'>IGTV Video Downloader</h2>
        <p className='text-lg'>Download Instagram IGTV Videos</p>
      </div>
      {/* heading and tagline end*/}

      {/* search start */}
      <div className='max-w-[670px] bg-white rounded-md p-1.5'>
        <form className='flex items-center justify-center mx-auto'>
          <label
            htmlFor='voice-search'
            className='sr-only'>
            Search
          </label>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none'></div>
            <input
              type='text'
              id='voice-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-w-[360px] px-3 py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Instagram Link Here'
              required=''
            />
          </div>
          <button
            type='submit'
            className='inline-flex items-center justify-center py-4 px-3 ms-2 text-sm  text-black bg-gray-100 rounded-md border-2 border-gray-200 hover:bg-gray-50 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <FaRegPaste
              size={27}
              className='pr-1.5'
            />
            <span className='text-lg'>Paste</span>
          </button>
          <button
            type='submit'
            className='inline-flex items-center justify-center py-4 px-3 ms-1 text-sm  text-white bg-gradient-to-br from-blue-700 to-blue-500 rounded-md border border-blue-700 hover:bg-gradient-to-br hover:from-[#c73a3a] hover:from-10% hover:via-[#7554a7] hover:via-60% hover:to-[#3f73e4] hover:to-100% focus:ring-4 focus:outline-none focus:ring-pink-600/50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <FaDownload
              size={24}
              className='pr-1.5'
            />
            <span className='text-lg'>Download</span>
          </button>
        </form>
      </div>
      {/* search end */}
    </div>
  );
};

export default Header;
