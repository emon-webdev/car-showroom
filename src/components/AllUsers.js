import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const AllUsers = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users);

  return (
    <div>
      <h1 class="text-5xl my-8 font-bold text-center">
        <span class="text-[#e0c83d]">All Users</span>
      </h1>
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
            {users?.map((singleUser) => (
              <tr key={singleUser?._id}>
                <th>1</th>
                <td>{singleUser?.name}</td>

                <td>{singleUser?.email}</td>
                <td>{singleUser?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
