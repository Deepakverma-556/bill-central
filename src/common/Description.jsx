import React from 'react'

const Description = ({text, myClass}) => {
  return (
      <p className={`text-base max-md:text-sm leading-6 ${myClass} font-helvetica`}>{text }</p>
  )
}

export default Description