import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {user ? (
        <div className="px-4 ml-2 rounded-sm text-white bg-[#df0303] flex items-center justify-between">
          <button onClick={handleLogOut}>Sign Out</button>
        </div>
      ) : (
        <div className="px-4 ml-2 rounded-sm text-white bg-[#df0303] flex items-center justify-between">
          <Link to="/signin">Login</Link>
          <span className="px-2">or</span>
          <Link to="/signup">Register</Link>
        </div>
      )}
    </>
  );

  return (
    <div className="header-area py-3">
      <div className="container">
        <div className="navbar justify-between  bg-base-100">
          <div className="navbar-start max-w-fit">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="font-bold uppercase text-2xl">
              Car <span className="text-[#df0303]">RENTAL</span>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex items-center justify-between">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
