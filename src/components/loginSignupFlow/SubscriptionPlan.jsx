import React from 'react'
import Plans from '../common/Plans'
import SubscriptionDetails from './SubscriptionDetails';

const plans = [
    {
        id: 1,
        plan_type: "BEGINNER",
        watch: "Watch on 1 device",
        access: "Access to all content",
        quality: "Standard FHD quality",
        devices: "Watch on Laptop, Mobile, Tab and ipad",
        inr_price: "5999",
        validity: 31536000,
    },
    {
        id: 2,
        plan_type: "ADVANCED",
        watch: "Watch on 1 device",
        access: "Access to all content",
        quality: "Standard FHD quality",
        devices: "Watch on Laptop, Mobile, Tab and ipad",
        inr_price: "9999",
        validity: 31536000,
    },
];


const SubscriptionPlan = ({ setCurrentStep }) => {
   
    return (
        <div className='mx-4 mt-24  p-10 rounded-[28px] bg-[var(--navy-blue)] mb-4'>
            <h2 className='text-center text-[34px] font-bold'>Select Subscription Plan</h2>
            <p className='text-[16px] text-center mb-[30px]'>Please Select subscription plan to Continue</p>

            <Plans plans2={plans} showSkeleton={false} setCurrentStep={setCurrentStep} />
            
        </div>
    )
}

export default SubscriptionPlan