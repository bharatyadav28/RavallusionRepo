import { SimpleLoader } from '@/components/common/LoadingSpinner'
import MyCart from '@/components/loginSignupFlow/MyCart'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <div className='px-3 sm:px-0 w-full sm:w-auto'>
            <Suspense fallback={<SimpleLoader />}>
                <MyCart />
            </Suspense>
        </div>

    )
}

export default page