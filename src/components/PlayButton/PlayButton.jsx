import React from 'react';
import '../PlayButton/PlayButton.css'
import TrailerModal from '../TrailerModal/TrailerModal';
import { useState } from 'react';

function PlayButton({movie}) {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
      <a href='#' className='playBtn' onClick={toggleModal}>
        <ion-icon name='play-outline'></ion-icon>
      </a>
      <p>Watch Trailer</p>
    </div>
    {movie.active && <TrailerModal movie={movie} status={modal} toggleModal={toggleModal}/>}
    </>
  );
}

export default PlayButton;
