import React from 'react'
import fireEffectimg from '../../../public/fire-effect.jpeg'
import spaceEffect from '../../../public/space-effect.png'
import prismatic from '../../../public/prismatic.png'
import Image from 'next/image';

const PrimaryDashboard = () => {
  return (


    <div className='grid grid-cols-12 gap-0 lg:gap-2 h-80'>

      <div className='bg-pink-200  lg:col-span-3 col-span-6 relative order-1 lg:order-0'>
        <h1 className='lg:text-[44px] text-[32px]  absolute z-10 bottom-2 left-3 font-alexandria w-40 leading-tight'>Fire effect</h1>
        <Image src={fireEffectimg} alt={"Fire effect img"} fill  style={{ objectFit: 'cover' }} />
      </div>

      <div className='bg-teal-200 col-span-12 lg:col-span-6 relative flex items-center justify-center order-0 lg:order-1'>
        <h1 className='text-[44px] z-10 font-alexandria leading-tight'>Space effect</h1>
        <Image src={spaceEffect} alt={"Space effect img"} fill  style={{ objectFit: 'cover' }} />
      </div>


      <div className='bg-blue-200 col-span-6 lg:col-span-3 relative order-2'>
        <Image src={prismatic} alt={"Prismatic img"} fill  style={{ objectFit: 'cover' }} />
      </div>

    </div>

  )
}

export default PrimaryDashboard;