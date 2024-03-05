import React from 'react';
import '../Button/Button.css'

function Button({icon, name, bgColor = "#52190a", color = "#ffffff"}) {
  return (
    <>
      <a href='' className='mainBtn' style={{color: color, background: bgColor}}>
       {icon} {name}
      </a>
    </>
  );
}

export default Button;
