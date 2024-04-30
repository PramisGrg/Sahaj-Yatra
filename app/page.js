import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sliders from "@/components/Sliders";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Sliders />
      <Footer />
    </div>
  );
};

export default page;
