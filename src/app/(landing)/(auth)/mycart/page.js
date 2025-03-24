import { SimpleLoader } from '@/components/common/LoadingSpinner'
import MyCart from '@/components/loginSignupFlow/MyCart'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<SimpleLoader />}>
            <MyCart />
        </Suspense>
    )
}

export default page