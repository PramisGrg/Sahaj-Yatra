import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Login from "@/public/assets/Login.svg";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen py-20 bg-slate-200">
        <div className="container mx-auto">
          <div className="items-center flex flex-col md:flex-row w-10/12 bg-white rounded-xl mx-auto shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10">
              <Image
                className="w-[550px] h-[550px]"
                alt="Login picture"
                src={Login}
              />
            </div>
            <div className="w-full md:w-1/2 px-12">
              <h2 className="text-3xl mb-4">Bus Owner Login</h2>
              <p className="text-primary mb-4">Login to your account</p>
              <form>
                <div className="mt-6">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border rounded-sm border-primary p-2 w-full"
                    name="email"
                  ></input>
                </div>
                <div className="mt-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border rounded-sm border-primary p-2 w-full"
                    name="password"
                  ></input>
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

export default page;
