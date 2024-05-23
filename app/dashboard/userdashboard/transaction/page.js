"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosAuthInstance } from "@/services/axios";

const Page = () => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/transaction/history");
        console.log(response);
        setTransaction(response?.data?.data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl my-8 ">Transaction History : </h1>
        <div className="rounded-lg overflow-x-auto">
          <table className="table-auto border-collapse border w-full">
            <thead>
              <tr className="py-4 text-white bg-primary">
                <th className="px-6 py-4">Transaction Date</th>
                <th className="px-6 py-4">Transaction Type</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((user) => (
                <tr className="" key={user._id}>
                  <td className="border rounded-lg  px-10 py-8">
                    {user.transactionDate}
                  </td>
                  <td
                    className={`border rounded-lg px-6 py-3 ${
                      user.transactionType === "credit"
                        ? "text-green-500"
                        : user.transactionType === "debit"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {user.transactionType}
                  </td>
                  <td className="border rounded-lg  px-6 py-3">
                    {user.amount}
                  </td>
                  <td className="border rounded-lg  px-6 py-3">
                    {user.remarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </>
  );
};

export default Page;
