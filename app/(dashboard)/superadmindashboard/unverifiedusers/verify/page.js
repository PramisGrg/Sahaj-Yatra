"use client";
import React, { useState } from "react";
import { axiosAuthInstance } from "@/services/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Verify = () => {
  const router = useRouter();
  const [RFID, setRFID] = useState({
    rfidNumber: "",
  });

  const handleRFIDChange = (e) => {
    setRFID({ ...RFID, [e.target.name]: e.target.value });
  };

  const handleRFID = async (e) => {
    e.preventDefault();
    const data = {
      rfidNumber: RFID.rfidNumber,
    };
    const params = new URLSearchParams(window.location.search);
    const userIdParam = params.get("userID");
    console.log(userIdParam);
    try {
      const response = await axiosAuthInstance.post(
        `/user/${userIdParam}/verify`,
        data
      );
      console.log(response);
      toast.success(response?.data?.message, {
        onClose: () => {
          router.push("/superadmindashboard");
        },
      });
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setRFID(" ");
    }
  };

  return (
    <div className="h-screen space-y-4 flex flex-col items-center justify-center">
      <ToastContainer />
      <div>
        <h1 className="text-2xl text-center">Enter RFID number </h1>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleRFID}>
          <input
            className="w-[250px] bg-gray-200 border border-gray-200 rounded p-3 placeholder-gray-500 text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="rfidNumber"
            onChange={handleRFIDChange}
            placeholder="Enter the RFID number"
          />
          <button
            className="font-bold p-3 w-[250px] mt-4 text-white bg-primary transition-all duration-500 hover:bg-secondary rounded-md text-md cursor-pointer "
            type="submit"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
