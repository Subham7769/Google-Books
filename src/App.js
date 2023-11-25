import React, { useContext } from 'react';
import Navbar from './Components/Navbar';
import BookContainer from './Components/BookContainer';
import BookDesk from './Components/BookDesc';
import BookOverview from './Components/BookOverview';
import BookContext from './Context/BookContext';


const App = () => {
  
  const { bookData, loading, error, query, setQuery, selected, setSelected } = useContext(BookContext);

  return (
    <>
      <Navbar />
      { !selected ? <BookDesk /> : <BookOverview book={bookData[Number(selected)]}/>}
      <BookContainer />
    </>
  );
};

export default App;
