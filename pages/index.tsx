import AbouteMe from '@/components/AbouteMe'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import NavMobile from '@/components/NavMobile'
import Price from '@/components/Price'
import Project from '@/components/Project'
import Services from '@/components/Services'
import Skils from '@/components/Skils'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomePage = () => {
  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const hideNavHandler = () => setShowNav(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, [])

  return (
    <div className='overflow-hidden'>
      <Nav openNav={showNavHandler}/>
      <NavMobile showNav={showNav} hideNavHandler={hideNavHandler}/>
      <Hero/>
      <AbouteMe/>
      <Services/>
      <Skils/>
      <Project/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default HomePage