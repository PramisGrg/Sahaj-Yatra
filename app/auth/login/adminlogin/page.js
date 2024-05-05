"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Login from "@/public/assets/Login.svg";
import Link from "next/link";
import Footer from "@/components/Footer";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  phoneNumber: z.string(),
  password: z.string().min(5, "must be at least 5 character"),
});

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login/admin",
        data
      );
      console.log(response);
      if (response?.status == 200) {
        toast.success(response?.data?.message);
        setCookie("token", response?.data?.token);
        setCookie("role", response?.data?.role);
        router.push("/admindashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
    reset();
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section className="min-h-screen py-20 bg-slate-200">
        <div className="container mx-auto">
          <div className="items-center flex flex-col md:flex-row w-10/12 bg-white rounded-xl mx-auto shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10">
              <Image
                className="md:w-[550px] md:h-[550px] w-[250px] h-[250px]"
                alt="Login picture"
                src={Login}
              />
            </div>
            <div className="w-full md:w-1/2 px-12">
              <h2 className="text-3xl mb-4">Bus Owner Login</h2>
              <p className="text-primary mb-4">Login to your account</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6">
                  <input
                    {...register("phoneNumber")}
                    placeholder="Phone Number"
                    className="border rounded-sm border-primary p-2 w-full"
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <input
                    {...register("password")}
                    placeholder="Password"
                    className="border rounded-sm border-primary p-2 w-full"
                  />{" "}
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white hover:text-secondary font-bold p-2 mt-3 rounded items-center hover:scale-105 duration-300"
                  >
                    Login
                  </button>
                  <p className="flex justify-center my-6 items-center">
                    Don not have an account!
                    <Link
                      className="text-primary hover:text-secondary font-bold ml-2"
                      href="/auth/register/adminregister"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;
