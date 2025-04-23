import { SimpleLoader } from '@/components/common/LoadingSpinner'
import AuthNavbar from '@/components/loginSignupFlow/AuthNavbar'
import VerifyCertificate from '@/components/VerifyCertificate'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <>
      <AuthNavbar />
      <VerifyCertificate />
    </>
  )
}

export default page