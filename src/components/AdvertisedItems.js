import React from "react";

const AdvertisedItems = ({ advertise }) => {
  console.log(advertise);
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
          <h2 className="card-title">Name: {advertise.title}</h2>
          <h2 className="card-title">Category: {advertise.category}</h2>
          <p>
            Date: {advertise.date} Time: {advertise.time}
          </p>
          <p>Date: {advertise.location}</p>
          <p>Seller Name: {advertise.sellerName} </p>
          <p>Email: {advertise.email} </p>
          <p>Original Price: {advertise.originalPrice}</p>
          <p>Resale Price: {advertise.resalePrice}</p>
          <p>Use: {advertise.uses} year/month</p>
          <p>status: {advertise.status}</p>
          <p>Relevant Info: {advertise.relevantInfo}</p>
          <p>{advertise.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary btn-sm">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
