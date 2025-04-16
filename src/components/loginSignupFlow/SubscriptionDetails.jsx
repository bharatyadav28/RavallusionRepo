"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DevicesIcon, VideoIcon, Check } from '@/lib/svg_icons';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { SimpleLoader } from '../common/LoadingSpinner';

const SubscriptionDetails = ({ courseType, cart = false, price, profile = false, data }) => {
  const router = useRouter();

  const invoice = data?.data?.subscriptionDetails?.invoice_url;
  const paidOn = data?.data?.subscriptionDetails?.paidOn;
  const remainingDays = data?.data?.subscriptionDetails?.remainingDays;
  const planType = data?.data?.subscriptionDetails?.planType;

  const [dropdown, setDropdown] = useState(profile || cart);

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const handleDownloadInvoice = () => {
    if (!invoice) {
      toast.warning("Invoice not found")
      return;
    }
    const a = document.createElement("a");
    a.href = invoice;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div className={`${profile || cart ? "mx-0" : "mx-4"} p-4 rounded-[17px] bg-[var(--navy-blue)]
     ${profile && "w-full !bg-[var(--card)] mx-0"}
     ${cart && "w-ful mx-0 px-0"}`}>


      {/* Header Section */}
      <div className='flex justify-between items-center'>
        <h2 className='text-white font-semibold text-sm md:text-lg'>Subscription details</h2>

        <div className='flex gap-2'>

          {
            !dropdown && (
              <div className='flex gap-2 items-center'>
                <span className='text-[var(--yellow)] text-sm'>{courseType}</span>
                <span className='text-xs'>•</span>
                <span className='text-sm'>₹{price}</span>
              </div>
            )
          }

          {
            profile && (
              <div className='flex items-center gap-x-1'>
                <p onClick={handleDownloadInvoice} className="cursor-pointer text-xs md:text-sm underline text-[var(--neon-purple)] font-semibold">
                  Download Invoice
                </p>
              </div>
            )
          }
          {
            cart && (
              <div className='flex items-center cursor-pointer' onClick={() => router.push('/subscription-plan')}>
                <p className="text-xs md:text-sm text-blue-600 font-semibold">
                  Delete
                </p>
              </div>
            )
          }
          {
            !dropdown &&
            (
              <ChevronDown
                size={"18px"}
                className='cursor-pointer text-gray-300'
                onClick={() => setDropdown(true)}
              />
            )

          }
          {
            dropdown && !profile && !cart && (
              <ChevronUp
                size={"18px"}
                className="cursor-pointer text-gray-300"
                onClick={() => setDropdown(false)}
              />
            )
          }

        </div>

      </div>


      {/* Dropdown Section */}
      <motion.div
        initial="hidden"
        animate={dropdown ? "visible" : "hidden"}
        variants={dropdownVariants}
        transition={{ duration: 0.3 }}
        className='overflow-hidden'
      >
        <div className={`${profile && "py-2 px-0"}
        ${cart && "px-0"}
          mt-1 px-0 py-3  rounded-lg text-gray-200`}>

          <div className='flex justify-between items-center'>
            <div>
              <p className='text-[12px]'>Current plan</p>
              <h2 className='text-[var(--yellow)] text-lg md:text-2xl font-semibold'>{profile && planType || courseType}</h2>
            </div>

            <div>
              {
                profile ? (
                  <>
                    <p className='text-[12px] text-end'>Paid on {paidOn || "08/04/2025"}</p>
                    <h2 className='text-lg md:text-2xl font-semibold'>{remainingDays || 5} days remaining</h2>
                  </>
                ) :
                  (
                    <>
                      <p className='text-[10px]'>Price</p>
                      <h2 className='font-semibold text-2xl'>₹{price}</h2>
                    </>
                  )
              }
            </div>

          </div>

          <hr className='border-t border-gray-700 my-4' />


          <div className={`flex justify-between items-center`}>

            <div className="text-center text-xs items-center 2xl:gap-1 2xl:text-sm">
              <span className="text-[10px] font-bold border-2 py-[3px] 2xl:py-[3px] px-[5px] rounded-2xl ">
                X 1
              </span>
              <span className='text-[8px] sm:text-[11px] text-center leading-tight block mt-4 max-w-16 lg:max-w-20'>Watch on 1 devices</span>
            </div>

            <div className="flex flex-col text-xs items-center 2xl:gap-1 2xl:text-sm">
              <Check className="border-2 rounded-full p-1" size={"23"} />
              <span className='text-[8px] sm:text-[11px] text-center leading-tight mt-2 max-w-16 lg:max-w-20'>Access to all content</span>
            </div>

            <div className="flex flex-col text-xs items-center 2xl:gap-1 2xl:text-sm ">
              <div className="relative w-fit ">
                <VideoIcon width={23} />
                <span className="absolute inset-0 text-[4.667px] top-[1px] left-[3px] 2xl:text-[5px] 2xl:top-[0.1px]">
                  FHD
                </span>
              </div>
              <span className='mt-3 text-[8px] sm:mt-3 sm:text-[11px] text-center leading-tight max-w-16 lg:max-w-20'>Standard FHD quality</span>
            </div>

            <div className=" flex flex-col text-xs items-center 2xl:gap-1 2xl:text-sm">
              <DevicesIcon width={23} />
              <span
                className="text-[8px] sm:text-[11px] mt-[4px] md:mt-[7px]  text-center break-words leading-tight max-w-[90px] sm:max-w-[110px]">
                Watch on Laptop, Mobile, Tab and iPad
              </span>
            </div>
          </div>


          <div>
          </div>
        </div>
      </motion.div>

    </div >
  );
};

export default SubscriptionDetails;