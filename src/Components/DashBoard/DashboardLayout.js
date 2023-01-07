import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Footer from "../Footer/Footer";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Navbar/Navbar";
import { MdInventory } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex'>
        <div className='hidden md:hidden lg:block'>
          <div className='bg-gray-50'>
            <div className='  items-start  px-4 space-y-3 pb-5 '>
              <Link to='/dashboard'>
                <button className='focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 pr-4 items-center space-x-6 w-full '>
                  <span className='text-2xl'>
                    <HiOutlineDocumentAdd></HiOutlineDocumentAdd>
                  </span>

                  <p className='text-base leading-4 '>Add a product</p>
                </button>
              </Link>
              <Link to='/dashboard/myproducts'>
                <button className='focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 pr-4  items-center w-full  space-x-6'>
                  <span className='text-2xl'>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </span>
                  <p className='text-base leading-4 '>My Products</p>
                </button>
              </Link>
              <Link to='/dashboard/mypurchase'>
                <button className='focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  pr-4 items-center w-full  space-x-6'>
                  <span className='text-2xl'>
                    <MdInventory></MdInventory>
                  </span>
                  <p className='text-base leading-4 '>My Purchase</p>
                </button>
              </Link>
            </div>

            <div className='mt-36 flex  bg-indigo-700 justify-start space-x-2 items-center py-4 px-3.5    w-full  '>
              <div className='avatar'>
                <div className='w-14 rounded-full'>
                  <img src={user.photoURL} alt='' />
                </div>
              </div>
              <div className='flex flex-col justify-start items-start space-y-2'>
                <p className='cursor-pointer text-base leading-4 text-white'>
                  {user.displayName}
                </p>
                <p className='cursor-pointer text-xs leading-3 text-gray-200'>
                  {user.email}
                </p>
              </div>
              <button
                aria-label='visit'
                className=' focus:ring-2 focus:outline-none hover:bg-indigo-800 p-2.5 bg-indigo-600 rounded-full'>
                <svg
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4.16666 10H15.8333'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10.8333 15L15.8333 10'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10.8333 5L15.8333 10'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
