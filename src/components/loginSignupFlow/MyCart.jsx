"use client"
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SubscriptionDetails from './SubscriptionDetails'
import { ArrowLeft, LoaderCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { SubmitButton } from '../common/CustomButton'
import { handleClick } from '@/lib/rajorpayPayment'

const MyCart = () => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const params = useSearchParams();
    const planId = params.get("planId");
    const courseType = params.get('planType');
    const price = params.get('price');

    const handleCheckout = async () => {
        setIsLoading(true);
        try {
            await handleClick(planId);
        } catch (error) {
            console.error("Payment failed:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="w-full p-5 sm:p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg sm:min-w-[500px]">
            <Button variant="default" className="bg-transparent hover:bg-[var(--navy-blue)] mb-[20px] -ml-4" onClick={() => router.back()}>
                <ArrowLeft /> Back
            </Button>
            {/* <h2 className="text-center text-3xl font-semibold mb-[20px]">My cart <span className='text-gray-300 font-medium'>(1)</span></h2> */}
            <h2 className="text-center text-3xl font-semibold mb-[20px]">My Cart</h2>

            <SubscriptionDetails courseType={courseType} price={price} cart={true} />

            <SubmitButton
                disabled={isLoading}
                className={"w-full rounded-[12px] text-md mt-4"}
                onClick={handleCheckout}
            >
                {isLoading ? <LoaderCircle className='animate-spin !h-8 !w-8' /> : "Checkout"}

            </SubmitButton>
        </div >
    )
}

export default MyCart;