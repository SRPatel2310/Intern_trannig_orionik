import React from "react";

function BrowseRange() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Our Premium Furniture Collection
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Explore our diverse range of furniture designed to suit any living
              space. From modern sofas to classic wooden tables, we have
              something for every home.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Sofa"
                className="object-cover object-center h-full w-full"
                src="https://uberdecor.in/cdn/shop/files/Sa0957c8fe75745ad801f87e8a298993ad.webp?v=1729482869&width=823"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Modern Sofa
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Our modern sofa combines comfort and style, perfect for any living
              room. Crafted with soft fabric and durable frames.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
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
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Dining Table"
                className="object-cover object-center h-full w-full"
                src="https://d1wc69nzx5ojwh.cloudfront.net/catalog/product/cache/9a8b2a5ff35710a6d785a39a24167aac/7/1/713807098_ai.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Dining Table
            </h2>
            <p className="text-base leading-relaxed mt-2">
              A spacious and elegant dining table for family gatherings. Made
              from premium wood with a polished finish.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
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
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Wooden Chair"
                className="object-cover object-center h-full w-full"
                src="https://dzynfurnitures.com/cdn/shop/files/Lifestyle_Image_of_Zorano_Teak_Wood_Arm_Chairs_Brown_Beige.webp?v=1733553154"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Wooden Chair
            </h2>
            <p className="text-base leading-relaxed mt-2">
              A timeless wooden chair crafted for both comfort and style. Ideal
              for both dining rooms and offices.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
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
  );
}

export default BrowseRange;
