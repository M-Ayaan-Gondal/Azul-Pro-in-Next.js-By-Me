import React from "react";
import "./Hero.css";

const page = () => {
  return (
    <main className="main">
      <div className="content">
        <h1>
          Hola , We are <span className="highlight">Azul Pro</span>,
        </h1>
        <br />
        <h1>Your one stop solution.</h1>
      </div>

      <div className="gallery-container">
        <div className="card1"></div>
        <div className="vertical-space"></div>
        <div className="card2"></div>
        <div className="vertical-space"></div>
        <div className="card3"></div>
        <div className="discover-btn">
          <button>
            Discover More
            <img src="https://cdn-icons-png.flaticon.com/512/3236/3236907.png" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
