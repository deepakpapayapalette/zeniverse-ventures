import React from 'react'
import banner2 from "../../assets/images/home/home-banner.png"
// import bannerBottom from "../../assets/images/banner-bottom.gif"
import { Link } from 'react-router-dom'
import HeadingBtn from '../common/HeadingBtn'


const Hero = () => {
  return (
    <div className='overflow-hidden bg-cover bg-right bg-no-repeat z-20 relative flex items-center banner w-full lg:h-[90vh] md:h-[80vh] h-[70vh]' style={{ backgroundImage: `url(${banner2})` }}>
      <div className="container z-20">
        <div className=' text-white flex   '>
          <div className="md:w-3/4 ">
            <h6 className='text-white text-lg mb-2 uppercase'>
              <HeadingBtn text="Zeniverse Ventures" styleprops={{ color: 'white' }} />
            </h6>
            <h1 className='lg:text-4xl md:text-4xl text-2xl font-semibold mb-2' style={{ lineHeight: '1.3' }} >
              Collaborating to <span className='text-webprimary text-6xl'>Build AI <br />Solutions</span> for a Better World
            </h1>
            <p className='md:text-xl text-white'>At Zeniverse Ventures, we create AI solutions that empower growth, uplift communities, and shape a smarter future together.</p>

            <div className='mt-5 md:mt-8'>
              <Link to="about/solution-portfolio" >
                <button className='theme-btn-fill transition'>
                  Let’s Work Together
                </button>
              </Link>
            </div>
          </div>


        </div>
      </div>
      {/* create a dark overlay over the image  */}
      <div className='z-10 absolute inset-0 bg-black opacity-50'></div>

    </div >
  )
}

export default Hero
