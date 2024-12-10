import React from 'react'
import { COMPANY_LOGO } from '../utils/helper';

const CompanyLogo = () => {

  return (
    <div className='mylogo pt-[54px] max-md:pt-12'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <h3 className='font-normal text-[38px] max-md:text-3xl max-sm:text-2xl leading-[41px] text-darkBlue max-w-[548px] max-lg:mx-auto max-lg:text-center'>More Than <span className='text-skyBlue'>80,000</span>+ Companies Trust Bill Central</h3>
        <div className='overflow-x-auto'>
          <div className='flex items-center justify-between gap-[51px] pt-16 max-lg:pt-10 max-md:pt-3 max-sm:pt-3 w-[1140px] max-md:w-[900px] max-sm:w-[700px] mx-auto max-[1175px]:pb-4'>
            {COMPANY_LOGO.map((obj, i) => (
              <a key={i} href={obj.myLink}>
                <img src={obj.logo} alt={obj.alt} className={`${obj.myClass} mx-auto`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo