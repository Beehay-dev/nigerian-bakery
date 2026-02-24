import { useState } from "react";
import "./menu.css";
import separator from "../../../assets/separator.png";
import weddingCake from "../../../assets/weddingCake.jpg";
import whitecream from "../../../assets/whitecream.jpg";
import flowercake from "../../../assets/flowercake.jpg";
import rosecreamy from "../../../assets/rosecreamy.jpg";
import chocolatecake from "../../../assets/chocolatecake.jpg";
import birthdayCake from "../../../assets/birthdayCake.jpg";

const firstTitleMap = {
  party: "WHITE CREAMY",
  wedding: "WHITE CREAMY 1",
  birthday: "WHITE CREAMY 2",
  christmas: "WHITE CREAMY 3",
  newyear: "WHITE CREAMY 4",
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("party");

  return (
    <div className="Menu-container">
      <div className="center-div">

        {/* HEADER */}
        <div className="menu-text">
          <h1 className="menu">Our Menu</h1>
          <h2 className="textmenu">creamy dishes</h2>
          <div className="separator-menu">
            <img src={separator} alt="" />
          </div>
          <p className="write-up">
            Pick any of our delicious creamy dishes from our menu and enjoy the rich flavors.
          </p>
        </div>

        {/* CATEGORY BAR */}
        <ul className="category-switcher">
          {Object.keys(firstTitleMap).map((key) => (
            <li
              key={key}
              className={activeCategory === key ? "active" : ""}
              onClick={() => setActiveCategory(key)}
            >
              {key} cakes
            </li>
          ))}
        </ul>

        {/* MENU LIST */}
        <div className="menu-list">
          <div className="menu-item">
            <img src={whitecream} alt="White Cream Cake" />
            <div className="menu-info">
              <h3>{firstTitleMap[activeCategory]}</h3>
              <p>The day he wane day he was shooting at some food and up through the ground.</p>
              <span className="price">$20.00</span>
            </div>
          </div>

          <div className="menu-item">
            <img src={rosecreamy} alt="Rose Creamy Cake" />
            <div className="menu-info">
              <h3>ROSE CREAMY <span className="tag">NEW</span></h3>
              <p>The day he wane day he was shooting at some food and up through the ground.</p>
              <span className="price">$25.00</span>
            </div>
          </div>

          <div className="menu-item">
            <img src={weddingCake} alt="Wedding Cake" />
            <div className="menu-info">
              <h3>WEDDING CAKE <span className="tag">NEW</span></h3>
              <p>The day he wane day he was shooting at some food and up through the ground.</p>
              <span className="price">$30.00</span>
            </div>
          </div>

          <div className="menu-item">
            <img src={flowercake} alt="Flowered Cake" />
            <div className="menu-info">
              <h3>FLOWERED CAKE</h3>
              <p>The day he wane day he was shooting at some food and up through the ground.</p>
              <span className="price">$34.00</span>
            </div>
          </div>

          <div className="menu-item">
            <img src={birthdayCake} alt="Birthday Cake" />
            <div className="menu-info">
              <h3>BIRTHDAY CAKE</h3>
              <p>The day he wane day he was shooting at some food and up through the ground.</p>
              <span className="price">$41.00</span>
            </div>
          </div>

          <div className="menu-item">
            <img src={chocolatecake} alt="Chocolate Berry Cake" />
            <div className="menu-info">
              <h3>CHOCOLATE BERRY CAKE</h3>
              <p>The day he wane day he was shooting at some food and up through the ground.</p>
              <span className="price">$48.00</span>
            </div>
          </div>
        </div>

        <button type="button" className="view-btn">
          View full menu
        </button>

      </div>
    </div>
  );
}

export default Menu;