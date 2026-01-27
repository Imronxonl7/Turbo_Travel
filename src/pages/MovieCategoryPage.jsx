import React from 'react'
import useGet from '../hooks/useGet'
import MovieCategoryTable from '../components/Tables/MovieCategoryTable'
import useReactQuery from '../hooks/useReactQuery'

const MovieCategoryPage = () => {
  const {data:category} = useReactQuery({url:"category" , key:"categories"})
  const {data:movie} = useReactQuery({url:"movie"})
  const {data:movieCategory} = useReactQuery({url:"movie_category" , key:"movie_categories"})
  return (
    <div>
      <MovieCategoryTable movie={movie?.data} category={category?.data} movieCategory={movieCategory?.data}/>
    </div>
  )
}

export default MovieCategoryPage