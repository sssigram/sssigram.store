import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const Popup = ({ showPopup, onClose }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center items-center ${
        showPopup
          ? " opacity-100 scale-100 z-20 pointer-events-auto"
          : "scale-90 opacity-0 -z-10 pointer-events-none"
      }transition-all ease-out duration-200`}>
      <div
        className={`bg-white rounded-md relative p-2 px-5 transition-all ease-in-out duration-300`}>
        <div className='p-3 md:p-4 text-center'>
          <FiAlertCircle
            size={60}
            className='text-yellow-400 text-center mx-auto my-3'
          />
          <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
            Please Enter A Valid URL and Try Again
          </h3>
          <button
            onMouseDown={onClose}
            type='button'
            className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg inline-flex items-center px-5 py-2.5 text-center'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
