import React from "react";
import welcome from "../Assets/72342-welcome.json";
import Lottie from "lottie-react";
const Welcome = () => {
  return (
    <div>
      <div className='flex justify-center '>
        <Lottie animationData={welcome} loop={true} />
      </div>
    </div>
  );
};

export default Welcome;
