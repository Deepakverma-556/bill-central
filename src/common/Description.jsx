import React from 'react'

const Description = ({text}) => {
  return (
    <div>
      <p className='text-base max-md:text-sm leading-6 text-white font-helvetica'>{text }</p>
    </div>
  )
}

export default Description