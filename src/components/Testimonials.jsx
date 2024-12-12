import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubHeading from '../common/SubHeading';
import Description from '../common/Description';
import { OUR_TESTIMONIALS } from '../utils/helper';
import { LeftArrow, RightArrowIcon } from '../utils/icons';

const Testimonials = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          dots: true,
          speed: 1000,
          autoplaySpeed: 3000,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          speed: 1000,
          autoplaySpeed: 3000,
          autoplay: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className='testimonials py-40 max-lg:pb-24 max-lg:pt-[72px] max-md:pb-16 max-md:pt-10'>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <div className='text-center'>
          <SubHeading customColor='text-deepBlue' text='Testimonials' spanText='Our' />
        </div>
        <div className='max-w-[490px] mx-auto text-center pt-4 max-lg:pt-3 max-sm:pt-2'>
          <Description customColor='text-deepBlue' myOpacity='opacity-90' text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
        </div>
        <div className='pt-[58px] max-md:pt-10 max-sm:pt-8'>
          <div className='relative'>
            <Slider ref={sliderRef} {...settings}>
              {OUR_TESTIMONIALS.map((obj, i) => (
                <div key={i} className='border border-deepBlue p-5 max-sm:p-3 border-opacity-10 shadow-[0px_0px_13.9px_0px] shadow-light rounded'>
                  <div className='flex items-center gap-2 pb-6 max-md:pb-4'>
                    <img src={obj.profileImg} alt={obj.alt} className='h-[60px] max-md:h-14' />
                    <div>
                      <h3 className='font-helvetica text-2xl leading-9 max-md:text-xl'>{obj.name}</h3>
                      <div>{obj.id}</div>
                    </div>
                  </div>
                  <img src={obj.rating} alt={obj.ratingAlt} className='h-[18px] max-md:h-4' />
                  <div className='pt-[18px] max-md:pt-3'> {obj.content} </div>
                </div>
              ))}
            </Slider>
            <div className='flex items-center justify-between top-1/2 absolute w-full max-lg:hidden'>
              <button onClick={previous} className='w-10 h-10 rounded-full border border-deepBlue bg-transparent transition-all duration-300 group hover:bg-deepBlue flex items-center justify-center absolute -left-[52px] max-[1246px]:-left-8'><LeftArrow customFill='fill-deepBlue' myHover="group-hover:fill-white transition-all duration-300" /></button>
              <button onClick={next} className='w-10 h-10 rounded-full border border-deepBlue bg-transparent transition-all duration-300 group hover:bg-deepBlue flex items-center justify-center absolute -right-[52px]  max-[1246px]:-right-8'><RightArrowIcon customFill='fill-deepBlue' myHover="group-hover:fill-white transition-all duration-300" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials