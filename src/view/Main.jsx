import React from 'react'
import HeroSection from '../components/HeroSection'
import CompanyLogo from '../components/CompanyLogo'
import SwitchingEnergy from '../components/SwitchingEnergy'
import SimpleSteps from '../components/SimpleSteps'
import Comparisons from '../components/Comparisons'
import Utilities from '../components/Utilities'
import Testimonials from '../components/Testimonials'
const Main = () => {
  return (
      <>
          <HeroSection />
          <CompanyLogo />
          <SwitchingEnergy />
          <SimpleSteps />
          <Comparisons />
          <Utilities />
          <Testimonials/>
      </>
  )
}

export default Main