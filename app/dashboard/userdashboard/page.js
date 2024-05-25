"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FiUserCheck } from "react-icons/fi";
import { axiosAuthInstance } from "@/services/axios";
import PieChartPage from "@/components/PieChart";

const User = () => {
  const [state, setState] = useState(" ");
  console.log({ state });

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosAuthInstance.get("/user/info");
        console.log(response);
        setState(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    })();
    console.log("Rendered.");
  }, [state]);

  return (
    <div>
      {/* Topbar */}
      <div className="flex flex-col">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="font-bold text-xl mt-2">User Dashbaord </h1>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">{state.username}</span>
            <FiUserCheck className="font-bold mt-2 text-xl" />
          </div>
        </div>
      </div>
      {/* main Dashboard */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="col-span-1 bg-slate-100 rounded-lg p-4 space-y-4">
          <div className="text-xl">{state.username}</div>
          <div className="shadow-lg rounded-lg flex flex-col p-4 bg-white justify-between">
            <div className="text-gray-400 text-xl">Amount :</div>
            <div className="text-5xl my-4">Rs {state.amount}</div>
          </div>
        </div>
        <div className="col-span-1 bg-slate-100 p-4 rounded-lg space-y-4">
          <PieChartPage />
        </div>
      </div>
    </div>
  );
};

export default User;
