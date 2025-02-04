"use client"
import React, { useState, useEffect } from "react";
import OTPInput from "../ui/otpInput";
import { SubmitButton } from "../common/CustomButton";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSigninMutation, useVerifyUserMutation } from "@/store/Api/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const VerifyOtp = () => {
    const { signinEmail, userId, isNewUser,keepMeSignedIn } = useSelector((state) => state.signInState);

    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(90);
    const [canResend, setCanResend] = useState(false);

    const [verifyUser, { isLoading }] = useVerifyUserMutation();
    const [signin, { isLoading: isResending }] = useSigninMutation();

    // Countdown timer logic
    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else {
            setCanResend(true);
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleVerifyUser = async () => {
        if (!otp || otp.length < 6) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        try {

            const type = isNewUser ? "account_verification" : "two_step_auth";

            const response = await verifyUser({ otp, email:signinEmail, type, userId,keepMeSignedIn }).unwrap();
            console.log(response);

            toast.success(response.message || "Verification successful!",{autoClose: 2000});

            router.push("/subscription-plan");

        } catch (err) {
            console.error("API Call Failed:", err);

            const errorMessage = err?.data?.message || "Something went wrong! Please try again.";
            toast.error(`Error: ${errorMessage}`);
        }
    };


    const handleResendOtp = async () => {
        try {
            setTimer(90); // Reset timer
            setCanResend(false);
            await signin({ email:signinEmail }).unwrap();
        } catch (error) {
            console.error("Resend OTP Failed:", error);
        }
    };

    return (
        <div className="mx-4 p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg">
            <Button variant="default" className="bg-transparent hover:bg-[var(--navy-blue)] mb-[30px] -ml-4" onClick={() => router.push("/login")}>
                <ArrowLeft /> Back
            </Button>
            <h2 className="text-center text-3xl font-bold mb-[30px]">Verify OTP</h2>

            <div className="mb-[30px]">
                <p className="text-sm text-center">Please enter the OTP code sent to your email</p>
                <p className="text-sm text-center">
                    {signinEmail}
                    <span className="text-orange-300 underline ml-2 cursor-pointer" onClick={() => router.push("/login")}>
                        Change
                    </span>
                </p>
            </div>

            <OTPInput onComplete={(otp) => setOtp(otp)} />

            <p className="text-center text-sm my-[30px]">
                {timer > 0 && !isResending ? (
                    <>
                        <span className="text-orange-300 ">Resend in</span>  {String(Math.floor(timer / 60)).padStart(2, "0")}:{String(timer % 60).padStart(2, "0")}
                    </>
                ) : (
                    <span className="underline text-orange-300 ml-1 cursor-pointer" onClick={handleResendOtp} disabled={!canResend || isResending}>
                        {isResending ? "Resending..." : "Resend"}
                    </span>
                )}
            </p>

            <SubmitButton className={"w-full rounded-[12px] text-md"} onClick={handleVerifyUser} disabled={!otp || isLoading}>
                {isLoading ? "Verifying..." : "Verify OTP"}
            </SubmitButton>
        </div>
    );
};

export default VerifyOtp;
