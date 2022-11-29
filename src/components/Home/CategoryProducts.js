import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCheckCircleFill } from "react-icons/bs";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../Loading";
import BookModal from "./BookModal";

const CategoryProducts = () => {
  const category = useLoaderData();
  const [bookingData, setBookingData] = useState(null);
  const navigation = useNavigation();

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://car-showroom-server.vercel.app/products/${category.category}`
      );
      const data = res.json();
      return data;
    },
  });

  const closeModal = () => {
    setBookingData(null);
  };
  const booking = (event) => {
    event.preventDefault();
    setBookingData(null);

    const form = event.target;
    const productName = form.title.value;
    const resalePrice = form.resalePrice.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const meetingLocation = form.meetingLocation.value;
    const buyerMobile = form.buyerMobile.value;
    const sellerNumber = form.sellerNumber.value;
    const productId = form.productId.value;

    const bookingProduct = {
      productName,
      resalePrice,
      sellerName,
      sellerEmail,
      buyerName,
      buyerEmail,
      meetingLocation,
      sellerNumber,
      buyerMobile,
      productId,
    };
    console.log(bookingProduct);

    fetch("https://car-showroom-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Successfully");
        } else {
          toast.error(data.message);
        }
      });

    //save product to the database for
    fetch(`https://car-showroom-server.vercel.app/products/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ booked: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleReport = (id) => {
    console.log(id);
    fetch(`https://car-showroom-server.vercel.app/products/${id}`, {
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

  if (navigation.state === "loading" || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-12">
      <h1 className="text-5xl my-8 font-bold text-center">
        <span className="text-[#e0c83d]">Item Wise Same Category Products</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((categoryProduct) => (
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
                  htmlFor="book-now"
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
      {/* MOdal content*/}
      {bookingData && (
        <BookModal
          bookingData={bookingData}
          closeModal={closeModal}
          booking={booking}
        />
      )}
    </div>
  );
};

export default CategoryProducts;
