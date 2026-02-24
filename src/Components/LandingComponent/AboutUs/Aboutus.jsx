import React, { useState } from 'react'
import separator from '../../../assets/separator.png'
import avatar from '../../../assets/avatar.jpg'
import './aboutus.css'

function Aboutus() {
  const testimonials = [
    {
      text:
        "The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.",
      name: "BEEHAY",
      role: "Co-Founder",
      image: avatar,
    },
    {
      text:
        "The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.",
      name: "BEEH",
      role: "CEO",
      image: avatar,
    },
    {
      text:
        "The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.",
      name: "BA",
      role: "Product Manager",
      image: avatar,
    },
  ]

  const [index, setIndex] = useState(0)

  return (
    <section className='about-container'>
      <div className="opening-text">
        <h1>Talk about us</h1>
        <h2>our clients</h2>
        <img src={separator} alt="separator" className='sep-img' />
      </div>

      <div className="testimonial-content">
        <p className="testimonial-text">
          <span className="quote">“</span>
          {testimonials[index].text}
          <span className="quote">”</span>
        </p>

        <div className="client-info">
          <img src={testimonials[index].image} alt={testimonials[index].name} />
          <p>
            <strong>{testimonials[index].name}</strong>
            <span> / {testimonials[index].role}</span>
          </p>
        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aboutus
