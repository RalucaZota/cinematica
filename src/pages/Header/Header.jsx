import React from 'react';
import logo from '../../logo-cinematica.png'
import NavbarList from '../../components/NavbarList/NavbarList';
import navbarListData from '../../data/navbarListData';
import './Header.css'
import Searchbar from '../../components/Searchbar/Searchbar';
import Button from '../../components/Button/Button';

export default function Header() {
  return (
    <header>
      <a href='/'>
        <img src={logo} className='logo' />
      </a>
      <nav>
        <ul className='nav'>
          <Searchbar/>
          {
            navbarListData.map(nav => (
              <NavbarList key={nav.id} nav={nav}/>  
            ))         
          }
          <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign in"/>
        </ul>
      </nav>
    </header>
  );
}
