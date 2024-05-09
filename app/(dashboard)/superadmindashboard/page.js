"use client";
import React, { useState } from "react";
import { FiUserCheck } from "react-icons/fi";
import Logout from "@/components/logout";

const SuperAdmin = () => {
  const [logout, setlogout] = useState(false);
  const handleClick = () => {
    setlogout(!logout);
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="font-bold text-xl mt-2">SuperAdmin Dashbaord </h1>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">Pramis Gurung</span>
            <FiUserCheck className="font-bold mt-2 text-xl" />
            <button
              className="bg-primary text-white p-1 rounded-lg hover:text-secondary hover:scale-105 transition-all duration-300"
              onClick={handleClick}
            >
              LogOut
              <Logout value={logout} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1>PAge</h1>
      </div>
    </div>
  );
};

export default SuperAdmin;
