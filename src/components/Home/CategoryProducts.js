import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CategoryProducts = () => {
  const {user} = useContext(AuthContext);
  const categoryProducts = useLoaderData();
  const [bookingData, setBookingData] = useState(null);

  console.log(bookingData);

  return (
    <div>
      <h1 className="text-5xl my-8 font-bold text-center">
        <span className="text-[#e0c83d]">Item Wise Same Category Products</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map((categoryProduct) => (
          <div
            key={categoryProduct._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={categoryProduct.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {categoryProduct.title}</h2>
              <h2 className="card-title">
                Category: {categoryProduct.category}
              </h2>
              <p>
                Date: {categoryProduct.date} Time: {categoryProduct.time}
              </p>
              <p>Date: {categoryProduct.location}</p>
              <p>Seller Name: {categoryProduct.sellerName}</p>
              <p>Email: {categoryProduct.email}</p>
              <p>Original Price: {categoryProduct.originalPrice}</p>
              <p>Resale Price: {categoryProduct.resalePrice}</p>
              <p>Use: {categoryProduct.uses}</p>
              <p>status: {categoryProduct.status}</p>
              <p>Relevant Info: {categoryProduct.relevantInfo}</p>
              <p>{categoryProduct.description}</p>
              <div className="card-actions">
                <label
                  htmlFor="my-modal-3"
                  onClick={() => setBookingData(categoryProduct)}
                  className="btn btn-primary"
                >
                  Booking Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* MOdal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{/* {bookingData.title} */}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
