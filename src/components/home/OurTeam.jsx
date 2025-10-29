import React from "react";
// import Carousel from "react-multi-carousel";
const Carousel = React.lazy(() => import("react-multi-carousel"));
import "react-multi-carousel/lib/styles.css";
import team1 from "../../assets/images/home/team1.png";
import team2 from "../../assets/images/home/team2.png";
import team3 from "../../assets/images/home/team3.png";

import { Link } from "react-router-dom";
import HeadingBtn from "../common/HeadingBtn";


const teamData = [
  {
    name: "Gaurav Pande",
    role: "Founder",
    desc: "Principal Promoter with over 25 years of experience in public health, innovation, technology, and medical tourism domains.",
    image: team1
  },
  {
    name: "Anil Sudan",
    role: "Co-Founder",
    desc: "Principal Promoter with over 30 years of experience in media, operations, leadership and strategy development.",
    image: team2,
  },
  {
    name: "Shalini Pande",
    role: "CEO",
    desc: "Principal Promoter with over 12 years od experience in operations managements and logistics support.",
    image: team3,
  },
  {
    name: "Gaurav Pande",
    role: "Founder",
    desc: "Principal Promoter with over 25 years of experience in public health, innovation, technology, and medical tourism domains.",
    image: team1
  },


  // Add more member objects as needed
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 24,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 16,
  },
}
// const isLargeScreen = window.innerWidth >= 1024;

const OurTeam = () => (
  <section className="space-top ">
    <div className="container">
      <div className="mb-6">
        {/* <span className="inline-block  text-black font-bold border px-4 py-2 text-lg rounded shadow-none mb-3">
          OUR TEAM
        </span> */}
        <div className=" mb-4">
          <HeadingBtn text="OUR TEAM" />
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
          Visionaries and Innovators
        </h3>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          Empowering visionaries to turn bold ideas into impactful AI-driven solutions.
        </p>
      </div>
      <Carousel
        responsive={responsive}
        infinite
        keyBoardControl
        swipeable
        draggable
        showDots={false}
        containerClass="pt-2 pb-2 md:pb-0"
        itemClass="ps-1 pt-0 pe-4"
        arrows={false}
        renderButtonGroupOutside={false}
        partialVisible
      >
        {teamData.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm py-4 px-4  flex flex-col items-center transition-all duration-300 h-full">
            <div className="w-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded-md object-cover mb-4"
              />
            </div>
            <div>
              <h4 className="text-webprimary font-semibold text-xl mb-1">{member.name}</h4>
              <div className="text-black font-semibold mb-2">{member.role}</div>
              <p className="text-gray-700 text-base ">{member.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default OurTeam;
