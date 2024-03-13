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
  const handleSlideChange = (id) => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if(movie._id == id){
        movie.active = true
      }
      return movie
    })
    setMovies(newMovies)
  };
  return (
    <div className='banner'>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className='movie'>
            <img src={movie.bgImg} alt='Background Image' className={`bgImg ${movie.active ? 'active' : undefined}`} />
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-6 cold-md-12'>
                  <Movie movie={movie}/>
                </div>
                <div className='col-lg-6 cold-md-12'>
                  <MovieDate movie={movie}/>
                  <PlayButton movie={movie}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      {movies && movies.length > 0 && (
        <MovieCarousel slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}
