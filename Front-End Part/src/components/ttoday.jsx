import React, { useEffect, useState } from 'react';

const GoldToday = () => {
  const [todayPrice, setTodayPrice] = useState(null);
  const [yesterdayPrice, setYesterdayPrice] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'goldapi-4ap28k19mbp7wsex-io';
  const BASE_URL = 'https://www.goldapi.io/api/XAU/USD';

  const headers = {
    'x-access-token': API_KEY,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // اليوم
        const resToday = await fetch(BASE_URL, { headers });
        const todayData = await resToday.json();

        // امبارح
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yyyymmdd = yesterday.toISOString().split('T')[0].replace(/-/g, '');
        const resYesterday = await fetch(`${BASE_URL}/${yyyymmdd}`, { headers });
        const yesterdayData = await resYesterday.json();

        setTodayPrice(todayData.price);
        setYesterdayPrice(yesterdayData.price);
      } catch (err) {
        setError("حدث خطأ أثناء جلب بيانات الذهب");
        console.error(err);
      }
    };

    fetchPrices();
  }, []);

  const percentageChange = todayPrice && yesterdayPrice
    ? (((todayPrice - yesterdayPrice) / yesterdayPrice) * 100).toFixed(2)
    : null;

  return (
    <div className='finalcount'>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
        Today's Gold Price
      </h2>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {todayPrice && yesterdayPrice ? (
        <>
          <div style={{
            fontSize: '24px',
            textAlign: 'center',
            marginBottom: '10px',
            color: '#FFD700 (tg://search_hashtag?hashtag=FFD700)'
          }}>
            {todayPrice.toFixed(2)} USD 
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={cardStyle}>
              <h4>Yesterday</h4>
              <p>{yesterdayPrice.toFixed(2)} USD</p>
            </div>
            <div style={cardStyle}>
              <h4>📈 Change</h4>
              <p style={{ color: percentageChange > 0 ? 'green' : 'red' }}>
                {percentageChange}% ({todayPrice > yesterdayPrice ? 'Up' : 'Down'})
              </p>
            </div>
          </div>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>جارٍ تحميل البيانات...</p>
      )}
    </div>
  );
};

const cardStyle = {
  padding: '15px',
  background: '#f9f9f9 (tg://search_hashtag?hashtag=f9f9f9)',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  width: '45%',
  textAlign: 'center',
};

export default GoldToday;