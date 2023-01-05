import React from "react";
import { Link } from "react-router-dom";

const ProceedToPayment = () => {
  return (
    <div className='flex flex-row-reverse'>
      <button class='group flex items-center justify-between rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring'>
        <span class='font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500'>
          Proceed to payment
        </span>

        <span class='ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500'>
          <svg
            class='h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ProceedToPayment;
