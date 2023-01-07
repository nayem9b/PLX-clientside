import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const MyPurchases = () => {
  const [myPurchase, setMyPurchase] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/mypurchase?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user.email]);
  return (
    <div>
      <h1>This is my purchase</h1>
    </div>
  );
};

export default MyPurchases;
