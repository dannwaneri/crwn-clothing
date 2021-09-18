import React from "react";
import './homepage.style.scss';


const HomePage = () => {
    return(
        <div className="homepage">
      <h1>Welcome to my homepage</h1>
      <div className="directory-menu">
        <div className="menu-item">
        <div className="content">
          <div className="title">HATS</div>
            <span className="sub-title">SHOP NOW</span>
            </div>
            </div>
            <div className="menu-item">
        <div className="content">
          <div className="title">JACKETS</div>
            <span className="sub-title">SHOP NOW</span>
            </div>
            </div>
            <div className="menu-item">
        <div className="content">
          <div className="title">SHOES</div>
            <span className="sub-title">SHOP NOW</span>
            </div>
            </div>
            <div className="menu-item">
        <div className="content">
          <div className="title">WOMENS</div>
            <span className="sub-title">SHOP NOW</span>
            </div>
            </div>
            <div className="menu-item">
        <div className="content">
          <div className="title">MENS</div>
            <span className="sub-title">SHOP NOW</span>
            </div>
            </div>
      </div>
    </div>
    )
}

export default HomePage;