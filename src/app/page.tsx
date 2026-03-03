import Hero from '@/components/shared/home/Hero'
import React from 'react'
import FeatureSection from '@/components/shared/home/FeatureSection'
import ExploreSection from '@/components/shared/home/ExploreSection'
import RentalsSection from '@/components/shared/home/RentalsSection'
import ServicesSection from '@/components/shared/home/ServicesSection'
import WhyChooseSection from '@/components/shared/home/whyChooseSection'
import BecomeVendor from '@/components/shared/home/BecomeVendor'
import CreateWithKooji from '@/components/shared/home/CreateWithKooji'
import Footer from '@/components/shared/footer/Footer'



const page = () => {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <ExploreSection />
      <RentalsSection />
      <ServicesSection />
      <WhyChooseSection />
      <BecomeVendor />
      <CreateWithKooji /> 
      <Footer />
    </main>
  )
}

export default page

