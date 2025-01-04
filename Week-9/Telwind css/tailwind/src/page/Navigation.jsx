import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <header className="text-gray-900 body-font bg-gray-300 ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col  md:flex-row items-center">
          <a
            href="/login"
            className="flex title-font font-medium items-center text-gray-900 gap-x-3 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h1>E-Store</h1>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  gap-x-10  justify-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              id="king"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/Product"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Product
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </nav>

          <button
            className="bg-red-600 p-2 rounded text-white my-2  "
            onClick={() => {
              navigate("/login");
              localStorage.removeItem("login-user");
              localStorage.removeItem("contact-detail");
            }}
          >
            Logout<i className="ri-logout-box-r-line mx-1"></i>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navigation;
