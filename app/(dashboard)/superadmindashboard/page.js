import React from "react";
import SuperAdminSidebar from "@/ui/superadminSidebar";

import { FiUserCheck } from "react-icons/fi";

const SuperAdminDashboard = () => {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <SuperAdminSidebar />
        <div className="flex flex-col overflow-hidden">
          <div className="flex justify-between p-4 ">
            <div>
              <h1 className="font-bold text-xl">Super Admin Dashbaord </h1>
            </div>
            <div className="flex gap-4">
              <span>Pramis Gurung</span>
              <FiUserCheck className="font-bold text-xl" />
            </div>
          </div>
          <h1 className="w-screen bg-pink-400 ">Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
