'use client'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';

const LayoutWrapper = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>

      <Provider store={store}>
        <ToastContainer />
        {children}

      </Provider >
    </GoogleOAuthProvider >
  )
}
export default LayoutWrapper;