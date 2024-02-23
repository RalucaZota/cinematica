import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div className='searchbar'>
        <input type='text' placeholder='Search'/>
        <ion-icon name="search-outline"></ion-icon>
    </div>
  )
}

export default Searchbar