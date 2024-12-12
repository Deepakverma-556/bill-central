import React from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import { ENERGY_PLANS_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const SwitchingEnergy = () => {
  return (
    <div className='py-[162px] max-lg:py-24 max-md:py-16'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 px-3 max-lg:w-full'>
            <img src="/assets/images/webp/switching-energy.webp" alt="switching-energy" className='h-[451px] max-lg:h-96 max-md:h-80 max-sm:h-64 object-cover max-lg:mx-auto' />
          </div>
          <div className='w-1/2 px-3 max-lg:w-full max-lg:pt-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
            <div className='max-w-[409px] pb-4 max-lg:pb-3 max-lg:text-center'><SubHeading text='Switching Energy' secondSpanText='Made Simple' /></div>
            <div className='max-lg:max-w-[900px] max-lg:text-center'>
              <Description myClass='text-deepBlue' text="Say goodbye to confusing energy plans! We simplify the process 
            by providing clear and competitive electricity and gas recommendations. Whether you're moving or just
            seeking a better deal, our platform connects you with the best energy providers quickly and easily,
            helping you save on energy bills." />
            </div>
            <h3 className='pt-10 max-lg:pt-8 max-md:pt-5 max-sm:pt-4 text-prussianBlue font-helvetica text-2xl leading-[26px] max-lg:text-center max-md:text-xl max-sm:text-lg'>Benefits Of Comparing Energy Plans</h3>
            <ul className='list-disc pl-6 pt-7 max-lg:pt-4 pb-10 max-lg:pb-8 max-md:pb-6 max-sm:pb-5 max-sm:pt-2 max-md:pt-3 flex flex-col gap-2 max-md:gap-1'>
              {ENERGY_PLANS_LIST.map((obj, i) => (
                <li key={i} className='font-helvetica text-base max-md:text-sm max-sm:text-xs leading-6 text-deepBlue'>{obj}</li>
              ))}
            </ul>
            <CustomButton text='Compare With Us' customBg='bg-skyBlue' customColor='text-white my-arrow' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchingEnergy