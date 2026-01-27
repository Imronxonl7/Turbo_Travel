import React from 'react'
import useGet from '../hooks/useGet'
import ActorTable from '../components/Tables/ActorTable'
import MovieTable from '../components/Tables/MovieTable'
import useReactQuery from '../hooks/useReactQuery'


const MoviePage = () => {
  const {data , isLoading} = useReactQuery({url:"movie" , key:"movies"})
  return (
    <div>
      <MovieTable data={data?.data}/>
    </div>
  )
}

export default MoviePage