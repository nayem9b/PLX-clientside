import React from "react";
import Lottie from "lottie-react";
import loading from "../Assets/99589-loader-for-web.json";
const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=' flex justify-center '>
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
