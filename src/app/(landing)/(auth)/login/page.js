'use client'
import Login from "@/components/loginSignupFlow/Login";
import PaymentReceived from "@/components/loginSignupFlow/PaymentReceived";
import SubscriptionPlan from "@/components/loginSignupFlow/SubscriptionPlan";
import Verifyotp from "@/components/loginSignupFlow/Verifyotp";
import { useState } from "react";

const LoginPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [subs, setSubs] = useState(true);
  const [courseType, setCourseType] = useState("Beginner");
  const [price, setPrice] = useState("5999");

  return (
    <div className="overflow-y-auto min-h-screen flex flex-col items-center justify-center relative background">

      <h1 className="absolute left-4 top-5 lg:left-16 lg:top-7 text-[28px] italic font-bold">Ravallusion</h1>

      {
        currentStep === 0 && <Login setCurrentStep={setCurrentStep} subs={subs}
          courseType={courseType}
          price={price}

        />
      }
      {currentStep === 1 && <Verifyotp setCurrentStep={setCurrentStep} />}
      {
        currentStep === 2 && <SubscriptionPlan setCurrentStep={setCurrentStep}
        />
      }
      {currentStep === 3 && <PaymentReceived />}


      {/* Ellipse */}
      <div
        className="-z-10 absolute -top-7 -right-20 lg:-top-64 lg:-right-32 
             w-[300px] h-[300px] lg:w-[630px] lg:h-[630px] 
             bg-[url('/ellipse_of_auth.png')] bg-no-repeat bg-contain overflow-hidden"
        style={{
          background: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
      url('/ellipse_of_auth.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full"></div>
      </div>

    </div >)
};

export default LoginPage;
