'use client'; // Ensure this is marked as a Client Component

import React, { useContext, createContext, useState, useEffect } from 'react';
import { axiosAuthInstance } from '@/services/axios';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosAuthInstance.get('/user/info');
        setData(response?.data?.data?._id);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
