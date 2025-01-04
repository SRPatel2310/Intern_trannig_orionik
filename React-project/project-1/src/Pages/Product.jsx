import React, { useState, useEffect } from "react";
import "../Pages/Productstyle.css";
import { furnitureProducts } from "../Componet/data.js";
import Navigation from "../Componet/Navigation.jsx";

const Products = () => {
  return (
    <>
      <Navigation />
      <div className="product-page">
        <div className="product-header">
          <h1>OUR PRODUCTS</h1>
          <p>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
        </div>{" "}
        <br />
        <div className="cards">
          {/* {Array.isArray(product) && product.map((item) => (<h3 key={item.id}>{item.name}</h3>))} */}
          {furnitureProducts.map((furniture, index) => {
            return (
              <div key={index} className="cards-data">
                <h3 className="card-title">{furniture.title}</h3>

                <img src={furniture.img} alt="" />
                <div className="Price-section">
                  <span>Price:{furniture.price}</span>
                  <button className="card-btn">Buy Now</button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="see-more-btn">See More</button>
      </div>
    </>
  );
};

export default Products;
