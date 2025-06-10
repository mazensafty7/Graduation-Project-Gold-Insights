import React from "react";


const Welcome = () => {
  return (
    <div>
      <div className="home">
        <div className="overlay"></div>
        <div className="welcome">
          <p className="first">Welcome To</p>

          <img
            className="tneen"
            src="./assests/kara-removebg-preview.png"
            alt="Gold Insights Logo"
            height="400px"
          />

          <p className="logo-info">Gold Insights</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
