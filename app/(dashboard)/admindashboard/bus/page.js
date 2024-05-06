"use client";
import React, { useState, useEffect } from "react";
import { axiosAuthInstance } from "@/services/axios";

const Bus = () => {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/bus/owner");
        const busList = response?.data?.data;
        setBus(busList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" mt-10 container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">List of Buses</h1>
      <div className="mt-5 overflow-x-auto">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr className="py-4 border border-slate-700 text-white bg-primary">
              <th className="px-6 py-4">Bus Number</th>
              <th className="px-6 py-4">Bus Type</th>
              <th className="px-6 py-4">Bus Route</th>
              <th className="px-8 py-4">Bus Seats</th>
            </tr>
          </thead>
          <tbody>
            {bus.map((user) => (
              <tr className=" " key={user.id}>
                <td className="border border-slate-700 px-6 py-3">
                  {user.busNumber}
                </td>
                <td className="border  border-slate-700 px-6 py-3">
                  {user.busType}
                </td>
                <td className="border  border-slate-700 px-6 py-3">
                  {user.busRoute}
                </td>
                <td className="border  border-slate-700 px-6 py-3">
                  {user.busSeats}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bus;
