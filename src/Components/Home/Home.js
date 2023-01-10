import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Welcome from "../Welcome/Welcome";

import Card from "./Items/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://plx-server-nayem9b.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className='hidden lg:block  w-full h-40 bg-yellow-400 mb-10 relative'>
        <h1 className='flex justify-center text-center text-3xl  items-center'>
          <span className='ml-7 font-extrabold text-sky-500 text-5xl mr-5'>
            Winter
          </span>
          <div className='grid grid-cols-4 gap-2 mt-5 '>
            <span className='bg-white p-7'>S</span>
            <span className='bg-white p-7'>A</span>
            <span className='bg-white p-7'>L</span>
            <span className='bg-white p-7'>E</span>
          </div>
          <span className='ml-7 font-extrabold text-red-600'> Upto 30%</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-12 lg:mx-36 gap-y-4 '>
        {products.map((product) => (
          <Card product={product}></Card>
        ))}
      </div>
      <Welcome></Welcome>
      <h1 class='text-center mx-auto  font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
        Trusted place for resale products
      </h1>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
