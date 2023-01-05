import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/UserContext";
const UploadedProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/userproducts?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
  return <div></div>;
};

export default UploadedProducts;
