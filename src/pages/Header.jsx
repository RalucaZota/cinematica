import React from 'react';
import logo from '../logo-cinematica.png';
import NavbarList from '../components/NavbarList';
import navbarListData from '../data/navbarListData';

export default function Header() {
  return (
    <header>
      <a href='/'>
        <img src={logo} width='120px' className='logo' />
      </a>
      <nav>
        <ul className='nav'>
          {
            navbarListData.map(nav => (
              <NavbarList key={nav._id} nav={nav}/>  
            ))

            
          }
        </ul>
      </nav>
    </header>
  );
}
