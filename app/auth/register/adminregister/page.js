"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axiosInstance from "@/services/axios";

const RegisterPage = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const userData = {
      username: state.username,
      email: state.email,
      phoneNumber: state.phoneNumber,
      password: state.password,
    };
    console.log(userData);
    try {
      const response = await axiosInstance.post(
        "/auth/register/admin/",
        userData
      );

      console.log(response);
    } catch (error) {
      console.log("registration failed: ", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <div className="w-4/5 h-3/4 rounded-lg md:w-2/5 bg-white">
          <form onSubmit={handleSubmitForm} className=" h-full py-10">
            <div className="text-center ">
              <h1 className="text-3xl">Admin Register</h1>
              <p className="text-primary py-4">
                Create your account, it is free and only takes a minute
              </p>
            </div>
            <div className="gap-6 flex flex-col justify-center items-center">
              <input
                type="text"
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Username"
                onChange={handleStateChange}
                name="username"
              ></input>
              <input
                type="text"
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Email"
                onChange={handleStateChange}
                name="email"
              ></input>
              <input
                type="tel"
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Phone number"
                onChange={handleStateChange}
                name="phoneNumber"
              ></input>
              <input
                type="password"
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Password"
                onChange={handleStateChange}
                autoComplete="on"
                name="password"
              ></input>
              <button className="bg-primary text-white w-2/3 p-2 hover:scale-105 transition-all duration-300 hover:text-secondary">
                Register now
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
