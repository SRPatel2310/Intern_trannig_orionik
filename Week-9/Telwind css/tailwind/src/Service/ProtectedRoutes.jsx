import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const auth = localStorage.getItem("login-user");
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoutes;
