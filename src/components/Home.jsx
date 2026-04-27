import { useEffect, useState } from 'react'
import MovieList from './MovieList'
import moviesData from './data'
import AddMovie from './AddMovie'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies")

    if (storedMovies) {
      setMovies(JSON.parse(storedMovies))
    } else {
      setMovies(moviesData)
      localStorage.setItem("movies", JSON.stringify(moviesData))
    }
  }, [])

  // ✅ Add movie function
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie]

    setMovies(updatedMovies)
    localStorage.setItem("movies", JSON.stringify(updatedMovies))
  }

  return (
    <div>

      {/* ✅ AddMovie component */}
      <AddMovie addMovie={addMovie} />

      {/* ✅ Movie list */}
      <MovieList movieList={movies} />

    </div>
  )
}

export default Home