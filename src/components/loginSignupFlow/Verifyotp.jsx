import React from 'react'
import OTPInput from '../ui/otpInput'
import { SubmitButton } from '../common/CustomButton'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react';

const Verifyotp = ({setCurrentStep}) => {
    return (
        <div className=' py-20 px-6 relative'>

            <Button variant={"default"} className="bg-transparent absolute top-0 -left-2" onClick={()=>setCurrentStep(0)}>
                <ArrowLeft />  Back
            </Button>

            <h2 className='text-center text-3xl font-bold'>Verify OTP</h2>

            <div className='my-4'>
                <p className='text-sm '>Please Enter the OTP code that we sent to your email</p>
                <p className='text-sm text-center mt-1'> anandxhttp@gmail.com <span className='text-orange-300 underline ml-2 cursor-pointer'>Change</span></p>
            </div>

            <OTPInput />

            <p className='text-center my-5 text-sm'>01.60 <span className='underline text-orange-300 ml-1 cursor-pointer'>Resend</span></p>

            <SubmitButton className={"w-full"}>
                Verify OTP
            </SubmitButton>

        </div>
    )
}

export default Verifyotp;