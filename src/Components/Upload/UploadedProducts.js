import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/UserContext";
const UploadedProducts = () => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userproducts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user.email]);
  //   const {
  //     data: products = [],
  //     refetch,
  //     isLoading,
  //   } = useQuery({
  //     queryKey: ["email"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         `http://localhost:5000/userproducts?email=${user.email}`
  //       );
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  console.log(products);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default UploadedProducts;
