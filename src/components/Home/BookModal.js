import React from "react";
import { toast } from "react-hot-toast";

const BookModal = ({ user, bookingData }) => {
  const handleBook = (event) => {
    event.preventDefault();
    toast.success("Booking Successfully");
  };

  const handleBookClick = () => {
    toast.success("Booking Successfully");
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
            <label
              onClick={handleBookClick}
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
