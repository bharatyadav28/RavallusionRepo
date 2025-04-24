'use client';
import { PaymentSuccessFull } from '@/components/loginSignupFlow/PaymentReceived'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/dashboard')
        }, 2000)
    })
    return (
        <PaymentSuccessFull />
    )
}

export default Page