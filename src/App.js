import React from 'react';
import Navbar from './Components/Navbar';
import BookContextProvider from './Context/BookContextProvider';
import BookContainer from './Components/BookContainer';
import BookDesk from './Components/BookDesc';


const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookDesk />
      <BookContainer />

    </BookContextProvider>
  );
};

export default App;
