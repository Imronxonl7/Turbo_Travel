import React from 'react'
import useGet from '../hooks/useGet'
import MovieActorTable from '../components/Tables/MovieActorTable'

const MovieActorPage = () => {
  const {data:actor , getData:getActor} = useGet({url:"actor"})
  const {data:movie , getData:getMovie} = useGet({url:"movie"})
  const {data:movieActor , getData:getMovieActor} = useGet({url:"movie_actor"})
  return (
    <div>
      <MovieActorTable movie={movie} getMovie={getMovie} actor={actor} getActor={getActor} movieActor={movieActor} getMovieActor={getMovieActor}/>
    </div>
  )
}

export default MovieActorPage