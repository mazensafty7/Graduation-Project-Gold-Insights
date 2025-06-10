import React from "react";
import { Footer, Navbar,GoldSeasonalityTrend } from "../components";
import { NavLink } from "react-router-dom";

const Seasons = () => {
  return (
    <div>
      <Navbar/>
       <div className="" style={{ paddingTop: "130px", paddingBottom:"90px" }}>
        <h1 className="text-center">Gold seasons</h1>
        <div className="lline ll3"></div>
        <GoldSeasonalityTrend/>
       </div>
       <Footer/>

     
    </div>
  );
};

export default Seasons;
