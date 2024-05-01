import React from "react";
import Busvector from "@/public/assets/busVector.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" grid md:grid-cols-2">
      <div className="my-40 mx-auto md:mt-60">
        <h1 className="text-3xl">The world is a book</h1>
        <p className="font-bold text-primary">
          and those who do not travel, read only a page
        </p>
        <p className="text-3xl mb-8">Transportation Redifined</p>
        <Link
          href="auth/login/userlogin"
          className="bg-primary text-white p-3 rounded-lg border-solid transition duration-300 hover:text-secondary"
        >
          Get started
        </Link>
      </div>
      <div className="pt-20 h-screen">
        <Image src={Busvector} alt="bus vector image"></Image>
      </div>
    </div>
  );
};

export default Hero;
