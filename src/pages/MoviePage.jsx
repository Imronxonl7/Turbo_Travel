import React from 'react'
import useGet from '../hooks/useGet'
import ActorTable from '../components/Tables/ActorTable'
import MovieTable from '../components/Tables/MovieTable'


const MoviePage = () => {
   const {data} = useGet({url:"movie"})
  return (
    <div>
      <MovieTable data={data}/>
    </div>
  )
}

export default MoviePage