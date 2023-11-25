import React from 'react'

const BookCard = ({book, index}) => {

    const expandBook = ()=>{
        alert('hiiiii expamd book')
    }

  return (
    <div className='card' key={index} >
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