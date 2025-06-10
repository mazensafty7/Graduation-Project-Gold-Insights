import express from "express";
import cors from "cors";
import axios from "axios";
import { dbConnection } from "./database/dbConnection.js";
import { globalErrorHandling } from "./middlewares/globalErrorHandling.js";
import userRouter from "./modules/user/user.routes.js";
import authRouter from "./modules/auth/auth.routes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => res.send("API is running"));

// 🔐 مفاتيح الـ APIs
const goldApiKey = "goldapi-4ap28k19mbp7wsex-io";
const fredApiKey = "85ed9711ce011bbf21c23bd2bbaa31d9";

// 🔁 Series IDs من FRED
const seriesMap = {
  Oil: "DCOILBRENTEU",
  "US Dollar": "DTWEXBGS",
  "S&P 500": "SP500",
  Interest: "REAINTRATREARAT10Y",
  Inflation: "MEDCPIM158SFRBCLE",
  Unrate: "UNRATE"
};

// 🪙 API الجديد للذهب والفضة
const fetchMetalPrice = async (metalCode) => {
  const url = `https://www.goldapi.io/api/${metalCode}/USD`;
  console.log("GoldAPI URL:", url);

  const response = await axios.get(url, {
    headers: {
      "x-access-token": goldApiKey,
      "Content-Type": "application/json"
    }
  });

  return response.data.price;  // السعر المباشر
};

// 🏛 API لـ FRED (لآخر قيمة)
const fetchFredLatest = async (series_id) => {
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${series_id}&api_key=${fredApiKey}&file_type=json`;
  console.log("FRED API URL:", url);
  const response = await axios.get(url);
  const observations = response.data.observations;
  const latestValid = [...observations].reverse().find(obs => obs.value !== ".");
  return parseFloat(latestValid.value);
};

// 🔮 Route التنبؤ الكامل
app.post("/predict", async (req, res) => {
  try {
    const gold = await fetchMetalPrice("XAU");
    const silver = await fetchMetalPrice("XAG");

    const oil = await fetchFredLatest(seriesMap["Oil"]);
    const dollar = await fetchFredLatest(seriesMap["US Dollar"]);
    const sp500 = await fetchFredLatest(seriesMap["S&P 500"]);
    const interest = await fetchFredLatest(seriesMap["Interest"]);
    const inflation = await fetchFredLatest(seriesMap["Inflation"]);
    const unrate = await fetchFredLatest(seriesMap["Unrate"]);

    const features = [gold, silver, oil, dollar, sp500, interest, inflation, unrate];

    console.log("Features sent to Flask model:", features);

    const flaskResponse = await axios.post("http://127.0.0.1:5000/api/forecast", {
      features: features
    });

    res.json({
      input_features: {
        Gold: gold,
        Silver: silver,
        Oil: oil,
        US_Dollar: dollar,
        S_P_500: sp500,
        Interest: interest,
        Inflation: inflation,
        Unrate: unrate
      },
      model_input_array: features,
      prediction: flaskResponse.data.forecast
    });

  } catch (error) {
    console.error(" Error during prediction:", error.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

// ⛔️ Route not found
app.use("*", (req, res, next) => {
  const err = new Error("Route not found");
  err.statusCode = 404;
  next(err);
});

app.use(globalErrorHandling);

app.listen(PORT, () => {
  dbConnection();  // ✅ تأكد من أن دي فعالة أو احذفها لو مش عامل DB
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});