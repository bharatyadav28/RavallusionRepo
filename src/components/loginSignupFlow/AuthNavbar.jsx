import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AuthNavbar = () => {
    return (
        <div>
            {/* <h1 className="absolute left-4 top-5 lg:left-16 lg:top-7 text-[28px] italic font-bold">Ravallusion</h1> */}
            <Link href="/" className='absolute left-4 top-5 lg:left-16 lg:top-7 flex '>
                {/* <i className="text-2xl 2xl:text-3xl font-medium">Ravallusion</i> */}
                <div className="w-14 h-14 relative">
                    <Image src="/logo.png" alt="logo" fill className="object-contain" />
                </div>
                     <span className="lg:text-2xl sm:text-md font-semibold whitespace-nowrap my-auto mx-2">
        Ravallusion Academy
      </span>
            </Link>
        </div>
    )
}

export default AuthNavbar;