import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import loading from "../Assets/99589-loader-for-web.json";
const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const number = form.number.value;
    const description = form.description.value;
    console.log(name, price, number, description);

    // Image upload section here
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=4879859cdc7827193ef39d9fcfdd7c52`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addedProduct = {
            item: name,
            price: price,
            number: number,
            description: description,
            email: user.email,
            image: imgData.data.url,
            name: user.displayName,
            status: "unsold",
            payer: "null",
            paymentId: "null",
            transactionId: "null",
          };
          fetch(`https://plx-server-nayem9b.vercel.app/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addedProduct),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          form.reset();
          toast.success("Successfully posted your product for sell");
          setIsLoading(false);
        }
      });
  };
  return (
    <div>
      {isLoading ? (
        <>
          {" "}
          <div className='flex justify-center items-center'>
            <div className=' flex justify-center '>
              <Lottie animationData={loading} loop={true} />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div class='flex justify-center items-center w-screen h-screen bg-white'>
            <div class='container mx-auto my-4 px-4 lg:px-20'>
              <form onSubmit={handleOnSubmit}>
                <div class='w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl'>
                  <div class='flex'>
                    <h1 class='font-bold uppercase text-5xl'>Add a product</h1>
                  </div>
                  <div class='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
                    <input
                      class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                      type='text'
                      placeholder='Name*'
                      name='name'
                    />
                    <input
                      class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                      type='number'
                      placeholder='Price*'
                      required
                      name='price'
                    />
                    <input
                      class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                      type='email'
                      placeholder={user.email}
                      disabled
                    />
                    <input
                      class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                      type='number'
                      placeholder='Phone Number*'
                      required
                      name='number'
                    />
                  </div>

                  <div>
                    <label htmlFor='image' className='block mb-2 '>
                      Select Image:
                      <span className='text-red-600 text-lg'>*</span>
                    </label>
                    <input
                      type='file'
                      id='image'
                      name='image'
                      accept='image/*'
                      required
                      className='file-input file-input-bordered file-input-info w-full mt-4 max-w-lg'
                    />
                  </div>
                  <div class='my-4'>
                    <textarea
                      required
                      placeholder='Description minimum 50 characters*'
                      name='description'
                      class='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'></textarea>
                  </div>
                  <div class='my-2 w-1/2 lg:w-1/4'>
                    <button class='relative w-full inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
                      <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                      <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                      <span class='relative text-white'>Post your product</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
