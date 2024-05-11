"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdLogout } from "react-icons/md";
import { axiosAuthInstance } from "@/services/axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axiosAuthInstance.post("/auth/logout/");
      if (response.status === 200) {
        Cookies.remove("token");
        Cookies.remove("role");
        router.push("/");
        toast.success(response?.data?.message);
      } else {
        console.log("Failed to logout: " + response.data.message);
      }
    } catch (error) {
      console.log("Error logging out: " + error.message);
    }
    console.log("Button clicked");
  };
  return (
    <buttton onClick={handleLogout}>
      <div className="flex p-3 gap-2 cursor-pointer text-white hover:text-secondary transition-all duration-300 hover:scale-105">
        <MdLogout className="mt-1" />
        Logout
      </div>
    </buttton>
  );
};

export default Logout;
