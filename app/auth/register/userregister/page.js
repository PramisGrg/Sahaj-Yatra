"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axiosInstance from "@/services/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registerSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  citizenshipNumber: z.string(),
  password: z.string().min(5, "nust be at least 5 character long"),
});

const RegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axiosInstance.post("/auth/register/", data);
      if (response?.status == 201) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
    reset();
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <div className="w-4/5 rounded-lg md:w-[450px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className=" h-full my-8">
            <div className="text-center ">
              <h1 className="text-3xl">User Register</h1>
              <p className="text-primary py-4">
                Create your account, it is free and only takes a minute
              </p>
            </div>
            <div className="space-y-5 p-5">
              <div>
                <input
                  {...register("username")}
                  className="border rounded-sm border-primary p-2 w-full"
                  placeholder="Username"
                />
                {errors.username && (
                  <p className="text-xs text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  className="border rounded-sm border-primary p-2 w-full"
                  placeholder="Email"
                />

                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register("phoneNumber")}
                  className="border rounded-sm border-primary p-2 w-full"
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-500">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("citizenshipNumber")}
                  className="border rounded-sm border-primary p-2 w-full"
                  placeholder="Citizenship Number"
                />
                {errors.citizenshipNumber && (
                  <p className=" text-xs text-red-500">
                    {errors.citizenshipNumber.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("password")}
                  className="border rounded-sm border-primary p-2 w-full"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-primary text-white w-full p-2 hover:scale-105 transition-all duration-300 hover:text-secondary"
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
