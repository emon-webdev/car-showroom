import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "./Loading";
import SingleProduct from "./SingleProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  //delete product
  const handleDelete = (product) => {
    console.log(product);
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete product");
        }
      });
  };

  const addAdvertise = (product) => {
    //save product to the database for advertises
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added advertise");
      });
  };

  return (
    <div className="max-w-[1400px] mx-auto my-12">
      <h2 className="text-center my-8 text-4xl font-bold">My Products</h2>
      <h2 className="text-center my-8 text-xl font-bold">
        If you are showing product then you must be added product{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            handleDelete={handleDelete}
            addAdvertise={addAdvertise}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
