import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Navbar,GoldToday } from "../components";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "6d8f1e36bfea4c278841d74b8625f3fa";
  const API_URL = `https://newsapi.org/v2/everything?q=gold%20AND%20inflation%20AND%20trade&language=en&from=2025-06-07T00:00:00&to=2025-06-07T23:59:59&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "ok") {
          setNews(response.data.articles);
        } else {
          setError(`Error: ${response.data.message || "Unknown error"}`);
        }
      } catch (err) {
        setError(`Error: ${err.response?.status} - ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <Navbar />
      <div className="news-container" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
    
        <div className="news-img pt-4">
          <p>Gold & Trade News</p>
        </div>
        <GoldToday/>
        {news.length === 0 ? (
          <p>No news available.</p>
        ) : (
          news.map((item, index) => (
            <div key={index} className="news-card d-flex">
              <img src={item.urlToImage} alt={item.title} className="news-image" />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>Source:</strong> {item.source.name}</p>
                <p><strong>Date:</strong> {new Date(item.publishedAt).toDateString()}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default News;