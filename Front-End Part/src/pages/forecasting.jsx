import React, { useState } from "react";
import { Navbar } from "../components";
import axios from "axios";

const Forecasting = () => {
  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState("gram");
  const [todayPrice, setTodayPrice] = useState("");
  const [predictedPrice, setPredictedPrice] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const currencyRates = {
    USD: 1,
    EUR: 0.93,
    EGP: 48,
    SAR: 3.75,
    GBP: 0.79
  };

  const unitConversion = {
    gram: 1 / 31.1035,
    ounce: 1,
    kilogram: 1000 / 31.1035
  };

  const handleForecast = async () => {
    try {
      const res = await axios.post("https://c8d8-197-48-90-154.ngrok-free.app/predict");
      const todayUSD = res.data.input_features.Gold;
      const predictedUSD = res.data.prediction;

      const convertedToday = todayUSD * currencyRates[currency] * unitConversion[unit];
      const convertedPredicted = predictedUSD * currencyRates[currency] * unitConversion[unit];

      setTodayPrice(convertedToday.toFixed(2));
      setPredictedPrice(convertedPredicted.toFixed(2));

      const diff = convertedPredicted - convertedToday;
      if (diff > 1) {
        setRecommendation(`The forecast shows an increase of ${diff.toFixed(2)} ${currency} per ${unit}. Consider selling soon.`);
      } else if (diff < -1) {
        setRecommendation(`The forecast shows a decrease of ${Math.abs(diff).toFixed(2)} ${currency} per ${unit}. You might want to hold or buy more.`);
      } else {
        setRecommendation("The price is stable. No strong action is recommended at the moment.");
      }

    } catch (err) {
      console.error("Error fetching prediction:", err);
      setRecommendation("An error occurred while forecasting.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="forecast-page d-flex justify-content-center">
        {/* تم إزالة leftpart نهائيًا */}

        <div className="rightpart" >
          <div className="d-flex">
            <div className="forecast-btns">Forecast Currency</div>
            <div className="forecast-btns">Weight Unit</div>
          </div>

          <select className="selection" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="EGP">EGP</option>
            <option value="SAR">SAR</option>
            <option value="GBP">GBP</option>
          </select>

          <select className="selection" value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="gram">Gram</option>
            <option value="ounce">Ounce</option>
            <option value="kilogram">Kilogram</option>
          </select>

          <div>
            <button className="real-predict btn" onClick={handleForecast}>Forecast</button>
          </div>

          <div className="f-price d-flex">
            <div className="forecast-btns">Today's Price</div>
            <div className="forecast-btns">Forecasted Price</div>
          </div>

          <div className="texts">
            <input className="text" type="text" value={todayPrice} readOnly />
            <input className="text" type="text" value={predictedPrice} readOnly />
          </div>

          <div className="recom">Recommendation</div>
         <textarea className="form-control w-78 recom-field" rows="3" value={recommendation} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Forecasting;