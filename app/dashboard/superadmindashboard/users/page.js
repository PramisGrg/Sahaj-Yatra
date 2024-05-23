"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosAuthInstance } from "@/services/axios";

const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/user");
        console.log(response);
        const list = response?.data?.data;
        setUser(list);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  const HandlebtnForInfo = (userID) => {
    console.log(userID);
    const params = new URLSearchParams(window.location.search);
    params.set("userID", userID);
    window.location.href =
      "/dashboard/superadmindashboard/users/info?" + params.toString();
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-8 ">Users : </h1>
        <div className="rounded-lg shadow-lg overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="py-4 text-white bg-primary">
                <th className="px-8 py-6">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Citizenship Number</th>

                {/* <th className="px-6 py-4">ID</th> */}
                <th className="px-6 py-4">Info</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr className="" key={user._id}>
                  <td className="border rounded-lg px-10 py-8">
                    {user.username}
                  </td>
                  <td className="border rounded-lg px-6 py-3">{user.email}</td>
                  <td className="border rounded-lg px-6 py-3">
                    {user.phoneNumber}
                  </td>
                  <td className="border rounded-lg px-6 py-3">
                    {user.citizenshipNumber}
                  </td>
                  {/* <td className="border rounded-lg px-6 py-3">{user._id}</td> */}
                  <td className="border rounded-lg px-6 py-3">
                    <button
                      className=" bg-primary text-white hover:bg-secondary font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                      onClick={() => HandlebtnForInfo(user._id)}
                    >
                      Info
                    </button>
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

export default Users;
