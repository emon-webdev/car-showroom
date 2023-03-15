import React from "react";
import banner1 from "../../assets/img/bmw3.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-[770px]"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container md:flex justify-between items-center">
        <div className="">
          <h1 className="mb-5 text-white text-4xl font-medium">
            Get Your service
          </h1>
          <p className="mb-5 text-white text-6xl font-bold">
            Car and Bike Resale Here.
          </p>
          <button className="primary-btn">Click Here</button>
        </div>
        {/* <div className="bg-white">
          <h3>Find Your Car</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
