import React, { useState, useEffect } from 'react';
import BookContext from '../Context/BookContext';

const BookContextProvider = ({ children, initialQuery = 'harry potter sherlock holmes' }) => {
  const [bookData, setBookData] = useState([]);
  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await res.json();

        setBookData(data.items);

      } catch (error) {
        setError('Error fetching data'); 
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, [query]);

  return (
    <BookContext.Provider value={{ bookData, loading, error, query, setQuery }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
