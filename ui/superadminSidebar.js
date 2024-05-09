"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaUser, FaUserLock, FaUserCheck } from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/superadmindashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Users",
    path: "/superadmindashboard/users",
    icon: <FaUser />,
  },
  {
    title: "Unverified Users",
    path: "/superadmindashboard/unverifiedusers",
    icon: <FaUserLock />,
  },
  {
    title: "Verified Users",
    path: "/superadmindashboard/verifiedusers",
    icon: <FaUserCheck />,
  },
  // {
  //   title: "Log out",
  //   path: "/dashboard/superadmin-dashboard/Logout",
  //   icon: <MdLogout />,
];

const SuperAdminSidebar = () => {
  return (
    <div className="bg-primary" style={{ width: "250px" }}>
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
