import React, { useState } from "react";
import { Footer, Navbar,Golddata,Silverdashbord } from "../components";
import { NavLink } from 'react-router-dom'


const Silverprice = () => {
  

  return (
    
    <div>
         <Navbar/>
                <div className="goldcover" style={{ paddingTop: "120px" }}>
                   <div className="overlay"></div> 
          <div className="batatas">
     <Golddata chartTitle="Silver" dataFile="/silver_close.csv" priceColumn ="Silver"  />
     </div>
      </div>

       <div style={{ paddingTop: "120px" }} >
             <Silverdashbord/>
          </div>
      

   
    </div>
  );
};

export default Silverprice;
