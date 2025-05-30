"use client";
import React, { useEffect, useState } from "react";

import { GreenCheck } from "@/lib/svg_icons";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { CustomButton } from "../common/CustomButton";
import { SimpleLoader } from "../common/LoadingSpinner";

const PaymentReceived = () => {
  const router = useRouter();
  const params = useSearchParams();
  const order_id = params.get("order_id");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `/api/v1/order/cash-free/verify?order_id=${order_id}`
        );
        if (res?.data?.success) {
          setPaymentSuccess(true);
        }
      } catch (error) {
        console.error("Payment verification error:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    verifyPayment();
  }, [order_id]);

  if (isLoading) {
    return <PaymentVerify />;
  }

  return isLoading ? (
    <PaymentVerify />
  ) : paymentSuccess ? (
    <PaymentSuccessFull />
  ) : (
    <PaymentFailed />
  );
};

export const PaymentSuccessFull = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  });

  return (
    <div
      className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
      style={{
        background:
          "radial-gradient(circle at top, #1cc74d -120%, transparent 50%), #091926",
      }}
    >
      <GreenCheck />
      <div className="my-7">
        <h2 className="text-center text-3xl font-bold mb-4">
          Payment received
        </h2>
        <p className="text-sm text-center">
          Your payment is received, please don`t refresh or close this screen
        </p>
      </div>

      <p className="text-xs text-center mb-3">Please wait...</p>

      {/* <div className='py-3 px-6 rounded-[8px] bg-[#1D2636] text-center w-36'>
        <span className='text-orange-300 text-lg font-semibold'>06:00 Min</span>
      </div> */}
    </div>
  );
};

const PaymentFailed = () => {
  return (
    <div
      className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
      style={{
        background:
          "radial-gradient(circle at top, #d14970 -120%, transparent 50%), #091926",
      }}
    >
      <CircleX size={65} color="red" />
      <div className="my-7">
        <h2 className="text-center text-3xl font-bold mb-4">Payment Failed</h2>
        <p className="text-sm text-center">
          {" "}
          Unfortunately, your payment could not be processed.Please try again
        </p>
      </div>

      <Link href="/subscription-plan">
        <CustomButton className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-400 px-5 py-2 rounded-lg text-white font-semibold">
          Try Again
        </CustomButton>
      </Link>
    </div>
  );
};

const PaymentVerify = () => {
  return (
    <div
      className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
      style={{
        background:
          "radial-gradient(circle at top, #d14970 -120%, transparent 50%), #091926",
      }}
    >
      <SimpleLoader size={65} />
      <div className="my-7">
        <h2 className="text-center text-3xl font-bold mb-4">
          Payment Verification
        </h2>
        <p className="text-sm text-center">
          {" "}
          Please wait while we are verifying your payment...
        </p>
      </div>
    </div>
  );
};

export default PaymentReceived;
