import React from 'react'
import useGet from '../hooks/useGet'
import GenreTable from '../components/Tables/GenreTable';

const GenrePage = () => {
   const {data , getData} = useGet({url :"genre"})
   
  return (
    <div>
      <GenreTable getData={getData} data={data}/>
    </div>
  )
}

export default GenrePage  