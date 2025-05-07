"use client"
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SubscriptionDetails from './SubscriptionDetails'
import { ArrowLeft, LoaderCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { SubmitButton } from '../common/CustomButton'
import { handleClick } from '@/lib/paymentGateway'
import { useGetActivePaymentGatewayQuery } from '@/store/Api/auth'
import { toast } from 'react-toastify'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import axios from 'axios'

const MyCart = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { data, isLoading: loading } = useGetActivePaymentGatewayQuery();

    const activePaymentGateway = data?.data?.activeGateways[0];


    const router = useRouter();
    const params = useSearchParams();
    const planId = params.get("planId");
    const courseType = params.get('planType');
    const price = params.get('price');

    const handleCheckout = async () => {
        setIsLoading(true);
        if (!activePaymentGateway || !planId) {
            toast.error("Payment gateway not found or plan ID is missing.");
            return;
        }
        try {
            await handleClick({ planId, activePaymentGateway });
        } catch (error) {
            console.error("Payment failed:", error);
        } finally {
            setIsLoading(false);
        }
    };


    const paypalCreateOrder = async () => {
        try {
            let response = await axios.post('/api/v1/order/paypal', {
                plan: planId
            })
            console.log("response", response.data.data.order.order_id)

            return response.data.data.order.order_id;

        } catch (err) {
            // Your custom code to show an error like showing a toast:
            console.log("error", err)
            toast.error('Some Error Occured', err.response.data.message)
            return null
        }
    }


    const paypalCaptureOrder = async (orderID) => {
        try {
            let response = await axios.post(`/api/v1/order/paypal}`, {
                orderID
            })
            if (response.data.success) {
                // Order is successful
                // Your custom code

                // Like showing a success toast:
                toast.success('Amount Added to Wallet')

                // And/Or Adding Balance to Redux Wallet
                // dispatch(setWalletBalance({ balance: response.data.data.wallet.balance }))
            }
        } catch (err) {
            // Order is not successful
            // Your custom code

            // Like showing an error toast
            toast.error('Some Error Occured')
        }
    }
    return (
        <div className="w-full p-5 sm:p-10 rounded-[28px] bg-[var(--card-bg)] backdrop-blur-lg sm:min-w-[500px]">
            <Button variant="default" className="bg-transparent hover:bg-[var(--navy-blue)] mb-[20px] -ml-4" onClick={() => router.back()}>
                <ArrowLeft /> Back
            </Button>
            {/* <h2 className="text-center text-3xl font-semibold mb-[20px]">My cart <span className='text-gray-300 font-medium'>(1)</span></h2> */}
            <h2 className="text-center text-3xl font-semibold mb-[20px]">My Cart</h2>

            <SubscriptionDetails courseType={courseType} price={price} cart={true} />

            <PayPalScriptProvider
                options={{
                    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                    currency: 'USD',
                    intent: 'capture'
                }}
            >
                <div style={{ overflowY: 'auto',maxHeight:'80vh'}} className='paypal-button'>
                    <PayPalButtons
                        style={{
                            color: 'gold',
                            shape: 'rect',
                            label: 'pay',
                            height: 50,
                            overflowY: "auto"
                        }}
                        createOrder={async (data, actions) => {
                            let order_id = await paypalCreateOrder()
                            return order_id + ''
                        }}
                        onApprove={async (data, actions) => {
                            let response = await paypalCaptureOrder(data.orderID)
                            if (response) return true
                        }}
                    />
                </div>
            </PayPalScriptProvider>



            {/* <SubmitButton
                disabled={isLoading}
                className={"w-full rounded-[12px] text-md mt-4"}
                onClick={handleCheckout}
            >
                {isLoading ? <LoaderCircle className='animate-spin !h-8 !w-8' /> : "Checkout"}

            </SubmitButton> */}
        </div >
    )
}

export default MyCart;