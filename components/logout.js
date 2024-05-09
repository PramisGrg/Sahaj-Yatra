"use client";
import { useEffect } from "react";
import { axiosAuthInstance } from "@/services/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Logout = ({ value }) => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      if (value === true) {
        try {
          const response = await axiosAuthInstance.post("/auth/logout/");
          if (response.status === 200) {
            Cookies.remove("token");
            Cookies.remove("role");
            router.push("/");
          } else {
            console.error("Failed to logout: " + response.data.message);
          }
        } catch (error) {
          console.error("Error logging out: " + error.message);
        }
      }
    };

    logout();
  }, [value, router]);

  return null;
};

export default Logout;
