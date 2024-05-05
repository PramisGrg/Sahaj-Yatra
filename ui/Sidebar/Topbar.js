import React from "react";
import { FiUserCheck } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex justify-between p-4 ">
      <div>
        <h1 className="font-bold text-xl">BusOwner Dashbaord </h1>
      </div>
      <div className="flex gap-4">
        <span>Pramis Gurung</span>
        <FiUserCheck className="font-bold text-xl" />
      </div>
    </div>
  );
};

export default Topbar;
