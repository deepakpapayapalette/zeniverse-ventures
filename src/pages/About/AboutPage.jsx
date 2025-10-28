import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../assets/styles/home.css'
import { businessDomains } from '../../data/LocalData'
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo'
// export const aboutLink = [
//   {
//     title: "Medical Tourism",
//     description: "Platforms connecting patients with global medical expertise and telemedicine services.",
//     image: medicalTourism,
//     link: "/industries/medical-tourism"
//   },
// ];


const AboutPage = () => {
  return (
    <>
      <ScrollTopAtuo />
      <div className='container space-top'>
        <div className='mb-6'>
          <h2 className=" text-2xl md:text-4xl font-semibold mb-4 text-webprimary">About Us</h2>
          <p className="text-lg mb-10 text-para">
            {/* Learn about ATRN Solutions LLP, our mission, and our founders. */}
          </p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessDomains.map((item, index) => (
            <div
              key={index}
              className="domain-card bg-white text-gray-800 rounded-xl p-6  border border-gray-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="md:text-2xl font-semibold text-webprimary mb-2">
                  {item.title}
                </h3>
                <p className="sm:text-lg mb-3">{item.description}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <Link
                  to={item.link}

                  className="text-[#0B63CE] font-semibold text-lg hover:translate-x-4  transition-transform ease-in-out duration-200"
                >
                  Know More →
                </Link>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </>
  )
}

export default AboutPage
