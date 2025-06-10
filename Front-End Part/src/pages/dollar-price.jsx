import React, { useState } from "react";
import { Footer, Navbar,Golddata ,Dollardashboard} from "../components";
import { NavLink } from 'react-router-dom'


const Dollarprice = () => {
  

  return (
    
    <div>
         <Navbar/>
                <div className="goldcover" style={{ paddingTop: "120px" }}>
           <div className="overlay"></div> 
          <div className="batatas">
      <Golddata chartTitle="Dollar" dataFile="/us_dollar_close.csv" priceColumn="Dollar" />
      </div>
      </div>
       <div style={{ paddingTop: "120px" }} >
       <Dollardashboard/>


    </div>
   
    </div>
  );
};

export default Dollarprice;
