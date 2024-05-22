"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FiUserCheck } from "react-icons/fi";
import { axiosAuthInstance } from "@/services/axios";
import BarChartPage from "@/components/BarChart";

const Page = () => {
  const [state, setState] = useState(" ");
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
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="font-bold text-xl mt-2">Admin Dashbaord </h1>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">{state.username}</span>
            <FiUserCheck className="font-bold mt-2 text-xl" />
          </div>
        </div>
      </div>
      <div>
        <BarChartPage />
      </div>
    </div>
  );
};

export default Page;
