import React from "react";
import Navigation from "../Componet/Navigation";

function About() {
  return (
    <>
      <Navigation />

      <div className="container mx-auto p-8">
        {/* Company Introduction */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">
            Welcome to <span className="font-bold text-blue-500">Furniro</span>,
            a leader in providing stylish and durable furniture. Since 2024, we
            have been transforming homes and offices with our high-quality
            designs, offering everything from modern minimalist furniture to
            timeless classic pieces.
          </p>
        </div>

        {/* Company Vision */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            At <span className="font-bold text-blue-500">Furniro</span>, our
            mission is to make every home and office space more beautiful,
            comfortable, and functional. We believe in providing our customers
            with top-quality craftsmanship, exceptional customer service, and a
            vast selection of furniture styles to suit every need.
          </p>
        </div>

        {/* Address */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Location
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-blue-500">Furniro Furniture</span>{" "}
            is located at:
          </p>
          <p className="text-lg text-gray-700 mb-4">
            1234 Furniro Avenue, <br />
            Suite 200, Cityname, State, 12345
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700">
            We’d love to hear from you! If you have any questions, feedback, or
            need assistance with our products, feel free to reach out:
          </p>
          <ul className="text-lg text-gray-700 space-y-2 mt-4">
            <li>
              <span className="font-bold text-blue-500">Phone:</span> (123)
              456-7890
            </li>
            <li>
              <span className="font-bold text-blue-500">Email:</span>{" "}
              contact@furniro.com
            </li>
            <li>
              <span className="font-bold text-blue-500">Website:</span>{" "}
              <a href="https://www.furniro.com" className="text-blue-500">
                www.furniro.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
