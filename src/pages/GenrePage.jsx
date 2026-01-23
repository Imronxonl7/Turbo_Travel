import React from 'react'
import useGet from '../hooks/useGet'
import GenreTable from '../components/Tables/GenreTable';

const GenrePage = () => {
   const {data} = useGet({url :"genre"})
   
  return (
    <div>
      <GenreTable data={data}/>
    </div>
  )
}

export default GenrePage  