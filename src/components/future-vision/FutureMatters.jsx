import React from "react";
import aiImage from "../../assets/images/future-vision/future-vision-matters.png"; // update the path to your image

const FutureMatters = () => {
  const points = [
    {
      title: "Global Relevance",
      description: "AI solutions built in India, scalable worldwide.",
    },
    {
      title: "Actionable Intelligence",
      description:
        "Insights that drive real decisions, not just predictions.",
    },
    {
      title: "Human + AI Collaboration",
      description:
        "Technology empowering professionals, not replacing them.",
    },
    {
      title: "Sustainability",
      description:
        "Scalable, cost-effective, and impactful solutions.",
    },
  ];

  return (
    <section className="space-top">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Content */}
          <div className=" ">
            <h2 className="text-4xl font-semibold text-webprimary mb-6">
              Why Future Vision Matters?
            </h2>

            <div className="space-y-4">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 sm:text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className=" w-full">
            <img
              src={aiImage}
              alt="Why Future Vision Matters"
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureMatters;
