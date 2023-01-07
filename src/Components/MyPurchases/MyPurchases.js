import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const MyPurchases = () => {
  const [myPurchases, setMyPurchases] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/mypurchase?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyPurchases(data));
  }, [user.email]);
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
            </tr>
          </thead>
          <tbody>
            {myPurchases.map((myPurchase, i) => (
              <tr key={myPurchase._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={myPurchase.image} className='w-20 h-20' alt='' />
                </td>
                <td>{myPurchase.item}</td>
                <td>
                  {" "}
                  {myPurchase.price} <span className='text-2xl'>৳</span>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchases;
