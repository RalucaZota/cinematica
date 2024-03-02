import React from 'react';
import '../PlayButton/PlayButton.css'

function PlayButton() {
  return (
    <div className='trailer active'>
      <a href='#' className='playBtn'>
        <ion-icon name='play-outline'></ion-icon>
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayButton;
