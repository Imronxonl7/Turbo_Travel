import React from 'react'
import useGet from '../hooks/useGet'
import MovieGenreTable from '../components/Tables/MovieGenreTable'

const MovieGenrePage = () => {
  const {data:genre , getData:getGenre} = useGet({url:"genre"})
  const {data:movie , getData:getMovie} = useGet({url:"movie"})
  const {data:movieGenre , getData:getMovieGenre} = useGet({url:"movie_genre"})
  return (
    <div>
      <MovieGenreTable movie={movie} getMovie={getMovie} genre={genre} getGenre={getGenre} movieGenre={movieGenre} getMovieGenre={getMovieGenre}/>
    </div>
  )
}

export default MovieGenrePage