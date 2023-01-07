import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ProceedToPayment from "./ProceedToPayment";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";
const ProductDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const { item, price, number, description, image, _id, name, status } =
    useLoaderData();
  console.log(item);
  const handleNameClick = () => {
    toast("Thank you for checking me!", {
      icon: "😉",
    });
  };
  return (
    <div>
      <section>
        <div class='mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-24 lg:px-8'>
          <div class='max-w-3xl'>
            <h2 class='text-3xl font-bold sm:text-4xl'>{item}</h2>
          </div>

          <div class='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div class='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
              <PhotoProvider>
                <PhotoView src={image}>
                  <img alt='product' src={image} className='w-[600px] h-96' />
                </PhotoView>
              </PhotoProvider>
            </div>

            <div class='relative'>
              <article class='space-y-4 '>
                <p className='text-4xl font-semibold'>
                  <span className='text-4xl font-bold ml-2'>₹</span>
                  {price}
                </p>

                <p>{description}</p>

                <button
                  onClick={handleNameClick}
                  class='px-10 py-2.5  rounded group absolute ml-96  text-white font-medium inline-block'>
                  <span class='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
                  <span class='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'></span>
                  <span class='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
                  <span class='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500'></span>
                  <span class='relative'>{name}</span>
                </button>
                {user && <p>{number}</p>}
                <div className='absolute inset-x-0 left-0 bottom-0'>
                  {user ? (
                    <>
                      {status === "sold" ? (
                        <>
                          <h1 className='text-2xl'>
                            Oops you are late. It's already sold
                          </h1>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Link to={`/checkout/${_id}`}>
                            <ProceedToPayment></ProceedToPayment>
                          </Link>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Link to='/signin'>
                        <div className='flex flex-row-reverse'>
                          <button class='group flex items-center justify-between rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring'>
                            <span class='font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500'>
                              Sign In to purchase
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
                      </Link>
                    </>
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
