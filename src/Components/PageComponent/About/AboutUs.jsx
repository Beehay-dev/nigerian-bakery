import aboutImg from "../../../assets/aboutImg.jpg"
import Header from "../../LandingComponent/Header/Header"
import "./aboutUs.css"
function AboutUs() {
  return (
    <div className="about-container">
      <div className="header-control">
        <Header />
      </div>
        
      <div className="img">
        <img src={aboutImg} alt="" className="about-img"/>
        <h1 className="about-title">About Us</h1>
      </div>
    </div>
  )
}

export default AboutUs
