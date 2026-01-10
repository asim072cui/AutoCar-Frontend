'use client';

import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the component to avoid SSR issues with maps
const Connectus = dynamic(() => import('../../pages/contactus/index'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
});

const page = () => {
  return (
    <div>
      <Connectus/>
    </div>
  )
}

export default page
