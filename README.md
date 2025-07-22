# 🟡 GOLD INSIGHTS – AI-Powered Platform for Gold Price Forecasting & Economic Analysis

<img width="1408" height="704" alt="Image" src="https://github.com/user-attachments/assets/22382e70-307e-48dd-b64b-e0857b8f87c0" />

**GOLD INSIGHTS** is a smart, AI-powered web platform developed as our graduation project at the Egyptian E-Learning University (EELU), Faculty of Computer and Information Technology. The platform enables users—investors, economists, and enthusiasts—to forecast gold prices, explore historical trends, and receive actionable insights to support smarter financial decisions in volatile markets.

> 🎓 **Grade:** A+  
> 🗓️ **Duration:** Aug 2024 – Jun 2025  
> 🏫 **University:** Egyptian E-Learning University (EELU)

---

## 🎯 Project Overview

Gold Insights unifies **Artificial Intelligence**, **Real-time Data**, and **Interactive Dashboards** to deliver:

- 🔮 **Gold price forecasting** using LSTM deep learning models.
- 📈 **Historical and real-time market analysis** using multi-source data.
- 💡 **Buy/Sell/Hold recommendations** powered by intelligent analytics.
- 🌐 **Full-stack web interface** for seamless user interaction.

---

## 🧠 AI & Data Science Focus

As the Data Scientist & Analyst, I led the end-to-end data and AI pipeline, focusing on building a reliable and intelligent forecasting engine:

### 📊 1. Data Collection & Integration
- Collected time-series financial data for **Gold, Silver, Oil, USD Index, Interest, Inflation, Unemployment, and S&P 500** using:
  - **APIs** (Yahoo Finance, FRED)
  - **Web scraping** (BeautifulSoup)
- Cleaned, normalized, and merged data into unified datasets.

### 🔍 2. Exploratory Data Analysis (EDA)
- Analyzed trends, seasonality, correlations, and anomalies using:
  - **Pandas, Seaborn, Matplotlib, Statsmodels**
  - Techniques: Rolling averages, lag plots, heatmaps, time-series decomposition

### 🌍 3. Event-Driven & Crisis Analysis
- Investigated how global shocks (e.g., COVID-19, 2008 crisis, geopolitical events) historically affected gold.
- Built visual dashboards to show price behavior in context.

### 🤖 4. Forecasting Model (LSTM)
- Developed a **multivariate LSTM model** in TensorFlow/Keras
- Used economic indicators as regressors to enhance predictions
- Model Performance:
  - **R² = 97.01%**
  - **MAPE = 1.42%**
  - **RMSE = $40.67**

### 🧠 5. Recommendation Engine
- Generated **Buy/Sell/Hold** signals based on forecasted vs current prices.
- Applied custom business rules and thresholds for insights.

### 🚀 6. Deployment & Integration
- Deployed model via **Flask API**
- Connected backend with a **React.js frontend** and **Node.js middleware**
- Enabled real-time interaction with user inputs and API data

---

## 🖥️ System Features

- 🌐 **Frontend**: Built with **React.js + Tailwind CSS**, includes:
  - Area chart (Gold trends)
  - Bar & Donut charts (Indicators)
  - Candlestick chart (Daily gold movement)
  - KPI cards (Current price, Forecast, Delta, Recommendation)

- 📡 **Backend**:
  - **Node.js** layer to fetch live data
  - **Flask API** to serve predictions
  - **MongoDB** for logs, user actions, and analytics

- 💱 **User Options**:
  - Currency/unit conversion (e.g., grams, ounces, USD, EGP)
  - Time range filters (7d, 30d, 90d)
  - Responsive and interactive dashboard design

---

## 🧰 Technologies Used

| Category            | Tools & Libraries |
|---------------------|-------------------|
| **Languages**       | Python, JavaScript |
| **AI/ML**           | TensorFlow, Keras, Scikit-learn |
| **Data Handling**   | Pandas, NumPy, BeautifulSoup |
| **Visualization**   | Seaborn, Plotly, Recharts |
| **APIs**            | Flask, Axios |
| **Frontend**        | React.js, Tailwind CSS |
| **Backend**         | Node.js, Express |
| **Database**        | MongoDB |
| **External APIs**   | Yahoo Finance, FRED |

---

## 📌 Impact

This project demonstrates how AI can enhance financial decision-making by blending economic theory with real-time predictive analytics. It serves as a prototype for future platforms offering:
- Investment planning tools
- Market risk alerts
- Educational resources on macroeconomic trends

---

