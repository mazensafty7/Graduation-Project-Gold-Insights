import React, { useState } from "react";
import { Footer, Navbar,Golddata } from "../components";
import { NavLink } from 'react-router-dom'

const General = () => {
  

  return (
    
    <div>
     <Navbar/>
      <div className="general-page bg-white" style={{ paddingTop: "120px", paddingBottom:"90px" }}>
        <h1 className="text-center">General gold analysis</h1>
        <div className="lline ll2"></div>
        <div>
              <div className="coll-image1"><img src="./assests/g1.png" alt="" /></div> 
              <div className="coll-artricle bg-white shadow-lg"> <p>
                <h2>Economic Indicator Density Distributions</h2><br/>
The following density plots represent the distribution of several key economic indicators, providing insights into their historical behavior and volatility.<br/>
Each plot visualizes how frequently certain values occur, allowing users to identify common value ranges and outliers.<br/><br/>

<h2>Gold Density Plot</h2><br/>
This plot displays a <em>multimodal distribution</em> of gold prices, suggesting that the price of gold has historically fluctuated around several key levels.<br/>
Peaks around the <strong>$500–700</strong>, <strong>$1300–1400</strong>, and <strong>$1800–2000</strong> price ranges indicate these were common or stable market points.<br/>
The presence of multiple peaks may reflect different global economic cycles or crises.<br/><br/>

<strong>Silver Density Plot</strong><br/>
Silver prices show a strong concentration around the <strong>$10–30</strong> range, with two noticeable peaks.<br/>
This suggests that silver, like gold, has had periods of stability around specific price points.<br/>
The <em>right-skewed tail</em> indicates occasional sharp price increases, likely due to market speculation or economic uncertainty.<br/><br/>

<strong>Oil Density Plot</strong><br/>
The oil price distribution appears <em>symmetric</em> with a peak around the <strong>$80–100</strong> range, suggesting that most historical prices hovered within this band.<br/>
This central tendency implies a relative stability in oil pricing, despite external factors like geopolitical events or supply chain disruptions.<br/><br/>

<strong>US Dollar Density Plot</strong><br/>
The US Dollar index demonstrates a <em>bimodal distribution</em>, with significant density between <strong>80–100</strong>, pointing to frequent fluctuations within this range.<br/>
The two peaks suggest historical shifts in dollar strength, potentially driven by monetary policy, inflation, or global economic changes.<br/><br/>

<strong>S&amp;P 500 Density Plot</strong><br/>
The S&amp;P 500 index shows a <em>right-skewed distribution</em> with a peak in the lower values and a long tail extending toward higher values.<br/>
This reflects the overall upward growth trend of the stock market over time, with higher index levels becoming more common in recent years.<br/><br/>

<strong>Interest Rate Density Plot</strong><br/>
Interest rates exhibit a <em>tri-modal distribution</em>, with peaks around <strong>0.5%</strong>, <strong>2%</strong>, and <strong>3%</strong>.<br/>
This suggests distinct monetary policy regimes, possibly representing low-rate environments (e.g., during financial crises) and higher rates in normal economic cycles.<br/><br/>

<strong>Inflation Density Plot</strong><br/>
Inflation rates are centered around the <strong>2–3%</strong> range, aligning with the target rates of many central banks.<br/>
The symmetric peak suggests relatively consistent inflation rates, although occasional spikes and deflations are visible in the tail ends.<br/><br/>

<strong>Unemployment Rate (Unrate) Density Plot</strong><br/>
The unemployment rate shows a pronounced peak around <strong>4–6%</strong>, indicating that this range is the most common in recent history.<br/>
There’s a secondary peak at higher values, possibly reflecting periods of economic downturns or recessions.<br/>
</p>


              </div>
        </div>
         <div>
              <div className="general-image"><img src="./assests/g2.png" alt="" /></div> 
              <div className="coll-artricle bg-white shadow-lg "> <p>
                <h2>Yearly Returns of Economic Indicators</h2><br/>
The following plots visualize the year-over-year (YoY) returns of key economic and financial indicators.<br/>
By examining these return series, we gain insights into the volatility, risk, and cyclicality of each variable over time.<br/><br/>

<strong>Gold Yearly Returns</strong><br/>
Gold exhibits noticeable <em>cyclical returns</em> with sharp fluctuations, particularly during economic crises.<br/>
High <strong>volatility spikes</strong> indicate periods of uncertainty, where investors often seek gold as a <em>safe haven asset</em>.<br/><br/>

<strong>Silver Yearly Returns</strong><br/>
Silver returns are significantly <strong>more volatile</strong> than gold.<br/>
Peaks above <strong>100%</strong> and sharp drops suggest silver is more <em>speculative</em> and sensitive to market movements.<br/>
High variance may be driven by industrial demand shifts or market speculation.<br/><br/>

<strong>Oil Yearly Returns</strong><br/>
Oil shows <strong>extreme volatility</strong> with massive spikes and crashes, reflecting its sensitivity to <em>geopolitical events</em>, <em>supply-demand shocks</em>, and <em>OPEC decisions</em>.<br/>
A notable spike around 2020 may relate to <strong>pandemic-induced market chaos</strong>.<br/><br/>

<strong>US Dollar Yearly Returns</strong><br/>
The US Dollar exhibits <em>moderate fluctuations</em>, with cyclical patterns likely tied to <strong>monetary policy</strong>, <strong>inflation expectations</strong>, and <strong>global trade dynamics</strong>.<br/>
While not as volatile as commodities, it still reflects macroeconomic sentiment.<br/><br/>

<strong>S&amp;P 500 Yearly Returns</strong><br/>
The S&amp;P 500 demonstrates classic <em>market cycles</em>, including sharp <strong>drawdowns</strong> during recessions (e.g., 2008, 2020) and strong recoveries.<br/>
This highlights its sensitivity to <strong>macroeconomic factors</strong> and <em>investor sentiment</em>.<br/><br/>

<strong>Interest Rate Yearly Returns</strong><br/>
The interest rate return plot is <strong>highly erratic</strong>, with extreme spikes and drops due to sudden <em>policy changes</em> or <em>calculation anomalies</em>.<br/>
Such sharp changes can drastically impact <strong>bond yields</strong> and <strong>borrowing costs</strong> across the economy.<br/><br/>

<strong>Inflation Yearly Returns</strong><br/>
Inflation returns are generally <em>stable</em> but exhibit rare and extreme values, indicating periods of <strong>deflation</strong> or <strong>hyperinflation</strong>.<br/>
The <strong>2008–2009 financial crisis</strong> and <strong>COVID-19 aftermath</strong> are visible through sudden shifts in inflation dynamics.<br/><br/>

<strong>Unemployment Rate (Unrate) Yearly Returns</strong><br/>
The unemployment rate shows distinct <strong>surges</strong> during recessions, particularly around <strong>2009</strong> and <strong>2020</strong>.<br/>
These peaks highlight the labor market's <em>vulnerability to economic shocks</em> and the importance of <strong>timely interventions</strong>.<br/>
           
</p>


              </div>
        </div>
                <div>
              <div className="coll-image1"><img src="./assests/g3.png" alt="" /></div> 
              <div className="coll-artricle bg-white shadow-lg"> <p>
                <h2>Gold Price with Moving Averages</h2><br/>
This line chart tracks the historical price of gold (in <strong>yellow</strong>) along with three different <strong>moving averages</strong>, offering insights into trend patterns and smoothing out volatility.<br/><br/>

<strong>Lines Explained:</strong><br/>

<strong>Gold (Yellow):</strong> The raw daily price of gold — it is jagged due to short-term fluctuations.<br/><br/>

<strong>Rolling 30-day Average (Blue):</strong> <em>Short-term trend</em>; reacts quickly to price changes, useful for identifying recent momentum.<br/><br/>

<strong>Rolling 90-day Average (Red):</strong> <em>Medium-term trend</em>; smoother than the 30-day, balancing responsiveness and noise.<br/><br/>

<strong>Rolling 365-day Average (Green):</strong> <em>Long-term trend</em>; smoothest line, clearly showing broader market direction over time.<br/><br/>

<strong>Key Observations:</strong><br/><br/>

The gold price exhibits <strong>cyclical bull and bear periods</strong>.<br/><br/>

<strong>2008–2011:</strong> Strong <em>bullish phase</em> — all moving averages sloped sharply upward.<br/><br/>

<strong>2013–2018:</strong> <em>Bearish/consolidation phase</em> — long-term average was mostly flat or declining.<br/><br/>

<strong>2019–2023:</strong> <em>Renewed uptrend</em> — all moving averages begin rising again, with shorter ones (blue, red) crossing above the long-term green line (a <strong>bullish signal</strong>).<br/><br/>

<strong>Interpretation:</strong><br/><br/>

Moving average <strong>crossovers</strong> can act as trend signals:<br/><br/>

→ When short-term averages cross <strong>above</strong> long-term → <strong>possible buy signal</strong>.<br/><br/>

→ When they drop <strong>below</strong> → <strong>possible sell signal</strong>.<br/><br/>

The <strong>365-day average</strong> is useful for confirming <em>major shifts in macroeconomic sentiment</em> and <strong>long-term investment horizons</strong>.<br/>

     
</p>


              </div>
        </div>
        <div>
             <div className="coll-image1"><img src="./assests/g4.png" alt="" /></div> 
              <div className="coll-artricle bg-white shadow-lg"> <p>
                <h2>Running Min & Max</h2><br/>
This chart visualizes the historical price movement of gold over time, showcasing both the <strong>running maximum</strong> and <strong>running minimum</strong> values.<br/><br/>

The <strong>blue line</strong> represents the <em>daily closing price</em> of gold.<br/><br/>

The <strong>red line</strong> traces the <strong>running maximum</strong>, which continuously records the highest price reached up to each point in time. As you move from left to right, this line only increases or stays flat, forming a clear <em>stair-step pattern</em>.<br/><br/>

The <strong>orange-yellow line</strong> shows the <strong>running minimum</strong>, which captures the lowest price reached so far. It remains mostly flat, indicating that the lowest value was established early and not revisited afterward.<br/><br/>

<strong>From left to right:</strong><br/><br/>

In the early 2000s, gold prices were relatively low and stable.<br/><br/>

A strong upward trend began around <strong>2005–2011</strong>, where the running max increased sharply.<br/><br/>

From <strong>2013 to 2018</strong>, gold prices experienced a <em>sideways correction</em>, while the running max and min remained flat.<br/><br/>

A new rally started around <strong>2020</strong>, breaking past previous highs, causing the red running max to step up again.<br/><br/>

The running min, in contrast, remained unchanged for most of the timeline, suggesting a <strong>long-term support level</strong> formed early in the data.<br/>

               


</p>


              </div>
        </div>
         <div>
             <div className="coll-image1"><img src="./assests/g5.png" alt="" /></div> 
              <div className="coll-artricle bg-white shadow-lg"> <p>
                <h2>Average True Range (ATR) – Gold Market Volatility</h2><br/>
This chart illustrates the <strong>Average True Range (ATR)</strong> of gold prices over time using a <strong>14-day period</strong>. The ATR is a widely used indicator that measures <strong>market volatility</strong> – in other words, how much the price of gold fluctuates.<br/><br/>

The <strong>purple line</strong> represents the 14-day ATR values.<br/>

<strong>Higher peaks</strong> indicate periods of increased price volatility.<br/>

<strong>Lower values</strong> reflect stable or less volatile price movements.<br/>

<strong>From left to right:</strong><br/><br/>

Between <strong>2000 and 2006</strong>, volatility was generally low and steady.<br/>

Starting in <strong>2008</strong>, ATR spikes reflect the <em>global financial crisis</em>, as market uncertainty drove significant price swings.<br/>

The most prominent spikes occurred around <strong>2011–2013</strong>, coinciding with a <strong>major gold rally</strong> and rapid corrections.<br/>

A relative calm followed from <strong>2015 to 2019</strong>, where the ATR stayed in a moderate range.<br/><br/>

Another surge in volatility began in <strong>2020</strong>, due to the <em>COVID-19 pandemic</em>, <em>economic instability</em>, and <em>inflation concerns</em>.<br/>

<strong>Recent years</strong> continue to show <strong>elevated volatility</strong>, indicating that gold remains a <em>dynamic and responsive asset</em>.<br/>

            
</p>


              </div>
        </div>
         <div>
             <div className="coll-image1"><img src="./assests/g6.png" alt="" /></div> 
              <div className="coll-artricle"> <p>
 <h2>Average Gold Price Per Month – Seasonal Trend Analysis</h2><br/>
This chart displays the <strong>average gold price for each month</strong>, giving insight into <strong>seasonal trends</strong> in the gold market.<br/><br/>

The <strong>x-axis</strong> represents the months from <strong>January (1)</strong> to <strong>December (12)</strong>.<br/>

The <strong>y-axis</strong> shows the <em>average gold price</em> across the entire dataset.<br/><br/>

The <strong>blue line</strong> connects monthly averages, highlighting how gold prices tend to behave throughout the calendar year.<br/>

<strong>From left to right:</strong><br/>

Gold prices start relatively <strong>lower in January</strong>, gradually increasing through spring and summer.<br/>

The price <strong>peaks in August</strong>, suggesting strong historical demand or market factors during that month.<br/>

After August, prices begin to <strong>decline</strong>, with a <em>sharp drop</em> observed from <strong>October to December</strong>.<br/>

<strong>December</strong> records the <strong>lowest average</strong>, possibly due to <em>reduced trading activity</em> or <em>end-of-year market effects</em>.<br/>

            
</p>


              </div>
        </div>
          <div>
             <div className="coll-image1"><img src="./assests/g7.png" alt="" /></div> 
              <div className="coll-artricle bg-white shadow-lg"> <p>
                <h2>Gold Price Time Series Decomposition</h2><br/>
This plot presents a <strong>time series decomposition</strong> of gold prices, showcasing the key components that influence its behavior over time:<br/><br/>

<strong>Original Series (Top Panel):</strong> The raw gold price data from <strong>2002 to 2024</strong> shows a clear <em>upward trend</em> with fluctuations, especially during financial crises and global economic shifts.<br/><br/>

<strong>Trend (Second Panel):</strong> This component captures the <strong>long-term movement</strong> in gold prices, revealing a strong upward trajectory, particularly noticeable from <strong>2008 onwards</strong> and again from <strong>2019 to 2024</strong>.<br/><br/>

<strong>Seasonal (Third Panel):</strong> The seasonal component appears <em>flat and negligible</em>, suggesting that gold prices <strong>do not exhibit a strong seasonal pattern</strong> over the years.<br/><br/>

<strong>Residual (Bottom Panel):</strong> The residuals represent <strong>irregular fluctuations</strong> that cannot be explained by the trend or seasonality. <em>Spikes in residuals</em> often correspond to periods of <strong>market volatility</strong> or <strong>major economic events</strong>.<br/>

 
            
</p>


              </div>
        </div>
    
      </div>
   <Footer/>
    </div>
  );
};

export default General;
