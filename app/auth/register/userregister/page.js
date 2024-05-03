"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = {
  username: z.string(),
  email: z.string().email(),
  phoneNumber: z.number().min(8),
  citizenshipNumber: z.string(),
  password: z.string().min(5),
};

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <div className="w-4/5 h-3/4 rounded-lg md:w-2/5 bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className=" h-full py-10">
            <div className="text-center ">
              <h1 className="text-3xl">User Register</h1>
              <p className="text-primary py-4">
                Create your account, it is free and only takes a minute
              </p>
            </div>
            <div className="gap-6 flex flex-col justify-center items-center">
              <input
                {...register("username")}
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Username"
              ></input>
              <input
                {...register("email")}
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Email"
              ></input>
              <input
                {...register("phoneNumber")}
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Phone number"
              ></input>

              <input
                {...register("citizenshipNumber")}
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Citizenship number"
              ></input>
              <input
                {...register("password")}
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Password"
              ></input>
              <button
                type="submit"
                className="bg-primary text-white w-2/3 p-2 hover:scale-105 transition-all duration-300 hover:text-secondary"
              >
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
