"use client";
import React from "react";
import { GlobalContextProvider } from "@/context/context";

const layout = ({ children }) => {
  return (
    <section>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </section>
  );
};

export default layout;
