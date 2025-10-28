import React from "react";
import partnerImage from "../../assets/images/home/globalImpact.png"; // update path
import { Link } from "react-router-dom";

const PartneringForGlobalImpact = () => {
  return (
    <section className="space-top">
      <div className="container">
        <div className="flex md:flex-row flex-col gap-8 ">
          {/* Left Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-4xl font-semibold text-webprimary mb-3 leading-snug">
              Partnering for global  impact.
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              AETURN collaborates with governments, councils, and organizations to drive technology-enabled transformation across healthcare, tourism, and skill development sectors. By combining strategic partnerships with our advanced ZENERIC AI framework, we help institutions modernize operations, enhance citizen engagement, and create data-driven ecosystems that deliver measurable impact.
            </p>
            <h5 className="font-semibold text-lg mb-3">
              Our Key Associations:
            </h5>
            <ul className="text-gray-700 text-base space-y-2 list-disc list-inside">
              <li>Ministry of Health, Government of Ethiopia</li>
              <li>India Health Action Trust (IHAT)</li>
              <li>Ministry of Tourism, Government of Uttar Pradesh</li>
              <li>Healthcare Sector Skill Council</li>
              <li>BizTech Solutions, Ethiopia</li>
              <li>Suverna Tech – Hyderabad, Telangana</li>
              <li>KDS Services Pvt Ltd</li>
              <li>Indo American Chamber of Commerce (IACC)</li>
            </ul>
            <Link to='/contact'>
              <button className="theme-btn-fill mt-6">Partner With Us</button>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex md:justify-center">
            <img
              src={partnerImage}
              alt="Partnering for Global Impact"
              className="max-w-full max-h-[100%] rounded-lg shadow-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartneringForGlobalImpact;
