import React from 'react'
import BlogHeader from '../../Components/BlogComponent/BlogHeader/BlogHeader'
import BlogHero from '../../Components/BlogComponent/BlogHero/BlogHero'
import BlogCalendar from '../../Components/BlogComponent/BlogCalendar/BlogCalendar'

function Blog() {
  return (
    <div className='blog-control'>
        <div className="blogheader-control">
            <BlogHeader/>
        </div>
        <div className="bloghero-control">
            <BlogHero/>
        </div>
        <div className="blogcalendar-control">
            <BlogCalendar/>
        </div>

      
    </div>
  )
}

export default Blog
