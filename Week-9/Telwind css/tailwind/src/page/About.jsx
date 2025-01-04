import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-50 text-gray-800 py-10">
        <div className="max-w-screen-lg mx-auto px-5">
          {/* Company Overview Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              Welcome to E-Store, your number one source for all things . We are
              committed to providing you with the best products, with a focus on
              dependability, customer service, and uniqueness.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2024, our journey began with the goal of making
              accessible to everyone. Since then, we've expanded our offerings,
              ensuring that our customers receive high-quality products and
              excellent service every time they shop with us.
            </p>
          </section>

          {/* Our Mission Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to offer a seamless online shopping experience with
              a wide range of premium products. Whether you're looking for the
              latest trends or unique finds, we aim to make your shopping
              journey as enjoyable as possible.
            </p>
          </section>

          {/* Core Values Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Core Values
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-600">
              <li>
                Customer Satisfaction - We prioritize our customers above all.
              </li>
              <li>Quality - We only offer products we believe in.</li>
              <li>
                Innovation - We're constantly improving our offerings and
                experience.
              </li>
              <li>
                Integrity - We are transparent and honest in everything we do.
              </li>
            </ul>
          </section>

          {/* Contact Info Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have any questions or want to learn more about us? Feel free to
              reach out. We're always here to help!
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Email:{" "}
              <span className="font-semibold text-indigo-600">
                E-commerce@gmail.com
              </span>
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Phone:{" "}
              <span className="font-semibold text-indigo-600">
                +123-456-7890
              </span>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
