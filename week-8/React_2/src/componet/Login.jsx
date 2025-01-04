import React from "react";
import "./Login.css";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Deshboad from "./Deshboad";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  //   if (
  //     credentials.username === "admin" &&
  //     credentials.password === "password"
  //   ) {
      navigate("/Dashboard");
  //   } else {
  //     setError("Invalid username or password");
  //   }
  };

  return (
    <div className="main-login">

        <div className="form2">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
      </form>
        </div>
    </div>
  );
};

export default Login;
