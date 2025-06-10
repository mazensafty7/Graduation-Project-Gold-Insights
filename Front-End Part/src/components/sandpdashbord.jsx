import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

const Sandpdashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState("2000-08-30");
  const [endDate, setEndDate] = useState("2025-05-07");
  const [frequency, setFrequency] = useState("Daily");
  const [selectedChart, setSelectedChart] = useState("Bar");

  useEffect(() => {
    Papa.parse("/full_gold.csv", {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (result) => {
        const cleaned = result.data
          .map((row) => ({
            ...row,
            Date: dayjs(row.Date).format("YYYY-MM-DD"),
          }))
          .filter((r) => r.Date && !isNaN(new Date(r.Date)));
        setData(cleaned);
      },
    });
  }, []);

  useEffect(() => {
    const filtered = data.filter((d) => d.Date >= startDate && d.Date <= endDate);

    const groupBy = (array, keyFn) => {
      return array.reduce((acc, item) => {
        const key = keyFn(item);
        acc[key] = item; // آخر قيمة في المجموعة
        return acc;
      }, {});
    };

    let resampled;
    if (frequency === "Weekly") {
      const grouped = groupBy(filtered, (d) => dayjs(d.Date).startOf("week").format("YYYY-MM-DD"));
      resampled = Object.values(grouped);
    } else if (frequency === "Monthly") {
      const grouped = groupBy(filtered, (d) => dayjs(d.Date).startOf("month").format("YYYY-MM"));
      resampled = Object.values(grouped);
    } else {
      resampled = filtered;
    }

    setFilteredData(resampled);
  }, [data, startDate, endDate, frequency]);

  const maxHigh = Math.max(...filteredData.map((d) => d.high || 0));
  const minLow = Math.min(...filteredData.map((d) => d.low || 0));
  const avgClose = (
    filteredData.reduce((acc, cur) => acc + (cur.close || 0), 0) /
    (filteredData.length || 1)
  ).toFixed(2);
  const totalVolume = filteredData.reduce((acc, cur) => acc + (cur.volume || 0), 0);

  return (
    <div className="container zontainer">
      <div className="cards">
        <div className="card mazen"><p>📈 Max High: {maxHigh}</p></div>
        <div className="card mazen"><p>📉 Min Low: {minLow}</p></div>
        <div className="card mazen"><p>💵 Avg Close: {avgClose}</p></div>
        <div className="card mazen"><p>📊 Total Volume: {totalVolume.toLocaleString()}</p></div>
      </div>

      <div className="controls">
        <label>Start Date:</label>
        <input
          type="date"
          min="2000-08-30"
          max="2025-05-07"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End Date:</label>
        <input
          type="date"
          min="2000-08-30"
          max="2025-05-07"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Frequency:</label>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <tr key={i}>
              <td>{row.Date}</td>
              <td>{row.open}</td>
              <td>{row.high}</td>
              <td>{row.low}</td>
              <td>{row.close}</td>
              <td>{row.volume?.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2 className="section-title">Analysis About Data</h2>
        <select value={selectedChart} onChange={(e)=> setSelectedChart(e.target.value)}>
          <option value="Bar">📊 Volume (Bar)</option>
          <option value="Area">🔻 Price Area</option>
          <option value="Candle">🕯️ Candlestick</option>
        </select>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            {selectedChart === "Bar" && (
              <BarChart data={filteredData}>
                <XAxis dataKey="Date" hide />
                <YAxis />
                <Tooltip />
                <Bar dataKey="volume" fill="#8884d8" />
              </BarChart>
            )}
            {selectedChart === "Area" && (
              <AreaChart data={filteredData}>
                <XAxis dataKey="Date" hide />
                <YAxis />
                <Tooltip />
                <Area dataKey="close" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            )}
            {selectedChart === "Candle" && (
              <LineChart data={filteredData}>
                <XAxis dataKey="Date" hide />
                <YAxis />
                <Tooltip />
                <Line dataKey="open" stroke="#8884d8" />
                <Line dataKey="close" stroke="#82ca9d" />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Sandpdashboard;