import React from "react";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { GiBus } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admindashboard",
    icon: <MdDashboard className=" w-5 h-6" />,
  },

  {
    title: "Bus",
    path: "/admindashboard/bus",
    icon: <FaBus className=" w-5 h-6" />,
  },
  {
    title: "Bus Registration",
    path: "/admindashboard/busRegistration",
    icon: <GiBus className=" w-5 h-6" />,
  },
  {
    title: "Bus Location ",
    path: "/admindashboard/busLocation",
    icon: <IoLocationOutline className=" w-5 h-6" />,
  },
  {
    title: "Log out",
    path: "/admindashboard/ogout",
    icon: <MdLogout />,
  },
];

const AdminSidebar = () => {
  return (
    <div className="bg-primary w-1/5">
      <h1 className="font-bold text-white text-center text-2xl mt-4">
        {" "}
        सहज यात्रा
      </h1>
      <div>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.title}>
              <Link
                className="flex p-3 transition-all duration-300 gap-2 my-6 text-white hover:text-secondary hover:scale-105"
                href={menuItem.path}
              >
                {menuItem.icon}
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
