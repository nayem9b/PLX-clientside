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
      {products.map((product) => (
        <Card product={product}></Card>
      ))}
    </div>
  );
};

export default Home;
