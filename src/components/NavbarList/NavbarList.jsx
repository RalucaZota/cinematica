import React from 'react'
import './NavbarList.css';

export default function NavbarList({nav}) {
  return (
    <li>
        <a href={nav.link}>{nav.name}</a>
    </li>
  )
}

