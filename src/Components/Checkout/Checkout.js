import React, { useContext, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51MN1JOFHMLfc17qouFrVkCsnlYTZ4pu0k5RtzDlljNUjaJh0VdNTR1NvsBHB1XapI3OkoJYyAnTl3an4R30Oe4xJ005UBV94Dc"
);
const Checkout = () => {
  const checkout = useLoaderData();
  const { item, price, number, description, image, _id, name } = checkout;

  return (
    <div>
      <section>
        <h1 class='sr-only'>Checkout</h1>

        <div class='relative mx-auto max-w-screen-2xl'>
          <div class='grid grid-cols-1 md:grid-cols-2'>
            <div class='bg-gray-50 py-12 md:py-24'>
              <div class='mx-auto max-w-lg px-4 lg:px-8'>
                <div class='flex items-center'>
                  <span class='h-10 w-10 rounded-full bg-blue-900'></span>

                  <h2 class='ml-4 font-medium text-4xl mt-[-8px]'>{item}</h2>
                </div>

                <div class='mt-8'>
                  <p class='text-2xl font-medium tracking-tight'>${price}</p>
                  <p class='mt-1 text-sm text-gray-500'>For the purchase of</p>
                </div>

                <div class='mt-12'>
                  <div class='flow-root'>
                    <ul class='-my-4 divide-y divide-gray-200'>
                      <li class='flex items-center justify-between py-4'>
                        <div class='flex items-start'>
                          <img
                            alt='Trainer'
                            src={image}
                            class='h-60 w-60 flex-shrink-0 rounded-lg object-cover'
                          />

                          <div class='ml-4'>
                            {/* <p class='text-sm'>{name}</p> */}
                            <h1 class='inline'>By:</h1>
                            <h1 class='inline ml-1'>{name}</h1>
                            <dl class='mt-1 space-y-1 text-xs text-gray-500'>
                              <div>
                                <dt class='inline'>{number}</dt>
                                {/* <dd class='inline ml-1'>{videos}</dd> */}
                              </div>
                            </dl>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='py-12 md:py-24'>
              <div class='mx-auto max-w-lg px-4 lg:px-8'>
                <Elements stripe={stripePromise}>
                  <CheckoutForm checkout={checkout} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
