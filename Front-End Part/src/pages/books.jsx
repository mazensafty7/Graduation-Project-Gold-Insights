import React, { useEffect, useState, } from "react";
import { Footer, Navbar } from "../components";


const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=gold+investment"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="loading">Loading gold books...</p>;
  if (error) return <p className="error">Error fetching books: {error}</p>;

  return (

    <div>
      <Navbar/>
      <div style={{ paddingTop: "120px", paddingBottom:"90px" }}>
    <h1 className="books-heading">Gold Investment Books</h1> <div className=""></div>
   
      
      <div className="book-grid">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id} className="book-card">
              <img
                src={
                  info.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/128x195?text=No+Image"
                }
                alt={info.title}
                className="book-image"
              />
              <h3 className="book-title">{info.title}</h3>
              <p className="book-authors">
                {info.authors ? info.authors.join(", ") : "Unknown Author"}
              </p>
              <hr/>
              <p className="book-description">
                {info.description
                  ? info.description.substring(0, 100) + "..."
                  : "No description available."}
              </p>
           
              <a
                href={info.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="book-link"
              >
                View Book
              </a>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Books;
