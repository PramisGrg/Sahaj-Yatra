"use client";
import React, { useEffect } from "react";
import BusAbout from "@/public/assets/BusAbout.jpeg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="bg-primary px-8 py-20 grid md:grid-cols-2 overflow-hidden">
      <div data-aos="fade-right" data-aos-duration="1500" className=" ">
        <Image
          className="rounded-lg"
          src={BusAbout}
          alt="picture if bus in About Section"
        ></Image>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="leading-loose tracking-wide p-10 pt-40 text-white"
      >
        <h1 className="text-xl">About us</h1>
        <p className="py-4 font-bold text-4xl">What we do serve you best</p>
        <p>
          We integrate digital payment system with existing bus infrastructure
          to create a modern and data-driven transportation approach
        </p>
        <p className="py-4">
          Sahaj Yatra encompasses the development and implementation of a robust
          system for the automated payment and hassle-free passenger experience
          in public transportation. The project aims to create a sustainable
          solution that addresses the challenges of traditional transport
          system.
        </p>
        <button className=" font-bold hover:scale-110 transition-all duration-1500  text-white">
          Learn more{"    "}
          <span>➞</span>
        </button>
      </div>
    </div>
  );
};

export default About;
