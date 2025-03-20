import { SimpleLoader } from '@/components/common/LoadingSpinner';
import Search from '@/components/dashboard/Search';
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<SimpleLoader />}>
            <Search />
        </Suspense >
    )
}

export default page;