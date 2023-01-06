import React, { useEffect, useState } from "react";
import Card from "../Home/Items/Card";
import UnsoldProductCard from "../Upload/UnsoldProductCard";

const UnsoldProductsPage = () => {
  const [unsoldProducts, setUnsoldProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/unsoldproducts`)
      .then((res) => res.json())
      .then((data) => setUnsoldProducts(data));
  }, []);
  console.log(unsoldProducts);
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {unsoldProducts.map((unsoldProduct) => (
          <UnsoldProductCard unsoldProduct={unsoldProduct}></UnsoldProductCard>
        ))}
      </div>
    </div>
  );
};

export default UnsoldProductsPage;
