"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DevicesIcon, VideoIcon, Check } from '@/lib/svg_icons';
import useSmallScreen from '@/hooks/detectScreen';

const SubscriptionDetails = ({ courseType = "Advance", price = "9999", profile = false }) => {
  const isSmallScreen = useSmallScreen();

  const [dropdown, setDropdown] = useState(profile && !isSmallScreen);
  // const [dropdown, setDropdown] = useState(profile);


  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <div className={`mx-4 p-4 rounded-[17px] bg-[var(--navy-blue)] ${profile && "w-full !bg-[var(--card)] mx-0"}`}>
      {/* Header Section */}
      <div className='flex justify-between items-center'>
        <h2 className='text-white font-semibold text-sm  md:text-lg'>Subscription details</h2>


        <div className='flex gap-2'>

          {

            !dropdown && (
              <div className='flex gap-2 items-center'>
                <span className='text-orange-300 text-sm'>{courseType}</span>
                <span className='text-xs'>•</span>
                <span className='text-sm'>₹{price}</span>
              </div>
            )
          }

          {
            dropdown && profile && (

              <div className='flex items-center gap-x-1'>
                <p className="text-xs md:text-sm underline text-[var(--neon-purple)] font-semibold">
                  Download Invoice
                </p>

                {isSmallScreen && (
                  <ChevronUp
                    size={"18px"}
                    className="cursor-pointer text-gray-300"
                    onClick={() => setDropdown(false)}
                  />
                )}

              </div>
            )
          }
          {
            !dropdown && profile && isSmallScreen &&
            (
              <ChevronDown
                size={"18px"}
                className='cursor-pointer text-gray-300'
                onClick={() => setDropdown(true)}
              />
            )
          }

          {
            dropdown && !profile && (
              <ChevronUp
                size={"18px"}
                className="cursor-pointer text-gray-300"
                onClick={() => setDropdown(false)}
              />
            )
          }
          {
            !dropdown && !profile && (
              (
                <ChevronDown
                  size={"18px"}
                  className='cursor-pointer text-gray-300'
                  onClick={() => setDropdown(true)}
                />
              )
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
        <div className={`${profile && "py-2 px-0"} mt-1 p-3  rounded-lg text-gray-200`}>

          <div className='flex justify-between items-center'>
            <div>
              <p className='text-[12px]'>Current plan</p>
              <h2 className='text-orange-300 text-lg md:text-2xl font-semibold'>Advance</h2>
            </div>

            <div>
              {
                profile ? (
                  <>
                    <p className='text-[12px] text-end'>Paid on 22/20/2023</p>
                    <h2 className='text-lg md:text-2xl font-semibold'>335 days remaining</h2>
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


          <div className='flex justify-between items-center'>

            <div className="text-center text-xs items-center 2xl:gap-3 2xl:text-sm">
              <span className="text-[10] font-bold border-2 py-[3px] 2xl:py-0 px-[5px] rounded-2xl ">
                X 1
              </span>
              <span className='text-[10px] text-center leading-tight block mt-4 max-w-16 lg:max-w-20'>Watch on 1 devices</span>
            </div>

            <div className="flex flex-col text-xs items-center 2xl:gap-3 2xl:text-sm">
              <Check className="border-2 rounded-full p-1" size={23} />
              <span className='text-[10px] text-center leading-tight mt-2 max-w-16 lg:max-w-20'>Access to all content</span>
            </div>

            <div className="flex flex-col text-xs items-center 2xl:gap-9 2xl:text-sm ">
              <div className="relative w-fit ">
                <VideoIcon width={23} />
                <span className=" absolute inset-0 text-[4.667px] top-[1px] left-[5px] 2xl:text-[5px] 2xl:top-[0.1px]">
                  FHD
                </span>
              </div>
              <span className='mt-3 text-[10px] text-center leading-tight max-w-16 lg:max-w-20'>Standard FHD quality</span>
            </div>

            <div className=" flex flex-col text-xs items-center 2xl:gap-9 2xl:text-sm">
              <DevicesIcon width={23} />
              <span
                className="text-[10px] mt-[4px] md:mt-[10px]  text-center break-words leading-tight max-w-[100px] sm:max-w-[120px]">
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