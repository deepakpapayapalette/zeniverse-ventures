import React from 'react'
import imageLeft from '../../assets/images/home/health-tech.png'
import aeturn from '../../assets/images/home/aeturn.png'

import "react-multi-carousel/lib/styles.css"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
const Carousel = React.lazy(() => import("react-multi-carousel"));
const OurInnovativeSolutions = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, dots: true },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1, showDots: false },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1, showDots: false },
  };
  const isLargeScreen = window.innerWidth >= 1024;
  return (
    <section className='space-top container'>
      <div className="">
        <h2 className='text-webprimary text-4xl mb-2 font-semibold'>Our Portfolio Companies</h2>
        <p className='text-para text-lg mb-5 md:mb-10'>
          Discover the innovators we partner with—AI-driven companies creating real-world impact across industries.
        </p>
        <div className="shadow-card px-6  rounded-lg">

          <div className=''>
            <Carousel
              // customButtonGroup={<CustomButtonGroup />}
              responsive={responsive}
              infinite
              keyBoardControl
              swipeable
              draggable
              showDots={true}
              containerClass="pt-0 pb-6 md:pb-0"
              itemClass="ps-0 pt-0"
              arrows={isLargeScreen}
              renderButtonGroupOutside={false}
              partialVisible
            >
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className='flex md:flex-row flex-col  gap-8 ' key={index} >
                  <div className='md:w-[60%] space-y-4' >
                    <div className='pt-5'>
                      <img src={aeturn || null} alt="aeturn" className="max-w-full " />
                    </div>
                    <h3 className='text-3xl font-semibold text-webprimary' >Health Tech Venture</h3>

                    <p className='text-para text-lg '>
                      Empowering a healthier tomorrow with cutting-edge health tech solutions. We Digitize the Medical World.
                    </p>
                    <div className='flex md:flex-row flex-col  md:max-w-[400px]   gap-6 '>
                      <Link to="/aeturn" className='w-full'>
                        <button className='theme-btn-fill md:min-w-[200px] w-full '>
                          Visit Website
                        </button>
                      </Link>
                      <Link to="/aeturn ">
                        <button className='theme-btn md:min-w-[200px] w-full'>
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="left-img md:w-[40%]">
                    <img src={imageLeft} alt="Our Innovative Solutions" className='w-full h-auto' />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section >
  )
}

export default OurInnovativeSolutions;

export const CustomButtonGroup = ({ next, previous, carouselState }) => {
  const { currentSlide, totalItems } = carouselState || {};
  return (
    <div className="custom-carousel-buttons">
      <button onClick={() => previous()} disabled={currentSlide === 0}>
        <GrPrevious size={20} />
      </button>
      <button onClick={() => next()} disabled={currentSlide === totalItems - 1}>
        <GrNext size={20} />
      </button>
    </div>
  );
};

