import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container" style={{ paddingTop: "200px",paddingBottom:"200px" }}>
        <div className="about-us">
          <div className="card mb-3 about-card" style={{ maxWidth: "100%" }}>
            <div className="row g-0 mlon">
              <div className="col-md-8">
                <div className="card-body ps-5">
                  <h1 className="card-title">About Us</h1>
                  <div className="line"></div>
                  <br />
                  <br />
                  <p className="card-text fs-5">
                    Welcome to Gold Insights, your trusted partner in navigating the world of gold. We provide accurate price predictions, a smart advisor to guide your investments, educational resources for all levels, and the latest news to keep you informed. Whether you're a seasoned investor or just starting, our services empower you to make smarter decisions with confidence.
                  </p>
                </div>
              </div>
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <img src="./assests/about.jpg" className="img-fluid rounded-start kora" alt="About Us" width="500px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
