import React from "react";
import "./Product.css";
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div className="main-productpage">
        <div className="product">
          <img
            src="https://cdn.midjourney.com/6606b048-1357-4313-aed1-a39919c97d86/0_0.png"
            alt="road"
          />
        </div>

        <div className="product">
          <img
            src="https://cdn.midjourney.com/42e5b972-5c30-4110-bd02-a814e36b62c6/0_2.png"
            alt="road"
          />
        </div>
        <div className="product">
          <img
            src="https://cdn.midjourney.com/f4f379b6-a7aa-4a93-82b4-21c0375d3b89/0_2.png"
            alt="road"
          />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Product;
