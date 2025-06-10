import React, { useState } from "react";
import { Footer, Navbar,Golddata, Oildashboard } from "../components";
import { NavLink } from 'react-router-dom'


const Oilprice = () => {
  

  return (
    
    <div>
         <Navbar/>
                <div className="goldcover" style={{ paddingTop: "120px" }}>
                     <div className="overlay"></div> 
          <div className="batatas">
      <Golddata chartTitle="Oil" dataFile="/oil_close.csv" priceColumn="Oil"/>
      </div>
   </div>
    <div style={{ paddingTop: "120px" }} >
          <Oildashboard/>
   
   
       </div>
   
    </div>
  );
};

export default Oilprice;
