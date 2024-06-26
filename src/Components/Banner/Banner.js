import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY , imageUrl} from '../../constants/constants'
function Banner() {
  const [movie,setMovie] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results[counter]); 
      })
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % 20); // assuming there are 20 results
    }, 5000); // Change counter every 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div     style = {{backgroundImage : `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
    className='banner'> 
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ""}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>

        </div>
        <h1 className='description'>{movie ? movie.overview: ""}</h1>
      </div>
<div className="fade_bottom"></div>    
    </div>
  )
}

export default Banner
