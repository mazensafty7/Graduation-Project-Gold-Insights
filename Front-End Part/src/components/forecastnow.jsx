import React from "react";
import { NavLink } from 'react-router-dom'


const Forecastnow = () => {
  return (
    <div>
       <div className="forecastnow mt-5">
        <div className="overlay"></div>
        <div class="forecasting">
            <p>Gold price</p>
            <p class="lazg"> Forecasting</p>
            <NavLink to="/forecasting" className="predict rounded-pill btn " >Forecast Now</NavLink>
        </div>


       </div>
    </div>
  );
};

export default Forecastnow;
