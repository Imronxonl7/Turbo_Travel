import React from 'react'
import useGet from '../hooks/useGet'
import CategoryTable from '../components/Tables/CategoryTable';

const CategoryPage = () => {
  const {data} = useGet({url:'category'})
  
  
   return (
    <div>
      <CategoryTable data={data}/>
    </div>
  )
}

export default CategoryPage