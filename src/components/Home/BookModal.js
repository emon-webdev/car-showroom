import React from "react";
import { toast } from "react-hot-toast";

const BookModal = ({ user, bookingData, setBookingData }) => {
  // console.log(bookingData);

  const handleBook = (event) => {
    event.preventDefault();

    const form = event.target;
    const productName = form.title.value;
    const resalePrice = form.resalePrice.value;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;

    console.log(productName, resalePrice, name, email, location, phone);
    const img = bookingData.img;
    const bookingProduct = {
      productName,
      resalePrice,
      name,
      email,
      phone,
      location,
      img,
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
          toast.success("Booking Successfully");
          setBookingData(null);
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
              name="title"
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
              name="resalePrice"
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
              type="email"
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
              name="location"
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

            <div className="hidden">
              <label className="label py-1">
                {" "}
                <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                  Photo
                </span>
              </label>
              <input
                type="file"
                name="img"
                defaultValue={bookingData?.img}
                required
                disabled
                placeholder="Image"
                className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
              />
            </div>

            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-accent w-full text-white max-w-[475px] h-[48px]"
            />

            {/* <label
              type="submit"
              htmlFor="my-modal"
              value="SUBMIT"
              className="btn btn-accent w-full text-white max-w-[475px] h-[48px]"
            >
              Submit
            </label> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
