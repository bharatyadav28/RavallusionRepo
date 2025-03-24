"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SubscriptionDetails from './SubscriptionDetails'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { SubmitButton } from '../common/CustomButton'
import { handleClick } from '@/lib/rajorpayPayment'

const MyCart = () => {
    const router = useRouter();
    const isLoading = false;
    const params = useSearchParams();
    const planId = params.get("planId");
    const courseType = params.get('planType');
    const price = params.get('price');
    return (
        <div className="mx-4 p-5 md:p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg sm:min-w-[500px]">
            <Button variant="default" className="bg-transparent hover:bg-[var(--navy-blue)] mb-[20px] -ml-4" onClick={() => router.back()}>
                <ArrowLeft /> Back
            </Button>
            <h2 className="text-center text-3xl font-semibold mb-[20px]">My cart <span className='text-gray-300 font-medium'>(1)</span></h2>

            <SubscriptionDetails courseType={courseType} price={price} cart={true} />

            <SubmitButton className={"w-full rounded-[12px] text-md mt-4"}
                onClick={() => handleClick(planId)}
            >
                {isLoading ? "Verifying..." : "Checkout"}
            </SubmitButton>
        </div >
    )
}

export default MyCart;