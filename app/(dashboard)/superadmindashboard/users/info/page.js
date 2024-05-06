"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { axiosAuthInstance } from "@/services/axios";

const Info = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userIdParam = params.get("userID");
    console.log(userIdParam);
    const fetchInfo = async () => {
      try {
        const response = await axiosAuthInstance.get(`/user/${userIdParam}`);
        console.log(response?.data?.data);
        setState(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div className="my-6">
      <h1 className="p-4 text-xl">Full details of {state.username} :</h1>
      <div className="mt-6 flex flex-wrap">
        <div className="w-full md:w-1/2  p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">Username:</p>
            <p className="text-white">{state.username}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">Amount:</p>
            <p className="text-white">{state.amount}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2  p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">Email:</p>
            <p className="text-white">{state.email}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">Phone Number:</p>
            <p className="text-white">{state.phoneNumber}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2  p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">Citizenship Number:</p>
            <p className="text-white">{state.citizenshipNumber}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">ID:</p>
            <p className="text-white">{state._id}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-primary p-4 rounded-md shadow-md">
            <p className="text-white font-semibold mb-2">RFID Number:</p>
            <p className="text-white">{state.rfidNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
