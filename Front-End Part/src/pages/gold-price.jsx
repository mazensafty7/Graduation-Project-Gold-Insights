import React, { useState } from "react";
import { Footer, Navbar,Golddata,Dashboard } from "../components";
import { NavLink } from 'react-router-dom'


const Goldprice = () => {
  

  return (
    
    <div>
        <Navbar/>
        
           
        <div className="goldcover" style={{ paddingTop: "120px" }}>
          <div className="overlay"></div> 
          <div className="batatas">
            
        <Golddata chartTitle="Gold" dataFile="/gold_close.csv" />
        </div>
    </div>
    <div style={{ paddingTop: "120px" }} >
      <Dashboard/>
    


    </div>


   </div>
  
  );
};

export default Goldprice;
