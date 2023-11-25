import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookContextProvider from './Context/BookContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookContextProvider>
    <App />
    </BookContextProvider>
  </React.StrictMode>
);


