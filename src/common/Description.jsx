import React from 'react'

const Description = ({text, color, opacity}) => {
  return (
      <p className={`text-base max-md:text-sm leading-6 ${color} ${opacity} font-helvetica`}>{text }</p>
  )
}

export default Description