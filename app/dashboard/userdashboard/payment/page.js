"use client";
import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosAuthInstance } from "@/services/axios";
import { useGlobalContext } from "@/context/context";

const Payment = () => {
  const [ampunt, setAmount] = useState(0);
  const userId = useGlobalContext();
  const config = {
    publicKey: "test_public_key_77bac81b32ed4e95b995bfbe502a3ab8",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess: (payload) => {
        console.log(userId);
        const payloadWithUserId = { ...payload, userId };
        axiosAuthInstance
          .post("/transaction/verify-payment/", payloadWithUserId)
          .then((response) => {
            console.log(response);
            console.log(response?.status);
          })
          .catch((error) => {
            toast.error(error?.message);
          });
      },
      onError: (error) => {
        console.log(error);
      },
      onClose: () => {
        console.log("widget is closing");
      },
    },

    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkout = new KhaltiCheckout(config);
      console.log(checkout);
    }
  }, [userId]);

  const btnOnClick = (e) => {
    console.log(userId);
    e.preventDefault();
    if (typeof window !== "undefined") {
      const checkout = new KhaltiCheckout(config);
      checkout.show({ amount: ampunt * 100 });
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen w-full space-y-4 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl">Pay with khalti</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <form>
            <input
              onChange={handleAmountChange}
              placeholder="enter amount "
              className="w-full p-3 inline-block border rounded-md"
            ></input>
            <button
              type="submit"
              id="payment-button"
              onClick={btnOnClick}
              className=" mt-4 w-full p-2 bg-primary text-white hover:bg-secondary font-bold rounded items-center duration-300"
            >
              Pay with khalti
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
