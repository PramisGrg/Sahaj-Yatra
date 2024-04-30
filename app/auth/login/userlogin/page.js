import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Login from "@/public/assets/Login.svg";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen py-20 bg-slate-200">
        <div className="container mx-auto">
          <div className="items-center flex flex-col md:flex-row w-10/12 bg-white rounded-xl mx-auto shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-12">
              <Image
                className="w-[450px] h-[450px]"
                alt="Sajha Bus"
                src={Login}
              />
            </div>
            <div className="w-full md:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">SuperAdmin Login</h2>
              <p className="mb-4">Login to your account</p>
              <form>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 p-2 w-full"
                    name="email"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 p-2 w-full"
                    name="password"
                  ></input>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white hover:text-secondary font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                  >
                    Login
                  </button>
                  <p className="flex justify-center py-2 px-4 mt-3 items-center">
                    Don not have an account!
                    <Link
                      className="text-primary hover:text-secondary font-bold ml-2"
                      href="/auth/userregister"
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
    </div>
  );
};

export default page;
