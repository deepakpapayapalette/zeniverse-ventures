import React, { lazy, Suspense, useEffect } from 'react'
import '../assets/styles/home.css'
import Loader from '../layouts/Loader'
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

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
    </Suspense>
  )
}

export default HomePage
