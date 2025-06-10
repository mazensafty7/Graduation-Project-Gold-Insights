import React from "react";
import { Footer, Navbar } from "../components";
import { NavLink } from "react-router-dom";

const Learn = () => {
  return (
    <div>
      <Navbar />
      <div className="" style={{ paddingTop: "90px" }}>
        <div className="trade" style={{ backgroundColor: "aquamarine" }}>
          <div className="pt-5">
            <h1>Learn how to trade online</h1>
            <h3 className="mt-3">
              Our online trading resources can help you become a smarter trader
            </h3>
          </div>
        </div>
      </div>

      <div className="tradingp mt-5">
        <p>
          Whatever your experience, we've got the tools and resources to help
          improve your <br /> trading! From online trading courses
        </p>
      </div>

      <div className="container coursat d-flex justify-content-evenly" style={{ paddingBottom: "90px" }}>
        <div className="c-type">
          <p>
            Trading <br />
            courses
          </p>
          <div className="trading-circle"></div>
          <button className="btn trade-btn"><a target="blank" href="https://www.ig.com/en/learn-to-trade/ig-academy/courses">ONLINE COURSES</a></button>
        </div>
        

        <div className="c-type">
          <p>
            Trading <br />
            Education
          </p>
          <div className="trading-circle tc-2"></div>
          <button className="btn trade-btn"><a target="blank" href="https://www.youtube.com/watch?v=8hc4LUOeBcA&list=PLBYSdC_HMWMrAAzZ6xxkKRT1CdapFLJ-z">EDUCATION</a></button>
        </div>

        <div className="c-type">
          <p>
            Free eBook <br />
            downloads
          </p>
          <div className="trading-circle tc-3"></div>
          <NavLink to="/books" className="btn trade-btn">DOWNLOAD NOW</NavLink>
        </div>

       

        <div className="c-type">
          <p>
            Trading <br /> Glossary
          </p>
          <div className="trading-circle tc-5"></div>
          <button className="btn trade-btn"> <a target="blank" href="https://www.apmex.com/faq/glossary-of-gold-silver-terms?utm_source=chatgpt.com">KNOW MORE</a></button>
        </div>

       
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
