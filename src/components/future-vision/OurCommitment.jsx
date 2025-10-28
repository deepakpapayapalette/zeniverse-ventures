import React from "react";
import aiImage from "../../assets/images/future-vision/commitment.png";

const OurCommitment = () => {
  const commitments = [
    {
      title: "Save lives",
    },
    {
      title: "Empower doctors and decision-makers",
    },
    {
      title: "Build healthier and safer communities",
    },
  ];

  return (
    <section className="space-top">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aiImage}
                alt="Data-driven healthcare technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-webprimary mb-6">
              Our Commitment
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We believe the future of healthcare and safety lies in data-driven
              intelligence, accessible technology, and global collaboration.
              AETURN's innovations are designed to:
            </p>

            <div className="space-y-4 mb-8">
              {commitments.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md  border-webprimary p-5 hover:shadow-lg hover:border-webprimary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="font-semibold  text-xl">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            <button className="theme-btn-fill">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
