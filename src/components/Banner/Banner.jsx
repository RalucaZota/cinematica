import React from 'react';
import axios from 'axios';
import './Banner.css';
import { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import MovieDate from '../MovieDate/MovieDate';
import PlayButton from '../PlayButton/PlayButton';
import MovieCarousel from '../Carousel/MovieCarousel';

export default function Banner() {
  const [movies, setMovies] = useState([]);
  const url = 'http://localhost:3000/data/Movies.json';
  useEffect(() => {
    const receivedData = async () => {
      try {
        const resp = await axios.get(url);
        setMovies(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.error('Eroare', error);
      }
    };
    receivedData();
  }, []);
  return (
    <div className='banner'>
     <div className="movie">
      <img src="" alt="Background Image" className="bgImg" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 cold-md-12">
          <Movie/>
          </div>
          <div className="col-lg-6 cold-md-12">
          <MovieDate/>
          <PlayButton/>
            </div>
        </div>
      </div>
     </div>
     {movies && movies.length > 0 &&
     <MovieCarousel slides={movies} />}
    </div>
  );
}
