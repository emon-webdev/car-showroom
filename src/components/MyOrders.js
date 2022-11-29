import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "./Loading";
const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
      const data = res.json();
      return data;
    },
  });

  console.log(bookings);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1400px] mx-auto my-12">
      <h2 className="text-center text-[#e0c83d] my-8 text-4xl font-bold">
        My Orders
      </h2>
      <h2 className="text-center my-8 text-xl font-bold">
        If you are showing orders then you must be Booking{" "}
        <span className="text-[#e0c83d]">home - Category - Book now</span> Order{" "}
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((product, index) => (
                <tr key={product?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={product?.img} alt="img" />
                      </div>
                    </div>
                  </td>
                  <td>{product?.productName}</td>
                  <td>$ {product?.resalePrice}</td>
                  <td>
                    <Link
                      to={`/dashboard/payment/${product._id}`}
                      className="btn btn-success btn-sm"
                    >
                      Pay
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
