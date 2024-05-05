import React from "react";
import AdminSidebar from "@/ui/Sidebar/adminSidebar";
import Topbar from "@/ui/Sidebar/Topbar";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <AdminSidebar className="bg-green-500" />
        <div className="flex flex-col overflow-hidden">
          <Topbar />
          <h1 className="w-screen bg-pink-400 ">Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
