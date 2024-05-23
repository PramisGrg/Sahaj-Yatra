"use client";
import React from "react";
import { FiUserCheck } from "react-icons/fi";
import { axiosAuthInstance } from "@/services/axios";
import { useState, useEffect } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { FaBus } from "react-icons/fa";
import BarChart from "@/components/BarChart2";

const SuperAdmin = () => {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/user");
        console.log(response);
        const list = response?.data?.data;
        const numberOfUsers = response?.data?.count;
        setCount(numberOfUsers);
        setUser(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="font-bold text-xl mt-2">SuperAdmin Dashbaord </h1>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">Pramis Gurung</span>
            <FiUserCheck className="font-bold mt-2 text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid gap-4 grid-cols-3">
          <div className="p-6 rounded-md bg-blue-100">
            <div className="flex justify-between">
              <div className="space-y-4">
                <div>
                  <h1 className="text-slate-500">Total Sales :</h1>
                </div>
                <div className="text-3xl">Rs 10000</div>
              </div>
              <div className="flex justify-center items-center bg-green-300 rounded-md p-6">
                <FaMoneyCheckDollar className="text-4xl text-green-800" />
              </div>
            </div>
          </div>
          <div className="p-6 rounded-md bg-blue-100">
            <div className="flex justify-between">
              <div className="space-y-4">
                <div>
                  <h1 className="text-slate-500">Total Users :</h1>
                </div>
                <div className="text-3xl">{count}</div>
              </div>
              <div className="flex justify-center items-center bg-purple-300 rounded-md p-6">
                <ImUsers className="text-4xl text-purple-800" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-md bg-blue-100">
            <div className="flex justify-between">
              <div className="space-y-4">
                <div>
                  <h1 className="text-slate-500">Total Buses :</h1>
                </div>
                <div className="text-3xl">{count}</div>
              </div>
              <div className="flex justify-center items-center bg-yellow-200 rounded-md p-6">
                <FaBus className="text-4xl text-yellow-700" />
              </div>
            </div>
          </div>
          <div className="bg-blue-100 col-span-2 h-[500px] p-10">
            <BarChart />
          </div>
          <div className="p-6 rounded-md bg-blue-100">
            <table className="table-auto w-full">
              <thead>
                <tr className="">
                  <th className="font-normal text-xl">Username</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (
                  <tr className="" key={user._id}>
                    <td className="p-4 rounded-lg">
                      <h1 className="font-bold text-slate-900">
                        {user.username}
                      </h1>
                      <h1 className="text-sm text-slate-500">{user.email}</h1>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
