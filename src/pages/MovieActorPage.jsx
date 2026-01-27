import React from 'react'
import useGet from '../hooks/useGet'
import MovieActorTable from '../components/Tables/MovieActorTable'
import useReactQuery from '../hooks/useReactQuery'

const MovieActorPage = () => {
  const {data:actor } = useReactQuery({url:"actor" , key:"actors"})
  const {data:movie } = useReactQuery({url:"movie" , key:"movies"})
  const {data:movieActor} = useReactQuery({url:"movie_actor" , key:"movie_actors"})
  return (
    <div>
      <MovieActorTable movie={movie?.data}  actor={actor?.data} movieActor={movieActor?.data}/>
    </div>
  )
}

export default MovieActorPage