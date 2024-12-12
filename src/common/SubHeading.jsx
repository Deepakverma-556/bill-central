import React from 'react'

const SubHeading = ({text, spanText, secondSpanText}) => {
  return (
    <h2 className='font-bold text-5xl leading-[52px] font-helvetica max-lg:text-[40px] max-lg:leading-tight max-md:text-4xl max-sm:text-2xl text-deepBlue'><span className='font-normal'>{spanText}</span> {text} <span className='font-normal'>{secondSpanText}</span></h2>
  )
}

export default SubHeading