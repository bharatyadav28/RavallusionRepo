'use client'
import Login from "@/components/loginSignupFlow/Login";
import PaymentReceived from "@/components/loginSignupFlow/PaymentReceived";
import SubscriptionPlan from "@/components/loginSignupFlow/SubscriptionPlan";
import Verifyotp from "@/components/loginSignupFlow/Verifyotp";
import { useState } from "react";

const Page = () => {

  const [currentStep, setCurrentStep] = useState(0);


  return (
    <Login />
    // <div className="flex flex-col items-center justify-center relative background">
    //   {
    //     currentStep === 0 && <Login setCurrentStep={setCurrentStep}
    //     />
    //   }
    //   {currentStep === 1 && <Verifyotp setCurrentStep={setCurrentStep} email={email} />}

    //   {
    //     currentStep === 2 && <SubscriptionPlan setCurrentStep={setCurrentStep}
    //     />
    //   }
    //   {currentStep === 3 && <PaymentReceived />}


    //   {/* Ellipse */}
    //   <div
    //     className="-z-10 absolute -top-7 -right-20 lg:-top-72 lg:-right-32 
    //          w-[280px] h-[280px] lg:w-[630px] lg:h-[630px] 
    //          bg-[url('/ellipse_of_auth.png')] bg-no-repeat bg-contain overflow-hidden"
    //     style={{
    //       background: `
    //   linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
    //   url('/ellipse_of_auth.png')`,
    //       backgroundSize: "contain",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     <div className="w-full h-full"></div>
    //   </div>

    // </div >
  )
};

export default Page;
