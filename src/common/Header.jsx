import React, { useState, useEffect } from 'react'
import { HEADERLINK } from '../utils/Helper';
import CustomButton from './CustomButton';
import logo from '../assets/images/webp/logo.webp'
const Header = () => {
  const [open, setOpen] = useState()

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);


  return (
    <section className='bg-transparent'>
      <div className='max-w-[1172px] px-4 mx-auto py-5 max-md:py-4 max-sm:py-3'>
        <div className='flex items-center justify-between'>
          <a href="#logo">
            <img src={logo} alt="logo" className='h-10 max-md:h-9 max-sm:h-8' />
          </a>
          <ul className='flex items-center gap-6 max-lg:hidden'>
            {HEADERLINK.map((obj, i) => (
              <li key={i}><a href={obj.Link} className='text-white text-base font-helvetica relative flex after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-1 after:h-[0.2px] after:bg-white pb-0.5'>{obj.Title}</a></li>
            ))}
          </ul>
          <div className='max-lg:hidden'><CustomButton text='Get Started' bg='bg-white' /></div>
          <div
            className={`lg:hidden z-30 text-3xl max-sm:text-2xl font-bold text-white  cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>
          <div className={`w-full h-full transition-all duration-500 left-0 lg:-top-full z-20 fixed flex flex-col bg-black justify-center items-center ${open ? "top-0 left-0" : "-top-full"
            }`}>
            <ul className='flex items-center flex-col gap-6'>
              {HEADERLINK.map((obj, i) => (
                <li key={i}><a href={obj.Link} className='text-white text-base'>{obj.Title}</a></li>
              ))}
              <div><CustomButton text='Get Started' bg='bg-white' /></div>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Header