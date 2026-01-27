import React from 'react'
import MovieGenreTable from '../components/Tables/MovieGenreTable'
import useReactQuery from '../hooks/useReactQuery'

const MovieGenrePage = () => {
  const {data:genre } = useReactQuery({url:"genre" , key:"genres"})
  const {data:movie } = useReactQuery({url:"movie" , key:"movies"})
  const {data:movieGenre } = useReactQuery({url:"movie_genre" , key:"movie_genres"})
  return (
    <div>
      <MovieGenreTable movie={movie?.data} genre={genre?.data} movieGenre={movieGenre?.data} />
    </div>
  )
}

export default MovieGenrePage