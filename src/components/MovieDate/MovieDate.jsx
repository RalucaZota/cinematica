import React from 'react';
import '../MovieDate/MovieDate.css';

function MovieDate({movie}) {
  return (
    <>
      <div className={`date ${movie.active ? 'active' : undefined}`}>
        <h2>15aug</h2>
      </div>
    </>
  );
}

export default MovieDate;
