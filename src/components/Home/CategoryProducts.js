import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BsCheckCircleFill } from "react-icons/bs";
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

  const handleReport = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ report: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added advertise");
      });
  };

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
              <div className="flex items-center justify-between">
                <div>
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={categoryProduct?.sellerImg} alt="img" />
                    </div>
                    {categoryProduct.verifyUser && (
                      <BsCheckCircleFill className="text-green-500 text-xl " />
                    )}
                  </div>
                </div>
                <div>
                  <p>Seller Name: {categoryProduct.sellerName} </p>
                  <p>Email: {categoryProduct.email} </p>
                </div>
              </div>

              <h2 className="card-title">Name: {categoryProduct.title}</h2>
              <h2 className="card-title">
                Category: {categoryProduct.category}
              </h2>
              <p>
                Date: {categoryProduct.date} Time: {categoryProduct.time}
              </p>
              <p>Date: {categoryProduct.location}</p>

              <p>Original Price: {categoryProduct.originalPrice}</p>
              <p>Resale Price: {categoryProduct.resalePrice}</p>
              <p>Use: {categoryProduct.uses} year/month</p>
              <p>status: {categoryProduct.status}</p>
              <p>Relevant Info: {categoryProduct.relevantInfo}</p>
              <p>{categoryProduct.description}</p>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleReport(categoryProduct._id)}
                  className="btn btn-primary"
                >
                  Report
                </button>
                <label
                  htmlFor="my-modal"
                  onClick={() => setBookingData(categoryProduct)}
                  className="btn btn-primary"
                >
                  Book Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* MOdal */}
      <BookModal user={user} bookingData={bookingData} />
    </div>
  );
};

export default CategoryProducts;
