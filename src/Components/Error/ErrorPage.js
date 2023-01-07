import React from "react";
import Lottie from "lottie-react";
import error from "../Assets/84918-404-error-doodle-animation.json";
const ErrorPage = () => {
  return (
    <div className='flex justify-center '>
      <Lottie animationData={error} loop={true} />
    </div>
  );
};

export default ErrorPage;
