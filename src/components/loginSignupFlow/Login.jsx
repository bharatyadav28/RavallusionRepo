'use client';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { SubmitButton } from '../common/CustomButton';
import { Button } from '../ui/button';
import SubscriptionDetails from './SubscriptionDetails';
import { AppleIcon, GoogleIcon } from '@/lib/svg_icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyHasSubscriptionQuery, useSigninMutation, useSwitchDeviceMutation } from '@/store/Api/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { setUserId, setSigninEmail, setIsNewUser, setkeepMeSignedIn, setHasSubscription } from '@/store/slice/signInStates';
import { useGoogleLogin } from '@react-oauth/google';
import CustomDialog from '../common/CustomDialog';
import LogoutDialog from './LogoutDialog';

const Login = ({ price = 9999, courseType = "Advanced" }) => {
    const route = useRouter();
    const dispatch = useDispatch();
    const [isOpenLogout, setIsOpenLogout] = useState(false);
    const subsDetail = useSelector((state) => state.general.subDetail);
    const isChecked = useSelector((state) => state.signInState.keepMeSignedIn);
    const [email, setEmail] = useState('');

    const [hasSubscription] = useLazyHasSubscriptionQuery();

    const [signin, { data, isLoading }] = useSigninMutation();

    const [switchDevice, { isLoading: switchDeviceLoading }] = useSwitchDeviceMutation();



    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {

            const res = await fetch("/api/v1/user/google-auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ googleToken: response.access_token }),

            });
            const data = await res.json();
            if (res.status == 409) {
                setIsOpenLogout(true);
                return;
            }

            const userId = data?.data?.user?._id;
            const subs = await hasSubscription(userId);
            const hasPlan = subs?.data?.data?.hasSubscription;

            if (hasPlan) {
                route.push('/dashboard');
            }
            else {
                route.push('/subscription-plan');
            }

        },
        onError: (error) => {
            console.log("Login Failed:", error);
            toast(error.message);
        }

    });


    const handleSignIn = async () => {

        try {
            if (!email) {
                toast.error("Please enter your email");
                return;
            }

            const response = await signin({ email }).unwrap();

            //Save to redux
            dispatch(setSigninEmail(email));
            const userId = response?.data?.user?._id;
            dispatch(setUserId(userId))
            const isNewUser = response?.data?.isNewUser;
            dispatch(setIsNewUser(isNewUser));

            const message = response?.message || "Sign-in successful!";
            const subs = await hasSubscription(userId);
            const hasPlan = subs?.data?.data?.hasSubscription;
            dispatch(setHasSubscription(hasPlan));

            toast.success(message);

            route.push(`/verify-otp`);

        } catch (err) {
            console.error("API Call Failed:", err);
            const errorMessage = err?.data?.message || "Something went wrong! Please try again.";
            toast.error(`Error: ${errorMessage}`);
        }
    };
    
    const handleSwitchDevice = async () => {
        try {
            const res = await switchDevice()
            setIsOpenLogout(false);  
            route.refresh('/login');
    
        } catch (error) {
            console.error("Error switching device:", error);
            toast.error("Failed to switch device. Please try again.");
        }
    };
    
    return (
        <>
            <div className={`w-full sm:min-w-[500px] sm:w-auto ${subsDetail && "mt-40 md:mt-20 min-h-[750px] sm:min-h-[500px] lg:min-h-[500px]"}`}>
                {
                    subsDetail &&
                    <SubscriptionDetails price={price} courseType={courseType} />
                }
                <div className=' mx-4 px-4 py-5 lg:p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg mt-4'>
                    <h2 className='text-center text-2xl md:text-[2.13rem] font-bold mb-[30px]'>Login to continue</h2>

                    <div className='mb-4'>
                        <label className='text-gray-100 text-sm mb-[6px]' htmlFor="email">Your Email Id <span className='text-red-500'>*</span></label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type={"email"} placeholder="John@gmail.com" name={"email"} className="w-full py-5 px-3 border-2 rounded-[12px] border-gray-500 mt-1 input-shadow" />
                    </div>


                    <div className='flex gap-x-2 items-center mb-5'>
                        <Checkbox checked={isChecked} onCheckedChange={() => dispatch(setkeepMeSignedIn(!isChecked))}
                            className={"border-2 border-[var(--neon-purple,#C99BFD)] data-[state=checked]:bg-[var(--neon-purple)]"} />
                        <p className='text-sm'>Keep me signed in</p>
                    </div>

                    <SubmitButton disabled={isLoading} className={"w-full mb-[30px] text-md"} onClick={handleSignIn}>
                        {isLoading ? "Sending..." : "Continue"}
                    </SubmitButton>


                    <div className="flex items-center mb-[30px]">

                        <div className="flex-1 relative">
                            <div className="absolute top-1/2 left-0 right-0 border-t border-transparent">
                                <div className="h-px bg-gradient-to-l from-white via-gray-400 to-black"></div>
                            </div>
                        </div>

                        <span className="mx-4 text-gray-100">or</span>

                        <div className="flex-1 relative">
                            <div className="absolute top-1/2 left-0 right-0 border-t border-transparent">
                                <div className="h-px bg-gradient-to-r from-white via-gray-400 to-black"></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex md:flex-row gap-x-4 flex-col gap-y-4'>

                        <Button variant={"neonOutline"} className="py-6 rounded-[12px] w-full" onClick={() => googleLogin()}>

                            <GoogleIcon />

                            Continue with Google
                        </Button>

                        {/* <Button variant={"neonOutline"} className="py-6 rounded-[12px]">
                        <AppleIcon />

                        Continue with Apple
                    </Button> */}
                    </div>

                </div>

            </div>
            <CustomDialog open={isOpenLogout} close={() => setIsOpenLogout(false)}>
                <LogoutDialog setIsOpenLogout={setIsOpenLogout} onClick={handleSwitchDevice} switchDeviceLoading={switchDeviceLoading} />
            </CustomDialog>

        </>
    )
}

export default Login;

