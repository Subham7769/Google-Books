import React, { useContext } from 'react';
import BookContext from '../Context/BookContext';

const BookCard = ({book, index}) => {
    const { bookData, loading, error, query, setQuery, selected, setSelected } = useContext(BookContext);

    const expandBook = (e)=>{
        setSelected(e.target.parentNode.parentNode.id);
    }

  return (
    <div className='card' id={index} >
        <div className='card-img'>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} className='book-img'/>
        </div>
        <div className='card-desc'>
            <h3 className='card-title'>{book.volumeInfo.title}</h3>
            <p className='description'>{book.volumeInfo.description}</p>
            <button className='readBtn' onClick={expandBook}>Now Read</button>
        </div>
    </div>
  )
}

export default BookCard