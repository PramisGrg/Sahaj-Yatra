import React from "react";
import { FiUserCheck } from "react-icons/fi";

const User = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="font-bold text-xl mt-2">User Dashbaord </h1>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">Pramis Gurung</span>
            <FiUserCheck className="font-bold mt-2 text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1>PAge</h1>
      </div>
    </div>
  );
};

export default User;
