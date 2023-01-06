import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/UserContext";
const UploadedProducts = () => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userproducts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);
  console.log(products);
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Advertise</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={product.image} className='w-20 h-20' alt='' />
                </td>
                <td>{product.item}</td>
                <td>
                  {" "}
                  {product.price} <span className='text-2xl'>৳</span>{" "}
                </td>
                <td>
                  <button className='btn btn-xs btn-danger'>Advertise</button>
                </td>
                <td>
                  <button className='btn btn-xs btn-danger'>
                    Mark as sold
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadedProducts;
