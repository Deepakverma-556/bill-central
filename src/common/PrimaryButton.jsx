import React from 'react'
import { Arrow } from '../utils/Icons'

const PrimaryButton = ({ text, color, bg }) => {
  return (
      <button className={`font-bold text-base max-md:text-sm text-nowrap flex items-center gap-1 px-5 py-3 max-md:py-2 max-sm:font-normal rounded-tr-[50px] rounded-br-[50px] rounded-bl-[40px] ${color} ${bg} font-helvetica transition-all duration-300 hover:rounded-br-none `}>{text} <Arrow stroke='white' /></button>
  )
}

export default PrimaryButton