"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Logo from "@/public/assets/Logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toogleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const navlinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "SuperAdmin Login",
      link: "/superAdmin-login",
    },
    {
      title: "BusOwner Login",
      link: "/busOwner-login",
    },
  ];

  return (
    <div className="md:flex bg-primary md:items-center md:justify-between p-3">
      <div className="flex">
        <Image className="h-16 w-16" src={Logo} alt="logo for sahaj yatra" />
        <a
          href="/"
          className="hover:text-secondary transition duration-400 text-xl font-bold mt-4 text-white ml-2"
        >
          सहज यात्रा
        </a>
      </div>
      <div className="flex md:flex-row flex-col items-center text-xl">
        {navlinks.map((link, index) => (
          <Link
            className={`md:mx-6 text-xl hover:text-secondary transition duration-400 text-white py-4 md:block ${
              showNavbar ? "block" : "hidden"
            }`}
            key={index}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
        <MdMenu
          onClick={toogleNavbar}
          className="text-white text-xl hover:text-secondary transition duration-400 md:hidden absolute top-8 right-4 "
        />
      </div>
    </div>
  );
};

export default Navbar;
