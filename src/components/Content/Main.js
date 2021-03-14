import React from "react";
import Navbar from "../Header/Navbar";
import Hero from "./Hero/Hero";
import Subsection from "./Subsection/Subsection";
import Footer from "../Footer/Footer";
import WhyUs from "./WhyUs";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <Subsection />
      <Footer />
    </div>
  );
}

export default Main;
