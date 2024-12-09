import React from 'react'

const CompanyLogo = () => {
  return (
    <div className='pt-[54px] max-md:pt-12'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <h3 className='font-normal text-[38px] max-md:text-3xl max-sm:text-2xl leading-[41px] text-darkBlue max-w-[548px] max-lg:mx-auto max-lg:text-center'>More Than <span className='text-skyBlue'>80,000</span>+ Companies Trust Bill Central</h3>
        <div className='flex items-center max-md:justify-center md:justify-between pt-16 max-lg:pt-10 max-md:pt-5 max-sm:pt-3 gap-7 max-sm:gap-5 max-lg:flex-wrap'>
          <a href="#energy">
            <img src="/assets/images/webp/energy-logo.webp" alt="energy-logo" className='h-[62px] max-md:h-14 max-sm:h-10' />
          </a>
          <a href="#bluenrg">
            <img src="/assets/images/webp/blue-nrg-logo.webp" alt="blue-nrg-logo" className='h-[42px] max-md:h-9 max-sm:h-7' />
          </a>
          <a href="#dodo">
            <img src="/assets/images/webp/dodo-logo.webp" alt="dodo-logo" className='h-8 max-md:h-7 max-sm:h-6' />
          </a>
          <a href="#origin">
            <img src="/assets/images/webp/origin-logo.webp" alt="origin-logo" className='h-[62px] max-md:h-14 max-sm:h-10' />
          </a>
          <a href="#ovo">
            <img src="/assets/images/webp/ovo-logo.webp" alt="ovo-logo" className='h-[62px] max-md:h-14 max-sm:h-10' />
          </a>
          <a href="#sumo">
            <img src="/assets/images/webp/sumo-logo.webp" alt="sumo-logo" className='h-11 max-md:h-10 max-sm:h-9' />
          </a>
          <a href="#agl">
            <img src="/assets/images/webp/agl-logo.webp" alt="agl-logo" className='h-[62px] max-md:h-14 max-sm:h-10' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo