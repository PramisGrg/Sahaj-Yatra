"use client";
import React, { useState, useEffect } from "react";
import { axiosAuthInstance } from "@/services/axios";

const UnverifiedUsers = () => {
  const [unverified, setUnverified] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/user/unverified");
        const list = response?.data?.data;
        setUnverified(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const HandlebtnForVerify = (userID) => {
    if (typeof window !== "undefined") {
      console.log(userID);
      const params = new URLSearchParams(window.location.search);
      params.set("userID", userID);
      window.location.href =
        "/dashboard/superadmin-dashboard/UnverifiedUsers/Popup?" +
        params.toString();
    }
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-xl mb-8">Unverified Users :</h1>
      <div className="shadow-lg rounded-xl overflow-x-auto">
        <table className=" table-auto border-collapse border w-full">
          <thead>
            <tr className="w-full py-4 text-white bg-primary">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone Number</th>
              <th className="px-8 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {unverified.map((user) => (
              <tr className="bg-slate-200" key={user._id}>
                <td className="border px-6 py-3">{user.username}</td>
                <td className="border px-6 py-3">{user.email}</td>
                <td className="border px-6 py-3">{user.phoneNumber}</td>
                <td className="border px-6 py-3">
                  <button
                    className=" bg-slate-800 text-white hover:bg-slate-500 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                    onClick={() => HandlebtnForVerify(user._id)}
                  >
                    Verify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnverifiedUsers;
