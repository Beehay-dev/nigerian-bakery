import { useState } from "react";
import "./blogCalendar.css";

const categories = [
  { name: "Creamy Flavour", count: 125 },
  { name: "Velvet Cake Receipes", count: 97 }, 
  { name: "Black Forest", count: 56 },
  { name: "Chocolate Flavour", count: 24 },
  { name: "Delicious Berry Cakes", count: 13 },
];

const recentPosts = [
  { title: "The first mate and his Skipper too will do their very best nest.", date: "05 Jan, 2016" },
  { title: "The first mate and his Skipper too will do their very best nest.", date: "25 Feb, 2016" },
  { title: "The first mate and his Skipper too will do their very best nest.", date: "14 Mar, 2016" },
];

const galleryImages = [
  "https://demoxml.com/html/royalbakery/images/gallery-1.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-2.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-3.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-4.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-5.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-6.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-7.jpg",
  "https://demoxml.com/html/royalbakery/images/gallery-8.jpg",
];

const calendarDays = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
];

const tags = ["Creamy Cakes", "Sweet Bakes", "Chocolate Flavour", "Delicious Cream"];

export default function BlogCalendar() {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="page">
      <div className="container">
        {/* MAIN CONTENT */}
        <main>
          {/* Hero Image */}
          <img
            src="https://demoxml.com/html/royalbakery/images/blog-4.jpg"
            alt="Cupcakes"
            className="hero-img"
          />

          {/* Post Header */}
          <div className="post-header">
            <div className="date-badge">
              <div className="date-day">25</div>
              <div className="date-month">JAN</div>
            </div>
            <div>
              <h1 className="post-title">Creamy Waves Shift</h1>
              <div className="post-meta">
                <span className="meta-item">♡ <span className="meta-pink">10 Likes</span></span>
                <span className="meta-item">💬 <span>15 Comments</span></span>
                <span className="meta-item"><span>Admin</span></span>
              </div>
            </div>
          </div>

          {/* Post Body */}
          <div className="post-body">
            <p className="body-text">
              The day he was shooting at some food and up through the ground came a oil that is its a beautiful day came a oil the first mate and his skipper too will do their very best to make the others comfortable in their tropic island set ground on the shore of this uncharted if you have a problem if no one else can help and if you can find them maybe you can hire the a team these days are all happy and free these days are all share them with me oh baby i have always wanted to have a neighbor just like you friendly neighbors.
            </p>
            <p className="body-text">
              The ground came a oil that is its a beautiful day came a oil the first mate and his skipper too will do their very best to make the others comfortable in their tropic island set ground have a problem.
            </p>

            {/* Blockquote */}
            <div className="blockquote">
              <span className="quote-icon">"</span>
              <div>
                <p className="quote-text">
                  The ground came a oil that is its a beautiful day came a oil the first mate and his skipper too will do their very best to make the others comfortable in their tropic island.
                </p>
                <p className="quote-author">– Andrew Williams</p>
              </div>
            </div>

            <p className="body-text">
              The problem if no one else can help and if you can find them maybe you can hire the a team these days are all happy and free these days are all share them with me oh baby i have just like you friendly neighbors.
            </p>
          </div>

          {/* Tags */}
          <div className="tags-row">
            <span className="tag-label">Tags: </span>{" "}
            {tags.map((tag, i) => (
              <span key={tag}>
                <a className="tag-link">{tag}</a>
                {i < tags.length - 1 && <span className="tag-separator">, </span>}
              </span>
            ))}
          </div>

          {/* Comment */}
          <div className="comment-box">
            <div className="comment-author-row">
              <img
                src="https://demoxml.com/html/royalbakery/images/team.png"
                alt="Joe Auguz"
                className="comment-avatar"
              />
              <div>
                <div className="comment-name">
                  Joe Auguz <span className="comment-divider">|</span>{" "}
                  <span className="comment-role">Admin</span>
                </div>
              </div>
            </div>
            <p className="comment-text">
              The ground came a oil that is its a beautiful day came a oil the first mate and his skipper too will do their very best to make the others comfortable in their tropic have a problem.
            </p>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside>
          {/* Search */}
          <div className="sidebar-section">
            <div className="search-row">
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-section">
            <div className="sidebar-title">Categories</div>
            {categories.map((cat) => (
              <div key={cat.name} className="cat-row">
                <span>{cat.name}</span>
                <span className="cat-count">{cat.count}</span>
              </div>
            ))}
          </div>

          {/* Popular / Recent tabs */}
          <div className="sidebar-section">
            <div className="tabs-row">
              {["popular", "recent"].map((tab) => (
                <button
                  key={tab}
                  className={`tab${activeTab === tab ? " active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            {recentPosts.map((post, i) => (
              <div key={i} className="recent-post">
                <div className="recent-title">{post.title}</div>
                <div className="recent-date">
                  Posted On: <span className="recent-date-pink">{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* From Gallery */}
          <div className="sidebar-section">
            <div className="sidebar-title">From Gallery</div>
            <div className="gallery-grid">
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="gallery-img"
                  onError={(e) => {
                    e.target.style.background = "#f0e0e5";
                    e.target.src = "";
                  }}
                />
              ))}
            </div>
          </div>

          {/* Archives Calendar */}
          <div className="sidebar-section">
            <div className="sidebar-title">Archives</div>
            <div className="calendar-header">
              <button className="calendar-arrow">‹</button>
              <div>
                <div className="calendar-title">April 2016</div>
              </div>
              <button className="calendar-arrow">›</button>
            </div>
            <div className="calendar-subtitle">Tuesday 26th</div>
            <table className="calendar-table">
              <thead>
                <tr>
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <th key={i} className="calendar-th">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendarDays.map((week, wi) => (
                  <tr key={wi}>
                    {week.map((day, di) => (
                      <td key={di} className="calendar-td">
                        {day === 18 ? (
                          <span className="calendar-highlight">{day}</span>
                        ) : day || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </aside>
      </div>
    </div>
  );
}
