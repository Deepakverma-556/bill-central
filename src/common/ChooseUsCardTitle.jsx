import React from 'react'

const ChooseUsCardTitle = ({text,customColor}) => {
  return (
      <h4 className={`font-helvetica text-2xl leading-[26px] max-lg:text-xl max-lg:leading-6 ${customColor}`}>{text}</h4>
  )
}

export default ChooseUsCardTitle