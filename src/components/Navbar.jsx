import React from "react";
//react rounter dom imports
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // navbar Starts here
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      {/* main div of navbar start */}
      <div className='max-w-screen-xl flex flex-wrap gap-48 items-center justify-around mx-auto p-[22px]'>
        {/* Main logo start */}
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-3xl font-semibold bg-gradient-to-r from-yellow-400 from-10% to-pink-600 to-30% inline-block text-transparent bg-clip-text whitespace-nowrap dark:text-white'>
            You Logo
          </span>
        </Link>
        {/* main logo end */}

        <div
          className=' w-auto'
          id='navbar-default'>
          <ul className='font-medium flex rounded-lg space-x-8 rtl:space-x-reverse bg-white dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <NavLink
                to='#'
                className='block bg-transparent text-blue-700 dark:text-blue-500'
                aria-current='page'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href='#'
                className='block text-gray-900 hover:bg-transparent hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent'>
                About
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

{
  /* dark mode toggler */
}
// {
//   darkMode == true ||
//   (darkMode == null &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
//     <button
//       className='text-2xl font-bold shadow bg-grey-200 dark:bg-grey-800 rounded-md p-2 w-10 h-10 hover:bg-grey-300 dark:hover:bg-red-700 dark:focus:ring-grey-600 dark:active:focus:ring-red-400 dark:text-white ease-linear duration-200'
//       onClick={() => dispatch(toggleMode(false))}>
//       <CiLight />
//       {/* <CiDark /> */}
//     </button>
//   ) : (
//     <button
//       className='text-2xl bg-grey-50 shadow hover:bg-grey-100 rounded-md p-2 w-10 h-10hover:dark:bg-grey-700 dark:text-white ease-linear duration-200'
//       onClick={() => dispatch(toggleMode(true))}>
//       <CiDark />
//       {/* <CiLight /> */}
//     </button>
//   );
// }
{
  /* dark mode toggler end */
}
