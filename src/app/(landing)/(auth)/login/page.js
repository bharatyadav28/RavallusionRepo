'use client'
import Login from "@/components/loginSignupFlow/Login";
import SubscriptionPlan from "@/components/loginSignupFlow/SubscriptionPlan";
import Verifyotp from "@/components/loginSignupFlow/Verifyotp";
import { useState } from "react";

const LoginPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <h1 className="absolute left-5 top-5 text-3xl italic font-bold">Ravallusion</h1>
      {currentStep === 0 && <Login />}
      {currentStep === 1 && <Verifyotp setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <SubscriptionPlan />}
    </div>)
};

export default LoginPage;
