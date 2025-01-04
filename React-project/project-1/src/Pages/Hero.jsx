import React from "react";

function Hero() {
  return (
    <>
      <section className="relative bg-gray-900">
        <div className="container mx-auto px-5 py-24 flex flex-col-reverse lg:flex-row items-center">
          {/* Text Side */}
          <div className="text-white text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Elegant Furniture for Every Home
            </h1>
            <p className="text-lg mb-8">
              Transform your space with our premium selection of furniture.
              Experience luxury, comfort, and timeless design.
            </p>
            <a
              href="#shop"
              className="inline-flex text-lg font-medium text-indigo-500 border-b-2 border-indigo-500 hover:text-white hover:border-white py-2 px-6 transition duration-300"
            >
              Shop Now
            </a>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                alt="Furniture"
                className="object-cover object-center w-full h-full"
                src="https://media.istockphoto.com/id/1824615222/photo/orange-sofa-in-cozy-living-room-interior-with-pastel-green-wall-and-wood-furniture-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=zY0DV0FVa6V_1nFxdvWVLn1N_JRQjhezX7GzelS3-LA="
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
