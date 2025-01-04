import React, { useState, useEffect } from "react";
import "../componet/Use.css";

const Useeffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mainuseeffect">
        {data.map((item) => (
          <div className="product-data" key={item.id}>
            <h1 className="title">{item.title}</h1>
            <img src={item.image} alt="Product" />
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Useeffect;
