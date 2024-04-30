import React from "react";
import { Carousel } from "flowbite-react";
import CreditCard from "@/public/assets/CreditCard.svg";
import DataAnalysis from "@/public/assets/Data analysis.svg";
import Image from "next/image";

const Sliders = () => {
  return (
    <div className="w-full h-[800px] px-8 py-10">
      <Carousel className="">
        <div className="p-20 grid md:grid-cols-2 h-full items-center justify-center bg-gray-200 ">
          <div>
            <Image src={CreditCard} alt="credit card image"></Image>
          </div>
          <div className="leading-loose ">
            <h1 className="text-2xl font-bold text-primary pb-4">
              Cashless Transaction
            </h1>
            <p>
              Sahaj Yatra offers contactless payment with the help of RFID which
              is convinient to passengers reduces the need for physical cash
              handling.
            </p>
          </div>
        </div>
        <div className="p-20 grid md:grid-cols-2 h-full items-center justify-center bg-gray-200 ">
          <div>
            <Image src={DataAnalysis} alt="data analysis image"></Image>
          </div>
          <div className="leading-loose">
            <h1 className="text-2xl font-bold text-primary pb-4">
              Data Analysis
            </h1>
            <p>
              Sahaj Yatra collect and analyze passenger data to generate
              insights into ridership patterns, peak travel times, popular
              routes, and other key metrics, helping transit agencies optimize
              service planning and resource allocation.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Sliders;
