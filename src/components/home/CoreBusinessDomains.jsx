import React from "react";
import "../../assets/styles/home.css";
import { Link } from "react-router-dom";
import { businessDomains } from "../../data/LocalData";

const CoreBusinessDomains = () => {


  return (
    <section className="space-top bg-webprimary py-12">
      <div className="container  text-white ">
        <h2 className=" text-2xl md:text-4xl font-semibold mb-2">Our Core Business Domains</h2>
        <p className="text-lg mb-10">
          Delivering innovative, tech-enabled solutions across Public Health,
          Medical Tourism, Road Safety, Skill Development, and cutting-edge AI
          Innovations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessDomains.map((item, index) => (
            <div
              key={index}
              className="domain-card bg-white text-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between"
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

                  className="text-[#0B63CE] font-normal text-md hover:translate-x-4  transition-transform ease-in-out duration-200"
                >
                  Know More →
                </Link>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-[100px] h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBusinessDomains;
