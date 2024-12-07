import React from 'react'
import Header from '../common/Header'
import Description from '../common/Description'
import hero from '../assets/images/webp/hero.webp'
import CustomInput from '../common/CustomInput'

const HeroSection = () => {
  return (
    <div className='bg-blueLine bg-cover bg-no-repeat flex flex-col pb-[202px] max-lg:pb-24 max-sm:pb-[60px] max-md:pb-20 lg:h-[810px]'>
      <Header />
      <div className='max-w-[1172px] mx-auto px-4 relative'>
        <div className='flex flex-wrap -mx-3 pt-[109px] max-lg:pt-24 max-md:pt-20 max-sm:pt-12'>
          <div className='w-1/2 px-3 max-lg:w-full'>
            <div className='max-lg:text-center'>
              <h1 className='text-[64px] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-lg:leading-tight leading-[70px] text-white font-helvetica'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
              <div className='pt-4 max-md:pt-3 max-w-[800px] max-lg:mx-auto'><Description text='Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.' /></div>
              <div className='pt-[42px] max-md:pt-7 max-sm:pt-5 max-w-[476px] max-lg:mx-auto'>
                <CustomInput placeholder='Start typing your address' />
              </div>
              <h3 className='font-normal text-[38px] max-md:text-3xl max-sm:text-2xl leading-[41px] text-darkBlue lg:max-w-[548px] lg:absolute lg:-bottom-[270px] xlg:-bottom-[336px] max-lg:py-5 max-sm:pt-3 max-lg:text-white'>More Than <span className='text-skyBlue'>80,000</span>+ Companies Trust Bill Central</h3>
            </div>
          </div>
          <div className='w-1/2 px-3 max-lg:w-full max-lg:pt-5'>
              <img src={hero} alt="hero" className='h-[760px] lg:absolute right-0 max-lg:h-[500px] max-md:h-96 max-sm:h-72 max-lg:mx-auto lg:w-[470px] xl:w-[558px] ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection