"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosAuthInstance } from "@/services/axios";

const VerifiedUsers = () => {
  const [verified, setVerified] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/user/verified");
        const list = response?.data?.data;
        setVerified(list);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-8 ">Verified Users : </h1>
        <div className="rounded-lg overflow-x-auto">
          <table className="table-auto border-collapse border w-full">
            <thead>
              <tr className="py-4 text-white bg-slate-600">
                <th className="px-8 py-6">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">RFID Number</th>
              </tr>
            </thead>
            <tbody>
              {verified.map((user) => (
                <tr
                  className="bg-slate-200 border border-slate-900"
                  key={user._id}
                >
                  <td className="border rounded-lg border-slate-900 px-10 py-8">
                    {user.username}
                  </td>
                  <td className="border rounded-lg border-slate-900 px-6 py-3">
                    {user.email}
                  </td>
                  <td className="border rounded-lg border-slate-900 px-6 py-3">
                    {user.phoneNumber}
                  </td>
                  <td className="border rounded-lg border-slate-900 px-6 py-3">
                    {user.amount}
                  </td>
                  <td className="border rounded-lg border-slate-900 px-6 py-3">
                    {user.rfidNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VerifiedUsers;
