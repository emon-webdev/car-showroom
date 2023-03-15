import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
const SingleShopItems = ({ product }) => {
  const { _id, img, resalePrice, sellerImg, sellerName, title, date } = product;
  console.log(product);
  return (
    <Link
      to={`/product-details/${_id}`}
      className="card card-compact rounded bg-base-100 shadow-lg"
    >
      <figure>
        <img className="w-full h-[225px]" src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <div className="user__meta">
          <div className="avater">
            <img
              className="rounded-full h-[45px] w-[45px]"
              src={sellerImg}
              alt={sellerName}
            />
            <h6 className="font-light ml-3 text-secondary">{sellerName}</h6>
          </div>
          <div className="post-date">
            <BiTimeFive className="inline-block text-primary text-lg mr-2"></BiTimeFive>
            <span className="text-secondary font-light">2{date}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="card-title text-secondary mt-2">{title}</h2>
          <span className="text-lg text-primary block font-medium">
            $ {resalePrice}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleShopItems;
