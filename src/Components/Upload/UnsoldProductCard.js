import React from "react";
import { Link } from "react-router-dom";

const UnsoldProductCard = ({ unsoldProduct }) => {
  const { item, image, price, number, description, _id } = unsoldProduct;

  return (
    <div>
      <Link to={`/product/${_id}`}>
        <div class='w-[286px] h-[268px] max-w-sm bg-white rounded-lg border-2 '>
          <img
            class='h-[160px] w-[270px] rounded-t-lg'
            src={image}
            alt='product image'
          />

          <div class='px-5 pb-5'>
            <h5 class='text-xl font-semibold tracking-tight text-gray-900 '>
              {item}
            </h5>
            <h1>₹{price}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UnsoldProductCard;
