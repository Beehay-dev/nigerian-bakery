import './footer.css'
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaSkype, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>

      {/* Newsletter Bar */}
      <div className="newsletter-bar">
        <h3 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <div className="newsletter-input-wrap">
          <input type="email" placeholder="Your Email Here" className="newsletter-input" />
          <FaEnvelope className="newsletter-icon" />
        </div>
        <button className="newsletter-btn">SUBSCRIBE</button>
      </div>

      {/* Footer Main */}
      <div className="footer-main">

        {/* Recent Posts */}
        <div className="footer-col">
          <h4 className="footer-col-title">RECENT POSTS</h4>
          <ul className="recent-posts">
            <li><span style={{ color: '#3dd0e0' }}>&#187; </span> Come aboard were expecting.</li>
            <li><span style={{ color: '#3dd0e0' }}>&#187;</span> No phone no lights no motor car.</li>
            <li><span style={{ color: '#3dd0e0' }}>&#187;</span> Movie star the professor and Mary Ann.</li>
            <li><span style={{ color: '#3dd0e0' }}>&#187;</span> ts pilot Captain William Buck Rogers.</li>
            <li><span style={{ color: '#3dd0e0' }}>&#187;</span> the voyages of the Starship Enterprise.</li>
          </ul>
        </div>

        {/* Info Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">INFORMATION LINKS</h4>
          <ul className="info-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">24/7 Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-col-title">CONTACT INFO</h4>
          <ul className="contact-info">
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@beehay.com</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>234-9150-778-337</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Abule Egba - Lagos Nigeria</span>
            </li>
          </ul>
          <div className="footer-socials">
            <a href="#" title="Twitter"><FaTwitter /></a>
            <a href="#" title="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" title="Facebook"><FaFacebookF /></a>
            <a href="#" title="Skype"><FaSkype /></a>
            <a href="#" title="Pinterest"><FaPinterest /></a>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">QUICK CONTACT</h4>
          <div className="quick-contact-form">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email Address" className="form-input" />
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button className="send-btn">SEND</button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>COPYRIGHTS &copy; 2026 BEEHAY-DEV. ALL RIGHTS RESERVED</p>
      </div>

    </footer>
  )
}

export default Footer