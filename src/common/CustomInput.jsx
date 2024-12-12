import React from 'react'
import CustomButton from './CustomButton'
const CustomInput = ({ myPlaceholder }) => {
  return (
      <form action="#">
      <label htmlFor="address" className='flex items-center w-full bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] pr-[9px] max-md:pr-[7px] border border-deepGray overflow-hidden '>
          <input required id='address' type="text" placeholder={myPlaceholder} className='w-full h-full py-6 max-md:py-4 pl-[22px] max-sm:pl-3 font-helvetica text-base max-sm:text-sm text-black outline-none' />
          <CustomButton text='Compare' customColor='text-white' customBg='bg-skyBlue my-arrow' />
        </label>
      </form>
  )
}

export default CustomInput