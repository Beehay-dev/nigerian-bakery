
import { useState } from 'react'
import './header.css'
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSkype, FaDribbble } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='header-container'>
      
  
      <div className="top-header">
        <div className="top-header-left">
          <div className="language-selector">
            <span>🌐 Languages:</span>
            <select>
              <option className='opt'>English</option>
              <option className='opt'>Danish</option>
              <option className='opt'>French</option>
              <option className='opt'>German</option>
            </select>
          </div>
          <div className="phone-info">
            <a href="tel:1-800-23-456-7890" className='phone-link'><FaPhoneAlt /> Phone: 1-800-23-456-7890</a>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com/" title="Facebook"><FaFacebookF /></a>
          <a href="https://x.com/BeeHay54321" title="Twitter"><FaTwitter /></a>
          <a href="https://www.instagram.com/bee.hay.52/" title="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/breakthrough-alao-hephzibah-814095283/" title="LinkedIn"><FaLinkedinIn /></a>
          <a href="skype:live:bee.hay.52?call" title="Skype"><FaSkype /></a>
          <a href="https://dribbble.com/BeeHay" title="Dribbble"><FaDribbble /></a>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="main-header">
        <div className="logo">
          <h1>Movics Bakery</h1>
        </div>

        <nav className="navbar">
          <ul className={`nav-ul ${menuOpen ? 'nav-open' : ''}`}>
            <li><a href="/landing" className="active">HOME</a></li>
            <li className='pages-li'>
              <a href="#pages">PAGES</a>
              <ul className='ul-lists'>
                <li className='li-lists'><a href="/aboutpage">About Us</a></li>
                <li className='li-lists'><a href="">Service</a></li>
                <li className='li-lists'><a href="">Gallery</a></li>
              </ul>
            </li>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li className='pages-li'>
              <a href="#blog">BLOG</a>
              <ul className='ul-lists'>
                <li className='li-lists'><a href="/blog">Blog Posts</a></li>
              </ul>
            </li>
            <li className='pages-li'>
              <a href="#contact">CONTACT</a>
              <ul className='ul-lists'>
                <li className='li-lists'><a href="">Contact 2</a></li>
              </ul>
            </li>
          </ul>

          <div
            className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header