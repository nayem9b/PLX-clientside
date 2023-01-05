import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ProceedToPayment from "./ProceedToPayment";
const ProductDetailsPage = () => {
  const { item, price, number, description, image, _id } = useLoaderData();
  console.log(item);
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
                  <img alt='product' src={image} class='' />
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
                <div className='absolute inset-x-0 left-0 bottom-0'>
                  <Link to={`/checkout/${_id}`}>
                    <ProceedToPayment></ProceedToPayment>
                  </Link>
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
