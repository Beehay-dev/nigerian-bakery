import React from 'react'
import aboutImg from '../../../assets/aboutImg.jpg'

function BlogHero() {
  return (
    <div className='bloghero-container'>
      <div className="img">
        <img src={aboutImg} alt="" className="about-img"/>
        <h1 className="about-title">Blog</h1>
    </div>
    </div>
  )
}

export default BlogHero
