import React from 'react'
import { Arrow } from '../utils/Icons'

const CustomButton = ({text, color, bg}) => {
  return (
    <div>
      <button className={`font-bold text-base max-md:text-sm text-nowrap flex items-center gap-1 px-5 py-3 max-md:py-2 max-sm:font-normal rounded-tr-[50px] rounded-br-[50px] rounded-bl-[40px] ${color} ${bg} font-helvetica transition-all duration-300 hover:rounded-br-none `}>{text} <Arrow stroke='black' /></button>
    </div>
  )
}

export default CustomButton