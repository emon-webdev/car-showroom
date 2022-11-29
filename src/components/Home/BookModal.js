import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookModal = ({ booking, bookingData, closeModal }) => {
  const { user } = useContext(AuthContext);
  const { _id, email, number, title, resalePrice, sellerName } = bookingData;
  return (
    <div>
      <input type="checkbox" id="book-now" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={booking}>
            {/* {/ name field  /} */}
            <div className=" flex  font-bold text-lg">
              <label className="label">
                <span className="label-text">Product ID: </span>
              </label>
              <input disabled name="productId" defaultValue={_id} type="text" />
            </div>
            {/* {/ seller name  /} */}
            <div className=" flex  font-bold text-lg">
              <label className="label">
                <span className="label-text">Seller Name: </span>
              </label>
              <input
                disabled
                name="sellerName"
                defaultValue={sellerName}
                type="text"
              />
            </div>
            {/* {/ seller email  /} */}
            <div className=" flex  font-bold text-lg">
              <label className="label">
                <span className="label-text">Seller Email: </span>
              </label>
              <input
                disabled
                name="sellerEmail"
                defaultValue={email}
                type="text"
              />
            </div>
            {/* {/ seller phone number  /} */}
            <div className=" flex  font-bold text-lg">
              <label className="label">
                <span className="label-text">Seller phone number: </span>
              </label>
              <input
                disabled
                name="sellerNumber"
                defaultValue={number}
                type="text"
              />
            </div>
            {/*buyer name name field  */}
            <div className=" flex  font-bold text-lg">
              <label className="label">
                <span className="label-text">Your Name: </span>
              </label>
              <input
                disabled
                name="buyerName"
                defaultValue={user.displayName}
                type="text"
              />
            </div>
            {/* {/ email field  /} */}
            <div className=" flex  mt-4 font-bold text-lg">
              <label className="label">
                <span className="label-text">Your Email: </span>
              </label>
              <input
                disabled
                name="buyerEmail"
                defaultValue={user.email}
                type="text"
              />
            </div>
            <div className=" flex  mt-4 font-bold text-lg">
              <label className="label">
                <span className="label-text">Product Name: </span>
              </label>
              <input
                disabled
                name="title"
                defaultValue={title}
                type="text"
              />
            </div>
            <div className=" flex  mt-4 font-bold text-lg">
              <label className="label">
                <span className="label-text">price: </span>
              </label>
              <input
                disabled
                name="resalePrice"
                defaultValue={resalePrice}
                type="text"
              />
            </div>
            <div className=" flex  mt-4 font-bold text-lg">
              <label className="label">
                <span className="label-text">Your Phone Number: </span>
              </label>
              <input
                required
                name="buyerMobile"
                className="input input-bordered"
                type="phone"
              />
            </div>
            <div className=" flex  mt-4 font-bold text-lg">
              <label className="label">
                <span className="label-text">Meeting Location: </span>
              </label>
              <input
                required
                name="meetingLocation"
                className="input input-bordered"
                type="text"
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white "
              >
                Submit
              </button>
              <label onClick={closeModal} className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
