import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <Navigation />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Trending Products
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Discover the latest and greatest products in our store. Find
                amazing deals and discounts on electronics, fashion, and more.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
                <img
                  alt="product"
                  className=" h-full w-400 "
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuFOAdlG2BpG8w0urMJ5YQHdfwdJq_9twIJFNSmvrCpOamNPQ9Pu6i1oLSaNviJq-y9yFDIlADOCieQx-38bvijNZWQlORJaf98jq5nDsw4vcQcLDbClwKQg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Wireless Headphones
              </h2>
              <p className="text-base leading-relaxed mt-2">
                High-quality sound, long-lasting battery life, and a sleek
                design. Perfect for music lovers and on-the-go professionals.
              </p>
              <a
                href="/"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Shop Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
                <img
                  alt="product"
                  className="object-cover object-center h-full w-400"
                  src="https://images.snapmint.com/product_assets/images/000/921/630/large/open-uri20231116-4749-1ey1pjk?1700122700"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Smart Watch
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Keep track of your health and fitness goals with this
                cutting-edge smartwatch. Stylish, functional, and easy to use.
              </p>
              <a
                href="/"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Shop Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
                <img
                  alt="product"
                  className="object-cover object-center h-full w-300 "
                  src="https://m.media-amazon.com/images/I/61hFOcrPYbL._SX679_.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Designer Backpack
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Fashionable and spacious, this designer backpack is perfect for
                both work and play. Carry your essentials in style.
              </p>
              <a
                href="/"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Shop Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Dashboard;
