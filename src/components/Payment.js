import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();

  return (
    <div>
      <h2 className=" text-[#e0c83d] my-8 text-4xl font-bold">
        Payment Method
      </h2>
      <h2 className="my-3 text-2xl font-bold">Product Details:</h2>
      <h2 className="text-xl font-bold">
        Payment: <span className="text-[#e0c83d]">{booking?.productName}</span>
      </h2>
      <h2 className="text-xl font-bold">
        Price: <span className="text-[#e0c83d]">$ {booking?.resalePrice}</span>
      </h2>
      <h2 className="text-xl font-bold">
        Location: <span className="text-[#e0c83d]">$ {booking?.location}</span>
      </h2>
      <h2 className="my-3 text-2xl font-bold">Buyer Details: </h2>
      <h2 className="text-xl font-bold">
        Name: <span className="text-[#e0c83d]"> {booking?.name}</span>
      </h2>
      <h2 className="text-xl font-bold">
        Email: <span className="text-[#e0c83d]"> {booking?.email}</span>
      </h2>
    </div>
  );
};

export default Payment;
