import React from "react";


const Offer = () => {
  return (
    <div>
      <div className="container pt-5" style={{ height: "100vh" }}
      >
        <div className="offer-head">
          <h2 className="text-center">What We Offer</h2>
          <div className="line mx-auto"></div>
        </div>
        <div className="offers pt-5 row justify-content-evenly">
          <div className="offer col-lg-3 col-md-4 col-sm-6 m-1 mt-5 pt-3">
            <h3>Gold Forecasting</h3>
            <img
              src="./assests/Forecast Service Icon.svg"
              alt="Gold Forecasting"
              height="80px"
            />
            <p>We deliver an accurate prediction for gold prices.</p>
          </div>

          <div className="offer col-lg-3 col-md-4 col-sm-6 m-1 mt-5 pt-3">
            <h3>Smart Advisor</h3>
            <img
              src="./assests/Advisor Icon.svg"
              alt="Smart Advisor"
              height="80px"
            />
            <p>Smart advisor that helps you determine the perfect time to buy or sell gold.</p>
          </div>

          <div className="offer col-lg-3 col-md-4 col-sm-6 m-1 mt-5 pt-3">
            <h3>Gold Education</h3>
            <img
              src="./assests/Education Icon.svg"
              alt="Gold Education"
              height="80px"
            />
            <p>We deliver high-quality educational courses to help you learn.</p>
          </div>

          <div className="offer col-lg-3 col-md-4 col-sm-6 m-1 mt-5 pt-3">
            <h3>Gold Analysis</h3>
            <img
              src="assests/Analysis Icon.svg"
              alt="Gold Analysis"
              height="80px"
            />
            <p>A lot of analysis diagrams for gold price changes.</p>
          </div>

          <div className="offer col-lg-3 col-md-4 col-sm-6 m-1 mt-5 pt-3">
            <h3>Updated News</h3>
            <img
              src="./assests/Notification Icon.svg"
              alt="Notifications"
              height="80px"
            />
            <p>We provide you with the latest news through notifications.</p>
          </div>

          <div className="offer col-lg-3 col-md-4 col-sm-6 m-1 mt-5 pt-3">
            <h3>Privacy and Policy</h3>
            <img
              src="./assests/Privacy Icon.svg"
              alt="Privacy Policy"
              height="80px"
            />
            <p>We take your privacy seriously. Your information is safe with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
