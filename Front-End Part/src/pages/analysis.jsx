import React, { useState } from "react";
import { Footer, Navbar,Golddata } from "../components";
import { NavLink } from 'react-router-dom'

const Analysis = () => {
  

  return (
    
    <div>
      <Navbar/>
      <div className="" style={{ paddingTop: "90px", paddingBottom:"90px" }}>
        <div className="analysis pt-5">
          <p>Gold Analysis</p>
        </div>
        <div className="analysis-cont d-flex justify-content-center  " style={{ paddingTop: '50px' }}>
       
        <div className="card col-3 evento shadow-lg" style={{ marginLeft:'40px' }}>
      <img src="./assests/events.jpg" className="card-img-top" alt="Sample" height={"190px"} />
      <div className="card-body">
        <h4 className="card-title">The impact of external events</h4>
         <ul className="list-group list-group-flush">
       
      </ul>
        <p className="card-text">
           Gold is widely recognized as a safe-haven asset that tends to perform well during times of crisis and uncertainty
    External events—such as geopolitical conflicts, economic crises, pandemics, and major political developments—often trigger volatility in financial markets and prompt investors to seek refuge in gold. <br />
    These events can lead to sharp movements in gold prices as demand increases in response to rising risks and instability.
    
        </p>
      </div>
      <ul className="list-group list-group-flush">
       
      </ul>
      
      <div className="card-body">
        
        <NavLink to="/externalevent" className="know" >Read more...</NavLink>
        
      </div>
    </div>


      <div className="card col-3 evento shadow-lg" style={{ marginLeft:'40px' }}>
      <img src="./assests/seasonn.jpg" className="card-img-top" alt="Sample" height={"190px"} />
      <div className="card-body">
        <h4 className="card-title">Gold Seasonality</h4>
         <ul className="list-group list-group-flush">
       
      </ul>
        <p className="card-text">
         monthly prices and returns, offering insights into recurring trends and investor behavior. Historically, certain months like August and January tend to show stronger performance, while others like June or December may present better entry opportunities. This seasonal perspective can help investors optimize timing decisions, anticipate potential patterns, and better understand cyclical movements in the gold market.


    
        </p>
      </div>
      <ul className="list-group list-group-flush">
       
      </ul>
      
      <div className="card-body">
        
        <NavLink to="/season" className="know" >Read more...</NavLink>
        
      </div>
    </div>
    
   

   
    </div>
    <div className="analysis-cont d-flex justify-content-center  " style={{ paddingTop: '50px' }}>
       
       <div className="card col-3 evento shadow-lg" style={{ marginLeft:'40px' }}>
      <img src="./assests/data-mining.jpg" className="card-img-top" alt="Sample" height={"190px"} />
      <div className="card-body">
        <h4 className="card-title">Correlation Analysis Between Factors</h4>
         <ul className="list-group list-group-flush">
       
      </ul>
        <p className="card-text">
     
This section provides a visual and statistical analysis of how various economic and geopolitical factors — such as inflation rates, USD strength, oil prices, and global crises — correlate with changes in gold prices over time. By understanding these connections, you can better interpret trends, anticipate shifts, and make more informed decisions in the gold market.




    
        </p>
      </div>
      <ul className="list-group list-group-flush">
       
      </ul>
      
      <div className="card-body">
        
        <NavLink to="/correlation" className="know" >Read more...</NavLink>
        
      </div>
    </div>


    <div className="card col-3 evento shadow-lg" style={{ marginLeft:'40px' }}>
      <img src="./assests//lolo.avif" className="card-img-top" alt="Sample" height={"190px"} />
      <div className="card-body">
        <h4 className="card-title">General gold analysis</h4><br />
         <ul className="list-group list-group-flush">
       
      </ul>
        <p className="card-text">
          A comprehensive overview of gold's historical trends, market behavior, and long-term signals. This analysis highlights key price movements, cyclical patterns, and macroeconomic influences that have shaped the gold market over time. Perfect for investors and analysts seeking a solid foundation before diving deeper.
     
        </p>
      </div> <br /><br />
      <ul className="list-group list-group-flush">
       
      </ul>
      
      <div className="card-body">
        
        <NavLink to="/general" className="know" >Read more...</NavLink>
        
      </div>
    </div>
   
  

  
   </div>
   <div className="data-list">
    <div className="data-head" style={{textAlign:'center'}}>Historical Data</div>
    
   <div className="list-elem"><NavLink to="/goldprice" className="nav-link active" >GOLD</NavLink></div> 
   <div className="list-elem"><NavLink to="/silverprice"className="nav-link active">SILVER</NavLink></div> 
   <div className="list-elem"><NavLink to="/oilprice"className="nav-link active">OIL</NavLink></div> 
   <div className="list-elem"><NavLink to="/dollarprice"className="nav-link active">DOLLAR</NavLink></div>
   <div className="list-elem"><NavLink to="/sandp"className="nav-link active">S&P 500</NavLink></div>  
   </div>
     
      
      

    
   
    </div>
    <Footer/>
    </div>
  );
};

export default Analysis;
