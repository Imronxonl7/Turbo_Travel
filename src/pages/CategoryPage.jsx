import React from 'react'
import useGet from '../hooks/useGet'
import CategoryTable from '../components/Tables/CategoryTable';
import useReactQuery from '../hooks/useReactQuery';

const CategoryPage = () => {
    const {data , isLoading} = useReactQuery({url:"category" , key:"categories"})

   return (
    <div>
      <CategoryTable data={data?.data}/>
    </div>
  )
}

export default CategoryPage