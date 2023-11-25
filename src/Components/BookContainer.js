import React, { useContext } from 'react';
import BookContext from '../Context/BookContext';

const BookContainer = () => {
  const { bookData, loading, error, query, setQuery } = useContext(BookContext);

console.log(bookData)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const mainData = bookData.filter((book)=>{
    try {
        return book.volumeInfo.imageLinks.smallThumbnail
    } catch (error) {
        return false;
    }
  })

  return (

    <div className='moreBooks'>
      <h2>More Books</h2>
      <div className="container">
      {mainData.map((book,index) =>( index>=3 && (
        <div key={index}>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} className='booksThumbnail'/>
        </div>
      )))}
      </div>
    </div>
  );
};

export default BookContainer;