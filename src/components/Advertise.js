import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import AdvertisedItems from "./AdvertisedItems";

const Advertise = () => {
  const { user } = useContext(AuthContext);
  const {
    data: advertises = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["addProducts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertises`);
      const data = await res.json();

      return data;
    },
  });

  const handleBook = (advertiseBook) => {
    const bookingProduct = {
      productName: advertiseBook.title,
      resalePrice: advertiseBook.resalePrice,
      name: user?.displayName,
      email: user?.email,
      phone: advertiseBook?.user,
      location: advertiseBook?.location,
      img: advertiseBook?.img,
    };
    fetch("http://localhost:5000/bookings", {
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
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {advertises?.length > 0 ? (
        <>
          <h1 className="text-5xl my-8 font-bold text-center">
            <span className="text-[#e0c83d]">Advertise Items</span>
          </h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {advertises.map((advertise) => (
              <AdvertisedItems
                key={advertise._id}
                advertise={advertise}
                handleBook={handleBook}
              />
            ))}
          </div>
        </>
      ) : (
        " "
      )}
    </div>
  );
};

export default Advertise;
