import React, { useState, useRef } from 'react'
import SubHeading from '../common/SubHeading'
import { UTILITY_COMPARISONS } from '../utils/helper';
import { AccDownArrow } from '../utils/icons';


const AccordionItem = ({ handleToggle, active, obj }) => {
  const contentEl = useRef();
  const { title, description, icon } = obj;

  return (
    <div className=" overflow-hidden border border-lightGray rounded mt-6 max-md:mt-5 max-sm:mt-4 p-[14px] max-md:p-3 max-sm:p-2 transition-all duration-300 group hover:shadow-[0px_0px_13.9px_0px] hover:shadow-light max-lg:max-w-[700px] mx-auto">
      <div role="button" aria-expanded={active === title} aria-controls={`content-${title}`}
        className={` flex items-center cursor-pointer justify-between ${active === title ? 'active' : ''}`}
        onClick={() => handleToggle(title)}>
        <div className='flex items-center gap-6 max-sm:gap-2'>
          <div className={`h-16 w-16 max-md:h-14 max-md:w-14 rounded-full  flex items-center justify-center transition-all duration-300 ${active === title ? 'bg-prussianBlue my-icon' : 'bg-lightBlue '} `}>{icon}</div>
          <p className="font-helvetica text-2xl max-md:text-xl max-sm:text-lg leading-[26px] text-deepBlue">{title}</p>
        </div>
        <div className={`transition-transform duration-500 ${active === title ? 'rotate-180' : 'rotate-0'}`}>
          <AccDownArrow />
        </div>
      </div>
      <div title={`content-${title}`} ref={contentEl} className={`rc-collapse ${active === title ? 'show' : ''}`} style={{
        height: active === title ? `${contentEl.current.scrollHeight}px` : '0px',
        transition: 'height 0.3s ease-out',
      }}
      >
        <p className="pl-[88px] max-md:pl-20 max-sm:pl-16 pt-3 max-sm:pt-1">{description}</p>
      </div>
    </div>
  );
};

const Comparisons = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (title) => {
    setActive((prev) => (prev === title ? null : title));
  };
  return (
    <div className='pb-[162px] max-lg:pb-24 max-md:pb-12'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3 '>
          <div className='w-1/2 max-lg:w-full px-3'>
            <div className='max-w-[456px] max-lg:text-center max-lg:mx-auto pb-[22px] max-md:pb-2 max-sm:pb-0'>
              <SubHeading text='Comparisons' spanText='Comprehensive Utility' />
            </div>
            {UTILITY_COMPARISONS.map((obj, index) => (
              <AccordionItem key={index} active={active} handleToggle={handleToggle} obj={obj} />
            ))}
          </div>
          <div className='w-1/2 px-3 max-lg:w-full pt-8'>
            <img src="/assets/images/webp/utility-discussion.webp" alt="utility-discussion" className='h-[535px] object-cover mx-auto max-lg:h-96 max-md:h-80 max-sm:h-64' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparisons