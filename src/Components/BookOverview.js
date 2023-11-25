import React from 'react'

const BookOverview = (props) => {
    
  return (
    <div>
       
       <img src={props.book.volumeInfo.imageLinks.smallThumbnail}/>
    </div>
  )
}

export default BookOverview