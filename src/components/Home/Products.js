import { useQuery } from "@tanstack/react-query";
import React from "react";

const Products = () => {


  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      return data;
    },
  });
console.log(products)

  return (
    <div className="my-12">
      <h1 className="text-5xl mb-8 font-bold text-center">
        MOST POPULAR <span className="text-[#e0c83d]">CAR Resale DEALS</span>
      </h1>
      <div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
