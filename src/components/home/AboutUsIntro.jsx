import React from "react";
import aboutImage from "../../assets/images/home/about-intro.png";
import { Link } from "react-router-dom";
import HeadingBtn from "../common/HeadingBtn";

const AboutUsIntro = () => {
  return (
    <section className="space-top">
      <div className="container">
        <div className="flex md:flex-row flex-col gap-8 items-center">
          {/* Left Image Section */}
          <div className="md:w-1/2 flex md:justify-center">
            <img
              src={aboutImage}
              alt="Empowering Growth Through AI Innovation"
              className="w-full max-h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          {/* Right Text Section */}
          <div className="md:w-1/2">
            <div className="mb-2">
              <div className="mb-5">
                <HeadingBtn text="About Us" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-3 leading-snug">
              Empowering Growth Through AI Innovation
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Zeniverse Ventures is a forward-thinking company dedicated to building impactful AI-powered solutions. We partner with businesses and innovators to create technologies that drive growth, enhance safety, and uplift communities. Together, we're shaping a smarter, more connected world through the power of artificial intelligence.
            </p>
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-6 md:border border-gray-200 py-2">
              <div className="md:text-center md:border-r md:border-gray-200">
                <div className="text-black  text-2xl font-bold italic">
                  20<span className="text-xl">+</span>
                </div>
                <div className="text-base text-gray-600">Year of Experience</div>
              </div>
              <div className="md:text-center  md:border-r md:border-gray-200">
                <div className="text-black  text-2xl font-bold italic">
                  12<span className="text-xl">+</span>
                </div>
                <div className="text-base text-gray-600">Working Partner</div>
              </div>
              <div className="md:text-center ">
                <div className="text-black  text-2xl font-bold italic">
                  1k<span className="text-xl">+</span>
                </div>
                <div className="text-base text-gray-600">Project Complete</div>
              </div>
            </div>
            <Link to="/about">
              <button className="theme-btn-fill">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntro;
