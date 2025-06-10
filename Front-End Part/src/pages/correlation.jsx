import React, { useState } from "react";
import { Footer, Navbar,Golddata } from "../components";
import { NavLink } from 'react-router-dom'

const Correlation = () => {
  

  return (
    
    <div>
     <Navbar/>
      <div className="colleration-page" style={{ paddingTop: "120px", paddingBottom:"90px" }}>
        <h1 className="text-center">Correlation Analysis Between Factors</h1>
        <div className="lline"></div>
        <div className="colleration1">
           <div className="coll-image1"><img  src="./assests/corel2.png" alt="" /></div> 
           <div className="coll-artricle bg-white shadow-lg">
            <h2>Correlation Matrix of Economic and Market Factors</h2> <br />
       <p>     This heatmap illustrates the correlation coefficients between gold and several key economic indicators and assets: <br />


<b>1-Gold and Silver</b> show a strong positive correlation (0.78), indicating they tend to move in the same direction, likely due to their roles as precious metals and safe-haven assets. <br />


<b>2-Gold and US Dollar</b> exhibit a moderate negative correlation (-0.4), suggesting that when the US Dollar strengthens, gold prices tend to decline and vice versa. <br />


<b>3-Gold and S&P</b> 500 display a slight negative correlation (-0.00077), implying minimal direct relationship between gold prices and stock market performance. <br />


<b>4-Gold and Oil</b> have a low positive correlation (0.099), indicating limited direct interaction. <br />


<b>5-Other indicators</b> such as <b>Interest Rates</b>, Inflation, and Unemployment Rate (Unrate) show very weak or negligible correlations with gold prices, reflecting complex or indirect relationships. <br />

</p>
           </div>



        </div>
          <div className="colleration1">
           <div className="coll-image1"><img src="./assests/corel3.jpg" alt="" /></div> 
           <div className="coll-artricle bg-white shadow-lg">
           
       <p>  
       <h2>Scatter Plots: Gold vs. Economic and Market Factors</h2> <br />
This section visualizes the relationship between Gold returns and various economic and financial indicators: <br />


<b>1-Gold vs. Silver</b>: A clear positive linear pattern is visible, indicating a strong positive correlation. As silver returns increase, gold returns tend to increase as well. <br />


<b>2-Gold vs. Oil</b>: The points are widely scattered, showing a weak and inconsistent relationship between gold and oil prices. <br />


<b>3-Gold vs. US Dollar</b>: A slight negative relationship can be observed, supporting the traditional view that gold and the dollar often move in opposite directions. <br />


<b>4-Gold vs. S&P 500:</b> The scatter shows no clear trend, suggesting a very weak or no relationship between gold and stock market performance. <br />


<b>5-Gold vs. Interest Rate / Inflation / Unemployment Rate:</b> These plots are highly dispersed and do not show any specific pattern, indicating very weak or negligible relationships between gold and these macroeconomic variables. <br />  



</p>
           </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default Correlation;
