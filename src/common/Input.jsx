import React from 'react'
import Button from './Button'

const Input = ({placeholder}) => {
  return (
      <div>
          <form action="#">
              <label htmlFor="address" className='flex items-center w-full bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] pr-[9px] max-md:pr-1 border border-gray-400 overflow-hidden '>
                  <input id='address' type="text" placeholder={placeholder} className='w-full h-full py-6 max-md:py-3 pl-[22px] max-sm:pl-3 font-helvetica text-base max-sm:text-sm text-black outline-none'  />
                  <Button text='Compare' color='text-white' bg='bg-skyBlue' />
              </label>
          </form>
    </div>
  )
}

export default Input