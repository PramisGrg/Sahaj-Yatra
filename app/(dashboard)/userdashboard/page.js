import React from "react";
import UserSidebar from "@/ui/userSidebar";
import { FiUserCheck } from "react-icons/fi";

const UserDashboard = () => {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <UserSidebar />
        <div className="flex flex-col overflow-hidden">
          <div className="flex justify-between p-4 ">
            <div>
              <h1 className="font-bold text-xl">User Dashbaord </h1>
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

export default UserDashboard;
