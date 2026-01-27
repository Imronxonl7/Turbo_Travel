import React from 'react'
import useGet from '../hooks/useGet'
import GenreTable from '../components/Tables/GenreTable';
import useReactQuery from '../hooks/useReactQuery';

const GenrePage = () => {
  const {data , isLoading} = useReactQuery({url:"genre" , key:"genres"})
   
  return (
    <div>
      <GenreTable data={data?.data}/>
    </div>
  )
}

export default GenrePage  