"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import VendorNavbar from '@/components/vendorOnboarding/vendorNavbar'
import VendorOffers from '@/components/vendorOnboarding/vendorOffers'
import VendorProfile from '@/components/vendorOnboarding/vendorProfile'
import VendorBusiness from '@/components/vendorOnboarding/vendorBusiness'
import VendorServiceArea from '@/components/vendorOnboarding/vendorServicereArea'

const VendorOnboardingPage = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step === 4) {
      router.push('/my/profile');
    } else {
      setStep((prev) => prev + 1);
    }
  };
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <VendorOffers onNext={handleNext} />;
      case 2:
        return <VendorProfile onPrev={handlePrev} onNext={handleNext} />;
      case 3:
        return <VendorBusiness onPrev={handlePrev} onNext={handleNext} />;
      case 4:
        return <VendorServiceArea onPrev={handlePrev} onNext={handleNext} />;
      default:
        return <VendorOffers onNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <VendorNavbar />
      {renderStep()}
    </div>
  )
}

export default VendorOnboardingPage