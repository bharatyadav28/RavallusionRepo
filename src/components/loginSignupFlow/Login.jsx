import React from 'react'
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { SubmitButton } from '../common/CustomButton';
import { Button } from '../ui/button';
import Image from 'next/image';

const Login = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>Login to continue</h2>

            <div className='my-4'>
                <label className='text-gray-100 text-sm' htmlFor="email">Your Email Id*</label>
                <Input type={"email"} name={"email"} className="w-full border-2 border-gray-700" />
            </div>

            <div className='flex gap-x-2 items-center '>
                <Checkbox className={"border border-gray-500"} />
                <p className='text-sm'>Keep me signed in</p>
            </div>

            <SubmitButton className={"w-full my-4"}>
                Continue
            </SubmitButton>



            <div className="flex items-center mb-4">

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




            <div className='flex md:flex-row gap-x-2 flex-col gap-y-2'>

                <Button variant={"neonOutline"} className="py-6" >
                    <Image width={30} height={30} src={"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"} alt='google' />
                    Continue with Google
                </Button>

                <Button variant={"neonOutline"} className="py-6">
                    <Image width={30} height={30} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsP-EH-Fc-gjQMFgxj4g1pkFGVCK8Y2deHA&s'} alt='Apple' />
                    Continue with Apple
                </Button>
            </div>


        </div>
    )
}

export default Login;