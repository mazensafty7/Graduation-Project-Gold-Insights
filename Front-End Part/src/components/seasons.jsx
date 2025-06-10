
import React, { useEffect, useState } from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";
import Papa from "papaparse";
import { parseISO, format, getMonth } from "date-fns";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function GoldSeasonalityTrend() {
  const [seasonalityData, setSeasonalityData] = useState([]);
  const [monthlyReturnData, setMonthlyReturnData] = useState([]);

  useEffect(() => {
    fetch("/gold_close.csv")
      .then((response) => response.text())
      .then((csvData) => {
        const parsed = Papa.parse(csvData, { header: true });
        const data = parsed.data
          .filter((d) => d.Date && d.Gold)
          .map((d) => ({
            date: parseISO(d.Date),
            gold: parseFloat(d.Gold),
          }))
          .sort((a, b) => a.date - b.date);

        // حساب متوسط سعر الذهب لكل شهر (Seasonality)
        const monthlyMap = {};
        data.forEach((d) => {
          const m = getMonth(d.date);
          if (!monthlyMap[m]) monthlyMap[m] = { total: 0, count: 0 };
          monthlyMap[m].total += d.gold;
          monthlyMap[m].count += 1;
        });
        const monthlyAvg = Object.keys(monthlyMap).map((key) => ({
          month: monthNames[key],
          avgGold: (monthlyMap[key].total / monthlyMap[key].count).toFixed(2),
        }));
        setSeasonalityData(monthlyAvg);

        // حساب العائد الشهري (Monthly Returns)
        const monthlyClosePrices = {};
        data.forEach(({ date, gold }) => {
          const ym = format(date, "yyyy-MM");
          monthlyClosePrices[ym] = gold;
        });

        const months = Object.keys(monthlyClosePrices).sort();

        const monthlyReturns = [];
        for (let i = 1; i < months.length; i++) {
          const prev = monthlyClosePrices[months[i - 1]];
          const curr = monthlyClosePrices[months[i]];
          const ret = ((curr - prev) / prev) * 100;
          monthlyReturns.push({
            month: months[i],
            return: ret,
          });
        }

        const monthlyReturnMap = {};
        monthlyReturns.forEach(({ month, return: ret }) => {
          const m = getMonth(parseISO(month + "-01"));
          if (!monthlyReturnMap[m]) monthlyReturnMap[m] = { total: 0, count: 0 };
          monthlyReturnMap[m].total += ret;
          monthlyReturnMap[m].count += 1;
        });

        const monthlyReturnAvg = Object.keys(monthlyReturnMap).map((key) => ({
          month: monthNames[key],
          avgReturn: parseFloat((monthlyReturnMap[key].total / monthlyReturnMap[key].count).toFixed(2)),
        }));

        setMonthlyReturnData(monthlyReturnAvg);
      });
  }, []);

  return (
    <div className="p-4 grid gap-8 md:grid-cols-1">
      {/* Seasonality - Average Price */}
      <div className=" morata bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Average Monthly Gold Prices</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={seasonalityData}>
            <XAxis dataKey="month" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="avgGold" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-gray-700 text-base">
          <p>
            This bar chart represents the average gold prices for each month across multiple years. By aggregating monthly data, it highlights seasonal patterns in gold prices. Typically, certain months such as January and September show higher average prices, possibly due to increased demand or market factors. On the other hand, months like June often reflect lower average prices, which may indicate favorable buying opportunities for investors. Understanding these trends can help in making informed decisions regarding the timing of gold investments.
          </p>
        </div>
      </div>

      {/* Seasonality - Average Monthly Returns */}


<div className=" morata bg-white shadow-lg rounded-2xl p-4 mt-8">
        <h2 className="text-xl font-bold mb-4">Average Monthly Gold Returns (%)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyReturnData}>
            <XAxis dataKey="month" />
            <YAxis domain={["auto", "auto"]} tickFormatter={(val) => `${val}%`} />
            <Tooltip formatter={(value) => `${value}%`} />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="avgReturn" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-gray-700 text-base">
          <p>
            This chart shows the average monthly returns of gold prices expressed as percentages. It reflects how much gold prices tend to increase or decrease on average in each month compared to the previous month. Positive returns in specific months indicate periods where gold has historically appreciated, while negative returns suggest declines. Investors can leverage these insights to anticipate potential monthly performance, aiding in the timing of buying or selling gold.
          </p>
        </div>
      </div>
    </div>
  );
}