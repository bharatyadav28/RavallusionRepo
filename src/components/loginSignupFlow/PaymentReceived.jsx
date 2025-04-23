"use client"
import React, { useEffect } from 'react'
import { GreenCheck } from '@/lib/svg_icons'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { CircleX } from 'lucide-react'
import Link from 'next/link'
import { CustomButton } from '../common/CustomButton'

const PaymentReceived = () => {
  const router = useRouter();
  const params = useSearchParams();
  const order_id = params.get('order_id');
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.get(`/api/v1/order/cash-free/verify?order_id=${order_id}`);
        console.log(res);
        if (res?.data?.success) {
          setPaymentSuccess(true);
          router.push('/dashboard');
        }
      } catch (error) {
        console.log(error.message);
      }

    }
    verifyPayment();

  }, [])

  return (
    paymentSuccess ? <PaymentSuccessFull /> : <PaymentFailed />
  )
}


const PaymentSuccessFull = () => {
  return (
    <div
      className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
      style={{
        background:
          "radial-gradient(circle at top, #1cc74d -120%, transparent 50%), #091926",
      }}
    >
      <GreenCheck />
      <div className='my-7'>
        <h2 className='text-center text-3xl font-bold mb-4'>Payment received</h2>
        <p className='text-sm text-center'>Your payment is received, please don`t refresh or close this screen</p>
      </div>

      <p className='text-xs text-center mb-3'>Please wait...</p>

      {/* <div className='py-3 px-6 rounded-[8px] bg-[#1D2636] text-center w-36'>
        <span className='text-orange-300 text-lg font-semibold'>06:00 Min</span>
      </div> */}

    </div>
  )
}

const PaymentFailed = () => {
  return (
    <div
      className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
      style={{
        background:
          "radial-gradient(circle at top, #d14970 -120%, transparent 50%), #091926",
      }}
    >
      <CircleX size={65} color='red' />
      <div className='my-7'>
        <h2 className='text-center text-3xl font-bold mb-4'>Payment Failed</h2>
        <p className='text-sm text-center'> Unfortunately, your payment could not be processed.Please try again</p>
      </div>

      <Link href="/subscription-plan">
        <CustomButton className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-400 px-5 py-2 rounded-lg text-white font-semibold">
          Try Again
        </CustomButton>
      </Link>
    </div>
  )
}

export default PaymentReceived;