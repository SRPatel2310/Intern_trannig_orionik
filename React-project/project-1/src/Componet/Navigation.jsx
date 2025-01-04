import React from "react";
import "../Componet/Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <>
      <header className="text-gray-900 body-font bg-red-200">
        <div className="container mx-auto flex flex-wrap p-2 flex-col  md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 gap-x-3 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h1>Furniro</h1>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center bg-red-200 gap-x-10  justify-center">
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
          <ul className="inline-flex items-center border-0 py-1 px-3 text-base mt-4 md:mt-0">
            <li className="hover:text-white">
              <i className="ri-user-3-line"></i>
            </li>
            <li className="hover:text-white">
              <i className="ri-search-line"></i>
            </li>

            <li className="hover:text-white">
              <i className="ri-heart-line"></i>
            </li>
            <li className="hover:text-white">
              <i className="ri-shopping-cart-line"></i>
            </li>
          </ul>
        </div>
      </header>

      {/* <nav>
        <h1>Furniro</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Product"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Product
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <i className="ri-user-3-line"></i>
          </li>
          <li>
            <i className="ri-search-line"></i>
          </li>

          <li>
            <i className="ri-heart-line"></i>
          </li>
          <li>
            <i className="ri-shopping-cart-line"></i>
          </li>
        </ul>
      </nav> */}
    </>
  );
}

export default Navigation;
