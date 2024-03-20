import React, { useEffect } from 'react'
import MainHeader from '../components/MainHeader'
import HeroBanner from '../components/HeroBanner'
import MapSection from '../components/Map/MapSection'
import ContactSection from '../components/Contact/ContactSection'

import '../Home.css'
import Footer from '../components/Footer/Footer'

function Home() {
  useEffect(() => {
    document.body.style.background = "#181818"
  }, [])
  return (
    <>
      <MainHeader />
      <HeroBanner />
      <MapSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home