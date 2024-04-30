import React from "react";
import Navbar from "./Navbar";
import Busvector from "@/public/assets/busVector.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" grid md:grid-cols-2">
      <div className="my-40 mx-auto md:mt-60">
        <h1 className="text-3xl">The world is a book</h1>
        <p className="font-bold text-primary">
          and those who do not travel, read only a page
        </p>
        <p className="text-3xl">Transportation Redifined</p>
        <button className="bg-primary text-white mt-6 p-2 rounded-lg border-solid transition duration-300 hover:bg-secondary">
          Get started
        </button>
      </div>
      <div className="pt-20 h-screen">
        <Image src={Busvector} alt="bus vector image"></Image>
      </div>
    </div>
  );
};

export default Hero;
