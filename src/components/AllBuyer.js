import axios from "axios";
import React, { useEffect, useState } from "react";

const AllBuyer = () => {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allBuyer").then((res) => {
      setBuyers(res.data);
    });
  }, []);

  console.log(buyers);

  return (
    <div>
      <h1 class="text-5xl my-8 font-bold text-center">
        <span class="text-[#e0c83d]">All Buyer</span>
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
              </tr>
            </thead>
            <tbody>
              {buyers?.map((singleUser, index) => (
                <tr key={singleUser?._id}>
                  <th>{index + 1}</th>
                  <td>{singleUser?.name}</td>

                  <td>{singleUser?.email}</td>
                  <td>{singleUser?.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyer;
