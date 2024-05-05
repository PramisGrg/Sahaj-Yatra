import React from "react";
import Link from "next/link";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaUser, FaUserLock, FaUserCheck } from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard/superadmin-dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Users",
    path: "/dashboard/superadmin-dashboard/Users",
    icon: <FaUser />,
  },
  {
    title: "Unverified Users",
    path: "/dashboard/superadmin-dashboard/UnverifiedUsers",
    icon: <FaUserLock />,
  },
  {
    title: "Verified Users",
    path: "/dashboard/superadmin-dashboard/VerifiedUsers",
    icon: <FaUserCheck />,
  },
  {
    title: "Log out",
    path: "/dashboard/superadmin-dashboard/Logout",
    icon: <MdLogout />,
  },
];

const SuperAdminSidebar = () => {
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

export default SuperAdminSidebar;
