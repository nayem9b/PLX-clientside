import React, { useEffect, useState } from "react";
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
      <div className='grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <Card product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
