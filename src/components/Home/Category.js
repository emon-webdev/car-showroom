import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = ["toyota", "lexus", "bmw"];

  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="text-5xl my-8 font-bold text-center">
        {" "}
        <span className="text-[#e0c83d]">CAR Resale Category</span>
      </h1>

      <div className="grid grid-cols-3">
        {categories.map((category, i) => (
          <Link
            key={i}
            to={`/category/${category}`}
            className="font-bold uppercase text-2xl border border-white p-8 bg-black text-white flex justify-center items-center"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
