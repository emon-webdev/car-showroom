import React from "react";

const SingleProduct = ({ product, handleDelete, addAdvertise }) => {
  console.log(product);
  const {img, description, price,title , status} = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <h2 className="card-title">
          Price: ${price}
        </h2>
        <p>{description}</p>
        <div className="card-actions">
          <button onClick={() => addAdvertise(product)} className="badge badge-outline">Advertise</button>
          <button onClick={() => handleDelete(product)} className="badge badge-outline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
