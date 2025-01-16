"use client"
import React,{useState} from 'react'
import OTPInput from '../ui/otpInput'
import { SubmitButton } from '../common/CustomButton'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react';

const Verifyotp = ({ setCurrentStep }) => {

    const [email, setEmail] = useState('anandxhttp@gmail.com');
    const [isEditing, setIsEditing] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const toggleEditing = () => {
        setIsEditing((prev) => !prev);
    };

    const saveEmail = () => {
        setIsEditing(false);
        console.log('Updated email:', email);
    };

    return (
        <div className='mx-4 p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg'>

            <Button variant={"default"} className="bg-transparent hover:bg-[var(--navy-blue)] mb-[30px] -ml-4" onClick={() => setCurrentStep(0)}>
                <ArrowLeft />  Back
            </Button>
            <h2 className='text-center text-3xl font-bold mb-[30px]'>Verify OTP</h2>

            <div className="mb-[30px]">
                <p className="text-sm text-center">Please Enter the OTP code that we sent to your email</p>
                {isEditing ? (
                    <div className="text-center">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="rounded px-2 py-1 text-sm outline-none bg-transparent"
                        />
                        <button
                            onClick={saveEmail}
                            className="ml-2 text-orange-300 underline text-sm"
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <p className="text-sm text-center">
                        {email}
                        <span
                            className="text-orange-300 underline ml-2 cursor-pointer"
                            onClick={toggleEditing}
                        >
                            Change
                        </span>
                    </p>
                )}
            </div>

            <OTPInput />


            <p className='text-center text-sm my-[30px]'>01.60 <span className='underline text-orange-300 ml-1 cursor-pointer'>Resend</span></p>

            <SubmitButton className={"w-full rounded-[12px] text-md"} onClick={() => setCurrentStep(2)}>
                Verify OTP
            </SubmitButton>

        </div>
    )
}

export default Verifyotp;