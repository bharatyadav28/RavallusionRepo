'use client';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { SubmitButton } from '../common/CustomButton';
import { Button } from '../ui/button';
import SubscriptionDetails from './SubscriptionDetails';
import { AppleIcon, GoogleIcon } from '@/lib/svg_icons';
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux';

const Login = ({ setCurrentStep, price = 9999, courseType = "Advanced" }) => {
    const subsDetail = useSelector((state) => state.general.subDetail);

    const [email, setEmail] = useState('');

    // const params = useSearchParams();
    // console.log(params.get('plan'));

    return (
        <div className={`w-full sm:w-auto ${subsDetail && "mt-40 md:mt-20 min-h-[750px] sm:min-h-[500px] lg:min-h-[500px]"}`}>
            {
                subsDetail &&
                <SubscriptionDetails price={price} courseType={courseType} />
            }

            <div className=' mx-4 px-4 py-5 lg:p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg mt-4'>
                <h2 className='text-center text-2xl md:text-[2.13rem] font-bold mb-[30px]'>Login to continue</h2>

                <div className='mb-4'>
                    <label className='text-gray-100 text-sm mb-[6px]' htmlFor="email">Your Email Id <span className='text-red-500'>*</span></label>
                    <Input type={"email"} placeholder="John@gmail.com" name={"email"} className="w-full py-5 px-3 border-2 rounded-[12px] border-gray-500 mt-1 input-shadow" />
                </div>

                <div className='flex gap-x-2 items-center mb-5'>
                    <Checkbox className={"border-2 border-[var(--neon-purple,#C99BFD)] data-[state=checked]:text-[var(--neon-purple)]"} />
                    <p className='text-sm'>Keep me signed in</p>
                </div>

                <SubmitButton className={"w-full mb-[30px] text-md"} onClick={() => setCurrentStep(1)}>
                    Continue
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

                    <Button variant={"neonOutline"} className="py-6 rounded-[12px]" >

                        <GoogleIcon />

                        Continue with Google
                    </Button>

                    <Button variant={"neonOutline"} className="py-6 rounded-[12px]">
                        <AppleIcon />

                        Continue with Apple
                    </Button>
                </div>


            </div>

        </div>
    )
}

export default Login;

