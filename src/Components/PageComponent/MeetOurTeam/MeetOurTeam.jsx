import { useState } from "react";
import "./meetOurTeam.css"
import cakebg from "../../../assets/cakebg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const teamMembers = [
  {
    name: "Stefhen Richards",
    role: "Head Chef",
    bio: "The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day Got a dream and we just know now we are gonna make our dream come true so get a witch is shawl on a broomstick you can crawl on were gonna pay.",
    email: "info@domain.com",
    phone: "1-800-23-456-7890",
    image: "https://demoxml.com/html/royalbakery/images/team.png",
  },
  {
    name: "Maria Fontaine",
    role: "Pastry Chef",
    bio: "With over fifteen years in the finest patisseries of Paris, Maria brings an unmatched artistry to every creation. Her cakes are not just desserts — they are edible sculptures that tell a story of passion, precision, and a deep love for the craft.",
    email: "maria@domain.com",
    phone: "1-800-23-456-7891",
    image: "https://demoxml.com/html/royalbakery/images/team.png",
  },
  {
    name: "James Holloway",
    role: "Sous Chef",
    bio: "James trained under some of the most decorated culinary minds in New York. His bold flavor profiles and innovative plating techniques have earned him recognition across the industry. He believes great food is about emotion as much as technique.",
    email: "james@domain.com",
    phone: "1-800-23-456-7892",
    image: "https://demoxml.com/html/royalbakery/images/team.png",
  },
];



export default function MeetOurTeam() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + teamMembers.length) % teamMembers.length);
  const next = () => setCurrent((c) => (c + 1) % teamMembers.length);

  const member = teamMembers[current];

  return (
    <>
      
    <section className="mot-section">

            
            <div className="mot-bg" style={{ backgroundImage: `url(${cakebg})` }} />

           
            <button className="mot-arrow left" onClick={prev}>&#8249;</button>
            <button className="mot-arrow right" onClick={next}>&#8250;</button>

            <div className="overlay"></div>
            <div className="mot-inner">
                <div className="mot-chef-img-wrap">
                    <img key={current} src={member.image} alt={member.name} className="mot-chef-img" />
                </div>
                <div className="mot-content">
                    <h2 className="mot-title">Meet Our Team</h2>
                    <p className="mot-subtitle">Chefs</p>
                    <div className="mot-divider" />
                    <p className="mot-bio">{member.bio}</p>
                    <p className="mot-name">{member.name}</p>
                    <div className="mot-socials">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="mot-contact">
                        <div className="mot-contact-item">
                            <span className="mot-contact-icon email"><i className="fas fa-envelope"></i></span>
                            {member.email}
                        </div>
                        <div className="mot-contact-item">
                            <span className="mot-contact-icon phone"><i className="fas fa-phone"></i></span>
                            Phone: {member.phone}
                        </div>
                    </div>
                </div>
            </div>

  </section>

    </>
  );
}   
