import React from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import { SIMPLE_STEPS_LIST } from '../utils/Helper'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SimpleSteps = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 3000,
          autoplay:true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 3000,
          autoplay: true,
          centerMode:true,
        },
      },
      
    ],
  };
  return (
    <div className='pb-40 max-lg:pb-24 max-md:pb-12 max-w-[1440px] mx-auto max-md:px-4'>
      <div className='max-w-[610px] mx-auto text-center pb-14 max-md:pb-10 max-sm:pb-8'>
        <div className=' pb-4 max-lg:pb-3 max-sm:pb-2'>
          <SubHeading text='Switch' spanText='Simple Steps To' />
        </div>
        <Description opacity='text-opacity-90' color='text-gray' text='Lorem ipsum dolor sit amet consectetur. 
        Semper vitae nullam eget consectetur mi. 
        Vulputate sapien a a bibendum' />
      </div>
      <div className='max-md:flex-wrap max-md:justify-center'>
        <Slider {...settings}>
          {SIMPLE_STEPS_LIST.map((obj, i) => (
            <div key={i} className='relative group overflow-hidden cursor-pointer'>
              <img src={obj.image} alt={obj.alt} className='h-[661px] object-cover max-lg:h-[500px] max-md:h-96 max-sm:h-[340px] w-full' />
              <div className='absolute flex items-end justify-center bg-lightBlue h-full w-full bottom-0 group-hover:bottom-full transition-all duration-300'>
                <p className='vertical-text pt-8 max-md:pt-3 text-[32px] max-lg:text-2xl max-md:text-xl max-sm:text-lg font-helvetica leading-[35px] text-deepBlue'>{obj.title}</p>
              </div>
              <div className='absolute -bottom-full transition-all duration-300 bg-prussianBlue group-hover:bottom-0'>
                <div className='p-8 max-lg:p-6 max-md:p-4'>
                  <h2 className='font-helvetica pb-[14px] max-md:pb-2 text-[32px] max-lg:text-2xl max-md:text-xl max-sm:text-lg font-helvetica leading-[35px] max-lg:leading-tight max-md:leading-6 max-sm:leading-5 text-white'>{obj.title}</h2>
                  <p className='font-helvetica text-base max-md:text-sm max-sm:text-xs leading-6 text-white'>{obj.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SimpleSteps