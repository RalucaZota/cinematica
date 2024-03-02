import React from 'react';
import '../Movie/Movie.css'
import'../Button/Button.jsx';
import Button from '../Button/Button.jsx';

function Movie() {
  return (
    <>
      <div className='content active'>
        <img src='' alt='Movie Title' className='movie-title' />
        <h4>
          <span>Year</span>
          <span>
            <i>Age</i>
          </span>
          <span>Length</span>
          <span>Category</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis
          deleniti recusandae aperiam? Quis nulla ad assumenda doloribus
          delectus ratione?
        </p>
        <Button/>
      </div>
    </>
  );
}

export default Movie;
