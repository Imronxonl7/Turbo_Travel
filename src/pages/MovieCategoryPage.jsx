import React from 'react'
import useGet from '../hooks/useGet'
import MovieCategoryTable from '../components/Tables/MovieCategoryTable'

const MovieCategoryPage = () => {
  const {data:category , getData:getCategory} = useGet({url:"category"})
  const {data:movie , getData:getMovie} = useGet({url:"movie"})
  const {data:movieCategory , getData:getMovieCategory} = useGet({url:"movie_category"})
  return (
    <div>
      <MovieCategoryTable movie={movie} getMovie={getMovie} category={category} getCategory={getCategory} movieCategory={movieCategory} getMovieCategory={getMovieCategory}/>
    </div>
  )
}

export default MovieCategoryPage