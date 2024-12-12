import React from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import { RightArrow } from '../utils/icons'
import { CHOOSE_US } from '../utils/helper'

const Utilities = () => {
  return (
    <>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <div className='text-center'>
          <SubHeading customColor='text-deepBlue' text='Utilities' spanText='Why Choose Us For' />
        </div>
        <div className='max-w-[620px] mx-auto text-center pt-4 max-lg:pt-3 max-sm:pt-1'>
          <Description customColor='text-deepBlue' myOpacity='opacity-90' text="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" />
        </div>
        <div className='flex max-lg:flex-wrap -mx-3 pt-[58px] max-md:pt-10 max-sm:pt-6'>
          <div className='w-[424] px-3 max-lg:mx-auto'>
            <div className='bg-prussianBlue p-10 max-lg:p-8 max-md:p-6 pt-[57px] rounded'>
              <img src="/assets/images/webp/thumb-up.webp" alt="thumb-up" className='h-60 max-lg:h-48 max-md:h-32' />
              <h4 className='pt-[51px] max-lg:pt-8 max-md:pt-6 max-md:pb-2 pb-3 font-helvetica text-2xl leading-[26px] max-lg:text-xl max-lg:leading-6 text-white'>Tailored Recommendations</h4>
              <div className='max-w-[344px]'>
                <Description myOpacity='opacity-90' customColor="text-white" text="Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available." />
              </div>
              <button className='px-[25px] py-[21px] rounded-full bg-white mt-[22px] max-md:mt-4 hover:bg-lightBlue transition-all duration-300'><RightArrow /></button>
            </div>
          </div>
          <div className="w-[61.6%] max-lg:w-full max-lg:pt-8">
            <div className='flex flex-wrap '>
              {CHOOSE_US.map((obj, i) => (
                <div key={i} className='w-6/12 px-3 max-lg:w-1/3 max-md:w-1/2 max-[500px]:w-full md:max-w-[358px] pb-6 max-lg:mx-auto  overflow-y-auto'>
                  <div className='shadow-box p-6 max-lg:p-4 hover:bg-prussian-blue group duration-300 ease-linear transition-all min-h-[286px] max-md:min-h-56  border border-opacity-10 border-deepBlue rounded shadow-[0px_0px_13.9px_0px] shadow-light'>
                    <div>{obj.icon}</div>
                    <h4 className='pt-[18px] pb-3 max-lg:pt-3 max-lg:pb-2 font-helvetica text-2xl leading-[26px] max-lg:text-xl max-lg:leading-6 text-babyBlack'>{obj.title}</h4>
                    <div className=' overflow-y-auto '>{obj.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Utilities