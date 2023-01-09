import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import logo from "../Assets/Logo-removebg-preview.png";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    console.log("user logged out");
  };
  return (
    <div className='sticky top-0 z-10 bg-gray-100'>
      <div class='px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex items-center justify-between'>
          <div class='flex items-center'>
            <Link
              to='/'
              aria-label='Company'
              title='Plx'
              class='inline-flex items-center mr-8'>
              <img src={logo} className='w-12' alt='' />
            </Link>
            <ul class='flex items-center hidden space-x-8 lg:flex'>
              <li>
                <Link
                  to='/'
                  aria-label='Our product'
                  title='Our product'
                  class='font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-fuchsia-500 '>
                  Home
                </Link>
              </li>

              {user && (
                <li>
                  <Link
                    to='/dashboard'
                    aria-label='Our product'
                    title='Dashboard'
                    class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-fuchsia-500 '>
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to='/unsoldproducts'
                  aria-label='Product pricing'
                  title='Unsold Products'
                  class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-fuchsia-500 '>
                  Unsold Products
                </Link>
              </li>
            </ul>
          </div>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered'
            />
          </div>
          <ul class='flex items-center hidden space-x-8 lg:flex'>
            {user ? (
              <>
                <div className='dropdown dropdown-end'>
                  <label
                    tabIndex={0}
                    className='btn bg-gray-100 border-none hover:bg-gray-100'>
                    <div className='avatar'>
                      <div className='w-10 rounded-full'>
                        <img src={user.photoURL} alt='' />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
                    <li>
                      <h1>{user.displayName}</h1>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        class='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
                        <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                        <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                        <span class='relative text-white'> Log out</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <li>
                  <button
                    onClick={handleLogout}
                    class='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
                    <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                    <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                    <span class='relative text-white'> Log out</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to='/signin'
                    aria-label='Sign in'
                    title='Sign in'
                    class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-fuchsia-500'>
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to='/signup'
                    class='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
                    <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                    <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                    <span class='relative text-white'>Sign up</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div class='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}>
              <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute top-0 left-0 w-full'>
                <div class='p-5 bg-white border rounded shadow-sm'>
                  <div class='flex items-center justify-between mb-4'>
                    <div>
                      <Link
                        to='/'
                        aria-label='Company'
                        title='Plx'
                        class='inline-flex items-center mr-8'>
                        <img src={logo} className='w-12' alt='' />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}>
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      <li>
                        <Link
                          to='/'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/unsoldproducts'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Unsold Products
                        </Link>
                      </li>
                      {user && (
                        <>
                          {" "}
                          <li>
                            <Link
                              href='/dashboard'
                              title='Add a product'
                              class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                              Add a product
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/dashboard/myproducts'
                              title='My Products'
                              class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                              My Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/dashboard/mypurchase'
                              title='My Purchase'
                              class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                              My Purchase
                            </Link>
                          </li>
                        </>
                      )}
                      {user ? (
                        <>
                          <li>
                            <button
                              onClick={handleLogout}
                              class='relative w-full inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
                              <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                              <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                              <span class='relative text-white'> Log out</span>
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to='/signin'
                              aria-label='Sign in'
                              title='Sign in'
                              class='font-medium tracking-wide inline-flex items-center rounded-full p-4 px-5 py-3 shadow-xl justify-center  w-full bg-black text-white transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-fuchsia-500'>
                              Sign in
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/signup'
                              class='relative w-full inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
                              <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                              <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                              <span class='relative text-white'>Sign up</span>
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
