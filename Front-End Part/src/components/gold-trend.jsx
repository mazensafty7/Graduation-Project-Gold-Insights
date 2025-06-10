import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import Papa from 'papaparse';

const Golddata = ({
  chartTitle = "Gold Price Trend",
  dataFile = "/gold_close.csv",
  priceColumn = "Gold", // اسم العمود اللي فيه السعر
}) => {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRange, setSelectedRange] = useState('ALL');

  useEffect(() => {
    fetch(dataFile)
      .then((res) => res.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            const parsedData = result.data
              .map((d) => ({
                date: d.Date,
                price: d[priceColumn], // استخدام العمود المرسل
              }))
              .filter((d) => d.date && !isNaN(d.price));

            setFullData(parsedData);
            setFilteredData(parsedData);
          },
        });
      });
  }, [dataFile, priceColumn]);

  const handleRangeChange = (range) => {
    setSelectedRange(range);

    if (range === 'ALL') {
      setFilteredData(fullData);
      return;
    }

    const rangeMap = {
      '5D': 5,
      '1M': 22,
      '3M': 66,
      '6M': 132,
      '1Y': 264,
      '5Y': 1320,
    };

    const numDays = rangeMap[range];
    const slicedData = fullData.slice(-numDays);
    setFilteredData(slicedData);
  };

  return (
    <div
      style={{
        maxWidth: '750px',
        margin: '30px auto',
        padding: '20px',
        background: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '12px',
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#444' }}>
        📈 {chartTitle}
      </h3>

      {/* أزرار الفترات الزمنية */}
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        {['5D', '1M', '3M', '6M', '1Y', '5Y', 'ALL'].map((range) => (
          <button
            key={range}
            onClick={() => handleRangeChange(range)}
            style={{
              margin: '0 5px',
              padding: '6px 12px',
              borderRadius: '6px',
              border:
                range === selectedRange
                  ? '2px solid #FFD700'
                  : '1px solid #ccc',
              background:
                range === selectedRange ? '#FFF9DC' : '#f9f9f9',
              cursor: 'pointer',
            }}
          >
            {range}
          </button>
        ))}
      </div>

      {/* الرسم البياني */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line 
            type="monotone"
            dataKey="price"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Golddata;
