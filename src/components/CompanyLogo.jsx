import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { COMPANY_LOGO } from '../utils/helper';

const CompanyLogo = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          autoplaySpeed: 1,
          autoplay: true,
          cssEase: 'linear',
         
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          autoplaySpeed: 1,
          autoplay: true,
          cssEase: 'linear',
         
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          autoplaySpeed: 1,
          autoplay: true,
          cssEase: 'linear',
      
        },
      },

    ],
  }
  return (
    <div className='mylogo pt-[54px] max-md:pt-12'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <h3 className='font-normal text-[38px] max-md:text-3xl max-sm:text-2xl leading-[41px] text-darkBlue max-w-[548px] max-lg:mx-auto max-lg:text-center'>More Than <span className='text-skyBlue'>80,000</span>+ Companies Trust Bill Central</h3>
        <div className='pt-16 max-lg:pt-10 max-md:pt-3 max-sm:pt-3'>
          <Slider {...settings} >
            {COMPANY_LOGO.map((obj, i) => (
                <a key={i} href={obj.myLink}>
                  <img src={obj.logo} alt={obj.alt} className={`${obj.myClass} mx-auto`} />
                </a>   
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo