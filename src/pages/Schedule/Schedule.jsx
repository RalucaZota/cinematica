import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Schedule/Schedule.css'

function Schedule() {
  const [data, setData] = useState([])
  const [movies, setMovies] = useState([])

  const url = 'http://localhost:3000/data/Movies.json';

  useEffect(() => {
    const receivedData = async () => {
      try {
        const resp = await axios.get(url);
        setData(resp.data);
      } catch (error) {
        console.error('Eroare', error);
      }
    };
    receivedData();
  }, []);

  useEffect(() =>{
    setMovies(data)
  })

  return (
    <section id="schedule" className='schedule'>
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Opening this week</h4>
            </div>
            <div className="row">
              <div className="filters">
                <p>Filters</p>
              </div>
            </div>
            <div className="row mt-5">
            {movies && movies.length > 0 && movies.map((movie) => (
              <h1 key={movie._id}>{movie.title}</h1>
            ))}

            </div>
        </div>
    </section>
  )
}

export default Schedule