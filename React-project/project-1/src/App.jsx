import React from "react";
// import "./App.css";
import Home from "./Pages/Home";
import Login from "./Componet/Login";
import Product from "./Pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
