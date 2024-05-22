"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosAuthInstance } from "@/services/axios";

const registerSchema = z.object({
  busNumber: z.string(),
  busType: z.string(),
  phoneNumber: z.string().min(10),
  busRoute: z.string(),
  busSeats: z.string(),
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
      const response = await axiosAuthInstance.post("/bus", data);
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

      <div className="h-screen flex justify-center items-center bg-slate-100">
        <div className="w-4/5 rounded-lg md:w-[450px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className=" h-full my-8">
            <div className="text-center ">
              <h1 className="text-3xl">Bus Registration</h1>
              <p className="text-primary py-4">
                Register your bus and be part of Sahaj Yatri
              </p>
            </div>
            <div className="space-y-6 p-6">
              <input
                {...register("busNumber")}
                className="border rounded-sm border-primary p-2 w-full"
                placeholder="Bus Number"
              />

              {errors.username && (
                <p className="text-xs text-red-500">
                  {errors.busNumber.message}
                </p>
              )}

              <input
                {...register("busType")}
                className="border rounded-sm border-primary p-2 w-full"
                placeholder="Bus Type"
              />

              {errors.email && (
                <p className="text-xs text-red-500">{errors.busType.message}</p>
              )}

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

              <input
                {...register("busRoute")}
                className="border rounded-sm border-primary p-2 w-full"
                placeholder="Bus Route"
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.busRoute.message}
                </p>
              )}
              <input
                {...register("busSeats")}
                className="border rounded-sm border-primary p-2 w-full"
                placeholder="Bus Seats"
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.busSeats.message}
                </p>
              )}
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
    </div>
  );
};

export default RegisterPage;
