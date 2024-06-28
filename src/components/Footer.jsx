import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200'>
      <div className='w-full mx-auto p-4 md:py-8 max-w-[930px]'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          {/* Main logo start */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'>
            <span className='self-center text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-400 from-10% to-pink-600 to-30% inline-block text-transparent bg-clip-text whitespace-nowrap dark:text-white  my-4'>
              You Logo
            </span>
          </Link>
          {/* main logo end */}
          <ul className='flex flex-wrap items-center mb-6 text-md text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <NavLink
                to={"/about"}
                className='hover:underline me-4 md:me-6'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/privacy-policy"}
                className='hover:underline me-4 md:me-6'>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact-us"}
                className='hover:underline'>
                Contact US
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-black  dark:text-gray-400 mb-3'>
          <Link
            to={"#"}
            className='hover:underline'>
            YourDomain.com
          </Link>
          &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          ducimus quod odio, cumque debitis quas minima voluptates perferendis
          omnis rerum beatae animi vero amet neque dolorum dolor, non asperiores
          commodi.
        </span>
        <span className='block text-md text-gray-400 sm:text-center dark:text-gray-400'>
          © 2023{" "}
          <Link
            to={"#"}
            className='hover:underline'>
            YourDomain
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
