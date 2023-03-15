import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
const AdvertisedItems = ({ advertise, setBookingData }) => {
  const {
    location,
    date,
    category,
    resalePrice,
    verifyUser,
    sellerImg,
    sellerName,
    img,
  } = advertise;
  return (
    <>
      <div className="card card-compact rounded bg-base-100 shadow-xl">
        <figure className="max-h-[200px] w-full">
          <img className="max-h-[200px] h-[200px]" src={img} alt="car!" />
          {/* <img src="https://placeimg.com/400/225/arch" alt="car!" /> */}
        </figure>
        <div className="card-body justify-between">
          <div className="user__meta">
            <div className="avater">
              <img className="rounded-full" src={sellerImg} alt="User" />
              <div>
                <h6 className="font-light ml-3 text-secondary">{sellerName}</h6>
              </div>
            </div>
            <div className="post-date">
              <BiTimeFive className="inline-block text-primary text-lg mr-2"></BiTimeFive>
              <span className="text-secondary font-light">{date}</span>
            </div>
          </div>
          <h2 className="card-title text-secondary mt-2">{category}</h2>
          <div>
            <span className=" text-xs text-[#949494] uppercase">Price</span>
            <span className="text-lg text-primary block font-medium">
              BDT $ {resalePrice}
            </span>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <GoLocation className="inline-block text-primary text-lg"></GoLocation>
              <span className="text-secondary ml-2">{location}</span>
            </div>
            <div>
              <BsSpeedometer2 className="inline-block text-primary text-lg"></BsSpeedometer2>
              <span className="text-secondary ml-2">65,000 km</span>
            </div>
          </div>
          <div className="card-actions mt-3">
            <button className="btn btn-outline btn-primary w-full rounded">
              See More!
            </button>
          </div>
        </div>
      </div>
      {/* <div
        key={advertise._id}
        className="card card-compact w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src={advertise.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={advertise?.sellerImg} alt="img" />
                </div>
                <BsCheckCircleFill className="text-green-500 text-xl " />
              </div>
            </div>
            <div>
              <p>Seller Name: {advertise.sellerName} </p>
              <p>Email: {advertise.email} </p>
            </div>
          </div>

          <h2 className="card-title">Name: {advertise.title}</h2>
          <h2 className="card-title">Category: {advertise.category}</h2>
          <p>
            Date: {advertise.date} Time: {advertise.time}
          </p>
          <p>Date: {advertise.location}</p>
          <p>Original Price: {advertise.originalPrice}</p>
          <p>Resale Price: {advertise.resalePrice}</p>
          <p>Use: {advertise.uses} year/month</p>
          <p>status: {advertise.status}</p>
          <p>Relevant Info: {advertise.relevantInfo}</p>
          <p>{advertise.description}</p>
          <div className="card-actions">
            <label
              htmlFor="book-now"
              onClick={() => setBookingData(advertise)}
              className="primary-btn"
            >
              Book Now
            </label>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AdvertisedItems;
