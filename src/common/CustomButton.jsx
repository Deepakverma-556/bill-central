import React from 'react'
import { Arrow } from '../utils/icons'

const CustomButton = ({ text, customColor, customBg }) => {
  return (
    <button className={`font-bold text-base max-md:text-sm text-nowrap flex items-center gap-[9px] pl-5 pr-7 py-3 max-md:py-2 max-sm:font-normal rounded-tr-[50px] rounded-br-[50px] rounded-bl-[40px] ${customColor} ${customBg} font-helvetica transition-all duration-300 hover:rounded-br-none `}>{text} <Arrow customStroke='black' /></button>
  )
}

export default CustomButton