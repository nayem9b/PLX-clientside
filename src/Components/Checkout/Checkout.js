import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { item, price, number, description, image, _id, name } =
    useLoaderData();
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
                            class='h-16 w-16 flex-shrink-0 rounded-lg object-cover'
                          />

                          <div class='ml-4'>
                            {/* <p class='text-sm'>{name}</p> */}
                            <h1 class='inline'>By:</h1>
                            <h1 class='inline ml-1'>{name}</h1>
                            <dl class='mt-1 space-y-1 text-xs text-gray-500'>
                              <div>
                                <dt class='inline'>Videos</dt>
                                {/* <dd class='inline ml-1'>{videos}</dd> */}
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p class='text-sm'>
                            {price}
                            <small class='text-gray-500'>x1</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='bg-white py-12 md:py-24'>
              <div class='mx-auto max-w-lg px-4 lg:px-8'>
                <form class='grid grid-cols-6 gap-4'>
                  <div class='col-span-6'>
                    <label class='mb-1 block text-sm text-gray-600' for='phone'>
                      Phone
                    </label>

                    <input
                      class='w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm'
                      type='tel'
                      id='phone'
                      placeholder={number}
                      disabled
                    />
                  </div>

                  <fieldset class='col-span-6'>
                    <legend class='mb-1 block text-sm text-gray-600'>
                      Card Details
                    </legend>

                    <div class='-space-y-px rounded-lg bg-white shadow-sm'>
                      <div>
                        <label class='sr-only' for='card-number'>
                          Card Number
                        </label>

                        <input
                          class='relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10'
                          type='text'
                          name='card-number'
                          id='card-number'
                          placeholder='Card number'
                        />
                      </div>

                      <div class='flex -space-x-px'>
                        <div class='flex-1'>
                          <label class='sr-only' for='card-expiration-date'>
                            Expiration Date
                          </label>

                          <input
                            class='relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10'
                            type='text'
                            name='card-expiration-date'
                            id='card-expiration-date'
                            placeholder='MM / YY'
                          />
                        </div>

                        <div class='flex-1'>
                          <label class='sr-only' for='card-cvc'>
                            CVC
                          </label>

                          <input
                            class='relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10'
                            type='text'
                            name='card-cvc'
                            id='card-cvc'
                            placeholder='CVC'
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset class='col-span-6'>
                    <legend class='mb-1 block text-sm text-gray-600'>
                      Billing Address
                    </legend>

                    <div class='-space-y-px rounded-lg bg-white shadow-sm'>
                      <div>
                        <label class='sr-only' for='country'>
                          Country
                        </label>

                        <select
                          class='relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10'
                          id='country'
                          name='country'
                          autocomplete='country-name'>
                          <option>Bangladesh</option>
                          <option>England</option>
                          <option>Scotland</option>
                          <option>France</option>
                          <option>Belgium</option>
                          <option>Japan</option>
                        </select>
                      </div>

                      <div>
                        <label class='sr-only' for='postal-code'>
                          ZIP/Post Code
                        </label>

                        <input
                          class='relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10'
                          type='text'
                          name='postal-code'
                          id='postal-code'
                          autocomplete='postal-code'
                          placeholder='ZIP/Post Code'
                        />
                      </div>
                    </div>
                  </fieldset>

                  <div class='col-span-6'>
                    <button
                      class='block w-full rounded-lg bg-black p-2.5 text-sm text-white'
                      type='submit'>
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
