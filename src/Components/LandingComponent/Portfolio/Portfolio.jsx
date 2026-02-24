import Chef from '../../../assets/Chef.png'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import cakeimg from '../../../assets/cakeimg.jpg'
import separator from '../../../assets/separator.png'
import './Portfolio.css'

function Portfolio() {
  return (
    
    <div className="portfolio-container">

        <h2 className="portfolio-title">Our Portfolio</h2>
        <h3 className="portfolio-subtitle">GALLERY</h3>
        <div className="title-divider">
            <img src={separator} alt="Separator" className="divider-line" />
        </div>
        <p className="portfolio-description">
            The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.
        </p>

        <div className="gallery-grid">

           <div className="gallery-item gallery-item-large">
                <img src={Chef} alt="Chef preparing a cake" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
            
            <div className="gallery-item gallery-item-featured">
                <img src={cakeimg} alt="Chocolate layer cake" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
            
            <div className="gallery-item">
                <img src={img1} alt="Gallery image 1" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
            
            <div className="gallery-item">
                <img src={img2} alt="Gallery image 2" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
            
            <div className="gallery-item">
                <img src={img3} alt="Raspberry cake" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
            
            <div className="gallery-item">
                <img src={img4} alt="Colorful cake slices" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
            
            <div className="gallery-item">
                <img src={img5} alt="Pink cupcakes" />
                <div className="overlay">
                    <h4>CREAM BERRY</h4>
                    <p>The shooting at some food and up through the ground oil.</p>
                </div>
            </div>
          
          <div className="gallery-item">
            <img src={img6} alt="Chocolate layer cake" />
            <div className="overlay">
                <h4>CREAM BERRY</h4>
                <p>The shooting at some food and up through the ground oil.</p>
            </div>
          </div>
        </div>

        <button className="portfolio-button">View More</button>
      </div>
   
  )
}


export default Portfolio
