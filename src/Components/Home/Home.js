import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Welcome from "../Welcome/Welcome";

import Card from "./Items/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className='grid grid-cols-4 mx-36 gap-y-4 '>
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
