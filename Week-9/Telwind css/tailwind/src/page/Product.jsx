import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Product() {
  const [data1, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products").then(
          (res) => res.json()
        );
        console.log(data);
        setData(data);
      } catch (error) {
        console.log("This is an error: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <>
      <Navigation />

      <section className="text-gray-600 body-font">
        <div className="container px-7 py-24 mx-auto">
          <div className="flex flex-wrap m-5">
            {data1.map((product) => (
              <div
                key={product.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded-lg shadow-md"
              >
                <a
                  href="/"
                  className="block relative h-48 rounded overflow-hidden flex justify-center items-center"
                >
                  {/* Adjust image size and make it smaller */}
                  <img
                    alt={product.title}
                    className="object-contain max-h-40 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
                    src={product.image}
                  />
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;
