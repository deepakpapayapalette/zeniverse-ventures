import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { LuActivity } from "react-icons/lu";

const FutureInnovations = () => {
  const innovations = [
    {
      icon: <FaStethoscope className="text-4xl text-webprimary" />,
      title: "Doctor Prescription Digitization",
      description:
        "Transforming handwritten prescriptions into accurate digital records using advanced handwriting recognition.",
      points: [
        "Reduces medical errors",
        "Enables faster pharmacy processing",
        "Creates structured health data for analytics",
      ],
    },
    {
      icon: <MdOutlinePhotoSizeSelectActual className="text-4xl text-webprimary" />,
      title: "Radiology & Imaging AI",
      description:
        "AI-powered interpretation of scans (X-rays, CT, MRI, Ultrasound) to assist doctors in faster and more accurate diagnoses.",
      points: [
        "Early disease detection",
        "Decision support for radiologists",
        "Improved patient outcomes and safety",
      ],
    },
    {
      icon: <LuActivity className="text-4xl text-webprimary" />,
      title: "Health Horoscope (Health Analytics)",
      description:
        "A unique predictive model that uses past medical records and lifestyle patterns to assess future health risks.",
      points: [
        "Preventive care suggestions",
        "Personalized wellness insights",
        "Smarter health planning for individuals and communities",
      ],
    },
  ];

  return (
    <section className="space-top bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <h3 className="text-4xl font-semibold text-webprimary mb-3">
          Our Future-Ready Innovations
        </h3>

        {/* Card Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
          {innovations.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4   rounded-full border   w-16 h-16 flex items-center justify-center"><span className="  " style={{ display: 'inline-block' }}>{item.icon}</span></div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-webprimary mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 sm:text-lg mb-3">{item.description}</p>

              {/* Points */}
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {item.points.map((point, i) => (
                  <li key={i} className="sm:text-lg">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureInnovations;
