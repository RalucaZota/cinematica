import React from 'react';
import logo from '../../logo-cinematica.png'
import NavbarList from '../../components/NavbarList/NavbarList';
import navbarListData from '../../data/navbarListData';
import './Header.css'
import Searchbar from '../../components/Searchbar/Searchbar';

export default function Header() {
  return (
    <header>
      <a href='/'>
        <img src={logo} className='logo' />
      </a>
      <nav>
        <ul className='nav'>
          {
            navbarListData.map(nav => (
              <NavbarList key={nav.id} nav={nav}/>  
            ))         
          }
        </ul>
        <Searchbar/>
      </nav>
    </header>
  );
}
