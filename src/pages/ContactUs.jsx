import React, { useState } from 'react'

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import { IoMdSend } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
// import FAQSection from '../../components/website/contact/FAQSection';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Banner from '../components/common/Banner';
import FAQSection from '../components/contact/FAQSection';
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';

const ContactUs = () => {
  const bannerContent = {
    // image: image,
    title: "Contact Us",
    description: "Get in touch with us to learn, collaborate, or partner."
  }

  // const faqs = [
  //   {
  //     question: "How do I register as a driver on the portal?",
  //     answer: "To register as a driver, click on the 'Sign Up' button on the homepage, fill in your personal details, upload required documents (driver's license, vehicle registration, insurance), and complete the verification process. Once approved, you'll receive a confirmation email and can start using the portal."
  //   },
  //   {
  //     question: "Is my data and information secure?",
  //     answer: "Yes, we take data security very seriously. All your personal information and driving data is encrypted using industry-standard SSL/TLS protocols. We comply with data protection regulations and never share your information with third parties without your explicit consent. Our systems undergo regular security audits to ensure maximum protection."
  //   },
  //   {
  //     question: "Can I manage my appointments through the portal?",
  //     answer: "Absolutely! The portal allows you to schedule, reschedule, and cancel appointments for vehicle maintenance, fitness checks, and training sessions. You'll receive reminders via email and SMS, and can view your complete appointment history in your dashboard."
  //   },
  //   {
  //     question: "Can I access the portal on my mobile phone?",
  //     answer: "Yes, our portal is fully responsive and optimized for mobile devices. You can access all features through your mobile browser, or download our dedicated mobile app available for both iOS and Android devices for an even better experience on the go."
  //   },
  //   {
  //     question: "How can I collaborate with other drivers or specialists?",
  //     answer: "The portal features a community section where you can connect with other drivers, share experiences, and learn best practices. You can also request consultations with road safety specialists, join discussion forums, and participate in group training sessions. Fleet managers can coordinate with their entire team through our collaboration tools."
  //   }
  // ];

  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: '#', label: 'Linkedin' },
    { icon: <FaFacebookF size={18} />, href: '#', label: 'Facbook' },
    { icon: <FaInstagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <FaTwitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <FaYoutube size={18} />, href: '#', label: 'Youtube' },
  ];
  const userSchema = Yup.object({
    username: Yup.string().min(3).max(30).required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.number().min(10).max(10).required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    message: '',
  };

  const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
    validationSchema: userSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />

      <section className="space-top bg-white ">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section */}
            <div className='p-6 bg-webprimary rounded-lg'>
              <p className="text-white mb-2">Contact Us</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Send a Message
              </h2>


              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>

                  <label htmlFor="username" className="text-white mb-2 inline-block">Full Name</label>
                  <input
                    onChange={handleChange}
                    value={values.username}
                    onBlur={handleBlur}
                    name="username"
                    type="text"
                    placeholder="Full Name"
                    className={`w-full border border-white bg-transparent  rounded-md px-4 py-2 focus:outline-none ${errors.username && touched.username ? 'border-red-500' : ''}`}
                  /> <br />
                  {errors.username && touched.username ?
                    <p className="text-red-900 mt-1 text-sm">{errors.username}</p>
                    : null
                  }
                </div>
                <div>

                  <label htmlFor="email" className="text-white mb-2 inline-block">Email ID</label>
                  <input
                    onChange={handleChange}
                    value={values.email}
                    name='email'
                    type="email"
                    placeholder="Email ID"
                    onBlur={handleBlur}
                    className={`w-full border border-white bg-transparent  rounded-md px-4 py-2 focus:outline-none   ${errors.email && touched.email ? 'border-red-500' : ''}`}
                  /> <br />
                  {errors.email && touched.email ?
                    <p className="text-red-900 mt-1 text-sm">{errors.email}</p>
                    : null
                  }
                </div>
                <div>
                  <label htmlFor="phone" className="text-white mb-2 inline-block">Phone Number</label>
                  <input
                    // allow only 10 digits
                    maxLength={10}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    name='phone'
                    type="text"
                    placeholder="Phone No"
                    className={`w-full border border-white bg-transparent  rounded-md px-4 py-2 focus:outline-none ${errors.phone && touched.phone ? 'border-red-500' : ''}`}
                  /><br />
                  {errors.phone && touched.phone ?
                    <p className="text-red-900 mt-1 text-sm">{errors.phone}</p>
                    : null
                  }
                </div>

                <div>
                  <label htmlFor="phone" className="text-white mb-2 inline-block">Message</label>
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    name='message'
                    placeholder="Message"
                    rows="4"
                    className={`w-full border border-white bg-transparent  rounded-md px-4 py-2 focus:outline-none  ${errors.message && touched.message ? 'border-red-500' : ''}`}
                  ></textarea><br />
                  {errors.message && touched.message ?
                    <p className="text-red-900 mt-1 text-sm">{errors.message}</p>
                    : null
                  }
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-white text-webprimary px-6 py-2 rounded-md] transition"
                >
                  <span>Send Now</span>
                  <IoMdSend />
                </button>
              </form>
            </div>


            {/* Right Section (Form) */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Let’s Talk
              </h2>
              {/* Contact Info */}
              <div className=" space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <FiPhone className="text-lg" />
                  <span>+91 5252525252</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FiMail className="text-lg" />
                  <span>rjvijs42@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FiMapPin className="text-lg" />
                  <span>
                    H-Block, Sector-63, Noida, Uttar Pradesh, 201301, India
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                <div className="flex space-x-5 text-gray-600 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-9 h-9 bg-webprimary hover:bg-websecondary text-webprimary rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <span className='text-white'>
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              {/* ================google-map=============== */}
              <div>

                <div className="mt-6">


                  <div className="google-map-img">
                    <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0"
                      marginWidth="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0316610097216!2d77.37369367550069!3d28.628813175666686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50a6c1d4a9d%3A0x15e488fd7503f354!2sUsis%20Biz%20Park!5e0!3m2!1sen!2sin!4v1755211067744!5m2!1sen!2sin">
                      <a
                        href="https://www.gps.ie/collections/drones/"></a>
                    </iframe>



                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <FAQSection />
    </>
  )
}

export default ContactUs
