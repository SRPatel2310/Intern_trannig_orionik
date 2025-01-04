import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <>
      <nav>
        <h1>MY LOGO</h1>

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
              to="/Service"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contect"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contect
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Login"}
              // className={({ isActive }) => (isActive ? "active-link" : "")}
              id="button"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
