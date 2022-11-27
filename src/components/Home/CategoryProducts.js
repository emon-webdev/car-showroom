import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Loading";
import BookModal from "./BookModal";

const CategoryProducts = () => {
  const { user } = useContext(AuthContext);
  const categoryProducts = useLoaderData();
  const [bookingData, setBookingData] = useState(null);
  const navigation = useNavigation();
  console.log(bookingData);

  

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-12">
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
              <p>Seller Name: {categoryProduct.sellerName} </p>
              <p>Email: {categoryProduct.email} </p>
              <p>Original Price: {categoryProduct.originalPrice}</p>
              <p>Resale Price: {categoryProduct.resalePrice}</p>
              <p>Use: {categoryProduct.uses} year/month</p>
              <p>status: {categoryProduct.status}</p>
              <p>Relevant Info: {categoryProduct.relevantInfo}</p>
              <p>{categoryProduct.description}</p>
              <div className="card-actions">
                <label
                  htmlFor="my-modal"
                  onClick={() => setBookingData(categoryProduct)}
                  className="btn btn-primary"
                >
                  {" "}
                  Book Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* MOdal */}
      <BookModal
        user={user}
        bookingData={bookingData}
      />
    </div>
  );
};

export default CategoryProducts;
