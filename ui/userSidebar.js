import React from "react";
import Link from "next/link";
import { MdDashboard, MdAttachMoney, MdLogout } from "react-icons/md";
import { FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";

const menuItems = [
  {
    title: "Dashboard",
    path: "/userdashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Location",
    path: "/userdashboard/location",
    icon: <FaLocationDot />,
  },
  {
    title: "Payment",
    path: "/userdashboard/payment",
    icon: <MdAttachMoney />,
  },
  {
    title: "Transaction",
    path: "/userdashboard/transaction",
    icon: <FaMoneyCheckDollar />,
  },
  {
    title: "Log out",
    path: "/dashboard/user-dashboard/Logout",
    icon: <MdLogout />,
  },
];

const UserSidebar = () => {
  return (
    <div className="bg-primary w-1/5">
      <h1 className="font-bold text-white text-center text-2xl mt-4">
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

export default UserSidebar;
