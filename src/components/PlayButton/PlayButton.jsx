import React from 'react';
import '../PlayButton/PlayButton.css'

function PlayButton({movie}) {
  return (
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
      <a href='#' className='playBtn'>
        <ion-icon name='play-outline'></ion-icon>
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayButton;
