import React, { useContext,useState } from 'react';
import { FaSearch } from "react-icons/fa";


import BookContext from '../Context/BookContext';

import logo from '../Assets/logo.png'
import logoName from '../Assets/logoName.png'
import profile from '../Assets/profile.png'
import diamond from '../Assets/diamond.png'
import bell from '../Assets/bell.png'
import bookMark from '../Assets/bookmark.png'


const Navbar = () => {

  const { bookData, loading, error, query, setQuery, selected, setSelected } = useContext(BookContext);

  const [searchInput, setSearchInput] = useState('');


  return (
    <nav>
      <div className='left'>
        <img src={logo} className='iconsLogo' alt='logo'/>
        <img src={logoName} className='iconsLogoName' alt='logo'/>
      </div>
      <div className='center'>
        <FaSearch />
        <input type='text' id='search'className='inputBox' placeholder='Search Books...' onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput} />
        <button className='btn' onClick={()=>{setQuery(searchInput)}}>Search</button>
      </div>
      <div className='right'>

        <img src={bell} className='icons' alt='logo'/>
        <img src={bookMark} className='icons' alt='logo'/>
        <img src={diamond} className='icons' alt='logo'/>
        <img src={profile} className='icons' alt='logo'/>
      </div>
    </nav>
  )
}

export default Navbar