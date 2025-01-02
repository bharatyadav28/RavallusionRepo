import React from 'react'
import Plans from '../common/Plans'

const plans = [
    {
        id: 1,
        plan_type: "BEGINNER",
        watch: "Watch on 1 device",
        access: "Access to all content",
        quality: "Standard FHD quality",
        devices: "Watch on Laptop, Mobile, Tab and ipad",
        inr_price: "5999",
        validity: "One year validity",
    },
    {
        id: 2,
        plan_type: "ADVANCED",
        watch: "Watch on 1 device",
        access: "Access to all content",
        quality: "Standard FHD quality",
        devices: "Watch on Laptop, Mobile, Tab and ipad",
        inr_price: "9999",
        validity: "One year validity",
    },
];
const SubscriptionPlan = () => {
    return (
        <div className='w-2/3 py-20'>
            <h2 className='text-center text-3xl font-bold '>Select Subscription Plan</h2>
            <p className='text-sm text-center my-4'>Please Select subscription plan to Continue</p>

            < Plans plans2={plans} />
        </div>
    )
}

export default SubscriptionPlan