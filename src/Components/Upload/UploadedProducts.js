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
      {products.length === 0 ? (
        <>
          <h1 class='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            You haven't purchased any product
          </h1>
        </>
      ) : (
        <>
          {" "}
          <div className='overflow-x-auto'>
            <table className='table w-full'>
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>

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
                      {product.status === "sold" ? (
                        <>
                          <h1 className='bg-green-300 mx-auto py-2 px-5 rounded-lg'>
                            Sold
                          </h1>
                        </>
                      ) : (
                        <>
                          <h1 className='bg-yellow-200 mx-auto py-2 px-5 rounded-lg'>
                            Unsold
                          </h1>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default UploadedProducts;
