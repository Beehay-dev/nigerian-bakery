import { useState } from 'react'
import './cakeVideo.css'
import tutorialVideo from "../../../assets/tutorialVideo.mp4"

const ingredients = [
  { id: 1, text: '1 cup (150g) self-raising flour, sifted' },
  { id: 2, text: '1/3 cup (50g) cocoa, sifted' },
  { id: 3, text: '1 cup (220g) caster sugar' },
  { id: 4, text: '1/3 cup (80g) butter, softened' },
  { id: 5, text: '1/2 cup (125ml) milk' },
  { id: 6, text: '2 eggs, lightly beaten' },
]

function CakeVideo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='tutorial-section'>
      <div className="tutorial-overlay">

        {/* Title */}
        <h2 className="tutorial-title">CHOCOLATE CAKE TUTORIAL</h2>

        {/* Play Button */}
        <button className="play-btn" onClick={() => setIsOpen(true)}>
          <span>&#9654;</span>
        </button>

        {/* Ingredients */}
        <div className="ingredients-container">
          <h3 className="ingredients-title">INGREDIENTS</h3>
          <div className="ingredients-grid">
            {ingredients.map((item) => (
              <div key={item.id} className="ingredient-item">
                <span className="ingredient-icon">⊕</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>&#10005;</button>
            <video controls autoPlay className="modal-video">
              <source src={tutorialVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

    </section>
  )
}

export default CakeVideo