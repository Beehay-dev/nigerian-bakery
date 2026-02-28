import React from 'react'
import Hero from '../../Components/LandingComponent/Hero/Hero'
import Welcome from '../../Components/LandingComponent/Welcome/Welcome'
import Order from '../../Components/LandingComponent/Order/Order'
import Menu from '../../Components/LandingComponent/Menu/Menu'
import Information from '../../Components/LandingComponent/Information/Information'
import Portfolio from '../../Components/LandingComponent/Portfolio/Portfolio'
import InvestorsLogo from '../../Components/LandingComponent/InvestorsLogo/InvestorsLogo'
import Aboutus from '../../Components/LandingComponent/AboutUs/Aboutus'
import CakeVideo from '../../Components/LandingComponent/CakeVideo/CakeVideo'
import Footer from '../../Components/LandingComponent/Footer/Footer'


function Landing() {
  return (
    <div className='Landing-container'>
        <div className="hero-control">
          <Hero/>
        </div>
        <div className="welcome-control">
          <Welcome/>
        </div>
        <div className="order-control">
          <Order/>
        </div>
        <div className="menu-control">
          <Menu/>
        </div>
        <div className="information-control">
          <Information/>
        </div>
        <div className="portfolio-control">
          <Portfolio/>
        </div>
        <div className="investors-logo-control">
          <InvestorsLogo/>
        </div>
        <div className="aboutus-control">
          <Aboutus/>
        </div>
        <div className="cakevideo-control">
          <CakeVideo/>
        </div>
        <div className="footer-control">
          <Footer/>
        </div>
     

      
    </div>
  )
}

export default Landing
