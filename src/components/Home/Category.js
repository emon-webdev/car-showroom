import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
const Category = () => {
  // const categories = ["toyota", "lexus", "bmw", "Mercedes"];
  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`https://car-showroom-server.vercel.app/categories`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <div className="flex justify-center items-center">
      <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
    </div>;
  }
  return (
    <div className=" py-12  bg-[#F7F9FB]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center title__before">
          <span className="px-6">
            <BiCategory className="mr-3 inline-block text-primary"></BiCategory>
            Category
          </span>
        </h2>
        <div className="grid gap-2 md:grid-cols-4 grid-cols-2 mt-12">
          {categories?.map((category, i) => (
            <Link
              to={`/category/${category?.name}`}
              key={category._id}
              className="category"
            >
              <div className="text-center">
                <h4 className="text-[#010c3a] uppercase text-xl font-semibold mb-3 ">
                  {category?.name}
                </h4>
                <div className="icon m-auto">
                  <img src={category?.picture} alt={category?.name} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
