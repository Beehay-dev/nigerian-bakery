import separator from '../../../assets/separator.png'
import cake from '../../../assets/cake.png'
import cake1 from '../../../assets/cake1.png'
import cake2 from '../../../assets/cake2.png'
import cake3 from '../../../assets/cake3.png'
import './welcome.css'
function Welcome() {
  return (
    <div className='welcome-container'>
        <div className="center-container">
            <div className="welcome-text">
                <h2 className="welcome-title">Welcome to Nigerian Bakery</h2>
                <h3 className='welcome-brief'>OUR STORY</h3>
            </div>
            <img src={separator} alt="separator image" className='separator-png' />

            <div className="welcome-description">
                <p className="description-text">
                    At Nigerian Bakery, we are passionate about bringing you the finest baked goods that celebrate the rich culinary heritage of Nigeria.
                </p>
            </div>

            <div className="combo">
                
                <img src={cake} alt="cake image" className="cake-png" />


                <div className="combo-content">

                    <div className="combo-item">
                        <img src={cake1} alt="cake1-icon" className="cakecard" />
                        <div className="combo-text">
                            <h2>Our Mission</h2>
                            <span className="line"></span>
                            <p className="welcome-p">
                            To provide the finest baked goods that celebrate the rich culinary heritage of Nigeria.
                            </p>
                        </div>
                    </div>

                    <div className="combo-item">
                        <img src={cake2} alt="cake2-icon" className="cakecard" />
                        <div className="combo-text">
                            <h2>Our Vision</h2>
                            <span className="line"></span>
                            <p className="welcome-p">
                            To become a household name for premium baked products.
                            </p>
                        </div>
                    </div>

                    <div className="combo-item">
                        <img src={cake3} alt="cake3-icon" className="cakecard" />
                        <div className="combo-text">
                            <h2>What We Do</h2>
                            <span className="line"></span>
                            <p className="welcome-p">
                            We create delicious, high-quality baked goods using traditional Nigerian recipes and modern techniques.
                            </p>
                        </div>
                    </div>

                 </div>
            </div>

        </div>
      
    </div>

  )
}

export default Welcome
