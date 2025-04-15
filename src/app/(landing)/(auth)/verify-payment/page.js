import { SimpleLoader } from '@/components/common/LoadingSpinner'
import PaymentReceived from '@/components/loginSignupFlow/PaymentReceived'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <PaymentReceived />
    </Suspense>
  )
}

export default page