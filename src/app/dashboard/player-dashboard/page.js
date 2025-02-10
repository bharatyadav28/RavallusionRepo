import PageLoader from '@/components/common/PageLoader'
import VideoDashboard from '@/components/dashboard/VideoDashboard'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <VideoDashboard />
    </Suspense>
  )
}

export default page;