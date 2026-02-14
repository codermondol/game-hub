import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, userLogOut } = use(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        alert("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li className="font-bold hover:text-primary">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold hover:text-primary">
        <NavLink to="/games">Games</NavLink>
      </li>
      <li className="font-bold hover:text-primary">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="font-bold hover:text-primary">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#1d1521] shadow-sm border-b-2 border-gray-300 z-50">
      <div className="w-11/12 mx-auto navbar  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-[999] mt-3 w-52 p-2 shadow bg-secondary"
            >
              {links}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            <img className="w-[80px] sm:w-[100px] md:w-[120px]" src={logoImg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/profile">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  userIcon
                )}
              </Link>
              <button
                onClick={handleLogOut}
                className="btn btn-primary btn-sm sm:btn-md hover:bg-white hover:text-primary"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className=" flex gap-1 sm:gap-2">
              <a
                href="/login"
                className="btn btn-primary btn-sm sm:btn-md hover:bg-white hover:text-primary"
              >
                Login
              </a>
              <a
                href="/register"
                className="btn btn-primary btn-sm sm:btn-md hover:bg-white hover:text-primary"
              >
                Register
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
