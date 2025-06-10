import React, { useState } from "react";
import { Footer, Navbar,Golddata,Sandpdashboard } from "../components";
import { NavLink } from 'react-router-dom'


const Sandp = () => {
  

  return (
    
    <div>
         <Navbar/>
                <div className="goldcover" style={{ paddingTop: "120px" }}>
                   <div className="overlay"></div> 
          <div className="batatas">
       <Golddata chartTitle="S&P" dataFile="/SP500_close.csv" priceColumn ="S&P" />
       </div>
   </div>
    <div style={{ paddingTop: "120px" }} >
          <Sandpdashboard/>
   
   
       </div>
    </div>
  );
};

export default Sandp;
