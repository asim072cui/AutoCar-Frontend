'use client';

import React, { Suspense } from 'react'
import Cardetail from '../../pages/rentcar/cardetail'

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const page = () => {
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        <Cardetail/>
      </Suspense>
    </div>
  )
}

export default page
