"use client";
import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { axiosAuthInstance } from "@/services/axios";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState(" ");
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosAuthInstance.get("/user/info");
        console.log(response?.data?.data?._id);
        setData(response?.data?.data?._id);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
