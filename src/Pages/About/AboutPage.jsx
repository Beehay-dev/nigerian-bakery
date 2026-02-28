import AboutUs from "../../Components/PageComponent/About/AboutUs"
import Header from "../../Components/LandingComponent/Header/Header"
import Hero2 from "../../Components/PageComponent/Hero2/Hero2"
import MeetOurTeam from "../../Components/PageComponent/MeetOurTeam/MeetOurTeam"
import AboutProp from "../../Components/PageComponent/AboutProp/AboutProp"
import FooterProp from "../../Components/PageComponent/FooterProp/FooterProp"
function AboutPage() {
  return (
    <div className="Aboutpage-container">

      <div className='aboutus-control'>
        <AboutUs/>
      </div>
      <div className="hero2-control">
        <Hero2/>
      </div>
      <div className="meetourteam-control">
        <MeetOurTeam/>
      </div>
      <div className="aboutprop-control">
        <AboutProp/>
      </div>
      <div className="footerprop-control">
        <FooterProp/>
      </div>

    </div>


      
  )
}

export default AboutPage
