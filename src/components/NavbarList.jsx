import React from 'react'

export default function NavbarList({nav, key}) {
  return (
    <li>
        <a href={nav.link}>{nav.name}</a>
    </li>
  )
}

