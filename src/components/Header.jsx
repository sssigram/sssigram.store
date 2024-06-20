import React, { useState } from "react";
//react icons
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiFilmReelBold } from "react-icons/pi";
import { TbPhoto } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
import { FaRegPaste } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useInstagram } from "../context/InstagramContext";
const Header = ({ heading, desc }) => {
  const { getDownloadURL } = useInstagram();

  // to handle change of input
  const [inputURL, setInputURL] = useState("");
  const handleChange = (event) => {
    if (event.target.value != "") setInputURL(event.target.value);
  };
  //to submit url for downloading
  const handleSubmit = (event) => {
    event.preventDefault();
    getDownloadURL(inputURL);
    setInputURL("");
  };
  return (
    <header className='w-full flex flex-col justify-between items-center bg-gradient-to-bl from-red-600 via-pink-600 to-blue-600'>
      {/* Icons and titles start */}
      <div className=' bg-white/25 w-full overflow-hidden flex items-center justify-center'>
        <Link
          to={"/video"}
          className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <MdOutlineVideoLibrary size={24} />
          <p className='hidden md:block text-md'>Video</p>
        </Link>
        <Link
          to='/reel'
          className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <PiFilmReelBold size={24} />
          <p className='hidden md:block text-md'>Reel</p>
        </Link>
        <Link
          to='/photo'
          className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <TbPhoto size={24} />
          <p className='hidden md:block text-md'>Photo</p>
        </Link>
        <Link
          to='/story'
          className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white border-r border-white/25 cursor-pointer hover:text-white/70 ease-in duration-300'>
          <LuHistory size={24} />
          <p className='hidden md:block text-md'>Story</p>
        </Link>
        <Link
          to='/igtv'
          className='flex gap-2 px-6 sm:px-10 md:px-6 py-2.5 items-center text-white cursor-pointer hover:text-white/70 ease-in duration-300'>
          <PiTelevisionSimpleBold size={24} />
          <p className='hidden md:block text-md'>IGTV</p>
        </Link>
      </div>
      {/* Icons and titles end */}

      {/* heading and tagline start*/}
      <div className='flex flex-col gap-1.5 items-center my-6 text-white mt-8'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          {heading}
        </h2>
        <p className='text-md sm:text-lg'>{desc}</p>
      </div>
      {/* heading and tagline end*/}

      {/* search start */}
      <div className='w-full max-w-[672px] px-4 mb-4 md:mb-6'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-3 sm:gap-4 md:flex-row items-center justify-center mx-auto'>
          <div className='relative w-full flex bg-white rounded-md overflow-hidden'>
            <input
              type='text'
              id='voice-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-md md:text-xl focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Instagram Link Here'
              value={inputURL}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='inline-flex items-center justify-center py-4 px-3 text-sm  text-black bg-gray-100  border-r-1 border-gray-200 hover:bg-gray-50 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <FaRegPaste
                size={27}
                className='pr-1.5'
              />
              <span className='text-md md:text-xl'>Paste</span>
            </button>
          </div>
          <button
            type='submit'
            className='inline-flex items-center w-full md:w-fit justify-center py-4 px-3 md:-ml-3 text-sm  text-white bg-gradient-to-br from-blue-700 to-blue-500 rounded-md  hover:bg-gradient-to-br hover:from-[#c73a3a] hover:from-10% hover:via-[#7554a7] hover:via-60% hover:to-[#3f73e4] hover:to-100% focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <FaDownload
              size={24}
              className='pr-1.5'
            />
            <span className='text-md md:text-xl'>Download</span>
          </button>
        </form>
      </div>
      {/* search end */}
    </header>
  );
};

export default Header;
