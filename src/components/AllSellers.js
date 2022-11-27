import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllSellers = () => {
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allSeller`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    );
  }

  const handleVerify = (id, email) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verify: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
        }
      });

    fetch(`http://localhost:5000/products?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verifyUser: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("User Verify");
      });
  };

  return (
    <div>
      <h1 class="text-5xl my-8 font-bold text-center">
        <span class="text-[#e0c83d]">All Sellers</span>
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((singleUser, index) => (
                <tr key={singleUser?._id}>
                  <th>{index + 1}</th>
                  <td>{singleUser?.name}</td>

                  <td>{singleUser?.email}</td>
                  <td>{singleUser?.role}</td>
                  <td>
                    {singleUser?.verify ? (
                      <button
                        onClick={() =>
                          handleVerify(singleUser._id, singleUser?.email)
                        }
                        className="btn btn-success btn-xs"
                      >
                        Verified
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleVerify(singleUser._id, singleUser?.email)
                        }
                        className="btn btn-error btn-xs"
                      >
                        Verify
                      </button>
                    )}
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

export default AllSellers;
