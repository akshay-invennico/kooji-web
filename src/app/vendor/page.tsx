import React from 'react'
import VendorNavbar from '@/components/vendorOnboarding/vendorNavbar'
import VendorOffers from '@/components/vendorOnboarding/vendorOffers'
import VendorProfile from '@/components/vendorOnboarding/vendorProfile'
import VendorBusiness from '@/components/vendorOnboarding/vendorBusiness'
import VendorServiceArea from '@/components/vendorOnboarding/vendorServicereArea'


const page = () => {
  return (
    <>
    <VendorNavbar />
    <VendorOffers />

    <VendorProfile />
    <VendorBusiness />
    <VendorServiceArea />
    </>
  )
}

export default page