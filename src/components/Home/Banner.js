import React from "react";
import banner1 from "../../assets/img/bmw3.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-4xl font-medium">Get Your service</h1>
          <p className="mb-5 text-6xl font-bold">
            Car and Bike Resale Here.
          </p>
          <button className="primary-btn">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
