import { SimpleLoader } from '@/components/common/LoadingSpinner'
import AuthNavbar from '@/components/loginSignupFlow/AuthNavbar'
import VerifyCertificate from '@/components/VerifyCertificate'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <AuthNavbar/>
      <VerifyCertificate />
    </Suspense>
  )
}

export default page