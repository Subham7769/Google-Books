import React, { useContext } from 'react';
import BookContext from '../Context/BookContext';
import BookCard from './BookCard';


const BookDesk = (props) => {
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
        <div className='ThreeGrid'>
          {mainData.map((book,index) =>( index<3 && (

              <BookCard book={book} index={index}/>
          )))}

        </div>
      );
    };

export default BookDesk;