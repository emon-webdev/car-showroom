import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const AdvertisedItems = ({ advertise, setBookingData }) => {




  
  return (
    <div>
      <div
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
              className="btn btn-primary btn-sm"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
