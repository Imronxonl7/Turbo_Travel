import React from 'react'
import useGet from '../hooks/useGet'
import ActorTable from '../components/Tables/ActorTable'


const MoviePage = () => {
   const {data} = useGet({url:"prods"})
  return (
    <div>
      <ActorTable data={data}/>
    </div>
  )
}

export default MoviePage