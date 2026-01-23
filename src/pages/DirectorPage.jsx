import React from 'react'
import useGet from '../hooks/useGet'
import CategoryTable from '../components/Tables/CategoryTable';


const DirectorPage = () => {
   const {data} = useGet({url:"hotels"})
   
  return (
    <div>
      <CategoryTable data={data}/>
    </div>
  )
}

export default DirectorPage