import React from 'react'
import useGet from '../hooks/useGet'
import MovieDirectorTable from '../components/Tables/MovieDirectorTabel'

const MovieDirectorPage = () => {
  const {data:director , getData:getDirector} = useGet({url:"director"})
  const {data:movie , getData:getMovie} = useGet({url:"movie"})
  const {data:movieDirector , getData:getMovieDirector} = useGet({url:"movie_director"})
  return (
    <div>
      <MovieDirectorTable movie={movie} getMovie={getMovie} director={director} getDirector={getDirector} movieDirector={movieDirector} getMovieDirector={getMovieDirector}/>
    </div>
  )
}

export default MovieDirectorPage