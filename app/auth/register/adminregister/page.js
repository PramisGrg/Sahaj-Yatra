import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <div className="w-4/5 h-3/4 rounded-lg md:w-2/5 bg-white">
          <form className=" h-full py-10">
            <div className="text-center ">
              <h1 className="text-3xl">Admin Register</h1>
              <p className="text-primary py-4">
                Create your account, it is free and only takes a minute
              </p>
            </div>
            <div className="gap-6 flex flex-col justify-center items-center">
              <input
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Username"
              ></input>
              <input
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Email"
              ></input>
              <input
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Phone number"
              ></input>

              <input
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Citizenship number"
              ></input>
              <input
                className="border rounded-sm border-primary p-2 w-2/3"
                placeholder="Password"
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

export default page;
