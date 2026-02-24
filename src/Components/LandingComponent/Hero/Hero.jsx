import { useState } from 'react'
import Header from '../Header/Header'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
    title: 'Love is like a Good Cake',
    description: 'the day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day the day for. a three hour your a three hour.',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    title: 'Taste the Difference',
    description: 'Experience the finest cuisine crafted with love and passion. Every dish tells a story of tradition and flavour that will leave you wanting more.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    title: 'A Feast for the Senses',
    description: 'From our kitchen to your table, we bring you the most exquisite flavours from around the world. Come dine with us and experience something truly special.',
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  return (
    <section
      className='hero-section'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slides[current].image})`,
      }}
    >
      <Header />

      <div className="hero-container">
        {/* Left Arrow */}
        <button className="hero-arrow left-arrow" onClick={prevSlide}>&#10094;</button>

        {/* Hero Content Box */}
        <div className="hero-content-box">
          <h2 className="hero-title">{slides[current].title}</h2>
          <p className="hero-description">{slides[current].description}</p>
          <div className="hero-buttons">
            <button className="btn btn-dark">GET STARTED</button>
            <button className="btn btn-outline">ORDER ONLINE</button>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="hero-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero