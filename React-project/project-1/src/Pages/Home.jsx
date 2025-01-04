import React from "react";
import Hero from "./Hero";
import BrowseRange from "./BrowseRange";
import Footer from "../Componet/Footer";
import Navigation from "../Componet/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <BrowseRange />
      <Footer/>
    </>
  );
}

export default Home;
