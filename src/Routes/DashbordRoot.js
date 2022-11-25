import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";

const DashbordRoot = () => {
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-[55px] bg-[#F1F5F9] flex flex-col">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/allSeller">All Seller</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/myWishList">My WishList</Link>
            </li>
            <li>
              <Link to="/dashboard/reportedItem">Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordRoot;
