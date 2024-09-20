import React, { useEffect } from "react";
//react rounter dom imports
import { Link, NavLink, useLocation } from "react-router-dom";
import { useInstagram } from "../context/InstagramContext";

const Navbar = () => {
  // to reset state to its original state
  const { resetState } = useInstagram();

  // to reset instagram state on route changing
  const location = useLocation();
  useEffect(() => {
    resetState();
  }, [location]);
  return (
    // navbar Starts here
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      {/* main div of navbar start */}
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto py-3 px-5 lg:px-20 md:py-5 '>
        {/* Main logo start */}
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-400 from-10% to-pink-600 to-30% inline-block text-transparent bg-clip-text whitespace-nowrap dark:text-white'>
            SSSiGRAM
          </span>
        </Link>
        {/* main logo end */}

        <div
          className=' w-auto'
          id='navbar-default'>
          <ul className='font-medium flex rounded-lg space-x-8 rtl:space-x-reverse bg-white dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => {
                  return `block ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  } hover:bg-transparent hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent`;
                }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/faqs'
                className={({ isActive }) => {
                  return `block ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  } hover:bg-transparent hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent`;
                }}>
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* main div of navbar end */}
    </nav>
    // navbar ends
  );
};

export default Navbar;
