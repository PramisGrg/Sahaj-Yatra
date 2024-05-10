// "use client";
// import React, { useState, useEffect } from "react";
// import KhaltiCheckout from "khalti-checkout-web";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { axiosAuthInstance } from "@/services/axios";
// import { useGlobalContext } from "../../page";

// const Payment = () => {
//   const [ampunt, setAmount] = useState(0);
//   const userId = useGlobalContext();
//   const config = {
//     publicKey: "test_public_key_77bac81b32ed4e95b995bfbe502a3ab8",
//     productIdentity: "1234567890",
//     productName: "Drogon",
//     productUrl: "http://gameofthrones.com/buy/Dragons",
//     eventHandler: {
//       onSuccess: (payload) => {
//         console.log(userId);
//         const payloadWithUserId = { ...payload, userId };
//         axiosAuthInstance
//           .post("/transaction/verify-payment/", payloadWithUserId)
//           .then((response) => {
//             console.log(response);
//             console.log(response?.status);
//           })
//           .catch((error) => {
//             toast.error(error?.message);
//           });
//       },
//       onError: (error) => {
//         console.log(error);
//       },
//       onClose: () => {
//         console.log("widget is closing");
//       },
//     },

//     paymentPreference: [
//       "KHALTI",
//       "EBANKING",
//       "MOBILE_BANKING",
//       "CONNECT_IPS",
//       "SCT",
//     ],
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const checkout = new KhaltiCheckout(config);
//       console.log(checkout);
//     }
//   }, [userId]);

//   const btnOnClick = (e) => {
//     console.log(userId);
//     e.preventDefault();
//     if (typeof window !== "undefined") {
//       const checkout = new KhaltiCheckout(config);
//       checkout.show({ amount: ampunt * 100 });
//     }
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="pl-96 min-h-screen w-full flex items-center justify-center">
//         <div className="mr-8 flex-cols">
//           <h1 className="text-4xl">Payment: </h1>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <form>
//             <input
//               type="number"
//               onChange={handleAmountChange}
//               placeholder="enter amount "
//               className="w-full p-4 inline-block border rounded-md"
//             ></input>
//             <button
//               type="submit"
//               id="payment-button"
//               onClick={btnOnClick}
//               className=" w-full px-2 py-2 bg-[#22496d] text-white hover:bg-[#3d7ab3] font-bold mt-10 rounded items-center my-2 duration-300"
//             >
//               Pay with khalti
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Payment;
import React from "react";

const page = () => {
  return <div>Page</div>;
};

export default page;
