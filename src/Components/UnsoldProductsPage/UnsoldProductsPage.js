import React, { useEffect, useState } from "react";
import Card from "../Home/Items/Card";
import UnsoldProductCard from "../Upload/UnsoldProductCard";

const UnsoldProductsPage = () => {
  const [unsoldProducts, setUnsoldProducts] = useState([]);
  useEffect(() => {
    fetch(`https://plx-server-nayem9b.vercel.app/unsoldproducts`)
      .then((res) => res.json())
      .then((data) => setUnsoldProducts(data));
  }, []);
  console.log(unsoldProducts);
  return (
    <div>
      <h1 className=' text-3xl font-semibold text-center'>Unsold Products</h1>
      <div>
        {unsoldProducts.length !== 0 ? (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12 mb-10 mt-10 gap-y-4 '>
              {unsoldProducts.map((unsoldProduct) => (
                <UnsoldProductCard
                  unsoldProduct={unsoldProduct}></UnsoldProductCard>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 class='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              OOps, inventory seems sold out now
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default UnsoldProductsPage;
