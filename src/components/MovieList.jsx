
// import { useState } from 'react'
// import movies from './data.js'
import '../index.css'

const MovieList = ({movieList}) => {
//   const [movieList, setMovieList] = useState(movies);
    
  return (
    <>
  <h1 style={{ textAlign: "center", margin: "20px 0" }}>Movie List</h1>

  <div className="movie-container">
    {
      movieList.map((movie, i) => (
        <div className="movie-card" key={i}>

          <div className="img-wrapper">
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="movie-img"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>

            <p className="card-subtitle">
              {movie.genre} • {movie.language}
            </p>

            <p className="rating">⭐ {movie.rating}</p>
          </div>

        </div>
      ))
    }
  </div>
</>
  )
}

export default MovieList
