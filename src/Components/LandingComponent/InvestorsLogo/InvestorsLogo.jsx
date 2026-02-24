import React from 'react'
import './InvestorsLogo.css'
import logo1 from '../../../assets/logo1.png'
import logo2 from '../../../assets/logo2.png'
import logo3 from '../../../assets/logo3.png'
import logo4 from '../../../assets/logo4.png'
import logo5 from '../../../assets/logo5.png'

function InvestorsLogo() {
  return (
    <div className="investors-logo">
      <div className="img-carousel">
        <img src={logo1} alt="Logo-1" />
        <img src={logo2} alt="Logo-2" />
        <img src={logo3} alt="Logo-3" />
        <img src={logo4} alt="Logo-4" className='logo' />
        <img src={logo5} alt="Logo-5" />    
      </div>
    </div>
  )
}

export default InvestorsLogo 
