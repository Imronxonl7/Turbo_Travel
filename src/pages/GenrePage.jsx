import React from 'react'
import useGet from '../hooks/useGet'
import CategoryTable from '../components/Tables/CategoryTable';

const GenrePage = () => {
   const {data} = useGet({url :"subtours"})
   
  return (
    <div>
      <CategoryTable data={data}/>
    </div>
  )
}

export default GenrePage  