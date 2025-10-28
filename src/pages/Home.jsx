import React, { lazy, Suspense, useEffect } from 'react'
import '../assets/styles/home.css'
import Loader from '../layouts/Loader'
import newsImg from "../assets/images/home/news-article.png"
// import img from "../assets/images/home/founder1.png"



const Hero = lazy(() => import('../components/home/Hero'))
const AboutUsIntro = lazy(() => import('../components/home/AboutUsIntro'))
const OurInnovativeSolutions = lazy(() => import('../components/home/OurInnovativeSolutions'))
const OurFocusSection = lazy(() => import('../components/home/OurFocusSection'))
const AISolutionsSection = lazy(() => import('../components/home/AISolutionsSection'))
const VentureStudioSection = lazy(() => import('../components/home/VentureStudioSection'))
const OurTeam = lazy(() => import('../components/home/OurTeam'))
const PathInitiatives = lazy(() => import('../components/home/PathInitiatives'))
const NewsInsights = lazy(() => import('../components/home/NewsInsights'))
const FutureTogether = lazy(() => import('../components/home/FutureTogether'))


const OurFounders = lazy(() => import('../components/home/OurFounders'))
const Article = lazy(() => import('../components/home/Article'))
const PartneringForGlobalImpact = lazy(() => import('../components/home/PartneringForGlobalImpact'));

const newsData = [
  {
    id: 1,
    readTime: "12Min",
    date: "12/01/2025",
    views: "2.5k",
    title: "AETURN Launches Zen Drive Safe App",
    description: "Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.",
    paraContent: [
      {
        id: 1,
        paraTitle: "A Smarter Way to Drive Safe",
        para: "ATRN Solutions LLP (“AETURN”), under the Startup India scheme and ZENIVERSE Ventures, has officially launched its groundbreaking Zen Drive Safe App — a next-generation road safety solution designed to reduce accidents and promote safer driving habits.",
      },
      {
        id: 2,
        paraTitle: "About Zen Drive Safe",
        para: "Zen Drive Safe is a web and mobile application powered with AI and advanced analytics. The solution integrates seamlessly with vehicles and driver systems to provide:",
      },
    ],
    paraListing: [
      {
        id: 1,
        paraTitle: "Driver Fitness Tracking",
        para: " – Monitors driver alertness, fatigue, and health.",
      },
      {
        id: 2,
        paraTitle: "Vehicle Fitness Tracking",
        para: " – Ensures timely maintenance, inspections, and compliance.",
      },
      {
        id: 3,
        paraTitle: "Driving Behaviour Analysis",
        para: " – – Uses dashcam and sensors to monitor over speeding, harsh braking, cornering, and distractions.",

      }

    ],

    link: "/news/:id",
    img: newsImg,
  },
  {
    id: 2,
    readTime: "12Min",
    date: "12/01/2025",
    views: "2.5k",
    title: "AETURN Launches Zen Drive Safe App",
    description: "Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.",
    paraContent: [
      {
        id: 1,
        paraTitle: "A Smarter Way to Drive Safe",
        para: "ATRN Solutions LLP (“AETURN”), under the Startup India scheme and ZENIVERSE Ventures, has officially launched its groundbreaking Zen Drive Safe App — a next-generation road safety solution designed to reduce accidents and promote safer driving habits.",
      },
      {
        id: 2,
        paraTitle: "About Zen Drive Safe",
        para: "Zen Drive Safe is a web and mobile application powered with AI and advanced analytics. The solution integrates seamlessly with vehicles and driver systems to provide:",
      },
    ],
    paraListing: [
      {
        id: 1,
        paraTitle: "Driver Fitness Tracking",
        para: " – Monitors driver alertness, fatigue, and health.",
      },
      {
        id: 2,
        paraTitle: "Vehicle Fitness Tracking",
        para: " – Ensures timely maintenance, inspections, and compliance.",
      },
      {
        id: 3,
        paraTitle: "Driving Behaviour Analysis",
        para: " – – Uses dashcam and sensors to monitor over speeding, harsh braking, cornering, and distractions.",

      }

    ],


    link: "/news/:id",
    img: newsImg,
  },
  {
    id: 3,
    readTime: "12Min",
    date: "12/01/2025",
    views: "2.5k",
    title: "AETURN Launches Zen Drive Safe App",
    description: "Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.",
    paraContent: [
      {
        id: 1,
        paraTitle: "A Smarter Way to Drive Safe",
        para: "ATRN Solutions LLP (“AETURN”), under the Startup India scheme and ZENIVERSE Ventures, has officially launched its groundbreaking Zen Drive Safe App — a next-generation road safety solution designed to reduce accidents and promote safer driving habits.",
      },
      {
        id: 2,
        paraTitle: "About Zen Drive Safe",
        para: "Zen Drive Safe is a web and mobile application powered with AI and advanced analytics. The solution integrates seamlessly with vehicles and driver systems to provide:",
      },
    ],
    paraListing: [
      {
        id: 1,
        paraTitle: "Driver Fitness Tracking",
        para: " – Monitors driver alertness, fatigue, and health.",
      },
      {
        id: 2,
        paraTitle: "Vehicle Fitness Tracking",
        para: " – Ensures timely maintenance, inspections, and compliance.",
      },
      {
        id: 3,
        paraTitle: "Driving Behaviour Analysis",
        para: " – – Uses dashcam and sensors to monitor over speeding, harsh braking, cornering, and distractions.",

      }

    ],
    link: "/news/:id",
    img: newsImg,
  },

];
// const ourFoundersData = [
//   {
//     id: 1,
//     name: "Gaurav Pande",
//     subtitle: "Founder & CEO",
//     img: img,

//     link: "#"


//   },
//   {
//     id: 2,
//     name: "Anil Sudan",
//     subtitle: "Co-Founder & CTO",
//     img,

//     link: "#"
//   },
//   {
//     id: 3,
//     name: "Shalini Pande",
//     subtitle: "Co-Founder & COO",
//     img,

//     link: "#"

//   }
// ];

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Hero />

      <AboutUsIntro />
      <OurInnovativeSolutions />
      <OurFocusSection />
      <AISolutionsSection />
      <VentureStudioSection />
      <OurTeam />
      <PathInitiatives />
      <NewsInsights />
      <FutureTogether />
      {/* <AIActionableIntelligence />
      <OurFounders data={ourFoundersData} />
      <Article data={articlesData} />
      <PartneringForGlobalImpact />  */}
    </Suspense>
  )
}

export default HomePage
