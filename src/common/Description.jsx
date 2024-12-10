import React from 'react'

const Description = ({text, customColor, myOpacity}) => {
  return (
      <p className={`text-base max-md:text-sm leading-6 ${customColor} ${myOpacity} font-helvetica`}>{text }</p>
  )
}

export default Description