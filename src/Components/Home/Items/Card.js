import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { item, image, price, number, description, _id, status } = product;

  return (
    <div>
      <Link to={`/product/${_id}`}>
        <div class='w-[286px] h-[268px] max-w-sm bg-white rounded-lg border-2 '>
          <img
            class='h-[160px] w-[270px] rounded-t-lg pl-3 pt-2'
            src={image}
            alt='product image'
          />

          <div class='px-5 pb-5'>
            <h1 className='text-xl font-bold'>₹ {price}</h1>
            <h5 class='text-xl font-semibold tracking-tight text-gray-500 '>
              {item}
            </h5>

            <div class='flex items-center mt-2.5 mb-5'>
              <h1>{status}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
