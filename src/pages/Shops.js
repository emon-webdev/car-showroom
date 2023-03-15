import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ImBullhorn } from "react-icons/im";
import SingleShopItems from "../components/Home/SingleShopItems";
import DynamicBanner from "../components/Shared/DynamicBanner";
const Shops = () => {
  // const { count, products } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      // fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  // const {
  //   data: { products, count } = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/products`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   <div className="flex justify-center items-center">
  //     <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
  //   </div>;
  // }

  console.log(products, count);

  return (
    <div>
      <DynamicBanner title="Shops" />
      <div className="shops-products py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-7 text-center title__before">
            <span className="bg-white px-6">
              <ImBullhorn className="mr-3 inline-block text-primary"></ImBullhorn>
              All Products
            </span>
          </h2>
          <div className="product-filter flex items-center justify-between bg-[#f8f8f8] py-3">
            <div className="sort-product"></div>
            <div className="product-search flex items-center justify-between">
              <input
                type="text"
                placeholder="Type here"
                className="input  input-bordered rounded-[0px] w-full"
              />
              <button className="btn btn-square btn-outline">
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {products?.map((product) => (
              <SingleShopItems product={product} />
            ))}
          </div>
          <div className="pagination mt-8 text-center">
            <div className="btn-group shadow-lg">
              {[...Array(pages).keys()].map((number) => (
                <button
                  onClick={() => setPage(number)}
                  className={page === number ? "selected  btn" : "btn"}
                >
                  {number + 1}
                </button>
              ))}
            </div>
            <div className="btn-group ml-2 shadow-lg">
              <select
                onChange={(event) => setSize(event.target.value)}
                className="select"
              >
                <option value="5">Select</option>
                <option value="5">5</option>
                <option value="10" selected>
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
