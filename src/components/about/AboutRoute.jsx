import React from 'react'
import { COMPETE_LIST, } from '../../utils/helper'

const AboutRoute = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='font-avantt bg-[#026070] py-14 px-4 rounded-xl overflow-x-auto'>
        {COMPETE_LIST.map((obj, i) => (
          <div key={i} className={`flex ${i === 0 ? "border-none" : "border-t"} pr-2 w-[568px]`}>
            <div className={`${i === 0 ? "opacity-0" : ""} w-[140px] py-[18.8px] pr-12 pl-2`}>
              <p className='text-sm font-normal text-white leading-4'>{obj.service}</p>
            </div>
            <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 bg-white text-center flex justify-center items-center py-[18.8px]`}>
              <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[33px]" : ""}`}>{obj.rift}</p>
            </div>
            <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 bg-white text-center flex justify-center items-center py-[18.8px] mx-3`}>
              <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[33px]" : ""}`}>{obj.taxscouts}</p>
            </div>
            <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 bg-white text-center flex justify-center items-center mr-3 py-[18.8px]`}>
              <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-12" : ""}`}>{obj.coconut}</p>
            </div>
            <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 text-center flex justify-center items-center bg-[#56E3CB] py-[18.8px]`}>
              <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-16" : ""}`}>{obj.pie}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutRoute