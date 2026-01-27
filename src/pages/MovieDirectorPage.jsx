import React from 'react'
import useGet from '../hooks/useGet'
import MovieDirectorTable from '../components/Tables/MovieDirectorTabel'
import useReactQuery from '../hooks/useReactQuery'

const MovieDirectorPage = () => {
  const {data:director } = useReactQuery({url:"director" , key:"directors"})
  const {data:movie } = useReactQuery({url:"movie" , key:"movies"})
  const {data:movieDirector} = useReactQuery({url:"movie_director" , key:"movie_directors"})
  return (
    <div>
      <MovieDirectorTable movie={movie?.data} director={director?.data} movieDirector={movieDirector?.data}/>
    </div>
  )
}

export default MovieDirectorPage