import React from "react";
import { toast } from "react-hot-toast";

const BookModal = ({ user, bookingData, setBookingData }) => {
  const handleBook = (event) => {
    event.preventDefault();

    const bookingProduct = {
      productName: bookingData?.title,
      resalePrice: bookingData?.resalePrice,
      name: user?.displayName,
      email: user?.displayName,
      location: bookingData?.location,
      number: bookingData?.number,
    };
    console.log(bookingProduct);

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
          setBookingData(null);
          toast.success("Booking Successfully");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBook} className="text-center">
            <label className="label py-1">
              {" "}
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              disabled
              value={bookingData?.title}
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <label className="label py-1">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              disabled
              value={bookingData?.resalePrice}
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <label className="label py-1">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              readOnly
              placeholder="Full Name"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <label className="label py-1">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="email"
              required
              readOnly
              placeholder="Email"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <label className="label py-1">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              defaultValue={bookingData?.location}
              name="email"
              required
              placeholder="Email"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <label className="label py-1">
              {" "}
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              name="phone"
              defaultValue={bookingData?.number}
              required
              placeholder="Phone Number"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            {/* <input
              type="submit"
              htmlFor="my-modal"
              value="SUBMIT"
              className="btn btn-accent w-full text-white max-w-[475px] h-[48px]"
            /> */}
            <label
              htmlFor="my-modal"
              className="btn btn-accent w-full text-white max-w-[475px] h-[48px]"
            >
              <button type="submit">Submit</button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
